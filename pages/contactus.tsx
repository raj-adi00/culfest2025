import React, { useState } from "react";
import Image from "next/image";
import {
  FaStar,
  FaCalendarAlt,
  FaUsers,
  FaMusic,
  FaPaintBrush,
} from "react-icons/fa";
import Head from "next/head";
import { FloatingDockDemo } from "@/components/Header";
import Link from "next/link";

const About: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
        setLoading(false);
      } else {
        setStatus("Failed to send message. Please try again later.");
        setLoading(false);
      }
    } catch (error) {
      setStatus("An error occurred. Please try again later.");
      setLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>Contact Us Page</title>
        <meta name="description" content="Explore Contact Us Page" />
        <link rel="icon" href="/culfest_logo.png" />
      </Head>
      <div className="relative min-h-screen">
        {/* Background image with opacity */}
        <div
          className="absolute left-0 top-0 z-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: "url('/party.jpg')" }}
        ></div>
        {/* Content on top hero of the background image */}
        <div
          className="relative z-10 min-h-screen bg-gradient-to-r from-black via-gray-900 to-black p-8 text-gray-100"
          style={{
            backgroundImage: "url('/Background4.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className=" right-5 top-5 z-20 flex justify-end">
            <a
              href="/brochure.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between  rounded-lg bg-gradient-to-r  from-blue-800 via-blue-400 to-pink-500 px-6 py-4 font-semibold text-white shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl"
            >
              <span className="mr-2">Brochure</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="6"
                stroke="currentColor"
                className="h-4 w-auto animate-bounce"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
                />
              </svg>
            </a>
          </div>
          <div className="container mx-auto text-center">
            <h1 className="2 text-shadow-lg bg-gradient-to-r from-yellow-400 via-orange-500 via-pink-500 to-red-500 bg-clip-text py-3 pb-4 font-Pacifico text-5xl font-bold text-transparent">
              Welcome to Culfest 2025
            </h1>

            {/* Contact Us Section */}
            <section className="mt-16 px-6 text-left">
              <h2 className="mb-6 text-3xl font-bold">
                <span className="bg-gradient-to-r from-green-400 via-yellow-500 to-blue-500 bg-clip-text text-transparent">
                  Contact Us Section
                </span>
              </h2>
              <div className="rounded-lg bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 p-6 shadow-lg">
                <p className="text-lg leading-relaxed opacity-90">
                  <strong>Legal Entity Name:</strong> AMRISH YADAV
                </p>
                <p className="text-lg leading-relaxed opacity-90">
                  <strong>Registered Address:</strong> NIT JAMSHEDPUR JHARKHAND,
                  JAMSHEDPUR, Jharkhand, PIN: 831014
                </p>
                <p className="text-lg leading-relaxed opacity-90">
                  <strong>Operational Address:</strong> NIT JAMSHEDPUR
                  JHARKHAND, JAMSHEDPUR, Jharkhand, PIN: 831014
                </p>
                <p className="text-lg leading-relaxed opacity-90">
                  <strong>Telephone No:</strong> 9118841006
                </p>
                <p className="text-lg leading-relaxed opacity-90">
                  <strong>E-Mail ID:</strong> amrishrock2002@gmail.com
                </p>
                <p className="text-lg leading-relaxed opacity-90">
                  <strong>Registration Query :-</strong>
                  <br />• Harshit +91 8957144430
                </p>
                <p className="text-lg leading-relaxed opacity-90">
                  <strong>Event Query :-</strong>
                  <br /> • Mayank
                  <br /> Telephone No : +91 9801812045
                  <br /> • Ujjwal
                  <br /> Telephone No :+91 8789778911
                </p>
              </div>
            </section>

            {/* Contact Form Section */}
            <section className="mt-8 px-6 text-left">
              <h2 className="mb-6 text-3xl font-bold">
                <span className="bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-500 bg-clip-text text-transparent">
                  Contact Us Form
                </span>
              </h2>
              <form
                onSubmit={handleSubmit}
                className="rounded-lg bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 p-6 shadow-lg"
              >
                <div className="mb-4">
                  <label htmlFor="name" className="block text-lg font-medium">
                    Name:
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg bg-gray-800 p-3 text-gray-200"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-lg font-medium">
                    Email:
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg bg-gray-800 p-3 text-gray-200"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="message"
                    className="block text-lg font-medium"
                  >
                    Message:
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg bg-gray-800 p-3 text-gray-200"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full rounded-lg bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 py-3 text-lg font-semibold text-white shadow-md hover:scale-105"
                >
                  {loading ? "Submitting" : "Send Message"}
                </button>
                {status && (
                  <p className="mt-4 text-center text-sm font-medium text-yellow-400">
                    {status}
                  </p>
                )}
              </form>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
