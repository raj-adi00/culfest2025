"use client";
import dynamic from "next/dynamic";
import Loader from "@/components/Loader";
import Page1 from "@/components/Page1";
import SliderHero from "@/components/SliderHero";
import { AppleCardsCarouselDemo } from "@/components/apple-slider";
import React from "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { BackgroundBeamsWithCollisionDemo } from "@/components/beam-model";
import { HeroParallaxDemo } from "@/components/useheroparallax";
import { CanvasRevealEffectDemo3 } from "@/components/background-dot";
// Dynamically import GSAP and Locomotive Scroll to prevent SSR issues
const CursorEffect = dynamic(() => import("@/components/CursorEffect"), {
  ssr: false,
});
const pastceleb = [
  {
    img: "/back6.png",
    location: "",
    description: "",
    title: "Shirley Shetia",
  },
  {
    img: "/3.png",
    title: "Lost Stories",
    description: "",
    location: "",
  },
  {
    img: "/4.png",
    title: "Julia Bliss",
    description: "",
    location: "",
  },
  {
    img: "/5.png",
    title: "TRAP",
    description: "",
    location: "",
  },
  {
    img: "/6.png",
    title: "Mukesh Srivastava",
    description: "",
    location: "",
  },
  {
    img: "/9.png",
    title: "Rahat Indori",
    description: "",
    location: "",
  },
  {
    img: "/8.png",
    title: "Jubin Nautiyal",
    description: "",
    location: "",
  },
];
export default function Home() {
  return (
    <>
      <div id="main">
        {/* <Loader /> */}
        <HeroParallaxDemo />
        <Page1 />
        <CursorEffect />
        <SliderHero sliderData={pastceleb} />
        {/* <br />
      <br />
      <br /> */}
        {/* <BackgroundBeamsWithCollision> */}
        {/* <div className="relative z-10"> */}{" "}
        {/* Added relative positioning */}
        {/* <AppleCardsCarouselDemo /> */}
        {/* </div> */}
        {/* </BackgroundBeamsWithCollision> */}
      </div>
      {/* <AppleCardsCarouselDemo /> */}
      {/* <BackgroundBeamsWithCollision> */}
      {/* <BackgroundBeamsWithCollisionDemo /> */}
      <CanvasRevealEffectDemo3 children={<AppleCardsCarouselDemo />} />
    </>
  );
}
