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
    title: "Culfest",
    link: "/",
    thumbnail: "/img4.png",
  },
  {
    title: "NIT Jamshedpur",
    link: "/",
    thumbnail: "/cursor.jpg",
  },
  {
    title: "2025",
    link: "/",
    thumbnail: "/3.png",
  },

  {
    title: "WELCOME TO NIT JAMSHEDPUR",
    link: "/",
    thumbnail: "/4.png",
  },
  {
    title: "CULFEST 2025",
    link: "/",
    thumbnail: "/5.png",  // not visible
  },
  {
    title: "NIT",
    link: "/",
    thumbnail: "/TRAP.jpg",    // not visible
  },

  {
    title: "JAMSHEDPUR",
    link: "/",
    thumbnail: "/CA2.jpg",
  },
  {
    title: "HARSHIT",
    link: "/",
    thumbnail: "/Sachin-Jigar.png",
  },
  {
    title: "HARSHIT",
    link: "/",
    thumbnail: "/pf.jpg",
  },
  {
    title: "HARSHIT",
    link: "/",
    thumbnail: "/back6.png", //not visible
  },
  {
    title: "CULFEST 2025",
    link: "/",
    thumbnail: "/TRAP.jpg", // not visible
  },

  {
    title: "NIT",
    link: "/",
    thumbnail:
      "/TRAP_BAND.jpg",
  },
  {
    title: "NIT JAMSHEDPUR",
    link: "/",
    thumbnail:
      "/moonbeam.jpg",
  },
  {
    title: "CULFEST",
    link: "/",
    thumbnail:
      "/Aseem2.png",
  },
  {
    title: "culfestnitjsr",
    link: "/",
    thumbnail:
      "/cds.jpg",
  },
];
