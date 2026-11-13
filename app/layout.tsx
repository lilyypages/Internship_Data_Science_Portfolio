import type { Metadata } from "next";
import "./globals.css";

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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&family=Playfair+Display:ital,wght@1,500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}