"use client";
import React, { useState } from "react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <aside
        id="default-sidebar"
        className={`fixed top-0 z-40 w-64 h-screen transition-transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-slate-800 ">
          <ul className="space-y-2 font-medium">
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-white  rounded-lg group "
              >
                <svg
                  className="w-8 h-8 text-gray-200 dark:text-white "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4h-4Z"
                    clipRule="evenodd"
                  />
                </svg>

                <span className="flex-1 ms-3  whitespace-nowrap">
                  Hello, User
                </span>

                <span className="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium rounded-full">
                  <svg
                    className="w-7 h-7 text-gray-200 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.133 12.632v-1.8a5.406 5.406 0 0 0-4.154-5.262.955.955 0 0 0 .021-.106V3.1a1 1 0 0 0-2 0v2.364a.955.955 0 0 0 .021.106 5.406 5.406 0 0 0-4.154 5.262v1.8C6.867 15.018 5 15.614 5 16.807 5 17.4 5 18 5.538 18h12.924C19 18 19 17.4 19 16.807c0-1.193-1.867-1.789-1.867-4.175ZM8.823 19a3.453 3.453 0 0 0 6.354 0H8.823Z" />
                  </svg>
                </span>
              </a>
            </li>
            <hr className="w-full " />
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-white  rounded-lg group bg-gray-900"
              >
                <svg
                  className="w-6 h-6 text-gray-200 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5.983C3 4.888 3.895 4 5 4h14c1.105 0 2 .888 2 1.983v8.923a1.992 1.992 0 0 1-2 1.983h-6.6l-2.867 2.7c-.955.899-2.533.228-2.533-1.08v-1.62H5c-1.105 0-2-.888-2-1.983V5.983Zm5.706 3.809a1 1 0 1 0-1.412 1.417 1 1 0 1 0 1.412-1.417Zm2.585.002a1 1 0 1 1 .003 1.414 1 1 0 0 1-.003-1.414Zm5.415-.002a1 1 0 1 0-1.412 1.417 1 1 0 1 0 1.412-1.417Z"
                    clipRule="evenodd"
                  />
                </svg>

                <span className="flex-1 ms-3 whitespace-nowrap">
                  Discussion Forum
                </span>

                <span className="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium   rounded-full">
                  <svg
                    className="w-4 h-4 text-gray-200 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 9-7 7-7-7"
                    />
                  </svg>
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-white hover:text-gray-200 rounded-lg group "
              >
                <svg
                  className="w-6 h-6 text-gray-200 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13.6 16.733c.234.269.548.456.895.534a1.4 1.4 0 0 0 1.75-.762c.172-.615-.446-1.287-1.242-1.481-.796-.194-1.41-.861-1.241-1.481a1.4 1.4 0 0 1 1.75-.762c.343.077.654.26.888.524m-1.358 4.017v.617m0-5.939v.725M4 15v4m3-6v6M6 8.5 10.5 5 14 7.5 18 4m0 0h-3.5M18 4v3m2 8a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"
                  />
                </svg>

                <span className="flex-1 ms-3 whitespace-nowrap">
                  Market Stories
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-white hover:text-gray-200 rounded-lg group "
              >
                <span className="flex-1  ms-9 whitespace-nowrap">
                  Sentiment
                </span>
              </a>
              <a
                href="#"
                className="flex items-center p-2 text-white hover:text-gray-200 rounded-lg group "
              >
                <span className="flex-1  ms-9 whitespace-nowrap">Market</span>
              </a>
              <a
                href="#"
                className="flex items-center p-2 text-white hover:text-gray-200 rounded-lg group "
              >
                <span className="flex-1  ms-9 whitespace-nowrap">Sector</span>
              </a>
              <a
                href="#"
                className="flex items-center p-2 text-white hover:text-gray-200 rounded-lg group "
              >
                <span className="flex-1  ms-9 whitespace-nowrap">
                  Watchlist
                </span>
              </a>
              <a
                href="#"
                className="flex items-center p-2 text-white hover:text-gray-200 rounded-lg group "
              >
                <span className="flex-1  ms-9 whitespace-nowrap">Events</span>
              </a>
              <a
                href="#"
                className="flex items-center p-2 text-white hover:text-gray-200 rounded-lg group "
              >
                <span className="flex-1  ms-9 whitespace-nowrap">
                  News/Interview
                </span>
              </a>
            </li>
          </ul>
        </div>
        <button
          onClick={toggleSidebar}
          className={`toggle absolute top-[40%] right-[-20px] transform -translate-y-1/2 w-6 h-20 bg-gray-800 cursor-pointer border-4 border-slate-800  ${
            isOpen ? "active" : ""
          }`}
        >
          <span
            className={`toggle-icon text-purple-600 text-xl ${
              isOpen ? "active" : ""
            }`}
          >
            {isOpen ? (
              <svg
                className="w-6 h-6 text-gray-200 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m9 5 7 7-7 7"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6 text-gray-200 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m9 5 7 7-7 7"
                />
              </svg>
            )}
          </span>
        </button>
      </aside>
    </div>
  );
};

export default Sidebar;
