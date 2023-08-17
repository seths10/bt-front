import { MdArrowBack } from "react-icons/md";
import { Link } from "react-router-dom";
import { useState } from "react";

const About = () => {
  const [activeTab, setActiveTab] = useState("about");

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <>
      <section className="max-w-7xl mx-auto">
        <div className="mx-3 mt-5">
          <Link
            to={"/"}
            className="font-inter text-white bg-white border border-gray px-2 py-1 rounded-lg"
          >
            <button className="font-inter text-black rounded-md mb-3">
              <MdArrowBack />
            </button>
          </Link>
          <h1 className="font-extrabold text-[#222328] mt-5 text-[32px]">
            About
          </h1>
        </div>
      </section>

      <div className="max-w-7xl mx-auto mt-5 w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <ul
          className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 rounded-t-lg bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:bg-gray-800"
          id="defaultTab"
          role="tablist"
        >
          <li className="mr-2">
            <button
              id="about-tab"
              onClick={() => handleTabClick("about")}
              type="button"
              role="tab"
              aria-controls="about"
              aria-selected={activeTab === "about"}
              className={`inline-block p-4 ${
                activeTab === "about"
                  ? "text-blue-600 rounded-tl-lg hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-blue-500"
                  : "hover:text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-gray-300"
              }`}
            >
              About
            </button>
          </li>
          <li className="mr-2">
            <button
              id="services-tab"
              onClick={() => handleTabClick("services")}
              type="button"
              role="tab"
              aria-controls="services"
              aria-selected={activeTab === "services"}
              className={`inline-block p-4 ${
                activeTab === "services"
                  ? "text-blue-600 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                  : "hover:text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-gray-300"
              }`}
            >
              Services
            </button>
          </li>
          <li className="mr-2">
            <button
              id="statistics-tab"
              onClick={() => handleTabClick("statistics")}
              type="button"
              role="tab"
              aria-controls="statistics"
              aria-selected={activeTab === "statistics"}
              className={`inline-block p-4 ${
                activeTab === "statistics"
                  ? "text-blue-600 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                  : "hover:text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-gray-300"
              }`}
            >
              Facts
            </button>
          </li>
        </ul>
        <div id="defaultTabContent">
          <div
            className={` p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800 ${
              activeTab === "about" ? "block" : "hidden"
            }`}
            id="about"
            role="tabpanel"
            aria-labelledby="about-tab"
          >
            <h2 className="mb-3 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
              Final Year Project
            </h2>
            <p className="mb-3 text-gray-500 dark:text-gray-400">
              This was developed to provide proper management of time for
              students on campus
            </p>
            <a
              href="#"
              className="inline-flex items-center font-medium text-blue-600 hover:text-blue-800 dark:text-blue-500 dark:hover:text-blue-700"
            >
              Learn more
              <svg
                className="w-2.5 h-2.5 ml-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
            </a>
          </div>
          <div
            className={` p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800 ${
              activeTab === "services" ? "block" : "hidden"
            }`}
            id="services"
            role="tabpanel"
            aria-labelledby="services-tab"
          >
            <h2 className="mb-5 text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white">
              We show you the location of all available buses
            </h2>
            <ul
              role="list"
              className="space-y-4 text-gray-500 dark:text-gray-400"
            >
              <li className="flex space-x-2 items-center">
                <svg
                  className="flex-shrink-0 w-3.5 h-3.5 text-blue-600 dark:text-blue-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                <span className="leading-tight">
                  Dynamic maps and interaction
                </span>
              </li>
              <li className="flex space-x-2 items-center">
                <svg
                  className="flex-shrink-0 w-3.5 h-3.5 text-blue-600 dark:text-blue-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                <span className="leading-tight">
                  Estimated Time for Arrival
                </span>
              </li>
              <li className="flex space-x-2 items-center">
                <svg
                  className="flex-shrink-0 w-3.5 h-3.5 text-blue-600 dark:text-blue-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                <span className="leading-tight">Nice UI</span>
              </li>
              <li className="flex space-x-2 items-center">
                <svg
                  className="flex-shrink-0 w-3.5 h-3.5 text-blue-600 dark:text-blue-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                <span className="leading-tight">Easy to Use</span>
              </li>
            </ul>
          </div>
          <div
            className={` p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800 ${
              activeTab === "statistics" ? "block" : "hidden"
            }`}
            id="statistics"
            role="tabpanel"
            aria-labelledby="statistics-tab"
          >
            <dl className="grid max-w-screen-xl grid-cols-2 gap-8 p-4 mx-auto text-gray-900 sm:grid-cols-3 xl:grid-cols-6 dark:text-white sm:p-8">
              <div className="flex flex-col">
                <dt className="mb-2 text-3xl font-extrabold">2</dt>
                <dd className="text-gray-500 dark:text-gray-400">Developers</dd>
              </div>
              <div className="flex flex-col">
                <dt className="mb-2 text-3xl font-extrabold">100+</dt>
                <dd className="text-gray-500 dark:text-gray-400">
                  Students have used this
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="mb-2 text-3xl font-extrabold">0</dt>
                <dd className="text-gray-500 dark:text-gray-400">Issues</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
