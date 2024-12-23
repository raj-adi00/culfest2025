"use client";
import React from "react";
import { BackgroundGradient } from "./ui/background-gradient";
import { IconAppWindow } from "@tabler/icons-react";
import Image from "next/image";
import { MovingBorderDemo3 } from "./MovingBorder3";

export function BackgroundGradientDemo({ total }: any) {
  const event = total?.event;
  return (
    <div className="p-4">
      <BackgroundGradient className="rounded-[22px] bg-white p-2 dark:bg-zinc-900 sm:p-6 lg:p-10">
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4 sm:gap-8">
          {/* Logo */}
          <div>
            <img
              src="/colorLogo.png"
              alt="Logo"
              className="absolute left-2 top-2 h-10 animate-pulse sm:h-20 "
            />
          </div>
          {/* Event Name */}
          <div className="text-center sm:text-left">
            <div className="mb-4 mt-6 font-AnotherFont text-4xl text-black sm:text-5xl lg:text-7xl">
              {event?.eventname}
              {`!!`}
            </div>
          </div>

          {/* Event Image */}
          <div className="w-full max-w-[300px] border-none bg-gradient-to-r from-purple-500 to-pink-500 p-1 sm:max-w-[400px] lg:max-w-[500px]">
            <Image
              src={event?.image}
              alt="Event Image"
              height={600}
              width={600}
              className="h-auto w-full rounded-lg object-cover"
            />
          </div>
        </div>

        {/* Event Description */}
        <div className="mt-8 p-6 text-center text-2xl text-white dark:text-white sm:text-4xl lg:text-4xl">
          {event?.description}
        </div>
      </BackgroundGradient>

      {/* Rules Section */}
      <div className="mb-6 mt-8 text-center font-AnotherFont text-3xl text-black sm:text-5xl lg:text-6xl">
        {`Rules`}
      </div>

      <div className="rounded-lg  p-4 text-center font-serif text-base font-bold text-white shadow-lg sm:p-6 sm:text-lg lg:text-xl">
        {total?.rules ? total?.rules : "No rules available."}
      </div>
    </div>
  );
}
