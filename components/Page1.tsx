import { useEffect } from "react";
import styles from "@/styles/components/Page1.module.css";
import { FloatingDockDemo } from "./Header";
import { FloatingDock } from "./ui/floating-dock";

export default function Page1() {
  useEffect(() => {
    const video = document.querySelector("video");
    document.body.addEventListener("click", () => {
      video?.play();
    });
  }, []);

  return (
    <div id="page1" className={styles.page1}>
      <div id="cursor">
        <h5>18 to 19 Jan</h5>
      </div>
      <video
        muted
        autoPlay
        loop
        playsInline
        poster="https://images.prismic.io/rejouice/36450525-8a76-4a44-b6d4-59c00ad0b50d_RJ-Home-OuraRing-x2.png?auto=compress%2Cformat&fm=webp&width=1200"
      >
        <source src="/videoplayback.mp4" type="video/mp4" />
      </video>
      {/* <FloatingDockDemo /> */}
      <div id="page1-content">
        {/* <FloatingDockDemo /> */}
        <nav className="top-[50px] h-[1px]">
          {" "}
          <FloatingDockDemo />
        </nav>

        <div className="circle-container">
          <img src="/cf25.png" alt="Culfest 25" className="circle-image" />
        </div>
      </div>
    </div>
  );
}
