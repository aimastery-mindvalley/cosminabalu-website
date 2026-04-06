import type { Metadata } from "next";
import { Fira_Sans } from "next/font/google";
import "./globals.css";

const firaSans = Fira_Sans({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-fira-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://cosminabalu.com"),
  title: {
    default: "Cosmina Balu – Trouve Ta Voix",
    template: "%s | Cosmina Balu",
  },
  description: "Coach de transformation personnelle et spirituelle à Montréal.",
  openGraph: {
    type: "website",
    siteName: "Cosmina Balu",
    images: [{ url: "/images/og-default.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className={firaSans.variable}>
        {children}
      </body>
    </html>
  );
}
