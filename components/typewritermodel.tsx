"use client";
import { TypewriterEffect } from "../components/ui/typewriter-effect";

export function TypewriterEffectDemo() {
  const words = [
    {
      text: "CULFEST .",
      className: "text-blue-500 dark:text-blue-500 text-7xl",
    },
  ];
  return <TypewriterEffect words={words} />;
}
