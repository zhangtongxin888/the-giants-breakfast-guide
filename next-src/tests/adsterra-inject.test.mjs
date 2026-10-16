import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import { adConfig, BANNERS, injectHtml, NATIVE, SLOT_IDS } from "../lib/adsterra-block.mjs";

const contentHtml = `<!DOCTYPE html><html><head><title>Guide</title></head><body><main id="main"><section class="hero"><h1>Stack breakfast</h1><p>Pull the lever.</p></section><p>More guide copy.</p></main></body></html>`;
const legalHtml = `<!DOCTYPE html><html><head><style id="adsterra-placement-css">.ad-placement{}</style></head><body><main id="main"><h1>Privacy</h1></main><script type="application/json" id="adsterra-config">{"scriptUrl":"https://bauval.org/21/dropped"}</script><script src="/adsterra/late.js" defer></script></body></html>`;

test("content HTML keeps banner and native scripts after inject, with at most 3 slots", () => {
  const html = injectHtml(contentHtml, { clean: false });
  assert.ok(html.indexOf("<h1>") < html.indexOf("bauval.org"), "guide heading stays ahead of ad scripts");
  assert.match(html, new RegExp(NATIVE.scriptUrl));
  assert.match(html, new RegExp(NATIVE.containerId));
  for (const banner of BANNERS) {
    assert.match(html, new RegExp(`https://bauval.org/22/${banner.key}`));
    assert.match(html, new RegExp(`'key' : '${banner.key}'`));
  }
  assert.equal((html.match(/data-ad-slot="/g) || []).length, SLOT_IDS.length);
  assert.ok(SLOT_IDS.length <= 3);
  assert.equal(adConfig.slots.length, 3);
  assert.equal(html.includes("popunder"), false);
  assert.equal(html.includes("socialbar"), false);
  assert.equal(html.includes("highperformanceformat"), false);
  assert.equal(html.includes("effectivecpmnetwork"), false);
  assert.match(html, /<script src="\/adsterra\/late\.js" defer><\/script>/);
  const again = injectHtml(html, { clean: false });
  assert.equal(again, html);
});

test("legal HTML loses ad scripts and does not gain slots", () => {
  const html = injectHtml(legalHtml, { clean: true });
  assert.equal(html.includes("bauval.org"), false);
  assert.equal(html.includes("adsterra"), false);
  assert.equal(html.includes("data-ad-slot"), false);
  assert.match(html, /<h1>Privacy<\/h1>/);
});

test("existing React mount is not given a second set of slots", () => {
  const withMount = contentHtml.replace(
    "</main>",
    `<div id="adsterra-mount" data-adsterra-mount="1"><aside class="ad-placement" data-ad-slot="native"></aside><aside class="ad-placement" data-ad-slot="leaderboard"></aside><aside class="ad-placement" data-ad-slot="rectangle"></aside></div></main>`,
  );
  const html = injectHtml(withMount, { clean: false });
  assert.equal((html.match(/data-ad-slot="/g) || []).length, 3);
  assert.match(html, /https:\/\/bauval\.org\/21\//);
});

test("runtime stays a classic script and CSP scheme-allows creatives", async () => {
  const [runtime, late, headers] = await Promise.all([
    readFile(new URL("../public/adsterra/runtime.js", import.meta.url), "utf8"),
    readFile(new URL("../public/adsterra/late.js", import.meta.url), "utf8"),
    readFile(new URL("../public/_headers", import.meta.url), "utf8"),
  ]);
  assert.equal(runtime.includes("import "), false);
  assert.equal(runtime.includes("export "), false);
  assert.equal(runtime.includes("popunder"), false);
  assert.equal(runtime.includes("socialBar"), false);
  assert.match(runtime, /https:\/\/bauval\.org\//);
  assert.match(runtime, /\.slice\(0, 3\)/);
  assert.match(late, /setTimeout\(start, 1200\)/);
  assert.match(late, /setInterval\(tick, 1500\)/);
  assert.match(headers, /script-src 'self' 'unsafe-inline' https:/);
  assert.match(headers, /frame-src https:/);
  assert.match(headers, /img-src 'self' data: blob: https:/);
  assert.equal(headers.includes("bauval.org"), false);
  assert.equal(headers.includes("highperformanceformat"), false);
  assert.equal(headers.includes("effectivecpmnetwork"), false);
});
