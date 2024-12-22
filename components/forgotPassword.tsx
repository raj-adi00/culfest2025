import React, { useState } from "react";
import Link from "next/link";
// import { getSession, signIn } from "next-auth/react";

import { useRouter } from "next/router";
import axios from "axios";
// import { authOptions } from "next-auth";
const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");
  //   const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [sentOtp, setSentOtp] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [isOtpCorrect, setIsOtpCorrect] = useState(false);

  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(email, otp, password);
    setError("");
    setLoading(true);
    //logic
    try {
      const response = await axios.post("/api/verifyOtp", {
        email: email,
        otp: otp,
      });
      if (response.data.status === 400) {
        setError(response.data.message);
      } else if (response.data.status === 409) {
        setError(response.data.message);
      } else if (response.data.status === 202) {
        setError(response.data.message);
      } else if (response.data.status === 201) {
        setIsOtpCorrect(true);
      }
    } catch (error: any) {
      console.log(error?.message);
      setError(error?.message);
    } finally {
      setLoading(false);
    }
  };
  const handleSendOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(email, otp, password);
    setError("");
    setLoading(true);
    //logic
    try {
      const response = await axios.post("/api/sendOtp", {
        email: email,
      });
      if (response.data.status === 400) {
        setError(response.data.message);
      } else if (response.data.status === 409) {
        setError(response.data.message);
      } else if (response.data.status === 201) {
        setSentOtp(true);
      }
    } catch (error: any) {
      console.log(error?.message);
      setError(error?.message);
    } finally {
      setLoading(false);
    }
  };
  const handleUpdatePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(email, otp, password);
    setError("");
    setLoading(true);
    //logic
    try {
      const response = await axios.post("/api/updatePassword", {
        email: email,
        password: password,
      });
      if (response.data.status === 400) {
        setError(response.data.message);
      } else if (response.data.status === 409) {
        setError(response.data.message);
      } else if (response.data.status === 201) {
        alert("password updated successfully");
        router.push("/login");
      }
    } catch (error: any) {
      console.log(error?.message);
      setError(error?.message);
    } finally {
      setLoading(false);
    }
  };
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
          FORGOT PASSWORD
        </h2>
        {error && <div className="mb-4 text-center text-red-500">{error}</div>}
        <form
          className="space-y-3"
          onSubmit={
            isOtpCorrect
              ? handleUpdatePassword
              : sentOtp
              ? handleVerifyOtp
              : handleSendOtp
          }
        >
          <div>
            <input
              type={isOtpCorrect ? "password" : sentOtp ? "text" : "text"}
              name={isOtpCorrect ? "password" : sentOtp ? "text" : "email"}
              value={isOtpCorrect ? password : sentOtp ? otp : email}
              onChange={
                isOtpCorrect
                  ? (e) => setPassword(e.target.value)
                  : sentOtp
                  ? (e) => setOtp(e.target.value)
                  : (e) => setEmail(e.target.value)
              }
              placeholder={
                isOtpCorrect ? "Password" : sentOtp ? "OTP" : "EMAIL or PHONE"
              }
              className="w-full rounded-md border border-gray-600 bg-gray-800 p-2 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full transform rounded-md bg-purple-600 py-2 font-semibold text-white shadow-md transition-all hover:-translate-y-1 hover:bg-purple-700 active:bg-purple-800"
            disabled={loading}
          >
            {loading
              ? "Loading..."
              : isOtpCorrect
              ? "Update Password"
              : sentOtp
              ? "Verify Otp"
              : "Send Otp"}
          </button>
        </form>
        <p className="mt-4 text-center text-gray-300">
          Don't have an account?{" "}
          <Link href="/signup" className="text-purple-400 hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

// export default LoginPage;

export default ForgotPasswordPage;
