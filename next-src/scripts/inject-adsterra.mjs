import { readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { injectHtml, isCleanRelPath } from "../lib/adsterra-block.mjs";

const SKIP_DIRS = new Set(["node_modules", ".next", "out", "_next", ".git", "next-src"]);

async function walk(dir, root, files) {
  const entries = await readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    if (entry.name.startsWith(".")) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      const rel = path.relative(root, full).replaceAll("\\", "/");
      if (SKIP_DIRS.has(entry.name) || rel === "next-src" || rel.startsWith("next-src/")) continue;
      await walk(full, root, files);
      continue;
    }
    if (entry.isFile() && entry.name.endsWith(".html")) files.push(full);
  }
}

export async function injectTree(root) {
  const files = [];
  await walk(root, root, files);
  const pages = [];
  for (const file of files) {
    const rel = path.relative(root, file).replaceAll("\\", "/");
    const clean = isCleanRelPath(rel);
    const before = await readFile(file, "utf8");
    const after = injectHtml(before, { clean });
    if (after !== before) await writeFile(file, after);
    const slots = (after.match(/data-ad-slot="/g) || []).length;
    pages.push({ rel, clean, slots, hasNative: after.includes("https://bauval.org/21/"), hasBanner: after.includes("https://bauval.org/22/") });
  }
  return pages;
}

function reportFor(pages) {
  const injected = [];
  const legalSkipped = [];
  const visibleSlotCounts = {};
  for (const page of pages) {
    visibleSlotCounts[page.rel] = page.clean ? 0 : Math.min(page.slots, 3);
    if (page.clean) legalSkipped.push(page.rel);
    else injected.push(page.rel);
  }
  return {
    status: "adsterra-ready",
    adNetwork: "adsterra",
    formats: ["banner", "native"],
    runtime: "classic-defer-post-hydration",
    visibleSlotCap: 3,
    enablePopunder: false,
    enableSocialBar: false,
    contentFirst: true,
    csp: "scheme-https-no-host-allowlist",
    cspHosts: [],
    pages: { injected, legalSkipped, visibleSlotCounts },
  };
}

const isCli = process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url);
if (isCli) {
  const root = path.resolve(process.argv[2] || "out");
  const pages = await injectTree(root);
  const report = reportFor(pages);
  const reportPath = path.join(root, "adsterra-static-report.json");
  await writeFile(reportPath, `${JSON.stringify(report, null, 2)}\n`);
  const bad = pages.filter((page) => page.clean && (page.hasNative || page.hasBanner));
  if (bad.length) {
    console.error("Clean pages still contain Adsterra scripts:", bad.map((page) => page.rel).join(", "));
    process.exit(1);
  }
  console.log(`Injected Adsterra banner+native into ${report.pages.injected.length} pages; skipped ${report.pages.legalSkipped.length} clean pages.`);
}
