"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { useState } from "react";

const localeLabels: Record<string, string> = {
  fr: "Français",
  ro: "Română",
  en: "English",
};

export default function Header({ locale }: { locale: string }) {
  const t = useTranslations("nav");
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-brand-gray-light sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/images/logo.png"
            alt="Cosmina Balu"
            width={160}
            height={60}
            className="h-12 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-brand-black-light">
          <a href={`/${locale}`} className="hover:text-brand-red transition-colors">
            {t("home")}
          </a>
          <a href={`/${locale}/services`} className="hover:text-brand-red transition-colors">
            {t("services")}
          </a>
          <a href={`/${locale}/blog`} className="hover:text-brand-red transition-colors">
            {t("blog")}
          </a>
          <a href={`/${locale}/mon-histoire`} className="hover:text-brand-red transition-colors">
            {t("story")}
          </a>
          <a href={`/${locale}/contact`} className="hover:text-brand-red transition-colors">
            {t("contact")}
          </a>
        </nav>

        {/* Language switcher + mobile menu */}
        <div className="flex items-center gap-3">
          <LanguageSwitcher locale={locale} />
          <button
            className="md:hidden p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              {menuOpen ? (
                <path d="M4 4L18 18M18 4L4 18" stroke="#222" strokeWidth="2" strokeLinecap="round" />
              ) : (
                <>
                  <path d="M3 6h16M3 11h16M3 16h16" stroke="#222" strokeWidth="2" strokeLinecap="round" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {menuOpen && (
        <nav className="md:hidden bg-white border-t border-brand-gray-light px-4 py-4 flex flex-col gap-4 text-sm font-medium text-brand-black-light">
          <a href={`/${locale}`} onClick={() => setMenuOpen(false)} className="hover:text-brand-red">
            {t("home")}
          </a>
          <a href={`/${locale}/services`} onClick={() => setMenuOpen(false)} className="hover:text-brand-red">
            {t("services")}
          </a>
          <a href={`/${locale}/blog`} onClick={() => setMenuOpen(false)} className="hover:text-brand-red">
            {t("blog")}
          </a>
          <a href={`/${locale}/mon-histoire`} onClick={() => setMenuOpen(false)} className="hover:text-brand-red">
            {t("story")}
          </a>
          <a href={`/${locale}/contact`} onClick={() => setMenuOpen(false)} className="hover:text-brand-red">
            {t("contact")}
          </a>
        </nav>
      )}
    </header>
  );
}

function LanguageSwitcher({ locale }: { locale: string }) {
  const [open, setOpen] = useState(false);
  const otherLocales = (["fr", "ro", "en"] as const).filter((l) => l !== locale);

  // Map locales to their home URLs
  const localeHomes: Record<string, string> = {
    fr: "/fr",
    ro: "/ro",
    en: "/en",
  };

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1 text-xs font-semibold uppercase tracking-wide text-brand-gray hover:text-brand-red transition-colors"
      >
        {locale}
        <svg width="10" height="6" viewBox="0 0 10 6" fill="currentColor">
          <path d="M0 0l5 6 5-6H0z" />
        </svg>
      </button>
      {open && (
        <div className="absolute right-0 top-full mt-1 bg-white border border-brand-gray-light rounded shadow-md min-w-[110px] z-50">
          {otherLocales.map((l) => (
            <a
              key={l}
              href={localeHomes[l]}
              className="block px-4 py-2 text-sm text-brand-black hover:bg-brand-gray-pale hover:text-brand-red transition-colors"
              onClick={() => setOpen(false)}
            >
              {localeLabels[l]}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
