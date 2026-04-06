import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["fr", "ro", "en"],
  defaultLocale: "fr",
  localePrefix: "always",
  pathnames: {
    "/": "/",
    "/services": "/services",
    "/blog": "/blog",
    "/blog/[slug]": "/blog/[slug]",
    "/mon-histoire": "/mon-histoire",
    "/contact": "/contact",
    "/disclaimer": {
      fr: "/disclaimer",
      ro: "/disclaimer",
      en: "/disclaimer",
    },
    "/privacy": {
      fr: "/privacy",
      ro: "/privacy",
      en: "/privacy",
    },
  },
});
