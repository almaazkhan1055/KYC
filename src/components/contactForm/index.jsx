import React from "react";
import { useTheme } from "../../context/themeContext";

const ContactForm = () => {
  const { isDarkMode } = useTheme();

  return (
    <div
      className={`${
        isDarkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"
      } p-6 rounded-lg shadow-sm`}
    >
      <h2 className="text-2xl font-medium mb-6">Contact Form 2</h2>
      <form className="space-y-6">
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block mb-2">First name</label>
            <input
              type="text"
              placeholder="Enter your first name"
              className={`${
                isDarkMode
                  ? "bg-gray-700 border-gray-600 text-white"
                  : "border-gray-200 text-gray-900"
              } w-full px-4 py-2 rounded-lg border focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition`}
            />
          </div>
          <div>
            <label className="block mb-2">Last name</label>
            <input
              type="text"
              placeholder="Enter your last name"
              className={`${
                isDarkMode
                  ? "bg-gray-700 border-gray-600 text-white"
                  : "border-gray-200 text-gray-900"
              } w-full px-4 py-2 rounded-lg border focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition`}
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block mb-2">Email</label>
            <input
              type="email"
              placeholder="yourmail@gmail.com"
              className={`${
                isDarkMode
                  ? "bg-gray-700 border-gray-600 text-white"
                  : "border-gray-200 text-gray-900"
              } w-full px-4 py-2 rounded-lg border focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition`}
            />
          </div>
          <div>
            <label className="block mb-2">Phone</label>
            <input
              type="tel"
              placeholder="(321) 5555-0115"
              className={`${
                isDarkMode
                  ? "bg-gray-700 border-gray-600 text-white"
                  : "border-gray-200 text-gray-900"
              } w-full px-4 py-2 rounded-lg border focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition`}
            />
          </div>
        </div>

        <div>
          <label className="block mb-2">Select option</label>
          <div className="flex items-center flex-wrap gap-2">
            {[
              "Graphics Design",
              "Web Development",
              "Logo Design",
              "Others",
            ].map((option, index) => (
              <div className="flex items-center" key={index}>
                <input
                  type="radio"
                  name="option"
                  id={option.toLowerCase().replace(" ", "-")}
                  className="text-blue-600 cursor-pointer"
                />
                <label
                  htmlFor={option.toLowerCase().replace(" ", "-")}
                  className="ml-2"
                >
                  {option}
                </label>
              </div>
            ))}
          </div>
        </div>

        <div>
          <label className="block mb-2">Message</label>
          <textarea
            placeholder="Type your message"
            rows={4}
            className={`${
              isDarkMode
                ? "bg-gray-700 border-gray-600 text-white"
                : "border-gray-200 text-gray-900"
            } w-full px-4 py-2 rounded-lg border focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition`}
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full py-3 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
