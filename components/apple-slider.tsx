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
    title: "Get ready to groove! Show off your best moves",
    src: "/event2025/dance.png",
    content: <DummyContent />,
  },
  {
    category: "Dramatics",
    title: "Unleash the actor within! Participate in skits, plays, and more.",
    src: "/event2025/dramatic.png",
    content: <DummyContent1 />,
  },
  {
    category: "Fine Arts",
    title: "Unleash your creativity! Showcase your paintings and artwork to win recognition!",
    src: "/event2025/fine_arts.png",
    content: <DummyContent />,
  },

  {
    category: "Literary",
    title: "Word wizards, assemble!",
    src: "/event2025/literary.png",
    content: <DummyContent />,
  },
  {
    category: "Music",
    title: "Strike a chord! Sing, play, or compose your way to stardom and win exciting prizes!",
    src: "/event2025/music.png",
    content: <DummyContent />,
  },
  {
    category: "Quizzing",
    title: "Brainiacs, get ready! Test your knowledge, speed, and strategy to win quizzing championships!",
    src: "/event2025/quiz.png",
    content: <DummyContent />,
  },
  {
    category: "Photography",
    title: "Capture the moment! Showcase your photography skills and win",
    src: "/event2025/photography.png",
    content: <DummyContent />,
  },
  {
    category: "Informals",
    title: "Participate in casual games, activities, and events to win prizes and make memories!",
    src: "/event2025/informals.png",
    content: <DummyContent />,
  },
  {
    category: "Fashion",
    title: "Walk the ramp! Showcase your style, creativity, and confidence to win fashion contests ",
    src: "/event2025/fashion.png",
    content: <DummyContent />,
  },
];
