import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
import { services } from "@/lib/data/services";
import { suburbs } from "@/lib/data/locations";
import { blogPosts } from "@/lib/data/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${siteConfig.url}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${siteConfig.url}/about`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${siteConfig.url}/services`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${siteConfig.url}/locations`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${siteConfig.url}/blog`, changeFrequency: "weekly", priority: 0.7 },
    { url: `${siteConfig.url}/contact`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${siteConfig.url}/quote`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteConfig.url}/faq`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${siteConfig.url}/privacy-policy`, changeFrequency: "yearly", priority: 0.2 },
    { url: `${siteConfig.url}/terms`, changeFrequency: "yearly", priority: 0.2 },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${siteConfig.url}/services/${s.slug}`,
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  const locationRoutes: MetadataRoute.Sitemap = suburbs.map((s) => ({
    url: `${siteConfig.url}/locations/${s.slug}`,
    changeFrequency: "monthly",
    priority: s.isHub ? 0.85 : 0.75,
  }));

  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((p) => ({
    url: `${siteConfig.url}/blog/${p.slug}`,
    lastModified: p.date,
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...serviceRoutes, ...locationRoutes, ...blogRoutes];
}
