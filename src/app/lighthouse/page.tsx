import { GeistSans } from "geist/font/sans";
import { Header } from "@/components/header";
import localFont from "next/font/local";

const National = localFont({ src: "../fonts/national.otf" });
 

export default function LightHouse() {
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
            💡LIGHTHOUSE
          </h1>
        </div>
      </section>
    </main>
  );
}
