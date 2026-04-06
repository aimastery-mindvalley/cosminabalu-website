import { getRequestConfig } from "next-intl/server";
import type { AbstractIntlMessages } from "next-intl";
import { routing } from "./routing";
import { headers } from "next/headers";

const messageLoaders = {
  fr: () => import("../../messages/fr.json"),
  ro: () => import("../../messages/ro.json"),
  en: () => import("../../messages/en.json"),
};

export default getRequestConfig(async ({ requestLocale }) => {
  // Try requestLocale first (set by next-intl middleware)
  let locale = await requestLocale;

  // Fallback: read the header the middleware sets directly
  if (!locale || !routing.locales.includes(locale as "fr" | "ro" | "en")) {
    const headersList = await headers();
    const headerLocale = headersList.get("x-next-intl-locale");
    if (headerLocale && routing.locales.includes(headerLocale as "fr" | "ro" | "en")) {
      locale = headerLocale;
    } else {
      locale = routing.defaultLocale;
    }
  }

  const messages = (await messageLoaders[locale as keyof typeof messageLoaders]()).default as unknown as AbstractIntlMessages;
  return { locale, messages };
});
