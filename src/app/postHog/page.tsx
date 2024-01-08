"use client";
import { Header } from "@/components/header";
import { trackPostHogClientEvents } from "@/tracking/postHog/trackPostHogClientEvents";
import localFont from "next/font/local";
import { usePathname } from "next/navigation";
import { useState } from "react";

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
          <button
            onClick={clickEvent}
            className="mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded "
            data-attr="comprar"
          >
            Comprar 🚀
          </button>
        </div>

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
      </section>
    </main>
  );
}
