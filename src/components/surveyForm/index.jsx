import React from "react";
import { useTheme } from "../../context/themeContext"; // Assuming you have a theme context

const SurveyForm = () => {
  const { isDarkMode } = useTheme();

  return (
    <div
      className={`${
        isDarkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"
      } p-6 rounded-lg shadow-sm`}
    >
      <h2 className="text-2xl font-medium mb-6">Survey Form</h2>
      <form className="space-y-6">
        <div>
          <label className="block mb-2">Name</label>
          <input
            type="text"
            placeholder="Enter your full name"
            className={`${
              isDarkMode
                ? "bg-gray-700 border-gray-600 text-white"
                : "border-gray-200 text-gray-900"
            } w-full px-4 py-2 rounded-lg border focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition`}
          />
        </div>

        <div>
          <label className="block mb-2">Email</label>
          <input
            type="email"
            placeholder="Enter your email address"
            className={`${
              isDarkMode
                ? "bg-gray-700 border-gray-600 text-white"
                : "border-gray-200 text-gray-900"
            } w-full px-4 py-2 rounded-lg border focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition`}
          />
        </div>

        <div>
          <label className="block mb-2">Age</label>
          <input
            type="number"
            placeholder="Enter your age"
            className={`${
              isDarkMode
                ? "bg-gray-700 border-gray-600 text-white"
                : "border-gray-200 text-gray-900"
            } w-full px-4 py-2 rounded-lg border focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition`}
          />
        </div>

        <div>
          <label className="block mb-2">Which option best describes you?</label>
          <select
            className={`${
              isDarkMode
                ? "bg-gray-700 border-gray-600 text-white"
                : "border-gray-200 text-gray-900"
            } w-full px-4 py-2 rounded-lg border focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition`}
          >
            <option value="">Select your subject</option>
            <option value="student">Student</option>
            <option value="professional">Professional</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label className="block mb-2">
            Would you recommend our site to a friend?
          </label>
          <div className="space-y-2">
            {["Yes", "No", "Maybe"].map((option, index) => (
              <div className="flex items-center" key={index}>
                <input
                  type="radio"
                  name="recommend"
                  id={option.toLowerCase()}
                  className="w-4 h-4 text-blue-600"
                />
                <label htmlFor={option.toLowerCase()} className="ml-2">
                  {option}
                </label>
              </div>
            ))}
          </div>
        </div>

        <button
          type="submit"
          className="w-full py-3 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default SurveyForm;
