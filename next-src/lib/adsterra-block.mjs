/**
 * Banner + Native units for the-giants-breakfast.wiki.
 * Popunder, Social Bar, and Smartlink are intentionally omitted.
 * Next static export drops ad <script> tags that are not re-applied after `next build`.
 * injectHtml() writes them back into the published HTML.
 */

export const NATIVE = {
  id: "native",
  format: "native",
  containerId: "container-9de418a6e40a32d3bdae5de4a04b7dad",
  scriptUrl: "https://bauval.org/21/9de418a6e40a32d3bdae5de4a04b7dad",
};

export const BANNERS = [
  { key: "159cf79bf207c72c5a5c191302287ed4", width: 728, height: 90, minWidth: 760, slot: "leaderboard" },
  { key: "fbba85c57ddc617d27b6f869a3806be1", width: 468, height: 60, minWidth: 480, slot: "leaderboard" },
  { key: "3183d081ef53594d032a2809099cf6dc", width: 320, height: 50, minWidth: 0, slot: "leaderboard" },
  { key: "e9d5e3657b04cd9604cd019c161f31bd", width: 300, height: 250, minWidth: 0, slot: "rectangle" },
  { key: "3f424dbb75906ab401bf33dce1dc1a79", width: 160, height: 600, minWidth: 0, slot: "reserve" },
  { key: "d58165980b1edb3b6198ddd0044cb615", width: 160, height: 300, minWidth: 0, slot: "reserve" },
];

function scriptUrl(key) {
  return `https://bauval.org/22/${key}`;
}

function variant(banner) {
  return {
    key: banner.key,
    scriptUrl: scriptUrl(banner.key),
    width: banner.width,
    height: banner.height,
    minWidth: banner.minWidth,
  };
}

export const adConfig = {
  adNetwork: "adsterra",
  status: "ready",
  cleanPage: false,
  slots: [
    NATIVE,
    {
      id: "leaderboard",
      format: "banner",
      variants: BANNERS.filter((banner) => banner.slot === "leaderboard").map(variant),
    },
    {
      id: "rectangle",
      format: "banner",
      variants: BANNERS.filter((banner) => banner.slot === "rectangle").map(variant),
    },
  ],
  reserve: BANNERS.filter((banner) => banner.slot === "reserve").map(variant),
};

export const SLOT_IDS = ["native", "leaderboard", "rectangle"];

const CLEAN_SEGMENTS = new Set([
  "about",
  "accessibility",
  "advertising-policy",
  "affiliate-disclosure",
  "contact",
  "cookie-policy",
  "cookies",
  "disclosure",
  "dmca",
  "editorial-policy",
  "legal",
  "privacy",
  "sources",
  "terms",
  "404",
  "_not-found",
]);

export function isCleanRelPath(relPath) {
  const norm = String(relPath || "").replaceAll("\\", "/");
  if (norm === "404.html" || norm.endsWith("/404.html")) return true;
  const [segment] = norm.split("/");
  return CLEAN_SEGMENTS.has(segment);
}

const PLACEMENT_CSS =
  ".ad-placement{margin:1.25rem 0;padding:.5rem;border:1px dashed rgba(127,127,127,.45);overflow:auto;text-align:center}" +
  ".ad-label{display:block;font-size:.75rem;letter-spacing:.04em;text-transform:uppercase;opacity:.7;margin-bottom:.35rem}" +
  ".ad-host{display:flex;justify-content:center}";

function bannerSnippet(banner) {
  return `<template id="adsterra-banner-${banner.key}"><script>
  atOptions = {
    'key' : '${banner.key}',
    'format' : 'iframe',
    'height' : ${banner.height},
    'width' : ${banner.width},
    'params' : {}
  };
</script>
<script src="${scriptUrl(banner.key)}"></script></template>`;
}

function slotMarkup() {
  const asides = SLOT_IDS.map(
    (id) =>
      `<aside class="ad-placement" data-ad-slot="${id}" aria-label="Advertisement"><span class="ad-label">Advertisement</span><div class="ad-host" data-ad-host="${id}"></div></aside>`,
  ).join("");
  return `<template id="adsterra-slot-markup"><div id="adsterra-mount" data-adsterra-mount="1">${asides}</div></template>`;
}

export function renderPayload(includeSlotMarkup) {
  const native = `<template id="adsterra-native"><script async="async" data-cfasync="false" src="${NATIVE.scriptUrl}"></script>
<div id="${NATIVE.containerId}"></div></template>`;
  const banners = BANNERS.map(bannerSnippet).join("");
  const config = `<script type="application/json" id="adsterra-config">${JSON.stringify(adConfig)}</script>`;
  const loader = `<script src="/adsterra/late.js" defer></script>`;
  const slots = includeSlotMarkup ? slotMarkup() : "";
  return `<!-- adsterra:banner-native -->${slots}${native}${banners}${config}${loader}<!-- /adsterra:banner-native -->`;
}

export function renderStyle() {
  return `<style id="adsterra-placement-css">${PLACEMENT_CSS}</style>`;
}

export function stripAdMarkup(html) {
  return String(html)
    .replace(/<!-- adsterra:banner-native -->[\s\S]*?<!-- \/adsterra:banner-native -->/g, "")
    .replace(/<style id="adsterra-placement-css">[\s\S]*?<\/style>/g, "")
    .replace(/<script type="application\/json" id="adsterra-config">[\s\S]*?<\/script>/g, "")
    .replace(/<script src="\/adsterra\/late\.js"[^>]*><\/script>/g, "")
    .replace(/<script src="\/adsterra\/runtime\.js"[^>]*><\/script>/g, "");
}

export function injectHtml(html, { clean }) {
  const stripped = stripAdMarkup(html);
  if (clean) return stripped;
  const liveMount = /id="adsterra-mount"/.test(stripped);
  const style = renderStyle();
  const withStyle = stripped.includes("</head>")
    ? stripped.replace("</head>", `${style}</head>`)
    : `${style}${stripped}`;
  const payload = renderPayload(!liveMount);
  if (withStyle.includes("</body>")) {
    return withStyle.replace("</body>", `${payload}</body>`);
  }
  return `${withStyle}${payload}`;
}
