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
    thumbnail: "/1.png",
  },
  {
    title: "Cursor",
    link: "/",
    thumbnail: "/2.png",
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
    thumbnail: "/5.png",
  },
  {
    title: "Pixel Perfect",
    link: "/",
    thumbnail: "/9.png",
  },

  {
    title: "Algochurn",
    link: "/",
    thumbnail: "/cf25.png",
  },
  {
    title: "Aceternity UI",
    link: "/",
    thumbnail: "/AmitMishra.png",
  },
  {
    title: "Tailwind Master Kit",
    link: "/",
    thumbnail: "/Background4.jpg",
  },
  {
    title: "SmartBridge",
    link: "/",
    thumbnail: "/back6.png",
  },
  {
    title: "Renderwork Studio",
    link: "/",
    thumbnail: "/TRAP.jpg",
  },

  {
    title: "Creme Digital",
    link: "/",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/cremedigital.png",
  },
  {
    title: "Golden Bells Academy",
    link: "/",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/goldenbellsacademy.png",
  },
  {
    title: "Invoker Labs",
    link: "/",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/invoker.png",
  },
  {
    title: "E Free Invoice",
    link: "/",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/efreeinvoice.png",
  },
];
