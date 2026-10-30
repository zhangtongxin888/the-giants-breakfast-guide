/* 2026-10-30: Popunder + Social Bar only. No Banner/Native hosts are created
   (no empty "Advertisement" frames). After Next hydration this re-attaches the
   adsterra-config block if React removed it, then loads /adsterra/runtime.js
   (Pop 3/day, Social Bar 3/day). Legal pages and 404 are left untouched. */
(function () {
  "use strict";
  var CLEAN = /(^|\/)(about|accessibility|advertising-policy|affiliate-disclosure|contact|cookie-policy|cookies|disclosure|dmca|editorial-policy|legal|privacy|sources|terms|404|_not-found)(\/|$|\.html)/i;
  function clean() { return CLEAN.test(String(window.location.pathname || "")) || /404|not found/i.test(document.title || ""); }
  var node = document.getElementById("adsterra-config");
  var raw = node ? node.textContent : "";
  function strip() {
    var a = document.querySelectorAll("aside.ad-placement, aside.ad-slot, #adsterra-mount");
    for (var i = 0; i < a.length; i += 1) a[i].remove();
  }
  function start() {
    strip();
    if (clean() || !raw) return;
    if (!document.getElementById("adsterra-config")) {
      var s = document.createElement("script");
      s.type = "application/json"; s.id = "adsterra-config"; s.textContent = raw;
      document.body.appendChild(s);
    }
    if (document.getElementById("adsterra-runtime")) return;
    var r = document.createElement("script");
    r.id = "adsterra-runtime"; r.src = "/adsterra/runtime.js";
    document.body.appendChild(r);
    window.setTimeout(strip, 3000);
  }
  if (document.readyState === "complete") window.setTimeout(start, 1200);
  else window.addEventListener("load", function () { window.setTimeout(start, 1200); });
})();
