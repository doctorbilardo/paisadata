/* eslint-disable @next/next/no-img-element */
import { Dispatch, Fragment, SetStateAction, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";

function Modal({
  isOpen,
  setOpen,
}: {
  isOpen: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) {
  const cancelButtonRef = useRef(null);

  return (
    isOpen && (
      <Transition.Root show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10 bg-black"
          initialFocus={cancelButtonRef}
          onClose={setOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0  bg-opacity-75 transition-opacity bg-slate-800" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-black text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                  <div className="bg-black px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                    <div className="flex items-center justify-center">
                      <img
                        src="./images/copa.svg"
                        alt="Descripción de la imagen"
                      />
                      <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                        <Dialog.Title
                          as="h2"
                          className="text-lg font-semibold leading-2 text-sky-300"
                        >
                          No se olvide que usted es campeón del Mundo
                        </Dialog.Title>
                        <div className="mt-2">
                          <p className="text-md text-gray-200">
                            Además está generando el evento <code className="font-mono font-bold text-lg">gtmwWorldCupChampions</code>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-black px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    <button
                      type="button"
                      className="mt-3 inline-flex w-full border border-yellow-400  justify-center rounded-md border-none bg-yellow-400 px-3 py-2 text-sm font-semibold text-gray-900  sm:mt-0 sm:w-auto"
                      onClick={() => setOpen(!isOpen)}
                      ref={cancelButtonRef}
                    >
                      Cerrar
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    )
  );
}

export default Modal;
