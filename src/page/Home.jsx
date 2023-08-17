import { useState } from "react";
import { Map } from "../components";
import { Drawer } from "vaul";
import { MdClose } from "react-icons/md";
import { MdDirectionsBus } from "react-icons/md";
import { Link } from "react-router-dom";

const Home = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const toggleDialog = () => {
    setIsDialogOpen(!isDialogOpen);
  };

  const renderAboutLink = () => {
    if (window.innerWidth <= 640) {
      return (
        <button
          onClick={toggleDialog}
          className="font-bold rounded-lg h-8 shadow-md text-black bg-white px-3 py-4 flex items-center"
        >
          ?
        </button>
      );
    } else {
      return (
        <Link
          to={"/about"}
          className="font-inter text-black bg-white px-3 py-1 rounded-md font-medium"
        >
          About
        </Link>
      );
    }
  };

  return (
    <section>
      <div>
        <div className="absolute z-50 left-4 top-[1.7rem]">
          {renderAboutLink()}
        </div>

        <Map />
        <Drawer.Root shouldScaleBackground>
          <Drawer.Trigger asChild>
            <div>
              <div className="fixed bottom-9 right-3 border border-gray-200 shadow-lg rounded-full">
                <div className="bg-white rounded-full p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-gray-700"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.999 15.333a5.333 5.333 0 110-10.666 5.333 5.333 0 010 10.666zm0-8a2.666 2.666 0 100 5.333 2.666 2.666 0 000-5.333zM10 2a8 8 0 100 16 8 8 0 000-16z" />
                  </svg>
                </div>
              </div>
            </div>
          </Drawer.Trigger>
          <Drawer.Portal>
            <Drawer.Overlay className="fixed inset-0 bg-black/40" />
            <Drawer.Content className="bg-zinc-100 flex flex-col rounded-t-[10px] h-[40%] mt-24 fixed bottom-0 left-0 right-0">
              <div className="p-4 bg-white rounded-t-[10px] flex-1">
                <div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-zinc-300 mb-8" />
                <div className="max-w-md mx-auto">
                  <Drawer.Title className="font-medium mb-2">
                    Nearest Shuttle
                  </Drawer.Title>

                  <div className="w-full max-w-md p-4 bg-white border border-gray-100 rounded-lg dark:bg-gray-800 dark:border-gray-700">
                    <div className="flow-root">
                      <ul
                        role="list"
                        className="divide-y divide-gray-200 dark:divide-gray-700"
                      >
                        <li>
                          <div className="flex items-center space-x-4">
                            <div className="flex-shrink-0">
                              <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-black text-white">
                                <MdDirectionsBus className="w-5 h-6" />
                              </div>
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-md font-bold text-gray-900 truncate dark:text-white">
                                Aayalolo B1
                              </p>
                              <p className="text-sm text-gray-400">
                                Science Shuttle
                              </p>
                            </div>
                            <div className="inline-flex border border-gray-200 rounded-full px-2 text-blue-700 items-center text-base   dark:text-white">
                              <p className="font-s"> 5m 13s</p>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-zinc-100 border-t border-zinc-200 mt-auto">
                <div className="flex gap-6 justify-end max-w-md mx-auto">
                  <a
                    href="https://github.com/IoTDevLab/Bus-Tracking-System-2023"
                    className="text-xs text-zinc-600 flex items-center gap-0.25"
                  >
                    GitHub
                    <svg
                      fill="none"
                      height="16"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="16"
                      aria-hidden="true"
                      className="w-3 h-3 ml-1"
                    >
                      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"></path>
                      <path d="M15 3h6v6"></path>
                      <path d="M10 14L21 3"></path>
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="text-xs text-zinc-600 flex items-center gap-0.25"
                  >
                    Home
                    <svg
                      fill="none"
                      height="16"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="16"
                      aria-hidden="true"
                      className="w-3 h-3 ml-1"
                    >
                      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"></path>
                      <path d="M15 3h6v6"></path>
                      <path d="M10 14L21 3"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </Drawer.Content>
          </Drawer.Portal>
        </Drawer.Root>

        {isDialogOpen && (
          <div
            onClick={toggleDialog}
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
          >
            <div className="bg-white rounded-xl px-4 pb-3">
              <div className="flex justify-end">
                <button
                  onClick={toggleDialog}
                  className="font-inter text-black mt-2 rounded-md block mb-2"
                >
                  <MdClose className="rounded-md text-gray-400" />
                </button>
              </div>
              <p className="whitespace-wrap">Learn more about our app</p>
              <div className="flex justify-center mt-3 mb-2">
                <Link
                  to={"/about"}
                  className="font-inter text-white bg-[#222328] px-3 py-1 rounded-lg"
                  onClick={toggleDialog}
                >
                  About
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Home;
