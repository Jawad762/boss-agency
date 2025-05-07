import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import NavHero from "@/components/Shared/NavHero";
import Header from "@/components/Shared/Header";
import Footer from "@/components/Shared/Footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Boss Agency",
  description: "Boss Agency is a marketing agency that helps businesses grow their online presence."
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
