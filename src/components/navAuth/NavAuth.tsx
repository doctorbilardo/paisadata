/* eslint-disable @next/next/no-img-element */
"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import posthog from "posthog-js";

export default function NavAuth({
  children,
  sessionAuth,
}: {
  children: React.ReactNode;
  sessionAuth: any;
}) {
  const { data: session } = useSession();
  const pathName = usePathname();
  /***
   *
   * Here we need to identify de user
   *
   *
   * **/

  if (sessionAuth) posthog.identify(sessionAuth.user.email);

  if (session) {
    return (
      <div className="flex flex-col items-center p-10">
        <div className=" w-full flex items-center justify-between mb-4 ">
          <div className="flex items-center gap-4">
            <p className="fixed font-bold text-1xl left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/50 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
              {" "}
              Bienvenido {session?.user?.name} 😃!
            </p>
            <img
              className="w-10 h-10 rounded-full"
              src={session?.user?.image || ""}
              alt="Avatar"
            />
          </div>

          <button
            onClick={() => {
              signOut();
            }}
            className="bg-blue-800 mt-6 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded "
          >
            Sign Out
          </button>
        </div>

        {children}
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center items-center">
        <Image
          src="/images/paisalogo.svg"
          alt="Vercel Logo"
          className="dark:invert mx-auto w-50 mb-8"
          width={130}
          height={24}
          priority
        />
        <h2 className="text-xl font-semibold mb-6"> No iniciaste sesion 😲</h2>
        <form className="flex flex-col items-center">
          <button
            type="submit"
            className="w-64 px-4 py-2 bg-blue-500 text-white rounded-lg transition-colors hover:bg-blue-600"
            onClick={() => {
              signIn();
            }}
          >
            Iniciar Sesión
          </button>
        </form>
      </div>
    </div>
  );
}
