import type { Metadata } from "next";

type Props = { params: Promise<{ locale: string }> };

const content = {
  fr: {
    title: "Politique de Confidentialité – Cosmina Balu",
    h1: "Politique De Confidentialité",
    s1h: "Qui sommes-nous ?",
    s1p: "L'adresse de notre site Web est : https://cosminabalu.com",
    s2h: "Utilisation des données personnelles collectées",
    commentsh: "Commentaires",
    commentsp: "Quand vous laissez un commentaire sur notre site web, les données inscrites dans le formulaire de commentaire, mais aussi votre adresse IP et l'agent utilisateur de votre navigateur sont collectés pour nous aider à la détection des commentaires indésirables.",
    mediah: "Médias",
    mediap: "Si vous êtes un utilisateur ou une utilisatrice enregistré·e et que vous téléversez des images sur le site web, nous vous conseillons d'éviter de téléverser des images contenant des données EXIF de coordonnées GPS.",
    formsh: "Formulaires de contact",
    formsp: "Les données soumises via les formulaires de contact sont utilisées uniquement pour répondre à vos demandes et ne sont pas partagées avec des tiers.",
    cookiesh: "Cookies",
    cookiesp: "Si vous déposez un commentaire sur notre site, il vous sera proposé d'enregistrer votre nom, adresse de messagerie et site web dans des cookies. C'est uniquement pour votre confort afin de ne pas avoir à saisir ces informations si vous déposez un autre commentaire plus tard.",
    retentionh: "Durées de stockage de vos données",
    retentionp: "Si vous laissez un commentaire, le commentaire et ses métadonnées sont conservés indéfiniment. Cela permet de reconnaître et approuver automatiquement les commentaires suivants au lieu de les laisser dans la file de modération.",
    rightsh: "Les droits que vous avez sur vos données",
    rightsp: "Si vous avez un compte ou si vous avez laissé des commentaires sur le site, vous pouvez demander à recevoir un fichier contenant toutes les données personnelles que nous possédons à votre sujet, incluant celles que vous nous avez fournies. Vous pouvez également demander la suppression des données personnelles vous concernant.",
    addlh: "Informations supplémentaires",
    embedh: "Contenu embarqué depuis d'autres sites",
    embedp: "Les articles de ce site peuvent inclure des contenus intégrés (par exemple des vidéos, images, articles…). Le contenu intégré depuis d'autres sites se comporte de la même manière que si le visiteur se rendait sur cet autre site.",
    paymenth: "Paiements",
    paymentp: "Nous acceptons les paiements par PayPal. Lors du traitement des paiements, ceux-ci sont traités par PayPal. Consultez la politique de confidentialité de PayPal pour plus d'informations.",
    copyright: "Tous droits réservés © Cosmina Balu 2026",
  },
  ro: {
    title: "Politica de Confidențialitate – Cosmina Balu",
    h1: "Politica de Confidențialitate",
    s1h: "Cine suntem?",
    s1p: "Adresa site-ului nostru web este: https://cosminabalu.com",
    s2h: "Utilizarea datelor personale colectate",
    commentsh: "Comentarii",
    commentsp: "Când lăsați un comentariu pe site-ul nostru, datele introduse în formularul de comentarii, precum și adresa dvs. IP și agentul utilizator al browserului sunt colectate pentru a ne ajuta la detectarea comentariilor nedorite.",
    mediah: "Media",
    mediap: "Dacă sunteți un utilizator înregistrat și încărcați imagini pe site, vă recomandăm să evitați încărcarea imaginilor cu date EXIF de coordonate GPS.",
    formsh: "Formulare de contact",
    formsp: "Datele trimise prin formularele de contact sunt utilizate exclusiv pentru a răspunde solicitărilor dvs. și nu sunt partajate cu terți.",
    cookiesh: "Cookie-uri",
    cookiesp: "Dacă lăsați un comentariu pe site-ul nostru, vi se va oferi posibilitatea de a salva numele, adresa de e-mail și site-ul web în cookie-uri. Acestea sunt doar pentru confortul dvs., astfel încât să nu fie necesar să reintroduceți aceste informații data viitoare.",
    retentionh: "Durata de păstrare a datelor",
    retentionp: "Dacă lăsați un comentariu, comentariul și metadatele sale sunt păstrate pe termen nelimitat. Aceasta permite recunoașterea și aprobarea automată a comentariilor ulterioare, în loc să le lăsăm în coada de moderare.",
    rightsh: "Drepturile dvs. asupra datelor",
    rightsp: "Dacă aveți un cont sau ați lăsat comentarii pe site, puteți solicita un fișier cu toate datele personale pe care le deținem despre dvs., inclusiv cele furnizate de dvs. Puteți solicita și ștergerea datelor personale care vă privesc.",
    addlh: "Informații suplimentare",
    embedh: "Conținut încorporat din alte site-uri",
    embedp: "Articolele de pe acest site pot include conținut încorporat (de exemplu, videoclipuri, imagini, articole etc.). Conținutul încorporat din alte site-uri se comportă exact ca și cum vizitatorul ar fi accesat acel site.",
    paymenth: "Plăți",
    paymentp: "Acceptăm plăți prin PayPal. La procesarea plăților, acestea sunt gestionate de PayPal. Consultați politica de confidențialitate PayPal pentru mai multe informații.",
    copyright: "Toate drepturile rezervate © Cosmina Balu 2026",
  },
  en: {
    title: "Privacy Policy – Cosmina Balu",
    h1: "Privacy Policy",
    s1h: "Who we are",
    s1p: "Our website address is: https://cosminabalu.com",
    s2h: "Use of collected personal data",
    commentsh: "Comments",
    commentsp: "When you leave a comment on our website, the data entered in the comment form, as well as your IP address and browser user agent are collected to help us detect spam comments.",
    mediah: "Media",
    mediap: "If you are a registered user and upload images to the website, we recommend avoiding uploading images with embedded GPS coordinate EXIF data.",
    formsh: "Contact forms",
    formsp: "Data submitted through contact forms is used solely to respond to your requests and is not shared with third parties.",
    cookiesh: "Cookies",
    cookiesp: "If you leave a comment on our site, you may opt-in to saving your name, email address and website in cookies. These are for your convenience so that you do not have to fill in your details again when you leave another comment.",
    retentionh: "How long we retain your data",
    retentionp: "If you leave a comment, the comment and its metadata are retained indefinitely. This allows us to recognize and approve any follow-up comments automatically instead of holding them in a moderation queue.",
    rightsh: "What rights you have over your data",
    rightsp: "If you have an account on this site, or have left comments, you can request to receive an exported file of the personal data we hold about you, including any data you have provided to us. You can also request that we erase any personal data we hold about you.",
    addlh: "Additional information",
    embedh: "Embedded content from other websites",
    embedp: "Articles on this site may include embedded content (e.g. videos, images, articles, etc.). Embedded content from other websites behaves in the exact same way as if the visitor has visited the other website.",
    paymenth: "Payments",
    paymentp: "We accept payments via PayPal. When processing payments, these are handled by PayPal. Please see PayPal's privacy policy for more information.",
    copyright: "All rights reserved © Cosmina Balu 2026",
  },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const c = content[locale as keyof typeof content] ?? content.fr;
  return { title: c.title };
}

