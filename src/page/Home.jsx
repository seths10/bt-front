/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { Map } from "../components";
import { Drawer } from "vaul";
import { MdBusAlert, MdClose, MdLocationPin } from "react-icons/md";
import { MdDirectionsBus } from "react-icons/md";
import { Link } from "react-router-dom";

const Home = ({ userProfile }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [deviceInfo, setDeviceInfo] = useState([]);

  const toggleDialog = () => {
    setIsDialogOpen(!isDialogOpen);
  };

  const renderAboutLink = () => {
    if (window.innerWidth <= 640) {
      return (
        <div>
          <img
            src={userProfile?.profilePictureUrl}
            alt={userProfile?.name}
            onClick={toggleDialog}
            className=" border border-white rounded-full w-[2.7rem]"
          />
        </div>
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

  useEffect(() => {
    const fetchDataAndUpdateMarkers = () => {
      fetch("https://bt-server.onrender.com/payloads")
        .then((response) => response.json())
        .then((data) => {
          const lastTwo = data.slice(-2);
          if (
            lastTwo.length === 2 &&
            lastTwo[0].end_device_ids.dev_addr ===
              lastTwo[1].end_device_ids.dev_addr
          ) {
            setDeviceInfo([lastTwo[0]]);
          } else {
            setDeviceInfo(lastTwo.reverse());
          }
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    };
    fetchDataAndUpdateMarkers();
    const interval = setInterval(fetchDataAndUpdateMarkers, 1000);
    return () => clearInterval(interval);
  }, []);

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
                    className="h-5 w-5 text-black"
                    viewBox="0 0 13 16"
                    fill="currentColor"
                  >
                    <MdBusAlert className="w-6 h-6" />
                    {/* <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-4-8h8v2H8v-2z" /> */}
                  </svg>
                </div>
              </div>
            </div>
          </Drawer.Trigger>
          <Drawer.Portal>
            <Drawer.Overlay className="fixed inset-0 bg-black/40" />
            <Drawer.Content className="bg-white flex flex-col overflow-auto max-h-[82vh] rounded-t-[10px] h-[40%] mt-24 fixed bottom-0 left-0 right-0">
              <div className="p-4 bg-white rounded-t-[10px] flex-1">
                <div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-zinc-300 mb-3" />
                <div className="max-w-md mx-auto">
                  <Drawer.Title className="font-bold mb-2">
                    Available Shuttles
                  </Drawer.Title>

                  {deviceInfo?.length === 0 ? (
                    <div className="flex w-full max-w-md px-2 py-6 mb-1 border items-center justify-center rounded-lg bg-gray-800 border-gray-700">
                      <h3 className="text-lg font-medium font-lato text-white">
                        Shuttles Unavailable⌛
                      </h3>
                    </div>
                  ) : (
                    <div>
                      {deviceInfo.map((item, index) => (
                        <div
                          key={index}
                          className="w-full max-w-md p-4 mb-1 border  rounded-lg bg-gray-800 border-gray-700"
                        >
                          <div className="flow-root">
                            <div>
                              <div className="flex items-center space-x-4">
                                <div className="flex-shrink-0">
                                  <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-white text-black">
                                    <MdDirectionsBus className="w-5 h-6" />
                                  </div>
                                </div>
                                <div className="flex-1 min-w-0">
                                  <p className="text-md font-bold truncate text-white">
                                    Shuttle {item.end_device_ids.dev_addr}
                                  </p>
                                  <div className="flex items-center gap-1 text-sm text-gray-400">
                                    <MdLocationPin />
                                    <p>UCC Campus</p>
                                  </div>
                                </div>
                                <div className="inline-flex justify-center border border-dashed border-gray-200 rounded-full px-2 text-white items-center text-base">
                                  {/* <p className="text-xs">ETA:</p> */}
                                  <p className="font-bold text-sm">Aayalolo</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
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
