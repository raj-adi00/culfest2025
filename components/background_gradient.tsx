"use client";
import React from "react";
import { BackgroundGradient } from "./ui/background-gradient";
import { IconAppWindow } from "@tabler/icons-react";
import Image from "next/image";
import { MovingBorderDemo3 } from "./MovingBorder3";

export function BackgroundGradientDemo({ event }: any) {
  // if (!event) {
  //   return <>loading...</>;
  // }
  // if (!event.rules) {
  //   return <>loading...</>;
  // }
  return (
    <div>
      <BackgroundGradient className="rounded-[22px] bg-white p-4 dark:bg-zinc-900 sm:p-10">
        <div className="mt-12 flex flex-wrap justify-center gap-[12rem] sm:gap-10  ">
          {/* <MovingBorderDemo3
            children={ */}

          <div
            // borderRadius="1.75rem"

            className="border-none bg-gradient-to-r from-purple-500 to-pink-500 p-1 text-lg  text-white "
          >
            <Image
              src={event?.image}
              alt="Air Jordan 4 Retro Reimagined in black and red colors"
              height="500"
              width="500"
              // className="border-4 bg-gradient-to-r from-purple-500 to-pink-500 text-lg text-white"
            />
          </div>

          <div className="gap-9">
            <div className="mb-2 mt-10 font-AnotherFont text-9xl text-yellow-600">
              {event?.eventname}
            </div>
          </div>
        </div>
        <div className="p-12 text-2xl text-white dark:text-white">
          {event?.description}
        </div>
      </BackgroundGradient>
      <div className="mb-2 mt-10 text-center font-AnotherFont text-6xl text-black">{`Rules`}</div>

      <div className="rounded-lg bg-transparent from-yellow-400 via-orange-400 to-pink-500 p-6 font-serif text-3xl text-white shadow-lg">
        {event?.rules}
      </div>
    </div>
  );
}

// if i reload the page then the rules section will appear
