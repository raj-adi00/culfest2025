"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { VortexDemo } from "./vortexdemo";
import { MovingBorderDemo } from "./ButtonBorder";
import { mockData } from "@/utils/mockdata";
import { DummyContent } from "@/utils/eventadata/Dance";
import { DummyContent1 } from "@/utils/eventadata/Dramatics";

export function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} layout={true} />
  ));

  return (
    <div className="h-full w-full py-20">
      <h2 className="  text-5xl relative z-20 text-center font-sans  font-bold tracking-tight text-black dark:text-white md:text-5xl lg:text-7xl">
        {/* What&apos;s cooler than Beams?{" "} */}
        <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
          <div className="absolute left-0 top-[1px] bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 bg-clip-text bg-no-repeat py-4 text-transparent [text-shadow:0_0_rgba(0,0,0,0.1)]">
            <span className="font-AnotherFont">Events.</span>
          </div>
          <div className="relative bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 bg-clip-text bg-no-repeat py-4 text-transparent">
            <span className="font-AnotherFont ">Events.</span>
          </div>
        </div>
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const data = [
  {
    category: "Dance",
    title: "Let's Dance",
    src: "/ss_files/Dance-1uKsEO7S.jpeg",
    content: <DummyContent />,
  },
  {
    category: "Dramatics",
    title: "Enhance your productivity.",
    src: "/24/Dramatics-90aUv2aT.jpeg",
    content: <DummyContent1 />,
  },
  {
    category: "Fine Arts",
    title: "Launching the new Apple Vision Pro.",
    src: "/24/fineArt-wcbL9fwL.jpeg",
    content: <DummyContent />,
  },

  {
    category: "Literary",
    title: "Maps for your iPhone 15 Pro Max.",
    src: "/24/Litrary-ctGeko1E.jpeg",
    content: <DummyContent />,
  },
  {
    category: "Music",
    title: "Photography just got better.",
    src: "/24/Music-_D2N4XCO.jpeg",
    content: <DummyContent />,
  },
  {
    category: "Quizzing",
    title: "Hiring for a Staff Software Engineer",
    src: "/24/Quizzing-IOWNx7yU.jpeg",
    content: <DummyContent />,
  },
  {
    category: "Photography",
    title: "Hiring for a Staff Software Engineer",
    src: "/24/Photography-1FK7OELT.jpeg",
    content: <DummyContent />,
  },
  {
    category: "Informals",
    title: "Hiring for a Staff Software Engineer",
    src: "/24/Informal-wBQ_akI4.jpeg",
    content: <DummyContent />,
  },
  {
    category: "Fashion",
    title: "Hiring for a Staff Software Engineer",
    src: "/24/Fashion-UzjUy0Lw.jpeg",
    content: <DummyContent />,
  },
];
