import { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Header from "./components/header";
import Sidebar from "./components/sidebar";
import { useTheme } from "./context/themeContext";
import DashboardContent from "./components/dashboardContent";
import Form from "./components/form";

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const { isDarkMode } = useTheme();

  useEffect(() => {
    navigate("/dashboard/ecommerce");
  }, []);

  return (
    <div
      className={
        isDarkMode ? "bg-[#1A222C] text-white" : "bg-white text-gray-900"
      }
    >
      <Sidebar sidebarOpen={sidebarOpen} />
      <div className="xl:pl-72">
        <Header setSidebarOpen={setSidebarOpen} />
        <Routes>
          <Route path="/dashboard/ecommerce" element={<DashboardContent />} />
          <Route
            path="/dashboard/analytics"
            element={<div>Analytics Content</div>}
          />
          <Route
            path="/dashboard/marketing"
            element={<div>Marketing Content</div>}
          />
          <Route path="/dashboard/stocks" element={<div>Stocks Content</div>} />
          <Route path="/dashboard/crm" element={<div>CRM Content</div>} />
          <Route path="/calendar" element={<div>Calendar Content</div>} />
          <Route path="/profile" element={<div>Profile Content</div>} />
          <Route path="/tasks" element={<div>Tasks Content</div>} />
          <Route
            path="/forms/form-elements"
            element={<div>Form Elements Content</div>}
          />
          <Route
            path="/forms/pro-form-elementspro"
            element={<div>pro-form-elements Content</div>}
          />
          <Route path="/forms/form-layout" element={<Form />} />
          <Route
            path="/forms/pro-form-layout"
            element={<div>pro-form-layout Content</div>}
          />
        </Routes>
      </div>
    </div>
  );
};

export default App;
