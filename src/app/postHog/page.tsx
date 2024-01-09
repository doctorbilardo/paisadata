/* eslint-disable react/no-unescaped-entities */
"use client";
import { Header } from "@/components/header";
import { trackPostHogClientEvents } from "@/tracking/postHog/trackPostHogClientEvents";
import localFont from "next/font/local";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useFeatureFlagEnabled } from "posthog-js/react";

const National = localFont({ src: "../fonts/national.otf" });

export default function PostHog() {
  const [email, setEmail] = useState<string>("");
  const pathname = usePathname();

  /********************************************* /
  /**************** POST HOG  ****************** /
  /********************************************* /
  /**
   * @method clickEvent
   * @return register a posthog event
   */
  const clickEvent = () => {
    trackPostHogClientEvents("click", {
      clickedButton: true,
    });
  };

  trackPostHogClientEvents("postHog_VISITED", {
    visitedSegment: pathname,
  });

  /**
   * @method clickEvent
   * @return register an email for user
   */
  const hanldeSubmitEventAndEmail = () => {
    trackPostHogClientEvents("clickForm", {
      emailRegistered: email,
    });
  };
  const paisadataFlagIsEnabled = useFeatureFlagEnabled("posts-paisatada");
  const browserIsChromeFlagIsEnabled = useFeatureFlagEnabled("chrome");

  return (
    <main className={`flex min-h-screen flex-col items-center w-full  `}>
      <Header />
      <section className="container h-64 max-w-5xl px-8 my-4">
        <div className="relative flex justify-center items-center   flex-col text-center ">
          <h2
            className={`text-8xl font-bold text-yellow-400 mb-3 ${National.className}`}
          >
            PostHog
          </h2>
          <a
            className="text-green-500 font-mono  font-bold p-5 mb-4"
            href="https://posthog.com/"
            target="_blank"
          >
            Visitar documentación
          </a>
          <h2
            className={`text-5xl font-bold text-yellow-400 mb-3 ${National.className}`}
          >
            Ventajas
          </h2>
          <p className={`mb-0 p-8 text-2xl  text-white-300`}>
            <span className="text-amber-400">
              {" "}
              Capacidad de autohospedaje:{" "}
            </span>
            <br />
            Ofrece la opción de autohospedaje, lo que brinda a las empresas un
            mayor control sobre sus datos y les permite adaptar el software a
            sus necesidades específicas de seguridad y cumplimiento.Por tanto,
            puedes instalar y ejecutar la plataforma en tu propia
            infraestructura, en lugar de depender de la infraestructura
            proporcionada por PostHog. Esto tiene varios beneficios:
          </p>

          <p className={`mb-0 p-8 text-2xl  text-white-300`}>
            <span className="text-amber-400">
              {" "}
              Facilidad de implementación:{" "}
            </span>
            <br />
            La implementación de PostHog es relativamente sencilla y puede
            integrarse fácilmente en aplicaciones existentes con diferentes
            bibliotecas y frameworks.
          </p>

          <div className="border-t-2 order-gray-400 border w-full my-10"></div>

          <h2
            className={`text-5xl font-bold text-yellow-400 mb-3 ${National.className}`}
          >
            Acciones
          </h2>

          <p className={`mb-0 p-8 text-2xl  text-white-300  text-center`}>
            El Button <span className="text-amber-400">Comprar</span> contiene
            un action capturada con el atributo [data-attr="comprar"]
            <br />
            <br />
            Las acciones son una colección de eventos que se ajustan a tipos de
            eventos y filtros que representan un comportamiento único. Se crean
            mediante una combinación de eventos de captura automática, eventos
            personalizados o páginas vistas, junto con filtros. Luego se pueden
            analizar en información valiosa , paneles de control y más.
          </p>

          <button
            onClick={clickEvent}
            className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded "
            data-attr="comprar"
          >
            Comprar 🚀
          </button>
          <a
            className="text-green-500 font-mono  font-bold p-5"
            href="https://posthog.com/docs/data/actions"
            target="_blank"
          >
            Visitar documentación
          </a>
        </div>

        <div className="border-t-2 order-gray-400 border w-full my-10"></div>

        <h2
          className={`text-center text-5xl font-bold text-yellow-400 mb-3 ${National.className}`}
        >
          Features flags
        </h2>

        <p className={`mb-0 p-8 text-2xl  text-white-300  text-center`}>
          Las Features flags ayudan a implementar nuevas funciones para los
          usuarios de forma ADMINISTRADA. Si algo sale mal, las flags permiten
          revertirlas sin tener que volver a implementar su aplicación.
          <br />
          <br />
          También ayudan a controlar el acceso a ciertas partes de su producto,
          como mostrar solo funciones pagas a usuarios con una suscripción
          activa o funciones de acceso temprano a usuarios inscritos en una
          versión beta.
        </p>

        {paisadataFlagIsEnabled && (
          <div className="flex items-center justify-center">
            <form
              className="flex items-center space-x-4 mt-12"
              onSubmit={hanldeSubmitEventAndEmail}
            >
              <input
                type="email"
                placeholder="Correo electrónico"
                className="border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:border-blue-500 text-black"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />

              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out"
              >
                Suscribirse
              </button>
            </form>
          </div>
        )}

        {browserIsChromeFlagIsEnabled && (
          <div className="flex items-center justify-center flex-col mb-12">
            <p
              className={`m-10 p-8 text-2xl border-gray-400 border rounded-lg  text-white-300 max-w-md text-center mb-10`}
            >
              Este cartel SOLO aparecerá si el usuario se encuentra utilizando
              el navegador <span className="text-amber-400">Chrome</span>
            </p>

            <a
              className="text-green-500 font-mono font-bold p-5 mb-10 text-center"
              href="https://posthog.com/docs/feature-flags"
              target="_blank"
            >
              Visitar documentación
            </a>
          </div>
        )}

        <div className="border-t-2 order-gray-400 border w-full my-10"></div>
      </section>
    </main>
  );
}
