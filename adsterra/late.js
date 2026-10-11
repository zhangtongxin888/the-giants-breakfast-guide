/* Adsterra late placer for prebuilt Next exports (no source in repo).
   The 2026-10-08 backfill injected <aside data-ad-slot> into out/*.html; React hydration
   (#418) then wiped them. Markers are now created here AFTER hydration, then runtime.js runs.
   Banner/Native only. Legal pages stay clean. */
(function () {
  "use strict";
  var CLEAN = /(^|\/)(about|accessibility|advertising-policy|affiliate-disclosure|contact|cookie-policy|cookies|disclosure|dmca|editorial-policy|legal|privacy|sources|terms|404)(\/|$|\.html)/i;
  var runs = 0;
  function ids() {
    try { return JSON.parse(document.getElementById("adsterra-config").textContent).slots.map(function (s) { return s.id; }); }
    catch (e) { return []; }
  }
  function mk(id) {
    var a = document.createElement("aside");
    a.className = "ad-placement";
    a.setAttribute("data-ad-slot", id);
    a.setAttribute("aria-label", "Advertisement");
    a.innerHTML = '<span class="ad-label">Advertisement</span><div class="ad-host" data-ad-host="' + id + '"></div>';
    return a;
  }
  function place() {
    if (CLEAN.test(location.pathname)) return;
    if (document.querySelector("[data-ad-slot]")) return;
    var list = ids(); if (!list.length) return;
    var main = document.querySelector("main") || document.body;
    list.forEach(function (id) {
      var el = mk(id);
      if (id === "top") main.insertBefore(el, main.firstChild);
      else if (id === "mid") {
        var s = main.querySelector("section");
        if (s && s.parentNode) s.parentNode.insertBefore(el, s.nextSibling); else main.appendChild(el);
      } else main.appendChild(el);
    });
    var sc = document.createElement("script");
    sc.src = "/adsterra/runtime.js" + (runs++ ? "?r=" + runs : "");
    document.body.appendChild(sc);
  }
  function later() { setTimeout(place, 1200); }
  if (document.readyState === "complete") later(); else window.addEventListener("load", later);
  var last = location.pathname;
  setInterval(function () { if (location.pathname !== last) { last = location.pathname; later(); } }, 800);
})();
