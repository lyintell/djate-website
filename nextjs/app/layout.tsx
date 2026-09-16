import type { Metadata } from "next";
import { Barlow, Barlow_Condensed } from "next/font/google";
import "./globals.css";

const body = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const heading = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Djaté POS — Gérez votre commerce, simplement",
  description:
    "Système de point de vente et de gestion pour boutiques, alimentations et commerces généraux au Mali. Ventes, stock, clients, rapports — sur machine tactile ou logiciel seul.",
  openGraph: {
    title: "Djaté POS — Gérez votre commerce, simplement",
    description:
      "POS et gestion pour les commerces du Mali. Machine tactile ou logiciel seul. Mode Cloud disponible.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${body.variable} ${heading.variable}`}>
      <body>{children}</body>
    </html>
  );
}
