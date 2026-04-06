import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  category: string;
  tags: string[];
  excerpt: string;
  content?: string;
}

function getPostsDirectory(locale: string): string {
  const localeDir = path.join(process.cwd(), "content/blog", locale);
  // Fall back to French if locale directory doesn't exist
  if (fs.existsSync(localeDir)) return localeDir;
  return path.join(process.cwd(), "content/blog/fr");
}

export function getAllPosts(locale = "fr"): BlogPost[] {
  const postsDirectory = getPostsDirectory(locale);
  if (!fs.existsSync(postsDirectory)) return [];

  const fileNames = fs.readdirSync(postsDirectory);
  const posts = fileNames
    .filter((name) => name.endsWith(".md"))
    .map((fileName) => {
      const filePath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(filePath, "utf8");
      const { data } = matter(fileContents);

      return {
        slug: data.slug || fileName.replace(/\.md$/, ""),
        title: data.title,
        date: data.date,
        category: data.category,
        tags: data.tags || [],
        excerpt: data.excerpt || "",
      } as BlogPost;
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return posts;
}

export function getPostBySlug(slug: string, locale = "fr"): BlogPost | null {
  const postsDirectory = getPostsDirectory(locale);
  if (!fs.existsSync(postsDirectory)) return null;

  const fileNames = fs.readdirSync(postsDirectory);
  const fileName = fileNames.find((name) => {
    const filePath = path.join(postsDirectory, name);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContents);
    return data.slug === slug || name.replace(/\.md$/, "") === slug;
  });

  if (!fileName) return null;

  const filePath = path.join(postsDirectory, fileName);
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug: data.slug || fileName.replace(/\.md$/, ""),
    title: data.title,
    date: data.date,
    category: data.category,
    tags: data.tags || [],
    excerpt: data.excerpt || "",
    content,
  };
}
