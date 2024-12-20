"use client";
import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useRouter, useSearchParams } from "next/navigation";
import Script from "next/script";
import { LoaderCircle } from "lucide-react";
import { motion } from "framer-motion";
import { getSession } from "next-auth/react";

export default function Checkout() {
  const router = useRouter();
  const params = useSearchParams();
  const amount = params.get("amount");
  const [loading, setLoading] = React.useState(false);
  const [loading1, setLoading1] = React.useState(true);
  const idRef = React.useRef<string | undefined>();

  React.useEffect(() => {
    if (!amount) {
      router.replace("/");
      return;
    }

    const checkUserPaymentStatus = async () => {
      try {
        const session = await getSession();
        if (!session) {
          router.replace("/login");
          return;
        }

        const response = await fetch("/api/order", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            amount: parseFloat(amount!) * 100,
            session,
          }),
        });

        if (response.ok) {
          const data = await response.json();
          const id = data.orderId;
          idRef.current = id;
          setLoading1(false);
        } else if (response.status === 400) {
          alert("You have already made a payment");
          router.replace("/success");
        } else {
          const data = await response.json();
          alert(data.error);
          router.replace("/register");
          throw new Error("Network response was not ok");
        }
      } catch (error) {
        console.error("Error during fetch operation:", error);
      }
    };

    checkUserPaymentStatus();
  }, [amount, router]);

  const processPayment = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const orderId = idRef.current;

    try {
      const session = await getSession();
      if (!session) {
        router.replace("/login");
        return;
      }

      const options = {
        key: process.env.key_id,
        amount: parseFloat(amount!) * 100,
        currency: "INR",
        name: "Payment",
        description: "Payment",
        order_id: orderId,
        handler: async function (response: any) {
          const data = {
            orderCreationId: orderId,
            razorpayPaymentId: response.razorpay_payment_id,
            razorpayOrderId: response.razorpay_order_id,
            razorpaySignature: response.razorpay_signature,
            session,
          };

          const result = await fetch("/api/verify", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          });

          const res = await result.json();
          if (res.isOk) {
            alert(res.message);
            router.replace("/payment-success");
          } else {
            alert(res.message);
          }
        },
        theme: {
          color: "#6366f1",
        },
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.on("payment.failed", function (response: any) {
        alert(response.error.description);
      });
      setLoading(false);
      paymentObject.open();
    } catch (error) {
      console.error(error);
    }
  };

  if (loading1)
    return (
      <motion.div
        className="container flex h-screen items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <LoaderCircle className="text-primary h-20 w-20 animate-spin" />
      </motion.div>
    );

  return (
    <>
      <Script
        id="razorpay-checkout-js"
        src="https://checkout.razorpay.com/v1/checkout.js"
      />

      <motion.section
        className="container flex h-screen flex-col items-center justify-center gap-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="scroll-m-20 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent">
          Checkout
        </h1>
        <Card className="max-w-[25rem] space-y-8 shadow-lg transition-transform hover:scale-105">
          <CardHeader>
            <CardTitle className="my-4 text-gray-800">Continue</CardTitle>
            <CardDescription className="text-gray-600">
              By clicking on pay, you'll pay Rs{" "}
              <span className="font-bold">{amount}</span>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={processPayment}>
              <Button
                className="w-full transform rounded-lg bg-gradient-to-r from-blue-500 to-indigo-500 py-3 font-semibold text-white shadow-md transition-transform hover:scale-105 hover:from-indigo-500 hover:to-blue-500 active:scale-95"
                type="submit"
              >
                {loading ? "Processing..." : "Pay"}
              </Button>
            </form>
          </CardContent>
          <CardFooter className="flex">
            <motion.p
              className="text-muted-foreground cursor-pointer text-sm underline underline-offset-4 hover:text-indigo-500"
              whileHover={{ scale: 1.05 }}
            >
              Please read the terms and conditions.
            </motion.p>
          </CardFooter>
        </Card>
      </motion.section>
    </>
  );
}
