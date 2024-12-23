// pages/404.tsx
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image"; // For logo image import

// Logo path
import logo from "../public/colorLogo.png"; // Replace with your actual logo path
import { black } from "tailwindcss/colors";

const Custom404: React.FC = () => {
  return (
    <div
      style={{
        textAlign: "center",
        padding: "10rem 2rem",
        backgroundColor: "black",
        // background: "c-gradient(to right, #FF7E5F, #feb47b)", // Gradient background/
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
        fontFamily: "'Roboto', sans-serif",
      }}
    >
      {/* Logo with animation */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        style={{ marginBottom: "2rem" }}
      >
        <Image
          src={logo}
          alt="Company Logo"
          width={150}
          height={150}
          style={{
            borderRadius: "50%",
            boxShadow: "0 8px 15px rgba(0, 0, 0, 0.1)",
          }}
        />
      </motion.div>

      {/* Title with animation */}
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{ fontSize: "3rem", marginBottom: "1rem" }}
      >
        404 - Page Not Found
      </motion.h1>

      {/* Message with animation */}
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        style={{ fontSize: "1.25rem" }}
      >
        Sorry, the page you are looking for does not exist.
      </motion.p>
    </div>
  );
};

export default Custom404;
