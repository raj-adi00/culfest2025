import { useEffect } from "react";
import gsap from "gsap";

export default function CursorEffect() {
  useEffect(() => {
    const cursor = document.getElementById("cursor")!;
    const pageContent = document.getElementById("page1-content")!;

    pageContent.addEventListener("mousemove", (event: MouseEvent) => {
      gsap.to(cursor, {
        x: event.clientX,
        y: event.clientY,
      });
    });

    pageContent.addEventListener("mouseenter", () => {
      gsap.to(cursor, { scale: 1, opacity: 1 });
    });

    pageContent.addEventListener("mouseleave", () => {
      gsap.to(cursor, { scale: 0, opacity: 0 });
    });
  }, []);

  return null;
}
