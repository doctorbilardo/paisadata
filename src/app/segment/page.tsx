"use client";
import { useEffect } from "react";
import { Header } from "@/components/header";
import useSendSwitchSectionEvent from "@/tracking/segment/hooks/useSendSwitchSectionEvent";
import { usePathname } from "next/navigation";

export default function Segment() {
  const pathname = usePathname();

  const sendSwitchSectionEvent = useSendSwitchSectionEvent();

  useEffect(() => {
    if (!pathname) return;
    sendSwitchSectionEvent(pathname);
  }, [pathname, sendSwitchSectionEvent]);

  return (
    <main className={`flex min-h-screen flex-col items-center p-24 `}>
      <Header />

      <section className="container h-64 max-w-5xl px-8 my-4">
        <div className="relative flex  flex-col text-center ">
          <h2 className={`text-8xl font-bold text-yellow-400 mb-3 `}>
            SEGMENT
          </h2>
        </div>

        <div className="group rounded-lg border border-transparent px-5 py-4 transition-colorsborder-gray-300 dark:border-lime-500 dark:bg-neutral-800/30">
          <h3 className={`mb-4 text-3xl font-semibold text-center`}>
            ¿Qué es?{" "}
          </h3>
          <p className={`m-0  text-lg   text-white`}>
            Segment es una plataforma que facilita la recopilación, gestión y
            envío de datos entre diferentes herramientas, servicios y destinos.
            Su principal aporte a una aplicación radica en simplificar el manejo
            de datos al centralizar la integración entre diversas fuentes y
            destinos.
          </p>
        </div>

        <div className="px-5 py-8 ">
          <h3 className={`mb-4 text-3xl font-semibold text-center`}>
            Implementación
          </h3>
          <p className={`m-0  text-md text-white`}>
            <code className="font-mono font-bold text-lg text-yellow-400"></code>
          </p>
        </div>
      </section>
    </main>
  );
}
