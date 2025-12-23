import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FEESOS | Foundation for Equal Employment and Social Services",
  description: "FEESOS is a nonprofit organization dedicated to raising awareness and funds for organizations and individuals in Africa. Supporting education, employment, and social services.",
  keywords: ["nonprofit", "Africa", "charity", "education", "employment", "social services", "donation", "FEESOS"],
  authors: [{ name: "FEESOS" }],
  openGraph: {
    title: "FEESOS | Rising Together",
    description: "Empowering communities across Africa through sustainable development, education, and social services.",
    type: "website",
    locale: "en_US",
    alternateLocale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: "FEESOS | Rising Together",
    description: "Empowering communities across Africa through sustainable development, education, and social services.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
