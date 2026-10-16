/* Adsterra Banner + Native runtime. Classic script (no import/export).
   Mounts at most 3 slots and only https://bauval.org/ creatives.
   Popunder and Social Bar are not implemented. */
(function () {
  "use strict";

  var CLEAN = {
    about: 1,
    accessibility: 1,
    "advertising-policy": 1,
    "affiliate-disclosure": 1,
    contact: 1,
    "cookie-policy": 1,
    cookies: 1,
    disclosure: 1,
    dmca: 1,
    "editorial-policy": 1,
    legal: 1,
    privacy: 1,
    sources: 1,
    terms: 1,
    "404": 1,
    "_not-found": 1
  };

  var queueRunning = false;

  function cleanPath() {
    var parts = String(window.location.pathname || "").split("/");
    for (var i = 0; i < parts.length; i += 1) {
      if (CLEAN[parts[i].toLowerCase()]) return true;
    }
    return false;
  }

  function allowed(url) {
    return typeof url === "string" && url.indexOf("https://bauval.org/") === 0;
  }

  function readConfig() {
    if (window.__adsterraConfig && window.__adsterraConfig.adNetwork === "adsterra") {
      return window.__adsterraConfig;
    }
    var node = document.getElementById("adsterra-config");
    if (!node) return null;
    try {
      return JSON.parse(node.textContent || "");
    } catch {
      return null;
    }
  }

  function hostOf(id) {
    return document.querySelector('[data-ad-host="' + id + '"]');
  }

  function chooseVariant(slot) {
    var variants = slot.variants || [];
    if (!variants.length) return slot;
    var width = window.innerWidth || 0;
    var selected = null;
    var best = -1;
    for (var i = 0; i < variants.length; i += 1) {
      var variant = variants[i];
      var minWidth = Number(variant.minWidth || 0);
      if (width >= minWidth && minWidth > best) {
        selected = variant;
        best = minWidth;
      }
    }
    return selected || variants[variants.length - 1];
  }

  function whenDone(script, finish) {
    var done = false;
    var end = function () {
      if (done) return;
      done = true;
      window.setTimeout(finish, 300);
    };
    script.addEventListener("load", end);
    script.addEventListener("error", end);
    window.setTimeout(end, 5000);
  }

  function mountNative(slot) {
    var host = hostOf(slot.id);
    if (!host || host.getAttribute("data-ad-state")) return;
    if (!slot.containerId || !allowed(slot.scriptUrl)) return;
    host.setAttribute("data-ad-state", "pending");
    var container = document.createElement("div");
    container.id = slot.containerId;
    host.appendChild(container);
    var script = document.createElement("script");
    script.async = true;
    script.setAttribute("data-cfasync", "false");
    script.src = slot.scriptUrl;
    whenDone(script, function () { host.setAttribute("data-ad-state", "done"); });
    host.appendChild(script);
  }

  function mountBanner(slot) {
    var host = hostOf(slot.id);
    if (!host || host.getAttribute("data-ad-state")) return null;
    var chosen = chooseVariant(slot);
    if (!chosen || !chosen.key || !allowed(chosen.scriptUrl)) return null;
    host.setAttribute("data-ad-state", "pending");
    window.atOptions = {
      key: chosen.key,
      format: "iframe",
      height: Number(chosen.height),
      width: Number(chosen.width),
      params: {}
    };
    var script = document.createElement("script");
    script.src = chosen.scriptUrl;
    whenDone(script, function () { host.setAttribute("data-ad-state", "done"); });
    host.appendChild(script);
    return script;
  }

  function queueBanners(slots) {
    if (queueRunning) return;
    var pending = [];
    for (var i = 0; i < slots.length; i += 1) {
      var host = hostOf(slots[i].id);
      if (host && !host.getAttribute("data-ad-state")) pending.push(slots[i]);
    }
    if (!pending.length) return;
    queueRunning = true;
    var index = 0;
    var next = function () {
      if (index >= pending.length) {
        queueRunning = false;
        return;
      }
      var script = mountBanner(pending[index]);
      index += 1;
      if (!script) {
        next();
        return;
      }
      whenDone(script, next);
    };
    next();
  }

  function mount() {
    if (cleanPath()) return;
    var config = readConfig();
    if (!config || config.adNetwork !== "adsterra" || config.status !== "ready") return;
    if (document.querySelectorAll("aside.ad-placement").length > 3) return;
    var slots = Array.isArray(config.slots) ? config.slots.filter(function (slot) {
      return slot && (slot.format === "native" || slot.format === "banner");
    }).slice(0, 3) : [];
    var banners = [];
    for (var i = 0; i < slots.length; i += 1) {
      if (slots[i].format === "native") mountNative(slots[i]);
      else banners.push(slots[i]);
    }
    queueBanners(banners);
  }

  window.__adsterraMount = mount;
  mount();
})();
