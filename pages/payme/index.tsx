"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { useSession, signIn } from "next-auth/react";

type PricingCardProps = {
  title: string;
  price: number;
  originalPrice?: number; // Optional original price
  description: string;
  features: string[];
  actionLabel: string;
};

const PricingCard = ({
  title,
  price,
  originalPrice,
  description,
  features,
  actionLabel,
}: PricingCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
  >
    <Card className="max-w-80 space-y-6 transition-transform hover:scale-105 hover:shadow-lg">
      <CardHeader className="gap-8 pb-8 pt-4">
        <CardTitle>{title}</CardTitle>
        <div className="my-6 flex flex-col items-center">
          {originalPrice && (
            <span className="text-md text-gray-500 line-through">
              Rs {originalPrice}
            </span>
          )}
          <h3 className="bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-3xl font-bold text-transparent">
            Rs {price}
          </h3>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <CardDescription className="h-12 pt-1.5">{description}</CardDescription>

        {features.map((f, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className="flex items-center justify-center gap-4 text-sm text-muted-foreground"
          >
            <CheckCircle2 className="h-4 w-4 text-green-500" />
            {f}
          </motion.span>
        ))}
      </CardContent>
      <CardFooter className="mt-2">
        <Button
          className="w-full transform rounded-lg bg-gradient-to-r from-pink-500 to-purple-500 py-3 font-semibold text-white shadow-lg transition-transform hover:scale-105 hover:from-purple-500 hover:to-pink-500 active:scale-95"
          asChild
        >
          <Link
            href={`/checkout?price=${price}&plan=${encodeURIComponent(title)}`}
          >
            {actionLabel}
          </Link>
        </Button>
      </CardFooter>
    </Card>
  </motion.div>
);

export default function Page() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <div className="container flex min-h-screen items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  if (!session) {
    return (
      <div className="container flex min-h-screen flex-col items-center justify-center text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Please Sign In
        </motion.h1>
        <Button
          className="mt-8 transform bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-3 font-semibold text-white shadow-lg hover:scale-105"
          onClick={() => signIn()}
        >
          Sign In
        </Button>
      </div>
    );
  }

  const plans = [
    {
      title: "Culfest 2025 Standard Plan",
      price: session.user.isNITJSR ? 350 : 650,
      originalPrice: session.user.isNITJSR ? 500 : 1000,
      description: "Pay for participating in one event only",
      features: ["Only Participate in one event"],
      actionLabel: "Get It",
    },
    {
      title: "Culfest 2025 Premium Plan",
      price: session.user.isNITJSR ? 500 : 1250,
      originalPrice: session.user.isNITJSR ? 650 : 1500,
      description: "Pay for participating in all the events and cultural night",
      features: [
        "Participate in all the events",
        "Accommodation for outsiders",
      ],
      actionLabel: "Get It",
    },
  ];

  return (
    <div className="container flex flex-col items-center justify-center py-8 text-center">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="scroll-m-20 text-4xl font-extrabold tracking-tight"
      >
        Pricing Plans
      </motion.h1>

      <section className="mt-20 flex flex-col justify-center gap-8 sm:flex-row sm:flex-wrap">
        {plans.map((plan) => (
          <PricingCard key={plan.title} {...plan} />
        ))}
      </section>
      <Link href={"/contactus"}>
        <Button className="mt-16 transform bg-gradient-to-r from-pink-500 to-purple-500 px-6 py-3 font-semibold text-white shadow-lg hover:scale-105">
          Contact Us
        </Button>
      </Link>
    </div>
  );
}
