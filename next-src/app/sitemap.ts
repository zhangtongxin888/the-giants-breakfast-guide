import type { MetadataRoute } from "next";
import { siteDomain } from "@/lib/game-data";

export const dynamic = "force-static";

const routes = [
  "/",
  "/how-to-play/",
  "/door-code/",
  "/food-rarities/",
  "/codes/",
  "/wiki/",
  "/about/",
  "/sources/",
  "/contact/",
  "/privacy/",
  "/terms/",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-09-22T10:00:00+08:00");
  return routes.map((route) => ({
    url: `${siteDomain}${route}`,
    lastModified,
    changeFrequency: route === "/" || route === "/door-code/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : route === "/door-code/" || route === "/how-to-play/" ? 0.9 : 0.6,
  }));
}
