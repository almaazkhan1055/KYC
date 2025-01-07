import React from "react";
import { Bars3Icon, MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import DropDown from "../dropDown";
import Switch from "react-switch";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { useTheme } from "../../context/themeContext";

const Header = ({ setSidebarOpen }) => {
  const { isDarkMode, toggleTheme } = useTheme();

  const handleSidebarToggle = () => {
    console.log("clicked");
    setSidebarOpen((prev) => !prev);
  };

  return (
    <div
      className={`sticky top-0 z-40 flex h-20 items-center border-b ${
        isDarkMode
          ? "border-[#24303F] bg-[#24303F]"
          : "border-gray-200 bg-white"
      } px-4 shadow-sm sm:px-6 lg:px-8`}
    >
      <button
        type="button"
        onClick={handleSidebarToggle}
        className={`-m-2.5 p-2.5 ${
          isDarkMode ? "text-white" : "text-gray-800"
        } xl:hidden`}
        aria-label="Toggle sidebar"
      >
        <Bars3Icon className="h-5 w-5" aria-hidden="true" />
      </button>

      <div className="flex flex-1 lg:gap-x-6">
        <form action="#" method="GET" className="flex flex-1">
          <label htmlFor="search-field" className="sr-only">
            Search
          </label>
          <div className="relative w-full flex items-center justify-between">
            <MagnifyingGlassIcon
              aria-hidden="true"
              className="cursor-pointer absolute inset-y-0 left-0 h-full w-6 text-gray-500 hover:text-blue-900"
            />
            <input
              id="search-field"
              name="search"
              type="search"
              placeholder="Type to search..."
              className={`block w-[50%] h-[50%] outline-none bg-transparent py-0 pl-10 pr-0 ${
                isDarkMode ? "text-white" : "text-gray-900"
              } sm:text-md`}
            />
            <div
              className={`flex gap-5 items-center justify-between ${
                isDarkMode ? "text-white" : "text-gray-800"
              }`}
            >
              <Switch
                onChange={toggleTheme}
                checked={isDarkMode}
                onColor="#000000"
                offColor="#D1D5DB"
                checkedIcon={
                  <MdLightMode className="h-6 w-6 translate-x-0.5 translate-y-0.5 text-center text-yellow-100" />
                }
                uncheckedIcon={
                  <MdDarkMode className="h-6 w-6 translate-x-0.5 translate-y-0.5 text-center text-yellow-100" />
                }
              />

              <div
                className={`rounded-full inline-block p-2 ${
                  isDarkMode
                    ? "bg-[#313D4A] text-white"
                    : "bg-gray-200 text-gray-800"
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
                  />
                </svg>
              </div>

              <div
                className={`rounded-full inline-block p-2 ${
                  isDarkMode
                    ? "bg-[#313D4A] text-white"
                    : "bg-gray-200 text-gray-800"
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z"
                  />
                </svg>
              </div>

              <div className="flex items-center gap-5">
                <div>
                  <h2
                    className={
                      isDarkMode ? "text-white" : "text-gray-800 leading-none"
                    }
                  >
                    Thomas Anree
                  </h2>
                  <p className="sm:text-[12px] sm:font-medium text-[10px] text-gray-500 text-right">
                    UX Designer
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <img
                    src="https://react-demo.tailadmin.com/assets/user-01-b007ff3f.png"
                    alt="userimg"
                    width={50}
                  />
                  <DropDown />
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Header;
