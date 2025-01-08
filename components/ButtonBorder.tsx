"use client";
import React from "react";
import { Button } from "../components/ui/moving-border";
import Link from "next/link";

export function MovingBorderDemo({ item }: any) {
  return (
    <div className="py-1">
      <Link href={`/events/${item.id.toString().toLowerCase()}`} passHref>
        <Button
          borderRadius="1.75rem"
          className="border-none bg-gradient-to-r from-purple-500 to-pink-500 text-lg text-white"
        >
          Read More ...
        </Button>
      </Link>
    </div>
  );
}
