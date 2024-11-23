"use client";
import React from "react";
import { Button } from "../components/ui/moving-border";
import Link from "next/link";

interface MovingBorderDemo2Props {
  children: React.ReactNode;
}

export function MovingBorderDemo2({ children }: MovingBorderDemo2Props) {
  return <div className="py-1">{children}</div>;
}
