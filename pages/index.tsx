// pages/index.tsx
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
import HomePage from "@/components/test";
import EventPage from "@/components/test";
import SponsorCards from "@/components/SponsorCards";
import MenuBar from "@/components/MenuBar";
import Head from "next/head";
import Footer from "@/components/Footer"; // Import ContactUs component

// Dynamically import GSAP and Locomotive Scroll to prevent SSR issues
const CursorEffect = dynamic(() => import("@/components/CursorEffect"), {
  ssr: false,
});

const pastceleb = [
  { img: "/back6.png", location: "", description: "", title: "Shirley Shetia" },
  { img: "/sachin.jpg", title: "Sachin-Jigar", description: "", location: "" },
  { img: "/aseem1.png", title: "Aseem Sharma", description: "", location: "" },
  { img: "/DJ-Rhea1.png", title: "DJ-Rhea", description: "", location: "" },
  { img: "/3.png", title: "Lost Stories", description: "", location: "" },
  { img: "/4.png", title: "Julia Bliss", description: "", location: "" },
  { img: "/5.png", title: "TRAP", description: "", location: "" },
  { img: "/6.png", title: "Mukesh Srivastava", description: "", location: "" },
  { img: "/9.png", title: "Rahat Indori", description: "", location: "" },
  { img: "/8.png", title: "Jubin Nautiyal", description: "", location: "" },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Welcome to Culfest 2025</title>
        <meta name="description" content="Welcome to Culfest 2025" />
        <link rel="icon" href="/culfest_logo.png" />
      </Head>
      <div id="main">
        <Page1 />
        <CursorEffect />
        <HeroParallaxDemo />
        <SliderHero sliderData={pastceleb} />
      </div>
      <div id="events">
        <CanvasRevealEffectDemo3 children={<AppleCardsCarouselDemo />} />
      </div>
      <SponsorCards />

      {/* Add Contact Us Section Only on the Home Page */}
      <Footer />
    </>
  );
}
