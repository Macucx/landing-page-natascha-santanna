import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";

const editorial = Cormorant_Garamond({ subsets: ["latin"], variable: "--font-editorial", display: "swap" });
const body = DM_Sans({ subsets: ["latin"], variable: "--font-body", display: "swap" });

export const metadata: Metadata = {
  title: "Natascha Sant’ Anna | Tarot, espiritualidade e autoconhecimento",
  description:
    "Conteúdos, reflexões e informações sobre tarot, espiritualidade e autoconhecimento de Natascha Sant’ Anna.",
  openGraph: {
    title: "Natascha Sant’ Anna | Tarot, espiritualidade e autoconhecimento",
    description:
      "Conteúdos, reflexões e informações sobre tarot, espiritualidade e autoconhecimento de Natascha Sant’ Anna.",
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary",
    title: "Natascha Sant’ Anna | Tarot, espiritualidade e autoconhecimento",
    description:
      "Conteúdos, reflexões e informações sobre tarot, espiritualidade e autoconhecimento de Natascha Sant’ Anna.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${editorial.variable} ${body.variable}`}>{children}</body>
    </html>
  );
}
