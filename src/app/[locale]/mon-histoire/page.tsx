import { getTranslations } from "next-intl/server";
import NextLink from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  return {
    title: t("storyTitle"),
    description: t("storyDescription"),
    openGraph: { title: t("storyTitle"), description: t("storyDescription") },
  };
}

interface TimelineEvent {
  year: string;
  event: string;
}

export default async function StoryPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "story" });
  const timeline = t.raw("timelineEvents") as TimelineEvent[];
  const guideList = t.raw("guideList") as string[];

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      {/* Portrait */}
      <div className="flex justify-center mb-12">
        <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-xl border-4 border-[#CE1B28]">
          <Image
            src="/images/Cosmina_Profile_Picture.jpeg"
            alt="Cosmina Balu — Coach & Teacher & Mentor"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
      </div>

      {/* Vision & Mission */}
      <div className="grid md:grid-cols-2 gap-6 mb-16">
        <div className="bg-[#CE1B28] text-white rounded-lg p-8 text-center">
          <p className="text-xs font-bold uppercase tracking-widest mb-3 opacity-80">
            {t("visionLabel")}
          </p>
          <p className="font-serif text-xl leading-relaxed">{t("vision")}</p>
        </div>
        <div className="bg-[#323232] text-white rounded-lg p-8 text-center">
          <p className="text-xs font-bold uppercase tracking-widest mb-3 opacity-80">
            {t("missionLabel")}
          </p>
          <p className="font-serif text-xl leading-relaxed">{t("mission")}</p>
        </div>
      </div>

      <h1 className="font-serif text-4xl text-brand-black mb-8 text-center">
        {t("heading")}
      </h1>

      {/* Story body */}
      <div className="text-brand-black-light leading-relaxed text-lg mb-16 space-y-4 max-w-3xl mx-auto">
        <p>{t("body")}</p>
      </div>

      {/* Guide list */}
      <section className="bg-brand-gray-pale rounded-lg p-10 mb-16">
        <h2 className="font-serif text-2xl text-brand-black mb-6 text-center">
          {t("guideHeading")}
        </h2>
        <ul className="space-y-3 max-w-md mx-auto">
          {guideList.map((item, i) => (
            <li key={i} className="flex items-center gap-3">
              <span className="text-[#CE1B28] font-bold">♦</span>
              <span className="text-brand-black-light">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Timeline */}
      <section className="mb-16">
        <h2 className="font-serif text-2xl text-brand-black mb-10 text-center">
          {t("timelineHeading")}
        </h2>
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-brand-gray-light md:-translate-x-px" />

          <div className="space-y-8">
            {timeline.map((item, i) => (
              <div
                key={i}
                className={`relative flex items-start gap-6 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-[#CE1B28] rounded-full -translate-x-1/2 mt-1.5" />

                {/* Content */}
                <div
                  className={`ml-10 md:ml-0 md:w-[calc(50%-2rem)] ${
                    i % 2 === 0 ? "md:text-right md:pr-8" : "md:text-left md:pl-8"
                  }`}
                >
                  <span className="inline-block bg-[#CE1B28] text-white text-xs font-bold px-3 py-1 rounded mb-2">
                    {item.year}
                  </span>
                  <p className="text-brand-black-light text-sm leading-relaxed">
                    {item.event}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="text-center py-12 bg-brand-gray-pale rounded-lg px-8">
        <p className="font-serif text-xl mb-6 text-brand-black">{t("newsletterCta")}</p>
        <NextLink
          href={`/${locale}/contact`}
          className="inline-block bg-[#CE1B28] text-white font-semibold px-8 py-3 rounded hover:bg-red-800 transition-colors"
        >
          Contact
        </NextLink>
      </div>
    </div>
  );
}
