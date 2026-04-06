import { getTranslations } from "next-intl/server";
import NextLink from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  return {
    title: t("servicesTitle"),
    description: t("servicesDescription"),
    openGraph: { title: t("servicesTitle"), description: t("servicesDescription") },
  };
}

interface CoachingPath {
  title: string;
  present: string;
  journey: string;
  result: string;
}

interface Testimonial {
  name: string;
  text: string;
}

export default async function ServicesPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "services" });

  const paths: CoachingPath[] = [
    {
      title: t("path1Title"),
      present: t("path1Present"),
      journey: t("path1Journey"),
      result: t("path1Result"),
    },
    {
      title: t("path2Title"),
      present: t("path2Present"),
      journey: t("path2Journey"),
      result: t("path2Result"),
    },
    {
      title: t("path3Title"),
      present: t("path3Present"),
      journey: t("path3Journey"),
      result: t("path3Result"),
    },
    {
      title: t("path4Title"),
      present: t("path4Present"),
      journey: t("path4Journey"),
      result: t("path4Result"),
    },
  ];

  const coachingTestimonials = t.raw("testimonialsCoaching") as Testimonial[];
  const tarotTestimonials = t.raw("testimonialsToarot") as Testimonial[];

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="font-serif text-4xl text-brand-black mb-4 text-center">
        {t("heading")}
      </h1>
      <p className="text-brand-gray text-center text-lg mb-16 max-w-2xl mx-auto">
        {t("subheading")}
      </p>

      {/* Coaching Paths */}
      <div className="space-y-12 mb-20">
        {paths.map((path, i) => (
          <div key={i}>
            {/* Eagle image before path 4 */}
            {i === 3 && (
              <div className="relative h-52 rounded-lg overflow-hidden mb-6 shadow">
                <Image
                  src="/images/Aigle.png"
                  alt="Aigle en vol — liberté d'être"
                  fill
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-black/30" />
              </div>
            )}
          <div className="border border-brand-gray-light rounded-lg overflow-hidden">
            <div className="bg-[#CE1B28] text-white px-6 py-4">
              <h2 className="font-serif text-xl">{path.title}</h2>
            </div>
            <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-brand-gray-light">
              <div className="p-6">
                <p className="text-xs font-bold uppercase tracking-widest text-brand-gray mb-3">
                  {t("presentLabel")}
                </p>
                <p className="text-brand-black-light text-sm leading-relaxed">{path.present}</p>
              </div>
              <div className="p-6 bg-brand-gray-pale">
                <p className="text-xs font-bold uppercase tracking-widest text-brand-gray mb-3">
                  {t("journeyLabel")}
                </p>
                <p className="text-brand-black-light text-sm leading-relaxed">{path.journey}</p>
              </div>
              <div className="p-6">
                <p className="text-xs font-bold uppercase tracking-widest text-[#CE1B28] mb-3">
                  {t("resultLabel")}
                </p>
                <p className="text-brand-black font-semibold text-sm leading-relaxed">{path.result}</p>
              </div>
            </div>
          </div>
          </div>
        ))}
      </div>

      {/* Tarot */}
      <section className="mb-20">
        <h2 className="font-serif text-3xl text-brand-black mb-6 text-center">
          {t("tarotTitle")}
        </h2>
        <div className="bg-brand-gray-pale rounded-lg p-8 text-center">
          <h3 className="font-serif text-2xl text-[#CE1B28] mb-4">{t("tarotHeading")}</h3>
          <p className="text-brand-black-light leading-relaxed mb-4">{t("tarotText")}</p>
          <p className="text-brand-gray text-sm italic">{t("tarotInspiration")}</p>
        </div>
      </section>

      {/* Coaching Testimonials */}
      <section className="mb-16">
        <h2 className="font-serif text-2xl text-brand-black mb-8 text-center">
          {t("testimonialsCoachingTitle")}
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {coachingTestimonials.map((item, i) => (
            <blockquote
              key={i}
              className="bg-white border border-brand-gray-light rounded-lg p-6 shadow-sm"
            >
              <p className="text-brand-black-light text-sm leading-relaxed italic mb-4">
                &ldquo;{item.text}&rdquo;
              </p>
              <footer className="text-[#CE1B28] font-semibold text-sm">
                — {item.name}
              </footer>
            </blockquote>
          ))}
        </div>
      </section>

      {/* Tarot Testimonials */}
      <section className="mb-16">
        <h2 className="font-serif text-2xl text-brand-black mb-8 text-center">
          {t("tarotTestimonialsTitle")}
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {tarotTestimonials.map((item, i) => (
            <blockquote
              key={i}
              className="bg-brand-gray-pale rounded-lg p-6"
            >
              <p className="text-brand-black-light text-sm leading-relaxed italic mb-4">
                &ldquo;{item.text}&rdquo;
              </p>
              <footer className="text-[#CE1B28] font-semibold text-sm">
                — {item.name}
              </footer>
            </blockquote>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div className="text-center py-12 bg-brand-gray-pale rounded-lg px-8">
        <p className="font-serif text-xl mb-6 text-brand-black">{t("ctaText")}</p>
        <NextLink
          href={`/${locale}/contact`}
          className="inline-block bg-[#CE1B28] text-white font-semibold px-8 py-3 rounded hover:bg-red-800 transition-colors"
        >
          {t("ctaButton")}
        </NextLink>
      </div>
    </div>
  );
}
