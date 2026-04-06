import { getTranslations } from "next-intl/server";
import NextLink from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  return {
    title: t("homeTitle"),
    description: t("homeDescription"),
    openGraph: {
      title: t("homeTitle"),
      description: t("homeDescription"),
      url: locale === "fr" ? "/" : `/${locale}`,
    },
  };
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "home" });

  return (
    <>
      {/* Hero — full-width poppy banner */}
      <section className="relative h-[420px] md:h-[500px] overflow-hidden">
        <Image
          src="/images/poppy-4261569_1920.jpg"
          alt="Coquelicot rouge — symbole de la voix unique"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Gradient only on left side for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />
        {/* Text bottom-left */}
        <div className="absolute bottom-10 left-8 md:left-16 text-white max-w-sm">
          <h1 className="font-sans text-4xl md:text-5xl font-bold leading-tight mb-2 drop-shadow">
            {t("heroTitle")}
          </h1>
          <p className="text-white/90 text-lg mb-6 drop-shadow">
            {t("heroSubtitle")}
          </p>
          <NextLink
            href={`/${locale}/services`}
            className="inline-block bg-[#CE1B28] text-white font-semibold px-6 py-3 rounded-full hover:bg-red-800 transition-colors text-sm"
          >
            {t("servicesCta")}
          </NextLink>
        </div>
      </section>

      {/* Hero body text — below the banner */}
      <section className="py-12 px-4 bg-brand-gray-pale">
        <div className="max-w-3xl mx-auto text-center text-brand-black-light text-base md:text-lg leading-relaxed space-y-4">
          <h2 className="font-bold text-[#CE1B28] text-2xl md:text-3xl whitespace-pre-line leading-snug mb-6">
            {t("heroBodyHeading")}
          </h2>
          <p>{t("heroParagraph1")}</p>
          <p>{t("heroParagraph2")}</p>
          <p className="font-semibold text-brand-black">{t("heroParagraph3")}</p>
          <p className="text-[#CE1B28] tracking-widest text-xl">♦♦♦</p>
          <p>{t("heroParagraph4")}</p>
          <p className="text-[#CE1B28] tracking-widest text-xl">♦♦♦</p>
        </div>
      </section>

      {/* Services preview */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="font-serif text-2xl md:text-3xl text-brand-black mb-8">
              {t("servicesHeading")}
            </h2>
            <ul className="space-y-3 mb-10">
              {([
                t("service1"),
                t("service2"),
                t("service3"),
                t("service4"),
                t("service5"),
              ] as string[]).map((s, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-[#CE1B28] mt-1 flex-shrink-0">♦</span>
                  <span className="text-brand-black-light">{s}</span>
                </li>
              ))}
            </ul>
            <NextLink
              href={`/${locale}/services`}
              className="inline-block bg-[#CE1B28] text-white font-semibold px-8 py-3 rounded hover:bg-red-800 transition-colors text-sm"
            >
              {t("servicesCta")}
            </NextLink>
          </div>
          <div className="relative h-72 md:h-96 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/images/Relations.png"
              alt="Relations joyeuses"
              fill
              className="object-cover object-center"
            />
          </div>
        </div>
      </section>

      {/* About — full body photo + text */}
      <section className="bg-brand-gray-pale py-16 px-4">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div className="relative h-[480px] rounded-lg overflow-hidden shadow-lg order-2 md:order-1">
            <Image
              src="/images/7juill2020-GrapheStudio-31-scaled.jpg"
              alt="Cosmina Balu — Coach & Teacher & Mentor"
              fill
              className="object-cover object-top"
            />
          </div>
          <div className="order-1 md:order-2">
            <span className="inline-block bg-[#CE1B28] text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-widest mb-4">
              {t("aboutBadge")}
            </span>
            <h2 className="font-serif text-2xl md:text-3xl text-brand-black mb-6">
              {t("aboutHeading")}
            </h2>
            <div className="text-brand-black-light leading-relaxed space-y-4">
              <p className="font-semibold">{t("aboutIntro")}</p>
              <ul className="space-y-1 pl-4">
                {(t.raw("aboutList") as string[]).map((item: string, i: number) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <p className="text-[#CE1B28] text-center tracking-widest text-xl">♦♦♦</p>
              <p>{t("aboutParagraph2")}</p>
              <p className="font-bold text-brand-black">{t("aboutJoy")}</p>
              <p>{t("aboutTarot")}</p>
            </div>
            <div className="mt-8">
              <NextLink
                href={`/${locale}/mon-histoire`}
                className="inline-block border-2 border-[#CE1B28] text-[#CE1B28] font-semibold px-8 py-3 rounded hover:bg-[#CE1B28] hover:text-white transition-colors text-sm"
              >
                {t("aboutCta")}
              </NextLink>
            </div>
          </div>
        </div>
      </section>

      {/* Connect — zen stones background */}
      <section className="relative py-20 px-4 text-white">
        <Image
          src="/images/zen-stones-2774524_1920.jpg"
          alt="Pierres zen — équilibre et sérénité"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative z-10 max-w-xl mx-auto text-center">
          <h2 className="font-serif text-2xl md:text-3xl mb-6">
            {t("newsletterHeading")}
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
            <a
              href="https://www.facebook.com/cosmina.balu"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white text-white font-semibold px-6 py-3 rounded hover:bg-white hover:text-brand-black transition-colors text-sm"
            >
              Facebook
            </a>
            <a
              href="https://www.instagram.com/cosmina.balu/"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white text-white font-semibold px-6 py-3 rounded hover:bg-white hover:text-brand-black transition-colors text-sm"
            >
              Instagram
            </a>
            <a
              href="https://www.linkedin.com/in/cosminabalu/"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white text-white font-semibold px-6 py-3 rounded hover:bg-white hover:text-brand-black transition-colors text-sm"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
