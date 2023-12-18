/* eslint-disable @next/next/no-img-element */
"use client";
import { Header } from "@/components/header";
import localFont from "next/font/local";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import useSendGTMEvents from "@/tracking/GTM/hooks/useGtmTrackEvents";
import { Modal } from "@/components/modal";
const National = localFont({ src: "../fonts/national.otf" });

export default function GoogleTagManager() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  /********************************************* /
  /********************GTM********************** /
  /********************************************* /

  /**
   * @method useSendGTMEvents It is a factory of functions that serve to track GTM events.
   * @return functions to track GTM events.
   */
  const { sendGtmUserEvent, sendNameSectionEvent, sendChampionsEvent } =
    useSendGTMEvents();

  /**
   * In the following useEffect I am using events sendGtmUserEvent, sendNameSectionEvent previously extracted
   */

  useEffect(() => {
    sendGtmUserEvent("German Derbes", "g.derbes@paisanos.io");
    sendNameSectionEvent(pathname);
  }, [pathname, sendChampionsEvent, sendGtmUserEvent, sendNameSectionEvent]);

  /*********************************************/
  /********************GTM**********************/
  /*********************************************/

  return (
    <>
      <main className={`flex min-h-screen flex-col items-center p-24 `}>
        <Header />
        <section className="container h-64 max-w-5xl px-8 my-4">
          <div className="relative flex  flex-col text-center ">
            <h2
              className={`text-8xl font-bold text-yellow-400 mb-3 ${National.className}`}
            >
              Google Tag Manager
            </h2>
          </div>
          <div className="group rounded-lg border border-transparent px-5 py-4 transition-colorsborder-gray-300 dark:border-lime-500 dark:bg-neutral-800/30">
            <h3 className={`mb-4 text-3xl font-semibold text-center sm:mb-0`}>
              ¿Qué es?{" "}
            </h3>
            <p className={`m-0 text-lg   text-white sm:text-center`}>
              Google Tag Manager es una plataforma de gestión de etiquetas, es
              decir, fragmentos de código que se insertan en un sitio web o
              mobile y que nos permiten recopilar datos y enviar información a
              herramientas de análisis, de publicidad , etc.
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center max-w-screen-lg mx-auto mt-4">
            <div className="w-full md:w-1/2 p-0">
              <img
                src="./images/tagManagerConfig.png"
                alt="Descripción de la imagen"
                className=" w-full h-auto rounded-lg "
              />
            </div>
            <div className="w-full md:w-1/2 ">
              {/* División izquierda para el texto */}
              <p className={`m-0  text-lg   text-white pl-4 pb-6 `}>
                Para poder utilizar GTM, es necesario crear un proyecto en la
                consola y una vez creado, en la sección **Configuración del
                contenedor** **Instrucciones de instalación** encontraremos el
                script de iniciacion que debemos colocar dentro de la etiqueta
                **head** de nuestro documento. Si es un proyecto construido con
                react native por ej, la configuración de GTM en el archivo
                AndroidManifest.xml
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center max-w-screen-lg mx-auto mt-4">
            <div className="w-full md:w-1/2 ">
              {/* División izquierda para el texto */}
              <p className={`m-0  text-lg   text-white pr-4 pb-6 `}>
                Para poder utilizar GTM, es necesario crear un proyecto en la
                consola y una vez creado, en la sección **Configuración del
                contenedor** **Instrucciones de instalación** encontraremos el
                script de iniciacion que debemos colocar dentro de la etiqueta
                **head** de nuestro documento. Si es un proyecto construido con
                react native por ej, la configuración de GTM en el archivo
                AndroidManifest.xml
              </p>
            </div>
            <div className="w-full md:w-1/2 p-0 text-center">
              <button
                onClick={() => {
                  {
                    /*********************************************/
                    /********************GTM**********************/
                    /*********************************************/
                    /*
                    Here we are running the gtmwWorldCupChampions event through sendChampionsEvent
                    
                    */
                  }
                  setIsOpen(true), sendChampionsEvent(pathname);
                }}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Generar un evento
              </button>
            </div>
          </div>
        </section>
      </main>
      <Modal isOpen={isOpen} setOpen={setIsOpen} />
    </>
  );
}
