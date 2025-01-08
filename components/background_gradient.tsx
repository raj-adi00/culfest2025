"use client";
import React from "react";
import { BackgroundGradient } from "./ui/background-gradient";
import { IconAppWindow } from "@tabler/icons-react";
import Image from "next/image";
import { MovingBorderDemo3 } from "./MovingBorder3";
import Link from "next/link";
import { Button } from "./ui/button";

export function BackgroundGradientDemo({ total }: any) {
  const event = total?.event;
  const mssg = total?.message;
  return (
    <div className="p-4">
      <BackgroundGradient className="rounded-[22px] bg-white p-2 dark:bg-zinc-900 sm:p-6 lg:p-10">
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4 sm:gap-8">
          {/* Logo */}
          <Link href="/">
            <div>
              <img
                src="/colorLogo.png"
                alt="Logo"
                className="absolute left-2 top-2 h-10 animate-pulse sm:h-20 "
              />
            </div>
          </Link>

          {/* Event Name */}
          <div className="text-center sm:text-left">
            <div className="mb-4 mt-6 font-AnotherFont text-5xl text-white drop-shadow-[0_0_5px_black] sm:text-6xl lg:text-8xl">
              {event?.eventname}
              {`!!`}
            </div>
          </div>

          {/* Event Image */}
          <div className="w-full max-w-[350px] border-none bg-gradient-to-r from-purple-500 to-pink-500 p-1 sm:max-w-[400px] lg:max-w-[500px]">
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
        <div className="mt-8 p-6 text-center font-Piedra text-2xl text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-4xl lg:text-4xl">
          {event?.description}
        </div>
      </BackgroundGradient>

      {/* Rules Section */}

      <div
        className=" mt-6 rounded-[22px]  border-2 p-4 font-serif text-base font-bold text-white shadow-lg sm:p-6 sm:text-lg lg:text-xl"
        style={{
          backgroundImage: "url('/bg120.jpg')", // Add the path to your background image
          backgroundSize: "cover", // Ensures the image covers the full screen
          backgroundPosition: "center", // Centers the image
          backgroundAttachment: "fixed", // Keeps the background image fixed when scrolling
          minHeight: "100vh",
        }}
      >
        <div className="mb-6  mt-6 text-center font-AnotherFont text-5xl text-white drop-shadow-[0_0_5px_black] sm:text-6xl lg:text-7xl">
          {`DETAILS OF THE EVENT`}
        </div>
        {total?.rules ? total?.rules : "No rules available."}
        <div>
          {total?.status == "unauthenticated" && (
            <Link href={"/login"}>
              <Button className="mt-16 transform bg-gradient-to-r from-pink-500 to-purple-500 px-6 py-3 font-semibold text-white shadow-lg hover:scale-105">
                Login to Participate
              </Button>
            </Link>
          )}
          {mssg && mssg === "Payment not found" && (
            <Link href={"/payme"}>
              <Button className="mt-16 transform bg-gradient-to-r from-pink-500 to-purple-500 px-6 py-3 font-semibold text-white shadow-lg hover:scale-105">
                Pay to Participate
              </Button>
            </Link>
          )}
          {mssg && mssg === "User not found" && (
            <Link href={"/login"}>
              <Button className="mt-16 transform bg-gradient-to-r from-pink-500 to-purple-500 px-6 py-3 font-semibold text-white shadow-lg hover:scale-105">
                Login to Participate
              </Button>
            </Link>
          )}
          {mssg && mssg === "Payment verified successfully" && (
            <Link href={`/participate`}>
              <Button className="mt-16 transform bg-gradient-to-r from-pink-500 to-purple-500 px-6 py-3 font-semibold text-white shadow-lg hover:scale-105">
                Participate
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
