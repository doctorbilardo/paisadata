import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import Script from "next/script";
import renderSnippet from "@/helpers/renderItem";

const National = localFont({ src: "./fonts/national.otf" });

export const metadata: Metadata = {
  title: "Paisa Data",
  description: "Herramientas para el seguimiento de data",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={National.className}>
      <head>
        {/* Favicon */}

        {/*OpenGraph metadata*/}
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="German Derbes Catoni | Front-end dev"
        />
        <meta property="og:description" content="paisadata" />
        <Script
          id="segment-script"
          dangerouslySetInnerHTML={{ __html: renderSnippet() }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
