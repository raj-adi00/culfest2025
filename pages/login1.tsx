// pages/login.js

import React from "react";
import Link from "next/link";

const LoginPage = () => {
  return (
    <div
      className="relative flex min-h-screen items-center justify-center"
      style={{
        backgroundImage: `url('party3.png'), radial-gradient(circle, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8))`,
        backgroundBlendMode: "overlay",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Logo */}
      <Link href="/" className="absolute left-5 top-5">
        <img
          src="colorLogo.png"
          alt="CULFEST Logo"
          className="animate-bounce-slow h-auto w-20 rounded-lg bg-gray-800 bg-opacity-50 p-2 backdrop-blur-md md:w-28"
        />
      </Link>

      {/* Login Card */}
      <div className="w-[90%] max-w-md rounded-lg bg-black bg-opacity-60 p-5 text-white shadow-lg md:w-[35%] md:p-8">
        <div className="mb-4 flex justify-center">
          <img
            src="colorLogo.png"
            alt="CULFEST LOGO"
            className="animate-logo w-[60%] object-contain"
          />
        </div>
        <h2 className="mb-3 text-center text-2xl font-bold md:text-3xl">
          LOG IN
        </h2>
        <form className="space-y-3">
          <div>
            <input
              type="email"
              name="email"
              placeholder="EMAIL"
              className="w-full rounded-md border border-gray-600 bg-gray-800 p-2 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              placeholder="PASSWORD"
              className="w-full rounded-md border border-gray-600 bg-gray-800 p-2 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>
          <div className="text-right">
            <Link
              href="/forgotPassword"
              className="text-sm text-gray-400 underline hover:text-purple-400"
            >
              Forgot Password?
            </Link>
          </div>
          <button
            type="submit"
            className="w-full transform rounded-md bg-purple-600 py-2 font-semibold text-white shadow-md transition-all hover:-translate-y-1 hover:bg-purple-700 active:bg-purple-800"
          >
            Submit
          </button>
        </form>
        <p className="mt-4 text-center text-gray-300">
          Don't have an account?{" "}
          <Link href="/register" className="text-purple-400 hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