export default async function PrivacyPage({ params }: Props) {
  const { locale } = await params;
  const c = content[locale as keyof typeof content] ?? content.fr;

  return (
    <div className="max-w-3xl mx-auto px-4 py-16 prose prose-lg">
      <h1 className="font-serif">{c.h1}</h1>
      <h2 className="font-serif">{c.s1h}</h2>
      <p>{c.s1p}</p>
      <h2 className="font-serif">{c.s2h}</h2>
      <h3>{c.commentsh}</h3>
      <p>{c.commentsp}</p>
      <h3>{c.mediah}</h3>
      <p>{c.mediap}</p>
      <h3>{c.formsh}</h3>
      <p>{c.formsp}</p>
      <h3>{c.cookiesh}</h3>
      <p>{c.cookiesp}</p>
      <h2 className="font-serif">{c.retentionh}</h2>
      <p>{c.retentionp}</p>
      <h2 className="font-serif">{c.rightsh}</h2>
      <p>{c.rightsp}</p>
      <h2 className="font-serif">{c.addlh}</h2>
      <h3>{c.embedh}</h3>
      <p>{c.embedp}</p>
      <h3>{c.paymenth}</h3>
      <p>{c.paymentp}</p>
      <p><strong>{c.copyright}</strong></p>
    </div>
  );
}
