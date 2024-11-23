"use client";
import React from "react";
import { Button } from "../components/ui/moving-border";
import Link from "next/link";
import { chdir } from "process";

export function MovingBorderDemo3({ children }: any) {
  return (
    <div className="py-1">
      <div
        // borderRadius="1.75rem"

        className="border-3 bg-gradient-to-r from-purple-500 to-pink-500 text-lg text-white"
      >
        {children}
      </div>
    </div>
  );
}
