import { getTranslations } from "next-intl/server";
import NextLink from "next/link";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import MarkdownContent from "@/components/MarkdownContent";

type Props = { params: Promise<{ locale: string; slug: string }> };

export async function generateStaticParams() {
  const locales = ["fr", "ro", "en"];
  const params: { locale: string; slug: string }[] = [];
  for (const locale of locales) {
    const posts = getAllPosts(locale);
    for (const post of posts) {
      params.push({ locale, slug: post.slug });
    }
  }
  return params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const post = getPostBySlug(slug, locale);
  if (!post) return { title: "Post introuvable" };
  return {
    title: `${post.title} – Cosmina Balu`,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} – Cosmina Balu`,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { locale, slug } = await params;
  const post = getPostBySlug(slug, locale);

  if (!post) notFound();

  const t = await getTranslations({ locale, namespace: "blog" });
  const dateLocale = locale === "fr" ? "fr-CA" : locale === "ro" ? "ro-RO" : "en-CA";

  return (
    <article className="max-w-3xl mx-auto px-4 py-16">
      <NextLink
        href={`/${locale}/blog`}
        className="text-[#CE1B28] text-sm font-semibold hover:underline mb-8 inline-block"
      >
        ← {t("backToBlog")}
      </NextLink>

      <header className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#CE1B28]">
            {post.category}
          </span>
          <span className="text-brand-gray text-xs">
            {new Date(post.date + "T12:00:00").toLocaleDateString(dateLocale, {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>
        </div>
        <h1 className="font-serif text-3xl md:text-4xl text-brand-black leading-tight">
          {post.title}
        </h1>
      </header>

      <MarkdownContent content={post.content || ""} />
    </article>
  );
}
