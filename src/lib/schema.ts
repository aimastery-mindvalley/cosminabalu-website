export function personSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Cosmina Balu",
    url: "https://cosminabalu.com",
    sameAs: [
      "https://www.facebook.com/cosmina.balu",
      "https://www.linkedin.com/in/cosminabalu/",
      "https://www.instagram.com/cosmina.balu/",
    ],
    jobTitle: "Life Coach & NLP Professional Coach",
    description:
      "Coach de transformation personnelle et spirituelle. Certifiée Coach Professionnelle en PNL.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Montréal",
      addressRegion: "Québec",
      addressCountry: "CA",
    },
    knowsLanguage: ["fr", "ro", "en"],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Cosmina Balu",
    url: "https://cosminabalu.com",
    description: "Coach de transformation personnelle et spirituelle",
    inLanguage: ["fr", "ro", "en"],
    potentialAction: {
      "@type": "SearchAction",
      target: "https://cosminabalu.com/blog?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };
}

export function serviceSchema(name: string, description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    provider: {
      "@type": "Person",
      name: "Cosmina Balu",
      url: "https://cosminabalu.com",
    },
    areaServed: {
      "@type": "City",
      name: "Montréal",
    },
    availableChannel: {
      "@type": "ServiceChannel",
      serviceType: "Virtual coaching sessions via Zoom",
    },
  };
}

export function blogPostSchema(
  title: string,
  description: string,
  date: string,
  slug: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description,
    datePublished: date,
    dateModified: date,
    author: {
      "@type": "Person",
      name: "Cosmina Balu",
      url: "https://cosminabalu.com",
    },
    publisher: {
      "@type": "Person",
      name: "Cosmina Balu",
      url: "https://cosminabalu.com",
    },
    url: `https://cosminabalu.com/blog/${slug}`,
    inLanguage: "fr",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://cosminabalu.com/blog/${slug}`,
    },
  };
}
