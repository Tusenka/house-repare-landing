import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title:
    "Алексей Владимирович — монтаж отопления и водоснабжения под ключ в Москве и области",
  description:
    "Профессиональный монтаж отопления, водоснабжения, сантехнические работы и технический надзор. 15 лет опыта, работа по договору, с гарантией. Москва и Московская область.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
