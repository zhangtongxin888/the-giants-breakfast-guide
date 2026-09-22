import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);
const read = (path) => readFile(new URL(path, root), "utf8");

test("home points demand to door-code and how-to-play owners", async () => {
  const home = await read("app/page.tsx");
  assert.match(home, /Door code: \{doorCodeAnswer\.code\}/);
  assert.match(home, /href="\/door-code\/"/);
  assert.match(home, /href="\/how-to-play\/"/);
  assert.match(home, /Stack breakfast to the sky/);
});

test("door-code page owns EGGS answer with safe steps", async () => {
  const [page, data] = await Promise.all([
    read("app/door-code/page.tsx"),
    read("lib/game-data.ts"),
  ]);
  assert.match(data, /code: "EGGS"/);
  assert.match(data, /community-reported/);
  assert.match(page, /The Giant&apos;s Breakfast door code/);
  assert.match(page, /doorCodeAnswer\.steps\.map/);
  assert.match(page, /canonical: "\/door-code\/"/);
});

test("how-to-play keeps six-step official loop", async () => {
  const [page, data] = await Promise.all([
    read("app/how-to-play/page.tsx"),
    read("lib/game-data.ts"),
  ]);
  assert.match(page, /How to play The Giant&apos;s Breakfast/);
  assert.match(data, /Buy giant food/);
  assert.match(data, /Celestial/);
  assert.match(page, /canonical: "\/how-to-play\/"/);
});

test("sitemap and nav include new owners", async () => {
  const [sitemap, shell, data] = await Promise.all([
    read("app/sitemap.ts"),
    read("components/site-shell.tsx"),
    read("lib/game-data.ts"),
  ]);
  for (const route of ["/door-code/", "/how-to-play/", "/food-rarities/", "/codes/", "/wiki/"]) {
    assert.match(sitemap, new RegExp(route.replaceAll("/", "\\/")));
  }
  assert.match(shell, /Door code/);
  assert.match(shell, /\/door-code\//);
  assert.match(data, /the-giants-breakfast\.wiki/);
});
