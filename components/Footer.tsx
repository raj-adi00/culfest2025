"use client";

import { motion } from "framer-motion";

const Footer = () => {
  const footerStyle = {
    backgroundColor: "#000a23", // Deep dark background for a night-like theme
    color: "#ffffff", // White text for contrast
    padding: "3rem",
    textAlign: "center" as "center",
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative" as "relative",
    overflow: "hidden",
  };

  const headingStyle = {
    fontSize: "1.5rem",
    marginBottom: "1rem",
    color: "#66fcf1", // A soft teal color for headings
    animation: "fadeIn 3s infinite", // Constant fade-in animation
  };

  const contactItemStyle = {
    margin: "0.5rem 0",
    fontSize: "1rem",
    animation: "pulse 3s infinite", // Constant pulse animation
  };

  const importantLinkStyle = {
    color: "#f5a623", // A warm gold color for important links
    textDecoration: "none",
    fontWeight: "bold",
    marginTop: "1rem",
    display: "inline-block",
    transition: "color 0.3s ease, transform 0.3s ease",
  };

  const underlineAnimation = {
    position: "relative" as "relative",
    display: "inline-block",
    ":after": {
      content: '""',
      position: "absolute" as "absolute",
      width: "100%",
      height: "2px",
      bottom: "0",
      left: "0",
      backgroundColor: "#66fcf1",
      visibility: "hidden",
      transform: "scaleX(0)",
      transition: "all 0.3s ease-in-out",
    },
    ":hover:after": {
      visibility: "visible",
      transform: "scaleX(1)",
    },
  };

  return (
    <motion.footer
      style={footerStyle}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h2
        style={{ ...headingStyle, ...underlineAnimation }}
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        whileHover={{ scale: 1.1, color: "#66fcf1" }} // Hover effect for scaling and color change
      >
        Contact Us
      </motion.h2>
      <motion.p
        style={contactItemStyle}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        whileHover={{ color: "#f5a623" }} // Hover effect to change color
      >
        <strong>Institute Phone:</strong> +91 657 237 4040
      </motion.p>
      <motion.p
        style={contactItemStyle}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        whileHover={{ color: "#f5a623" }} // Hover effect to change color
      >
        <strong>CulFest Head (Rahul):</strong> +91 98765 43210
      </motion.p>
      <motion.p
        style={contactItemStyle}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
        whileHover={{ color: "#f5a623" }} // Hover effect to change color
      >
        <strong>CulFest Co-Head (Priya):</strong> +91 87654 32109
      </motion.p>

      <motion.h3
        style={{ ...headingStyle, fontSize: "1.2rem", marginTop: "2rem", ...underlineAnimation }}
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        whileHover={{ scale: 1.1, color: "#66fcf1" }} // Hover effect for scaling and color change
      >
        Important Note
      </motion.h3>
      <motion.p
        style={contactItemStyle}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        Stay tuned for updates on our star-studded events and performances!
      </motion.p>
      <motion.a
        href="#register"
        style={{ ...importantLinkStyle, ...underlineAnimation }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        whileHover={{ color: "#66fcf1", scale: 1.1 }} // Hover effect for link with scaling and color change
      >
        Register Now!
      </motion.a>

      <div style={{ marginTop: "2rem" }}>
        <p style={{ fontSize: "0.9rem" }}>
          &copy; {new Date().getFullYear()} Cultural Fest, NIT Jamshedpur. All
          rights reserved.
        </p>
        <p style={{ fontSize: "0.8rem" }}>
          Designed with ❤️ for a memorable experience.
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
