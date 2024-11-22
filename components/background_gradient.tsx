"use client";
import React from "react";
import { BackgroundGradient } from "./ui/background-gradient";
import { IconAppWindow } from "@tabler/icons-react";
import Image from "next/image";

export function BackgroundGradientDemo() {
  return (
    <div>
      <BackgroundGradient className=" rounded-[22px] bg-white p-4 dark:bg-zinc-900 sm:p-10">
        <div className="mt-12 flex gap-[12rem]">
          <Image
            src={`/1.png`}
            alt="jordans"
            height="500"
            width="500"
            className="border-r-red-500 object-contain"
          />
          <div>
            <p className="mb-2 mt-10 text-6xl">Air Jordan 4 Retro Reimagined</p>
            <p className="text-3xl text-white dark:text-white">
              The Air Jordan 4 Retro Reimagined Bred will release on Saturday,
              February 17, 2024. Your best opportunity to get these right now is
              by entering raffles and waiting for the official releases.
            </p>
          </div>
        </div>
      </BackgroundGradient>
    </div>
  );
}
