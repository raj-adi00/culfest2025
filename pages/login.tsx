"use client";

import { motion } from "framer-motion";

const LoginPage = () => {
  // Define motion variants for reusability
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  const inputVariants = {
    focus: { borderColor: "#66fcf1", boxShadow: "0 0 10px #66fcf1" },
  };

  return (
    <div
      style={{
        color: "#ffffff",
        minHeight: "100vh",
        backgroundImage: 'url("/Background4.jpg")', // Starry background
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
      }}
    >
      <motion.div
        initial="hidden"
        animate="visible"
        variants={cardVariants}
        transition={{ duration: 1, ease: "easeInOut" }}
        style={{
          backgroundColor: "rgba(31, 40, 51, 0.9)", // Card background with transparency
          padding: "3rem",
          borderRadius: "10px",
          width: "90%",
          maxWidth: "400px",
          boxShadow: "0 8px 20px rgba(0, 0, 0, 0.4)",
          textAlign: "center",
          zIndex: 2, // Ensure the form is above the background
        }}
      >
        <h1
          style={{
            color: "#66fcf1",
            fontFamily: "'Space Mono', monospace",
            fontSize: "2rem",
            marginBottom: "1.5rem",
          }}
        >
          Login for Events
        </h1>
        <form>
          <motion.div style={{ marginBottom: "1rem" }}>
            <motion.input
              type="text"
              placeholder="Enter Your Email or Phone No."
              whileFocus="focus"
              variants={inputVariants}
              transition={{ duration: 0.3 }}
              style={{
                width: "100%",
                padding: "0.8rem",
                borderRadius: "5px",
                border: "1px solid #c5c6c7",
                outline: "none",
                fontSize: "1rem",
                backgroundColor: "#fff", // Background for the input fields
                color: "#333", // Text color in the input field
                transition: "border-color 0.3s, box-shadow 0.3s",
              }}
              required
            />
          </motion.div>
          <motion.div style={{ marginBottom: "1rem" }}>
            <motion.input
              type="password"
              placeholder="Enter Your Password"
              whileFocus="focus"
              variants={inputVariants}
              transition={{ duration: 0.3 }}
              style={{
                width: "100%",
                padding: "0.8rem",
                borderRadius: "5px",
                border: "1px solid #c5c6c7",
                outline: "none",
                fontSize: "1rem",
                backgroundColor: "#fff", // Background for the input fields
                color: "#333", // Text color in the input field
                transition: "border-color 0.3s, box-shadow 0.3s",
              }}
              required
            />
          </motion.div>
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05, backgroundColor: "#66fcf1" }}
            whileTap={{ scale: 0.95 }}
            style={{
              width: "100%",
              padding: "0.8rem",
              borderRadius: "5px",
              border: "none",
              backgroundColor: "#45a29e",
              color: "#ffffff",
              fontSize: "1rem",
              cursor: "pointer",
              transition: "background-color 0.3s ease",
            }}
          >
            Login
          </motion.button>
        </form>
        <p style={{ marginTop: "1rem", fontSize: "0.9rem", color: "#c5c6c7" }}>
          Don't have an account?{" "}
          <a
            href="/register"
            style={{
              color: "#66fcf1",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Register Now
          </a>
        </p>
      </motion.div>
    </div>
  );
};

export default LoginPage;
