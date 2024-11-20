"use client";
import React from "react";
import { Button } from "../components/ui/moving-border";

export function MovingBorderDemo() {
  return (
    <div className="py-1">
      <Button
        borderRadius="1.75rem"
        className="border-none bg-gradient-to-r from-purple-500 to-pink-500 text-lg text-white"
      >
        Read More ...
      </Button>
    </div>
  );
}
