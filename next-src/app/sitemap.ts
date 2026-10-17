import type { MetadataRoute } from "next";
import { siteDomain } from "@/lib/game-data";

export const dynamic = "force-static";

const routes = [
  "/",
  "/how-to-play/",
  "/door-code/",
  "/food-rarities/",
  "/codes/",
  "/updates/",
  "/wiki/",
  "/about/",
  "/sources/",
  "/contact/",
  "/privacy/",
  "/terms/",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-10-17T12:00:00-04:00");
  return routes.map((route) => ({
    url: `${siteDomain}${route}`,
    lastModified,
    changeFrequency:
      route === "/" || route === "/door-code/" || route === "/updates/" || route === "/codes/"
        ? "weekly"
        : "monthly",
    priority:
      route === "/"
        ? 1
        : route === "/door-code/" || route === "/how-to-play/"
          ? 0.9
          : route === "/updates/" || route === "/codes/"
            ? 0.8
            : 0.6,
  }));
}
