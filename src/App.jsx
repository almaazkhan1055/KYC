import { useEffect, useState } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { useTheme } from "./context/themeContext";
import DashboardContent from "./components/DashboardContent";
import ErrorPage from "./components/ErrorPage";
import UsersList from "./components/UsersList";
import User from "./components/User";
import CreateApplication from "./components/CreateApplication";
import ApplicationStatus from "./components/ApplicationStatus";
import Signup from "./components/Signup.jsx";
import Login from "./components/Login.jsx";

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const { isDarkMode } = useTheme();
  const location = useLocation();

  const isAuthRoute = ["/signup", "/login"].includes(location.pathname);

  useEffect(() => {
    if (location.pathname === "/") {
      navigate("/signup");
    }
  }, [location.pathname, navigate]);

  return (
    <div
      className={
        isDarkMode ? "bg-[#1A222C] text-white" : "bg-white text-gray-900"
      }
    >
      {!isAuthRoute && <Sidebar sidebarOpen={sidebarOpen} />}

      <div className={!isAuthRoute ? "xl:pl-72" : ""}>
        {!isAuthRoute && <Header setSidebarOpen={setSidebarOpen} />}

        <Routes>

          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
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
