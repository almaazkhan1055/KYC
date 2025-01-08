import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [userInput, setUserInput] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = {};
    if (!userInput.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(userInput.email)) {
      newErrors.email = "Invalid email address";
    }

    if (!userInput.password) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const storedDetails = JSON.parse(localStorage.getItem("userDetails"));
      if (
        storedDetails &&
        storedDetails.email === userInput.email &&
        storedDetails.password === userInput.password
      ) {
        navigate("/dashboard");
      } else {
        alert("Invalid email or password");
      }
    }
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8 h-screen">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
          Login to your account
        </h2>
      </div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
        <div className="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={userInput.email}
                  onChange={handleInputChange}
                  className="block w-full rounded-md px-3 py-1.5 text-gray-900 outline-gray-300 placeholder:text-gray-400 sm:text-sm/6"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                )}
              </div>
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Password
              </label>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={userInput.password}
                  onChange={handleInputChange}
                  className="block w-full rounded-md px-3 py-1.5 text-gray-900 outline-gray-300 placeholder:text-gray-400 sm:text-sm/6"
                />
                {errors.password && (
                  <p className="mt-1 text-sm text-red-600">{errors.password}</p>
                )}
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-indigo-600"
              >
                Log in
              </button>
            </div>
          </form>
        </div>
        <p className="mt-10 text-center text-sm text-gray-500">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="font-semibold text-indigo-600 hover:text-indigo-500"
          >
            Signup Now
          </Link>
        </p>
      </div>
    </div>
  );
}
