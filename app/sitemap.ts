import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";
import blogData from "@/components/blog/data/data.json";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = (blogData as { id: string; date: string }[]).map((p) => ({
    url: `${SITE_URL}/blog/${p.id}`,
    lastModified: new Date(p.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...posts,
  ];
}
