import React from "react";
import { downArrow, upArrow } from "../../data/data";
import { useTheme } from "../../context/themeContext";

const DetailCard = ({ icon, amount, views, ratio }) => {
  const { isDarkMode } = useTheme();

  const arrowDirection = ratio === "0.95" ? downArrow : upArrow;

  return (
    <div
      className={`p-[30px] ${
        isDarkMode ? "bg-[#24303F] text-white" : "bg-white text-gray-800"
      }`}
    >
      <div
        className={`rounded-full inline-block p-2 ${
          isDarkMode ? "bg-[#313D4A] text-white" : "bg-gray-200 text-gray-800"
        }`}
      >
        {icon}
      </div>
      <div className="font-bold text-3xl">{amount}</div>
      <div className="flex items-center justify-between gap-10 mt-2">
        <h6 className={`${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
          Total {views}
        </h6>
        <span
          className={`flex items-center ${
            arrowDirection === downArrow ? "text-blue-500" : "text-green-500"
          }`}
        >
          {ratio}%
          <div
            className={`ml-1 ${
              arrowDirection === downArrow ? "text-blue-500" : "text-green-500"
            }`}
          >
            {arrowDirection}
          </div>
        </span>
      </div>
    </div>
  );
};

export default DetailCard;
