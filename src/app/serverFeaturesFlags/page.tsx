import { Header } from "@/components/header";
import PostHogClient from "@/tracking/postHog/trackPostHogServerEvents";
import localFont from "next/font/local";
import Link from "next/link";

const National = localFont({ src: "../fonts/national.otf" });

export default async function ServerFeaturesFlags() {
  /* Call the features flags */
  const flags = await getServerFeaturesData();

  return (
    <main className={`flex min-h-screen flex-col items-center w-full  `}>
      <Header />
      <section className="container h-64 max-w-5xl px-8 my-4">
        <div className="relative flex justify-center items-center   flex-col text-center ">
          <h2
            className={`text-8xl font-bold text-yellow-400 mb-3 ${National.className}`}
          >
            Server Features flags
          </h2>
          <p
            className={`m-0 max-w-full text-2xl  text-orange-300 text-center mb-10`}
          >
            Las Features flags ayudan a implementar nuevas funciones para los
            usuarios de forma ADMINISTRADA. Si algo sale mal, las flags permiten
            revertirlas sin tener que volver a implementar su aplicación.
            <br />
            <br />
            También ayudan a controlar el acceso a ciertas partes de su
            producto, como mostrar solo funciones pagas a usuarios con una
            suscripción activa o funciones de acceso temprano a usuarios
            inscritos en una versión beta.
          </p>

          <p
            className={`m-0 max-w-full text-2xl  text-amber-300 text-center mb-10`}
          >
            El siguiente link se puede habilitar y deshabilitar desde el panel
            de PostHog
          </p>

          <div className="pt-10">
            {flags["server-flags"] && (
              <Link
                target="_blank"
                href={"https://www.paisanos.io/"}
                className="p-4 bg-green-500 text-black font-bold text-2xl rounded-lg cursor-pointer"
              >
                Ir al site de Paisanos.io
              </Link>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

/*

Con esta funcion async podemos traernos las features flags
que nosotros querramos en componentes de servidor.


*/

async function getServerFeaturesData() {
  const postHog = PostHogClient();
  const flags = await postHog.getAllFlags("g.derbes@paisanos.io");
  return flags;
}
