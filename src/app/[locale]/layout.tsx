import { NextIntlClientProvider, type AbstractIntlMessages } from "next-intl";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });

  const alternates: Record<string, string> = {
    fr: "https://cosminabalu.com/",
    ro: "https://cosminabalu.com/ro",
    en: "https://cosminabalu.com/en",
  };

  return {
    alternates: {
      canonical: locale === "fr" ? "/" : `/${locale}`,
      languages: alternates,
    },
    openGraph: {
      locale: locale === "fr" ? "fr_CA" : locale === "ro" ? "ro_RO" : "en_CA",
      alternateLocale:
        locale === "fr"
          ? ["ro_RO", "en_CA"]
          : locale === "ro"
          ? ["fr_CA", "en_CA"]
          : ["fr_CA", "ro_RO"],
    },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as "fr" | "ro" | "en")) {
    notFound();
  }

  const messageLoaders = {
    fr: () => import("../../../messages/fr.json"),
    ro: () => import("../../../messages/ro.json"),
    en: () => import("../../../messages/en.json"),
  };
  const messages = (await messageLoaders[locale as keyof typeof messageLoaders]()).default;

  return (
    <NextIntlClientProvider locale={locale} messages={messages as AbstractIntlMessages}>
      <Header locale={locale} />
      <main>{children}</main>
      <Footer locale={locale} />
    </NextIntlClientProvider>
  );
}
