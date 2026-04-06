import { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";

const BASE_URL = "https://cosminabalu.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();

  const staticPages = [
    { fr: "/", ro: "/ro", en: "/en", priority: 1.0, changefreq: "weekly" as const },
    { fr: "/services", ro: "/ro/servicii", en: "/en/services", priority: 0.9, changefreq: "monthly" as const },
    { fr: "/mon-histoire", ro: "/ro/povestea-mea", en: "/en/my-story", priority: 0.8, changefreq: "monthly" as const },
    { fr: "/contact", ro: "/ro/contact", en: "/en/contact", priority: 0.7, changefreq: "yearly" as const },
    { fr: "/blog", ro: null, en: null, priority: 0.8, changefreq: "weekly" as const },
  ];

  const staticEntries: MetadataRoute.Sitemap = staticPages.flatMap((page) => {
    const entries: MetadataRoute.Sitemap = [];

    entries.push({
      url: `${BASE_URL}${page.fr}`,
      lastModified: new Date(),
      changeFrequency: page.changefreq,
      priority: page.priority,
      alternates: {
        languages: {
          fr: `${BASE_URL}${page.fr}`,
          ...(page.ro ? { ro: `${BASE_URL}${page.ro}` } : {}),
          ...(page.en ? { en: `${BASE_URL}${page.en}` } : {}),
        },
      },
    });

    return entries;
  });

  const blogEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  return [...staticEntries, ...blogEntries];
}
