import { getTranslations } from "next-intl/server";
import NextLink from "next/link";
import Image from "next/image";
import { getAllPosts } from "@/lib/blog";

const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/cosmina.balu",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/cosminabalu/",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/cosmina.balu/",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
];

function formatDate(dateStr: string, locale: string): string {
  try {
    const intlLocale = locale === "fr" ? "fr-FR" : locale === "ro" ? "ro-RO" : "en-CA";
    return new Intl.DateTimeFormat(intlLocale, {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(new Date(dateStr + "T12:00:00"));
  } catch {
    return dateStr;
  }
}

export default async function Footer({ locale }: { locale: string }) {
  const t = await getTranslations({ locale, namespace: "footer" });
  const tTitles = await getTranslations({ locale, namespace: "blogTitles" });
  const blogTitles: Record<string, string> = {
    "appelaction": tTitles("appelaction" as Parameters<typeof tTitles>[0]),
    "apel-la-actiune": tTitles("apel-la-actiune" as Parameters<typeof tTitles>[0]),
    "relation-amoureuse": tTitles("relation-amoureuse" as Parameters<typeof tTitles>[0]),
    "relatia-amoroasa": tTitles("relatia-amoroasa" as Parameters<typeof tTitles>[0]),
    "call-to-action": tTitles("call-to-action" as Parameters<typeof tTitles>[0]),
    "nurturing-love-relationship": tTitles("nurturing-love-relationship" as Parameters<typeof tTitles>[0]),
    "feminine-inspiration": tTitles("feminine-inspiration" as Parameters<typeof tTitles>[0]),
    "stop-seeking-love": tTitles("stop-seeking-love" as Parameters<typeof tTitles>[0]),
    "inspiratie-la-feminin": tTitles("inspiratie-la-feminin" as Parameters<typeof tTitles>[0]),
    "nu-mai-cauta-iubirea": tTitles("nu-mai-cauta-iubirea" as Parameters<typeof tTitles>[0]),
  };
  const recentPosts = getAllPosts(locale).slice(0, 2);
  const blogLocale = locale;

  return (
    <footer className="bg-[#111111] text-white mt-20">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Image
              src="/images/logo.png"
              alt="Cosmina Balu"
              width={140}
              height={50}
              className="h-10 w-auto object-contain mb-6 brightness-0 invert"
            />
            <p className="text-white text-sm leading-relaxed">
              {t("tagline1")}
            </p>
            <p className="text-white text-sm font-semibold mt-3">
              {t("tagline2")}
            </p>
          </div>

          {/* Social */}
          <div>
            <h5 className="font-bold text-white text-lg mb-6">{t("keepInTouch")}</h5>
            <div className="flex flex-col gap-4">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-white hover:text-[#CE1B28] transition-colors group"
                >
                  <span className="flex items-center justify-center w-10 h-10 bg-[#2a2a2a] group-hover:bg-[#CE1B28] rounded transition-colors flex-shrink-0">
                    {s.icon}
                  </span>
                  <span className="text-sm font-medium">{s.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Nav */}
          <div>
            <h5 className="font-bold text-white text-lg mb-6">Navigation</h5>
            <nav className="flex flex-col gap-3 text-sm text-white">
              <NextLink href={`/${locale}`} className="hover:text-white transition-colors">
                {locale === "fr" ? "Accueil" : locale === "ro" ? "Acasă" : "Welcome"}
              </NextLink>
              <NextLink href={`/${locale}/services`} className="hover:text-white transition-colors">
                {locale === "fr" ? "Services" : locale === "ro" ? "Servicii" : "Services"}
              </NextLink>
              <NextLink href={`/${locale}/blog`} className="hover:text-white transition-colors">
                Blog
              </NextLink>
              <NextLink href={`/${locale}/mon-histoire`} className="hover:text-white transition-colors">
                {locale === "fr" ? "Mon Histoire" : locale === "ro" ? "Povestea Mea" : "My Story"}
              </NextLink>
              <NextLink href={`/${locale}/contact`} className="hover:text-white transition-colors">
                Contact
              </NextLink>
            </nav>
          </div>

          {/* Latest News */}
          <div>
            <h5 className="font-bold text-white text-lg mb-6">
              {locale === "fr" ? "Derniers articles" : locale === "ro" ? "Ultimele articole" : "Latest News"}
            </h5>
            <div className="space-y-6">
              {recentPosts.map((post) => (
                <div key={post.slug}>
                  <p className="text-[#888888] text-xs mb-1">
                    {formatDate(post.date, locale)}
                  </p>
                  <NextLink
                    href={`/${blogLocale}/blog/${post.slug}`}
                    className="text-white font-bold text-sm hover:text-[#CE1B28] transition-colors leading-snug"
                  >
                    {blogTitles[post.slug] ?? post.title}
                  </NextLink>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-[#2a2a2a] flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-white">
          <span>{t("copyright")}</span>
          <div className="flex gap-4">
            <NextLink href={`/${locale}/disclaimer`} className="hover:text-white transition-colors">
              {t("disclaimer")}
            </NextLink>
            <NextLink href={`/${locale}/privacy`} className="hover:text-white transition-colors">
              {t("privacy")}
            </NextLink>
          </div>
        </div>
      </div>
    </footer>
  );
}
