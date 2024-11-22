"use client";
import { TypewriterEffect } from "../components/ui/typewriter-effect";

interface Word {
  text: string;
  className?: string;
}

interface TypewriterProps {
  words: Word[];
  className?: string;
  cursorClassName?: string;
}

export function TypewriterEffectDemo2({ name }: { name: string }) {
  const words = [
    {
      text: name, // Pass the name directly as a string
      className: "text-pink-500 dark:text-pink-500 text-7xl",
    },
  ];

  return <TypewriterEffect words={words} />;
}
