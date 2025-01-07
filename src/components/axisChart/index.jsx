import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { axisChartdata, period } from "../../data/data";
import { useTheme } from "../../context/themeContext";

const AxisChart = () => {
  const { isDarkMode } = useTheme();

  return (
    <div
      className={`sm:w-[65%] ${
        isDarkMode ? "bg-[#24303F]" : "bg-white"
      } p-4 py-12 rounded-lg shadow-sm`}
    >
      <div className="flex items-center justify-between mb-4 px-[20px]">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <div>
              <div
                className={`font-bold ${
                  isDarkMode ? "text-blue-400" : "text-blue-600"
                } flex items-center gap-2`}
              >
                <div
                  className={`w-3 h-3 rounded-full ${
                    isDarkMode ? "bg-blue-400" : "bg-blue-600"
                  }`}
                ></div>
                Total Revenue
              </div>
              <div className="text-gray-400 text-sm font-medium ml-5">
                12.04.2022 - 12.05.2022
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div>
              <div
                className={`font-bold ${
                  isDarkMode ? "text-cyan-400" : "text-cyan-600"
                } flex items-center gap-2`}
              >
                <div
                  className={`w-3 h-3 rounded-full ${
                    isDarkMode ? "bg-cyan-400" : "bg-cyan-600"
                  }`}
                ></div>
                Total Sales
              </div>
              <div className="text-gray-400 text-sm font-medium ml-5">
                12.04.2022 - 12.05.2022
              </div>
            </div>
          </div>
        </div>
        <div
          className={`flex gap-2 ${
            isDarkMode ? "bg-[#313D4A]" : "bg-gray-100"
          } p-2 rounded-md max-sm:flex-col`}
        >
          {period?.map((item, index) => (
            <button
              key={index}
              className={`${
                index === 0
                  ? isDarkMode
                    ? "bg-[#1A222C] text-gray-300"
                    : "bg-white text-gray-900"
                  : isDarkMode
                  ? "text-gray-300 hover:bg-gray-700"
                  : "text-gray-600 hover:bg-gray-200"
              } px-3 py-1 text-sm rounded-md transition-colors`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={axisChartdata}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="productOne" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor={isDarkMode ? "#3B82F6" : "#2563EB"}
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor={isDarkMode ? "#3B82F6" : "#2563EB"}
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="productTwo" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor={isDarkMode ? "#22D3EE" : "#0891B2"}
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor={isDarkMode ? "#22D3EE" : "#0891B2"}
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke={isDarkMode ? "#374151" : "#E5E7EB"}
            />
            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{ fill: isDarkMode ? "#9CA3AF" : "#4B5563" }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: isDarkMode ? "#9CA3AF" : "#4B5563" }}
              domain={[0, 100]}
              interval={0}
              ticks={[10, 20, 30, 40, 50, 60, 70, 80, 90, 100]}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: isDarkMode ? "#1F2937" : "#FFFFFF",
                border: isDarkMode ? "none" : "1px solid #E5E7EB",
                borderRadius: "6px",
                color: isDarkMode ? "#fff" : "#111827",
                boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
              }}
              formatter={(value, name) => [
                value,
                name === "productOne" ? "Product One" : "Product Two",
              ]}
            />
            <Area
              type="monotone"
              dataKey="productOne"
              stroke={isDarkMode ? "#3B82F6" : "#2563EB"}
              fillOpacity={1}
              fill="url(#productOne)"
              dot={{
                stroke: isDarkMode ? "#3B82F6" : "#2563EB",
                strokeWidth: 2,
                fill: isDarkMode ? "#1F2937" : "#FFFFFF",
                r: 4,
              }}
            />
            <Area
              type="monotone"
              dataKey="productTwo"
              stroke={isDarkMode ? "#22D3EE" : "#0891B2"}
              fillOpacity={1}
              fill="url(#productTwo)"
              dot={{
                stroke: isDarkMode ? "#22D3EE" : "#0891B2",
                strokeWidth: 2,
                fill: isDarkMode ? "#1F2937" : "#FFFFFF",
                r: 4,
              }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AxisChart;
