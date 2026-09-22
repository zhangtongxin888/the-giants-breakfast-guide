import type { MetadataRoute } from "next";
import { siteDomain } from "@/lib/game-data";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${siteDomain}/sitemap.xml`,
  };
}
