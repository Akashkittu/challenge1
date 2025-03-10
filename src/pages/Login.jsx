import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import the CSS for react-toastify

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Basic email validation using a regex
  const validateEmail = (emailValue) => {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(emailValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic checks
    if (!validateEmail(email)) {
      toast.error("Please enter a valid email address!");
      return;
    }
    if (!password) {
      toast.error("Please enter your password!");
      return;
    }

    // If both are valid:
    toast.success("Login Successful!");
    // ... proceed with whatever login logic you want here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600 p-4">
      {/* ToastContainer: required for displaying the toasts */}
      <ToastContainer />

      {/* Glass-like Card Container */}
      <div className="relative bg-white/80 backdrop-blur-md rounded-lg shadow-2xl w-full max-w-md p-8">
        <h1 className="text-3xl font-extrabold mb-6 text-center text-slate-800">
          Welcome Back
        </h1>
        <p className="text-center text-slate-600 mb-6">
          Sign in to continue to your account
        </p>
        <form onSubmit={handleSubmit}>
          {/* Email Field */}
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 font-semibold text-slate-700">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="w-full px-4 py-2 text-slate-700 rounded-md border border-gray-300 
                         focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent 
                         placeholder:italic placeholder:text-sm"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password Field */}
          <div className="mb-4">
            <label htmlFor="password" className="block mb-2 font-semibold text-slate-700">
              Password
            </label>
            <input
              id="password"
              type="password"
              className="w-full px-4 py-2 text-slate-700 rounded-md border border-gray-300 
                         focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent
                         placeholder:italic placeholder:text-sm"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Forgot Password & Submit */}
          <div className="flex items-center justify-between mb-6">
            <a
              href="#"
              className="text-sm text-blue-700 hover:underline font-medium"
            >
              Forgot Password?
            </a>
            <a
              href="#"
              className="text-sm text-blue-700 hover:underline font-medium"
            >
              Sign Up
            </a>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 text-lg font-bold text-white bg-blue-600 rounded-md 
                       hover:bg-blue-700 transition-colors shadow-sm 
                       focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
