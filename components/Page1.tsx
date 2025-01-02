import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styles from "@/styles/components/Page1.module.css";
import { FloatingDockDemo } from "./Header";
import { FloatingDock } from "./ui/floating-dock";

export default function Page1() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const video = document.querySelector("video");

    const handleVideoPlay = () => {
      setIsLoading(false);
    };

    if (video) {
      video.addEventListener("play", handleVideoPlay);
    }

    // Auto-play video on body click (if needed)
    document.body.addEventListener("click", () => {
      video?.play();
    });

    return () => {
      if (video) {
        video.removeEventListener("play", handleVideoPlay);
      }
    };
  }, []);

  return (
    <div id="page1" className={`${styles.page1} relative`}>
      <div id="cursor">
        <h5>17 to 19 Jan</h5>
      </div>

      {/* Custom Loading Component */}
      {isLoading && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "black",
            zIndex: 9999, // Ensure it's on top
            pointerEvents: "none", // Allow background elements to remain clickable
          }}
        >
          <div
            className="custom-loader"
            style={{
              pointerEvents: "auto", // Enable interaction for the button only
            }}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative z-10 w-full overflow-hidden rounded-md border-2 border-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 px-4 py-2 font-semibold text-white"
              style={{
                backgroundClip: "padding-box",
                boxShadow: "0 0 10px rgba(255, 255, 255, 0.5)",
              }}
            >
              <div
                className="absolute inset-0 rounded-md bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 opacity-70 blur-lg"
                style={{
                  zIndex: -1,
                  animation: "glowAnimation 3s linear infinite",
                }}
              ></div>
              Loading ...
            </motion.button>
          </div>
        </div>
      )}

      <video muted autoPlay loop playsInline style={{ pointerEvents: "none" }}>
        <source src="/videomain.mp4" type="video/mp4" />
      </video>

      {/* Page Content */}
      <div id="page1-content">
        <nav className="items-center justify-center">
          <FloatingDockDemo />
        </nav>
        <nav className="top-[50px] h-[3px]">
          <img
            src="/colorLogo.png"
            alt="Logo"
            className="absolute left-2 top-2 h-40 animate-pulse "
            style={{
              zIndex: -1,
            }}
          />
        </nav>
      </div>
    </div>
  );
}
