import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useTheme } from "../../context/themeContext";
import { priceChartdata } from "../../data/data";

const ProfitChart = () => {
  const { isDarkMode } = useTheme();

  return (
    <div
      className={`${
        isDarkMode ? "bg-[#24303F]" : "bg-white"
      } p-6 sm:w-[30%] rounded-lg shadow-sm`}
    >
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2
            className={`${isDarkMode ? "text-white" : "text-gray-900"} text-xl`}
          >
            Profit <br /> this week
          </h2>
          <button
            className={`${
              isDarkMode
                ? "text-gray-400 hover:text-gray-300"
                : "text-gray-600 hover:text-gray-800"
            } flex items-center gap-1 transition-colors`}
          >
            This Week
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div
              className={`w-2 h-2 rounded-full ${
                isDarkMode ? "bg-blue-500" : "bg-blue-600"
              }`}
            ></div>
            <span
              className={`${
                isDarkMode ? "text-gray-400" : "text-gray-600"
              } text-sm`}
            >
              Sales
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div
              className={`w-2 h-2 rounded-full ${
                isDarkMode ? "bg-cyan-400" : "bg-cyan-600"
              }`}
            ></div>
            <span
              className={`${
                isDarkMode ? "text-gray-400" : "text-gray-600"
              } text-sm`}
            >
              Revenue
            </span>
          </div>
        </div>

        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={priceChartdata}
              margin={{ top: 10, right: 0, left: -20, bottom: 0 }}
              barGap={0}
              barCategoryGap="12%"
            >
              <CartesianGrid
                strokeDasharray="3 3"
                vertical={false}
                stroke={isDarkMode ? "#374151" : "#E5E7EB"}
                opacity={0.5}
              />
              <XAxis
                dataKey="day"
                axisLine={false}
                tickLine={false}
                tick={{
                  fill: isDarkMode ? "#9CA3AF" : "#4B5563",
                  fontSize: 12,
                }}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{
                  fill: isDarkMode ? "#9CA3AF" : "#4B5563",
                  fontSize: 12,
                }}
                domain={[0, 100]}
                ticks={[0, 20, 40, 60, 80, 100]}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: isDarkMode ? "#1F2937" : "#FFFFFF",
                  border: isDarkMode ? "none" : "1px solid #E5E7EB",
                  borderRadius: "6px",
                  color: isDarkMode ? "#fff" : "#111827",
                  boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                }}
                cursor={{
                  fill: isDarkMode
                    ? "rgba(255, 255, 255, 0.05)"
                    : "rgba(0, 0, 0, 0.05)",
                }}
              />
              <Bar
                dataKey="sales"
                stackId="a"
                fill={isDarkMode ? "#3B82F6" : "#2563EB"}
                radius={[0, 0, 0, 0]}
                maxBarSize={35}
              />
              <Bar
                dataKey="revenue"
                stackId="a"
                fill={isDarkMode ? "#22D3EE" : "#0891B2"}
                radius={[4, 4, 0, 0]}
                maxBarSize={35}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default ProfitChart;
