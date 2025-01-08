import { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Header from "./components/header";
import Sidebar from "./components/sidebar";
import { useTheme } from "./context/themeContext";
import DashboardContent from "./components/dashboardContent";
import ErrorPage from "./components/errorPage";
import Users from "./components/usersList";
import UsersList from "./components/usersList";
import User from "./components/User";
import CreateApplication from "./components/CreateApplication";
import ApplicationStatus from "./components/ApplicationStatus";

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const { isDarkMode } = useTheme();

  useEffect(() => {
    navigate("/dashboard");
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
          {/* Admin Routes */}
          <Route path="/dashboard" element={<DashboardContent />} />
          <Route path="/users" element={<UsersList />} />
          <Route path="/users/:id" element={<User />} />

          {/* Users Routes */}
          <Route path="/createapplication" element={<CreateApplication />} />
          <Route path="/applicationstatus" element={<ApplicationStatus />} />
          {/* <Route path="*" element={<ErrorPage />} /> */}
        </Routes>
      </div>
    </div>
  );
};

export default App;
