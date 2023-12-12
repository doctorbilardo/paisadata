

import Image from "next/image";
import { GeistSans } from "geist/font/sans";
import localFont from "next/font/local";
import Link from "next/link";

const National = localFont({ src: "./fonts/national.otf" });

export default function Home() {

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${GeistSans.className}`}
    >
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          <code className="font-mono font-bold text-lg text-yellow-400">
            {"<"}Engineering Team{"/>"}
          </code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/images/paisalogo.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={130}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className="relative flex  flex-col text-center ">
        <h1
          className={`text-8xl font-bold text-lime-500 mb-3 ${National.className}`}
        >
          PAISADATA
        </h1>
        <p className={`m-0 max-w-[30ch]    text-white text-3xl mb-3`}>
          Consigna:
        </p>
        <p className={`m-0 max-w-[30ch]  text-amber-300 text-2xl`}>
          Investigar y setear herramientas de análisis de producto que nos
          permitan poder medir los OKRs o KPIs definidos del producto.
        </p>
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <Link
          href="/segment"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-lime-500 hover:dark:bg-neutral-800/40"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Segment{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm   text-amber-300`}>
            Facilita la recopilación y envío de datos entre diferentes
            herramientas y destinos. Funciona como una capa de abstracción e/
            las fuentes de datos y las herramientas de análisis o marketing.
          </p>
        </Link>

        <Link
          href="/hotjar"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-lime-500 hover:dark:bg-neutral-800/40"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            HotJar{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm   text-amber-300`}>
            Hotjar genera mapas de calor que muestran visualmente las áreas de
            una página web en las que los usuarios hacen clic, tocan o pasan más
            tiempo.
          </p>
        </Link>

        <Link
          href="/amplitude"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-lime-500 hover:dark:bg-neutral-800/40"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Amplitude{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm  text-amber-300`}>
            Amplitude es una herramienta de análisis de datos centrada en el
            comportamiento del usuario en aplicaciones y sitios web.
          </p>
        </Link>

        <Link
          href="/lighthouse"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-lime-500 hover:dark:bg-neutral-800/40"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Lighthouse{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm  text-amber-300`}>
            Permite evaluar y mejorar la calidad general de una página web a
            partir de auditorías automatizadas para medir el rendimiento, la
            accesibilidad, las mejores prácticas de SEO y la progresividad web
            de un sitio.
          </p>
        </Link>
      </div>
    </main>
  );
}
