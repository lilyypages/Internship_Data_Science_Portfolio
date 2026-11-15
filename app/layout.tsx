import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { Plus_Jakarta_Sans, Instrument_Serif, Inter } from "next/font/google";

// 1. Setup Font Plus Jakarta Sans (Heading)
const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  weight: ["400", "500", "600", "700", "800"],
});

// 2. Setup Font Instrument Serif (Aksen Italic)
const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-instrument-serif",
  weight: ["400"],
  style: ["normal", "italic"],
});

// 3. Setup Font Inter (Body)
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Data Science Portfolio | UNS 2027",
  description:
    "Exploring data, engineering solutions, and transforming ideas into meaningful impact.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      {/* 
        Tag <head> dan <link> Google Fonts manual sudah DIHAPUS.
        Karena sudah digantikan oleh next/font di atas.
      */}
      <body
        className={`${plusJakarta.variable} ${instrumentSerif.variable} ${inter.variable}`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}