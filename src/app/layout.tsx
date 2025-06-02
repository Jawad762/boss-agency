import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import NavHero from "@/components/Shared/NavHero";
import Header from "@/components/Shared/Header";
import Footer from "@/components/Shared/Footer";
import { DOMAIN } from "@/constants";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Boss Agency | Digital Marketing & Branding",
  description: "Boss Agency is a full-service marketing agency specializing in branding and digital marketing strategies that drive growth and online presence.",
  keywords: "digital marketing, branding, social media marketing, SEO, boss agency",
  metadataBase: new URL(DOMAIN),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Boss Agency | Digital Marketing & Branding",
    description: "Boss Agency is a full-service marketing agency specializing in branding and digital marketing strategies that drive growth and online presence.",
    url: DOMAIN,
    siteName: 'Boss Agency',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'Boss Agency - Digital Marketing & Branding',
      },
    ],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full w-full">
      <head>
        <link rel="icon" href="/site-icon.png" />
      </head>
      <body
        className={`${poppins.variable} antialiased h-full w-full`}
      >
        <Header/>
        <main className="min-h-full w-full">
          <NavHero/>
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}
