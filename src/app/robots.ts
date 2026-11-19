import type { MetadataRoute } from "next";
import { LIBRARY_CONFIG } from "@/data/libraryConfig";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = LIBRARY_CONFIG.siteUrl.replace(/\/$/, "");

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
