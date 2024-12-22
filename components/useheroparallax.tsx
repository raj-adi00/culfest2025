"use client";
import React from "react";
import { HeroParallax } from "../components/ui/hero-parallax";
import { FloatingDockDemo } from "./Header";

export function HeroParallaxDemo() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* <FloatingDockDemo /> */}
      <HeroParallax products={products} />
    </div>
  );
}
export const products = [
  {
    title: "Moonbeam",
    link: "/",
    thumbnail: "/img4.png",
  },
  {
    title: "Cursor",
    link: "/",
    thumbnail: "/cursor.jpg",
  },
  {
    title: "Rogue",
    link: "/",
    thumbnail: "/3.png",
  },

  {
    title: "Editorially",
    link: "/",
    thumbnail: "/4.png",
  },
  {
    title: "Editrix AI",
    link: "/",
    thumbnail: "/5.png",  // not visible
  },
  {
    title: "Pixel Perfect",
    link: "/",
    thumbnail: "/TRAP.jpg",    // not visible
  },

  {
    title: "Algochurn",
    link: "/",
    thumbnail: "/CA2.jpg",
  },
  {
    title: "Aceternity UI",
    link: "/",
    thumbnail: "/sachin.jpg",
  },
  {
    title: "Tailwind Master Kit",
    link: "/",
    thumbnail: "/pf.jpg",
  },
  {
    title: "SmartBridge",
    link: "/",
    thumbnail: "/back6.png", //not visible
  },
  {
    title: "Renderwork Studio",
    link: "/",
    thumbnail: "/TRAP.jpg", // not visible
  },

  {
    title: "Creme Digital",
    link: "/",
    thumbnail:
      "/TRAP_BAND.jpg",
  },
  {
    title: "Golden Bells Academy",
    link: "/",
    thumbnail:
      "/moonbeam.jpg",
  },
  {
    title: "Invoker Labs",
    link: "/",
    thumbnail:
      "/cds.jpg",
  },
  {
    title: "E Free Invoice",
    link: "/",
    thumbnail:
      "/dandiya.jpg",
  },
];
