import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { navigation } from "../../data/data";
import { useTheme } from "../../context/themeContext";

const Sidebar = ({ sidebarOpen }) => {
  const navigate = useNavigate();
  const { isDarkMode } = useTheme();
  const [activeItem, setActiveItem] = useState("Dashboard");
  const [activeSubItem, setActiveSubItem] = useState("eCommerce");
  const [expandedItems, setExpandedItems] = useState({ Dashboard: true });

  const toggleExpand = (itemName) => {
    setExpandedItems((prev) => ({
      ...prev,
      [itemName]: !prev[itemName],
    }));
    setActiveItem(itemName);

    const item = navigation.find((item) => item.name === itemName);
    if (!item.subItems?.length) {
      navigate(`/${itemName.toLowerCase().replace(/\s+/g, "-")}`);
    }
  };

  const handleSubItemClick = (itemName, subItemName) => {
    setActiveItem(itemName);
    setActiveSubItem(subItemName);
    navigate(
      `/${itemName.toLowerCase().replace(/\s+/g, "-")}/${subItemName
        .toLowerCase()
        .replace(/\s+/g, "-")}`
    );
  };

  return (
    <div
      className={`${
        sidebarOpen ? "block" : "hidden"
      } xl:fixed xl:flex xl:w-72 xl:flex-col h-full ${
        isDarkMode ? "bg-[#24303F]" : "bg-white"
      }`}
    >
      <div className="p-5 pl-8 max-h-screen overflow-y-auto no-scrollbar">
        <div className="flex grow flex-col gap-y-5">
          <div className="flex h-16 shrink-0 items-center mb-10">
            {isDarkMode ? (
              <img
                alt="Your Company"
                src="https://react-demo.tailadmin.com/assets/logo-162ee3ec.svg"
                className="h-8 w-auto"
              />
            ) : (
              <img
                src="https://tailadmin.com/images/logo/logo-light.svg"
                alt="logo"
              />
            )}
          </div>
          <nav className="flex flex-1 flex-col">
            <ul
              role="list"
              className={`flex flex-1 flex-col gap-y-7 ${
                isDarkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              <li>
                <div
                  className={`text-sm font-semibold ${
                    isDarkMode ? "text-gray-400" : "text-gray-500"
                  } mb-3`}
                >
                  MENU
                </div>
                <ul role="list" className="-mx-2 space-y-1">
                  {navigation?.map((item) => (
                    <li key={item.name} className="relative">
                      <div
                        onClick={() => toggleExpand(item.name)}
                        className={`
                          group flex justify-between cursor-pointer gap-x-3 rounded-md py-2 px-5 text-lg font-semibold
                          ${
                            activeItem === item.name
                              ? isDarkMode
                                ? "bg-gray-800 text-white"
                                : "bg-gray-100 text-gray-900"
                              : isDarkMode
                              ? "text-gray-400 hover:bg-gray-800 hover:text-gray-300"
                              : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                          }
                        `}
                      >
                        <div className="flex items-center gap-3">
                          <item.icon
                            aria-hidden="true"
                            className="h-6 w-6 shrink-0"
                          />
                          {item.name}
                        </div>
                        {item?.subItems?.length > 0 && (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className={`size-6 transition-transform duration-200 ${
                              expandedItems[item.name] ? "rotate-180" : ""
                            }`}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="m19.5 8.25-7.5 7.5-7.5-7.5"
                            />
                          </svg>
                        )}
                      </div>
                      {item.subItems?.length > 0 &&
                        expandedItems[item.name] && (
                          <div className="mt-1 space-y-1">
                            {item.subItems.map((subItem) => (
                              <div
                                key={subItem.name}
                                onClick={() =>
                                  handleSubItemClick(item.name, subItem.name)
                                }
                                className={`flex items-center justify-between cursor-pointer px-11 py-2 text-lg font-semibold 
                                  ${
                                    activeItem === item.name &&
                                    activeSubItem === subItem.name
                                      ? isDarkMode
                                        ? "text-white"
                                        : "text-gray-900"
                                      : isDarkMode
                                      ? "text-gray-400 hover:text-gray-300"
                                      : "text-gray-600 hover:text-gray-900"
                                  }`}
                              >
                                {subItem.name}
                                {subItem.pro && (
                                  <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded">
                                    Pro
                                  </span>
                                )}
                              </div>
                            ))}
                          </div>
                        )}
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
