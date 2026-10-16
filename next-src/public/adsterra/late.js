/* Recreate Banner + Native hosts after Next hydration.
   Static asides inside <main> are wiped by React (#418). Script tags stay in the
   exported HTML (inert, inside <template>); this file mounts at most 3 live slots
   after load. Legal pages are left untouched. */
(function () {
  "use strict";

  var CLEAN = /(^|\/)(about|accessibility|advertising-policy|affiliate-disclosure|contact|cookie-policy|cookies|disclosure|dmca|editorial-policy|legal|privacy|sources|terms|404|_not-found)(\/|$|\.html)/i;
  var SLOT_IDS = ["native", "leaderboard", "rectangle"];

  function clean() {
    return CLEAN.test(String(window.location.pathname || ""));
  }

  function readConfig() {
    var node = document.getElementById("adsterra-config");
    if (!node) return null;
    try {
      return JSON.parse(node.textContent || "");
    } catch {
      return null;
    }
  }

  var stored = readConfig();
  if (stored && stored.adNetwork === "adsterra") window.__adsterraConfig = stored;

  function removeOrphan() {
    var orphan = document.querySelector("#adsterra-mount[data-adsterra-orphan='1']");
    if (orphan) orphan.remove();
  }

  function ensureMount() {
    if (clean()) {
      removeOrphan();
      return null;
    }
    var mount = document.getElementById("adsterra-mount");
    if (!mount) {
      mount = document.createElement("div");
      mount.id = "adsterra-mount";
      mount.setAttribute("data-adsterra-mount", "1");
      mount.setAttribute("data-adsterra-orphan", "1");
      for (var i = 0; i < SLOT_IDS.length; i += 1) {
        var id = SLOT_IDS[i];
        var aside = document.createElement("aside");
        aside.className = "ad-placement";
        aside.setAttribute("data-ad-slot", id);
        aside.setAttribute("aria-label", "Advertisement");
        aside.innerHTML = '<span class="ad-label">Advertisement</span><div class="ad-host" data-ad-host="' + id + '"></div>';
        mount.appendChild(aside);
      }
      var main = document.querySelector("main");
      if (main) main.appendChild(mount);
      else document.body.appendChild(mount);
    }
    var live = document.querySelectorAll("aside.ad-placement");
    for (var extra = 3; extra < live.length; extra += 1) live[extra].remove();
    return mount;
  }

  function activate() {
    if (clean()) return;
    if (window.__adsterraConfig) {
      /* already captured */
    } else if (stored) {
      window.__adsterraConfig = stored;
    }
    if (typeof window.__adsterraMount === "function") {
      window.__adsterraMount();
      return;
    }
    if (document.getElementById("adsterra-runtime")) return;
    var script = document.createElement("script");
    script.id = "adsterra-runtime";
    script.src = "/adsterra/runtime.js";
    document.body.appendChild(script);
  }

  function tick() {
    if (clean()) {
      removeOrphan();
      return;
    }
    ensureMount();
    activate();
  }

  function start() {
    tick();
    window.setInterval(tick, 1500);
  }

  if (document.readyState === "complete") window.setTimeout(start, 1200);
  else window.addEventListener("load", function () { window.setTimeout(start, 1200); });
})();
