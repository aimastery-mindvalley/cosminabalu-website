import { getTranslations } from "next-intl/server";
import NextLink from "next/link";
import { getAllPosts } from "@/lib/blog";
import type { Metadata } from "next";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  return {
    title: t("blogTitle"),
    description: t("blogDescription"),
    openGraph: { title: t("blogTitle"), description: t("blogDescription") },
  };
}

export default async function BlogPage({ params }: Props) {
  const { locale } = await params;
  const tBlog = await getTranslations({ locale, namespace: "blog" });
  const posts = getAllPosts(locale);

  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="font-serif text-4xl text-brand-black mb-4 text-center">
        {tBlog("heading")}
      </h1>

      <div className="space-y-10 mt-12">
        {posts.map((post) => (
          <article key={post.slug} className="border-b border-brand-gray-light pb-10">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs font-bold uppercase tracking-widest text-[#CE1B28]">
                {post.category}
              </span>
              <span className="text-brand-gray text-xs">
                {new Date(post.date + "T12:00:00").toLocaleDateString(locale === "ro" ? "ro-RO" : locale === "en" ? "en-CA" : "fr-CA", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>
            <h2 className="font-serif text-2xl text-brand-black mb-3">
              <NextLink
                href={`/${locale}/blog/${post.slug}`}
                className="hover:text-[#CE1B28] transition-colors"
              >
                {post.title}
              </NextLink>
            </h2>
            <p className="text-brand-black-light leading-relaxed mb-4">{post.excerpt}</p>
            <NextLink
              href={`/${locale}/blog/${post.slug}`}
              className="text-[#CE1B28] font-semibold text-sm hover:underline"
            >
              {tBlog("readMore")} →
            </NextLink>
          </article>
        ))}
      </div>
    </div>
  );
}
