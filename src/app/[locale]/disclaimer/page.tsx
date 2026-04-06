import type { Metadata } from "next";

type Props = { params: Promise<{ locale: string }> };

const content = {
  fr: {
    title: "Déni de responsabilité et droits d'auteur – Cosmina Balu",
    h1: "Déni de responsabilité et droits d'auteur",
    p1: "Ce site Web ainsi que tous documents, enregistrements ou produits sont uniquement à des fins éducatives et ne vise en aucune manière à remplacer un avis médical qualifié, un diagnostic ou un traitement.",
    p2: "Les informations fournies sur ce site ne remplacent pas l'avis d'un professionnel de santé qualifié, ni un traitement psychologique ou thérapeutique. Consultez toujours des professionnels qualifiés pour toute préoccupation médicale ou psychologique.",
    termsh: "Conditions d'utilisation",
    p3: "En visitant ce site Web ou en vous procurant ces documents, enregistrements ou produits, vous acceptez de ne pas redistribuer en partie ou en totalité le matériel qui s'y trouve sans les droits appropriés.",
    p4: "Cosmina Balu ne peut être tenue responsable des dommages résultant de l'utilisation de ce site. En accédant à ce site, vous acceptez pleinement ces conditions.",
    copyright: "Tous droits réservés © Cosmina Balu 2026",
  },
  ro: {
    title: "Declinare de responsabilitate și drepturi de autor – Cosmina Balu",
    h1: "Declinare de responsabilitate și drepturi de autor",
    p1: "Acest site web, precum și toate documentele, înregistrările sau produsele sunt exclusiv în scopuri educaționale și nu au în niciun caz scopul de a înlocui un aviz medical calificat, un diagnostic sau un tratament.",
    p2: "Informațiile furnizate pe acest site nu înlocuiesc sfatul unui profesionist calificat în domeniul sănătății, nici un tratament psihologic sau terapeutic. Consultați întotdeauna profesioniști calificați pentru orice problemă medicală sau psihologică.",
    termsh: "Condiții de utilizare",
    p3: "Prin vizitarea acestui site web sau prin achiziționarea acestor documente, înregistrări sau produse, acceptați să nu redistribuiți parțial sau total materialul găsit fără drepturile corespunzătoare.",
    p4: "Cosmina Balu nu poate fi trasă la răspundere pentru daunele rezultate din utilizarea acestui site. Prin accesarea acestui site, acceptați pe deplin aceste condiții.",
    copyright: "Toate drepturile rezervate © Cosmina Balu 2026",
  },
  en: {
    title: "Disclaimer and Copyright – Cosmina Balu",
    h1: "Disclaimer and Copyright",
    p1: "This website and all documents, recordings or products are for educational purposes only and are in no way intended to replace qualified medical advice, diagnosis or treatment.",
    p2: "The information provided on this site does not replace the advice of a qualified health professional, nor psychological or therapeutic treatment. Always consult qualified professionals for any medical or psychological concerns.",
    termsh: "Terms of Use",
    p3: "By visiting this website or obtaining these documents, recordings or products, you agree not to redistribute in part or in full the material found herein without the appropriate rights.",
    p4: "Cosmina Balu cannot be held liable for damages resulting from the use of this site. By accessing this site, you fully accept these terms.",
    copyright: "All rights reserved © Cosmina Balu 2026",
  },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const c = content[locale as keyof typeof content] ?? content.fr;
  return { title: c.title };
}

export default async function DisclaimerPage({ params }: Props) {
  const { locale } = await params;
  const c = content[locale as keyof typeof content] ?? content.fr;

  return (
    <div className="max-w-3xl mx-auto px-4 py-16 prose prose-lg">
      <h1 className="font-serif">{c.h1}</h1>
      <p>{c.p1}</p>
      <p>{c.p2}</p>
      <h2 className="font-serif">{c.termsh}</h2>
      <p>{c.p3}</p>
      <p>{c.p4}</p>
      <p><strong>{c.copyright}</strong></p>
    </div>
  );
}
