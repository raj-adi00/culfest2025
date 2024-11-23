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
    <div id="page1" className={`${styles.page1} relative`}>
      {/* Logo at the top-right */}
      {/* <FloatingDockDemo /> */}
      <div id="cursor">
        <h5>18 to 19 Jan</h5>
      </div>
      <video muted autoPlay loop playsInline poster="/Background4.jpg">
        <source src="/videoplayback.mp4" type="video/mp4" />
      </video>
      {/* <FloatingDockDemo /> */}
      <div id="page1-content">
        <nav className="items-center justify-center">
          <FloatingDockDemo />
        </nav>
        <nav className="top-[50px] h-[3px]">
        <img
            src="/colorLogo.png"
            alt="Logo"
            className="absolute left-2 top-2 h-40 animate-pulse"
          />
        </nav>
      </div>
      {/* <div id="page1-content">
        <nav>
          <FloatingDockDemo />
          <img
            src="/colorLogo.png"
            alt="Logo"
            className="absolute left-2 top-2 z-10 h-40 w-auto"
          />
        </nav>
        <h1>
          <span>r</span>
          <span>e</span>
          <span>j</span>
          <span>o</span>
          <span>u</span>
          <span>i</span>
          <span>c</span>
          <span>e</span>
        </h1>
      </div> */}
    </div>
  );
}
