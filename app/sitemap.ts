import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/metadata";
export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/projects", "/about", "/services", "/solutions"].map((path) => ({
    url: `${siteConfig.url}${path}`,
    changeFrequency: "monthly",
    priority: path ? 0.8 : 1,
  }));
}
