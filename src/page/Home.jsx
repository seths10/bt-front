import { useState } from "react";
import { Map } from "../components";
import { Drawer } from "vaul";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";

const Home = () => {
  const [selectedLocation, setSelectedLocation] = useState("");
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
          className="font-inter text-white bg-[#222328] px-3 py-1 rounded-md font-medium"
        >
          About
        </Link>
      );
    }
  };

  const handleSelectLocation = (location) => {
    setSelectedLocation(location);
  };

  const handleClearSelection = () => {
    setSelectedLocation("");
  };

  return (
    <section>
      <div>
        <div className="absolute z-50 left-5 top-5">{renderAboutLink()}</div>

        <Map />
        <Drawer.Root shouldScaleBackground>
          <Drawer.Trigger asChild>
            <div>
              <div className="fixed bottom-5 right-5 animate-pulse">
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
                  <Drawer.Title className="font-medium mb-4">
                    Pick Destination
                  </Drawer.Title>
                  <p className="text-zinc-600 mb-2">
                    Lorem ipsum dolor sit amet.
                  </p>

                  <div>
                    <div className="flex justify-between gap-2">
                      <button
                        className={`w-1/4 rounded-full bg-gray-100 text-center py-2 ${
                          selectedLocation === "SRC"
                            ? "text-black"
                            : "text-gray-500"
                        }`}
                        onClick={() => handleSelectLocation("SRC")}
                      >
                        <p className="text-gray-500">SRC</p>
                      </button>
                      <button
                        className={`w-1/4 rounded-full bg-gray-100 text-center py-2 ${
                          selectedLocation === "NLT"
                            ? "text-black"
                            : "text-gray-500"
                        }`}
                        onClick={() => handleSelectLocation("NLT")}
                      >
                        <p className="text-gray-500">NLT</p>
                      </button>
                      <button
                        className={`w-1/4 rounded-full bg-gray-100 text-center py-2 ${
                          selectedLocation === "Old Site"
                            ? "text-black"
                            : "text-gray-500"
                        }`}
                        onClick={() => handleSelectLocation("OldSite")}
                      >
                        <p className="text-gray-500">Old Site</p>
                      </button>
                      <button
                        className={`w-1/4 rounded-full bg-gray-100 text-center py-2 ${
                          selectedLocation === "SWLT"
                            ? "text-black"
                            : "text-gray-500"
                        }`}
                        onClick={() => handleSelectLocation("SWLT")}
                      >
                        <p className="text-gray-500">SWLT</p>
                      </button>
                    </div>

                    <div className="mb-2 mt-3">
                      <button
                        className="text-red-500 text-xs"
                        onClick={handleClearSelection}
                        disabled={!selectedLocation}
                      >
                        Clear Selection
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-zinc-100 border-t border-zinc-200 mt-auto">
                <div className="flex gap-6 justify-end max-w-md mx-auto">
                  <a className="text-xs text-zinc-600 flex items-center gap-0.25">
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
                  <a className="text-xs text-zinc-600 flex items-center gap-0.25">
                    Twitter
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
