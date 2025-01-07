import DetailCard from "../detailCard/index";
import AxisChart from "../axisChart/index";
import ProfitChart from "../profitChart/index";
import { amount, icons, ratio, views } from "../../data/data";
import { useTheme } from "../../context/themeContext";

const DashboardContent = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className={`${isDarkMode ? "bg-[#1A222C]" : "bg-gray-100"} `}>
      <main className="sm:flex items-center justify-between p-5 grid grid-cols-2 gap-2">
        {icons.map((icon, index) => (
          <DetailCard
            key={index}
            icon={icon}
            amount={amount[index]}
            views={views[index]}
            ratio={ratio[index]}
          />
        ))}
      </main>
      <div className="flex items-center gap-10 p-5 max-sm:grid max-sm:grid-cols-1">
        <AxisChart />
        <ProfitChart />
      </div>
    </div>
  );
};

export default DashboardContent;
