import type { MetadataRoute } from "next";
import { LIBRARY_CONFIG } from "@/data/libraryConfig";

const LAST_MODIFIED = new Date("2026-11-19T00:00:00Z");

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = LIBRARY_CONFIG.siteUrl.replace(/\/$/, "");

  const routes: { path: string; priority: number }[] = [
    { path: "", priority: 1 },
    { path: "/online-resources", priority: 0.9 },
    { path: "/library-rules", priority: 0.8 },
    { path: "/circulation-policy", priority: 0.8 },
    { path: "/cataloging-policy", priority: 0.7 },
    { path: "/collection-development-policy", priority: 0.7 },
    { path: "/digital-media", priority: 0.7 },
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: LAST_MODIFIED,
    changeFrequency: "monthly",
    priority: route.priority,
  }));
}
