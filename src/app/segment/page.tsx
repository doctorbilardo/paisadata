/* eslint-disable @next/next/no-img-element */
"use client";
import { useEffect } from "react";
import { Header } from "@/components/header";
import useSendSwitchSectionEvent from "@/tracking/segment/hooks/useSendSwitchSectionEvent";
import { usePathname } from "next/navigation";
import useSegmentIdentifyUser from "@/tracking/segment/hooks/useSegmentIdentifyUser";


export default function Segment() {
  const pathname = usePathname();

  const sendSwitchSectionEvent = useSendSwitchSectionEvent();
  const identifySegmentEvent = useSegmentIdentifyUser();


  useEffect(() => {
    if (!pathname) return;
    sendSwitchSectionEvent(pathname);
    identifySegmentEvent();
  }, [identifySegmentEvent, pathname, sendSwitchSectionEvent]);



  return (
    <main className={`flex min-h-screen flex-col items-center p-2 `}>
      <Header />

      <section className="container h-64 max-w-5xl px-8 my-4 ">
        <div className="relative flex  flex-col text-center ">
          <h2
            className={`text-8xl sm:text-center font-bold text-yellow-400 mb-3  `}
          >
            SEGMENT
          </h2>
        </div>

        <div className="group rounded-lg border border-transparent px-5 py-4 transition-colorsborder-gray-300 dark:border-lime-500 dark:bg-neutral-800/30">
          <h3 className={`mb-4 text-3xl font-semibold text-center sm:mb-0`}>
            ¿Qué es?{" "}
          </h3>
          <p className={`m-0  text-lg   text-white sm:text-center`}>
            Segment es una plataforma que facilita la recopilación, gestión y
            envío de datos entre diferentes herramientas, servicios y destinos.
            Su principal aporte a una aplicación radica en simplificar el manejo
            de datos al centralizar la integración entre diversas fuentes y
            destinos.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center max-w-screen-lg mx-auto mt-4">
          <div className="w-full md:w-1/2 ">
            {/* División izquierda para el texto */}
            <p className={`m-0  text-lg   text-white pr-4 pb-6 `}>
              En este ejemplo se está utilizando la función
              analytics.indentify() para registrar al usuario conectado.El
              primer parámetro es el nombre del evento, en este caso
              identify_user_german, y el segundo sería un objeto, en este caso
              con las props name e email.
            </p>
          </div>
          <div className="w-full md:w-1/2 p-0">
            <img
              src="./images/event.png"
              alt="Descripción de la imagen"
              className=" w-full h-auto"
            />
          </div>
        </div>

        <div className="max-w-screen-lg mx-auto mt-6 mb-2">
          <p className={`m-0  text-lg   text-white pb-4 `}>
            Y asi se vería en el dashboard de Segement en donde hemos conectado
            la app, en este caso el http://localhost:3000/
          </p>
          <img
            src="./images/segment-dash.png"
            alt="Descripción de la imagen"
            className="w-auto h-auto max-w-full max-h-full rounded-lg"
          />
        </div>

        <div className="group rounded-lg border border-transparent px-5 py-2 ">
          <h3 className={`mb-4 text-3xl font-semibold text-center sm:mb-0`}>
            Implementacion{" "}
          </h3>
          <p className={`m-0  text-lg   text-white sm:text-center p-4`}>
            <a
              href="https://github.com/doctorbilardo/paisadata"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-black  hover:dark:border-lime-500"
            >
              {" "}
              <code className="transition-transform group-hover:translate-x-1 motion-reduce:transform-none font-mono font-bold text-lg text-yellow-400">
                Repositorio con implementacion en Next js
              </code>
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}
