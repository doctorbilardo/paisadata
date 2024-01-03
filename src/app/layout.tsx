/* eslint-disable @next/next/inline-script-id */
import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import Script from "next/script";
import { GeistSans } from "geist/font/sans";
import {
  PHProvider,

} from "@/components/postHog/PostHogPageview";
import { Suspense } from "react";

const National = localFont({ src: "./fonts/national.otf" });

export const metadata: Metadata = {
  title: "Paisa Data",
  description: "Seteo de herramientas para un enfoque DataDriven",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const estiloDiv = {
    display: "none",
    visibility: "hidden",
  };

  return (
    <html lang="en" className={National.className}>
      <head>
        {/* Favicon */}
        {/*OpenGraph metadata*/}
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="paisadata" />
        <meta property="og:description" content="paisadata" />
        {/*<-- Segment -->*/}
        <Script
          dangerouslySetInnerHTML={{
            __html: `
              !function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","screen","once","off","on","addSourceMiddleware","addIntegrationMiddleware","setAnonymousId","addDestinationMiddleware","register"];analytics.factory=function(e){return function(){if(window.analytics.initialized)return window.analytics[e].apply(window.analytics,arguments);var i=Array.prototype.slice.call(arguments);if(["track","screen","alias","group","page","identify"].indexOf(e)>-1){var c=document.querySelector("link[rel='canonical']");i.push({__t:"bpc",c:c&&c.getAttribute("href")||void 0,p:location.pathname,u:location.href,s:location.search,t:document.title,r:document.referrer})}i.unshift(e);analytics.push(i);return analytics}};for(var i=0;i<analytics.methods.length;i++){var key=analytics.methods[i];analytics[key]=analytics.factory(key)}analytics.load=function(key,i){var t=document.createElement("script");t.type="text/javascript";t.async=!0;t.src="https://cdn.segment.com/analytics.js/v1/" + key + "/analytics.min.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(t,n);analytics._loadOptions=i};analytics._writeKey="hEphLkEaFeigxBW2e08Th3CoybxCT994";;analytics.SNIPPET_VERSION="5.2.0";
              analytics.load("hEphLkEaFeigxBW2e08Th3CoybxCT994");
              analytics.page();
              }}();
              `,
          }}
        />
        {/*<-- Google Tag Manager -->*/}
        <Script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer', 'GTM-T77K6DD6');
              `,
          }}
        />
      </head>
     
      <PHProvider>
        <body className={GeistSans.className}>
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-T77K6DD6"
              height="0"
              width="0"
              style={estiloDiv as React.CSSProperties}
            ></iframe>
          </noscript>
          {children}
        </body>
      </PHProvider>
    </html>
  );
}
