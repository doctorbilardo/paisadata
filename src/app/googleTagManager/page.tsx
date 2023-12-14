"use client";
import { GeistSans } from "geist/font/sans";
import { Header } from "@/components/header";
import localFont from "next/font/local";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import useSendGTMEvents from "@/tracking/GTM/hooks/useGtmTrackEvents";
const National = localFont({ src: "../fonts/national.otf" });

export default function GoogleTagManager() {
  const pathname = usePathname();
  const { sendGtmUserEvent, sendNameSectionEvent } = useSendGTMEvents();

  useEffect(() => {
    sendGtmUserEvent("German Derbes", "g.derbes@paisanos.io");
    sendNameSectionEvent(pathname);

  }, [pathname, sendGtmUserEvent, sendNameSectionEvent]);
  return (
    <main
      className={`flex min-h-screen flex-col items-center p-24 ${GeistSans.className}`}
    >
      <Header />
      <section className="container h-64 max-w-5xl px-8 my-4">
        <div className="relative flex  flex-col text-center ">
          <h1
            className={`text-8xl font-bold text-yellow-400 mb-3 ${National.className}`}
          >
            Google Tag Manager
          </h1>
        </div>
      </section>
    </main>
  );
}
