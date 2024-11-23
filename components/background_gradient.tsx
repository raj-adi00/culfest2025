"use client";
import React from "react";
import { BackgroundGradient } from "./ui/background-gradient";
import { IconAppWindow } from "@tabler/icons-react";
import Image from "next/image";
import { MovingBorderDemo3 } from "./MovingBorder3";

export function BackgroundGradientDemo({ total }: any) {
  const event = total?.event;
  return (
    <div>
      <BackgroundGradient className="rounded-[22px] bg-white p-2 dark:bg-zinc-900 sm:p-10">
        <div className="mt-12 flex flex-wrap j items-center justify-center gap-[4rem] ">
          <div>
          <img
            src="/colorLogo.png"
            alt="Logo"
            className="absolute left-2 top-2 h-20 animate-pulse"
          />
          </div>
          <div className="gap-9 text-center sm:text-left">
            <div className="mb-2 mt-10 font-AnotherFont text-7xl text-yellow-600 sm:text-7xl lg:text-8xl">
              {event?.eventname}
              {`!!`}
            </div>
          </div>
          <div className=" border-none bg-gradient-to-r from-purple-500 to-pink-500 p-1 text-lg text-white sm:w-[300px] lg:w-[400px]">
            <Image
              src={event?.image}
              alt="Event Image"
              height={1000} // Increase the height
              width={1000} // Increase the width
              className=" rounded-lg object-cover"
            />
          </div>
        </div>

        <div className="p-12 text-xl text-white dark:text-white sm:text-2xl">
          {event?.description}
        </div>
      </BackgroundGradient>

      <div className="mb-2 mt-10 text-center font-AnotherFont text-7xl text-black sm:text-7xl lg:text-6xl ">
        {`Rules`}
      </div>

      <div className="rounded-lg bg-transparent from-yellow-400 via-orange-400 to-pink-500 p-6 font-serif text-xl font-bold text-white shadow-lg sm:text-2xl lg:text-3xl">
        {/* Make sure rules data is available */}
        {total?.rules ? total?.rules : "No rules available."}
      </div>
    </div>
  );
}
