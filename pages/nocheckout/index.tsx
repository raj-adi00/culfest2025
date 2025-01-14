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
import { getSession, signIn, useSession } from "next-auth/react";
import Head from "next/head";
const product = { price: 1250 };
export default function Checkout() {
  const router = useRouter();
  const params = useSearchParams();
  const amount = params.get("amount");
  const plan = params.get("plan");
  const numericPrice = Number(amount);
  const { data: main, status } = useSession();
  const idRef = React.useRef<string | undefined>();
  const [loading, setLoading] = React.useState(false);
  const [loading1, setLoading1] = React.useState(true);

  React.useEffect(() => {
    if (!amount) {
      router.replace("/");
      return;
    }

    const checkUserPaymentStatus = async () => {
      try {
        const session = await getSession();
        // console.log(session);
        if (!session) {
          router.replace("/login");
          return;
        }

        const response = await fetch("/api/order", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ amount: numericPrice * 100, session, plan }),
        });

        if (response.ok) {
          const data = await response.json();
          idRef.current = data.orderId;
          setLoading1(false);
        } else if (response.status === 400) {
          alert("You have already made a payment");
          router.replace("/profile");
        } else {
          const errorData = await response.json();
          alert(errorData.msg);
          router.replace("/profile");
        }
      } catch (error) {
        console.error("Error during fetch operation:", error);
      }
    };

    checkUserPaymentStatus();
  }, []);
  // if (session.user.isNITJSR) {
  //   if (plan === "Culfest 2025 Standard Plan" && numericPrice === 300) {
  //     product.price = 300;
  //   } else {
  //     product.price = 500;
  //   }
  // } else {
  //   if (plan === "Culfest 2025 Standard Plan" && numericPrice === 650) {
  //     product.price = 650;
  //   } else {
  //     product.price = 1250;
  //   }
  // }
  // Derived variables
  let productPrice = 1250;
  if (main?.user?.isNITJSR) {
    if (plan === "Culfest 2025 Standard Plan" && numericPrice === 300) {
      productPrice = 300;
    } else {
      productPrice = 500;
    }
  } else {
    if (plan === "Culfest 2025 Standard Plan" && numericPrice === 650) {
      productPrice = 650;
    } else {
      productPrice = 1250;
    }
  }

  const orderDetails = {
    customerName: main?.user?.name,
    customerMail: main?.user?.email,
    customerPhone: main?.user?.phone,
    order_amount: productPrice,
    plan,
    items: [
      { naam: "Participation Charge", paisa: 0 },
      { naam: "Accomodation Charge", paisa: 0 },
      { naam: "Food Charge", paisa: 0 },
      { naam: "Cultural Night Charge", paisa: 0 },
    ],
  };
  if (main && main.user?.isNITJSR) {
    orderDetails.items[0].paisa = Number(productPrice);
  } else {
    if (productPrice === 650) {
      orderDetails.items[0].paisa = 350;
      orderDetails.items[1].paisa = 0;
      orderDetails.items[2].paisa = 0;
      orderDetails.items[3].paisa = 300;
    } else {
      orderDetails.items[0].paisa = 500;
      orderDetails.items[1].paisa = 200;
      orderDetails.items[2].paisa = 250;
      orderDetails.items[3].paisa = 300;
    }
  }
  if (status === "loading" || loading1) {
    return (
      <motion.div
        className="container flex h-screen items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <LoaderCircle className="h-20 w-20 animate-spin text-primary" />
      </motion.div>
    );
  }

  if (!main) {
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

  const processPayment = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const session = await getSession();
      if (!session) {
        router.replace("/login");
        return;
      }
      // console.log(process.env.NEXT_PUBLIC_KEY_ID);
      const options = {
        key: process.env.NEXT_PUBLIC_KEY_ID,
        amount: numericPrice * 100,
        currency: "INR",
        name: session?.user?.name,
        description: session?.user?.phone,
        order_id: idRef.current,
        handler: async (response: any) => {
          setLoading(true);
          setLoading1(true);
          const data = {
            orderCreationId: idRef.current,
            razorpayPaymentId: response.razorpay_payment_id,
            razorpayOrderId: response.razorpay_order_id,
            razorpaySignature: response.razorpay_signature,
            session,
            productPrice,
          };

          const result = await fetch("/api/verify", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
          });

          const res = await result.json();
          if (res.isOk) {
            alert(res.message);
            router.replace("/profile");
          } else {
            alert(res.message);
          }
        },
        theme: { color: "#6366f1" },
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Script
        id="razorpay-checkout-js"
        src="https://checkout.razorpay.com/v1/checkout.js"
      />

      <Head>
        <title>Checkout Page</title>
        <meta name="description" content="Explore Contact Us Page" />
        <link rel="icon" href="/culfest_logo.png" />
      </Head>
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 px-4">
        <div className="w-full max-w-lg transform rounded-xl bg-white p-6 shadow-lg transition-transform duration-500 hover:scale-105">
          <h1 className="mb-6 text-center text-3xl font-bold text-gray-800">
            Checkout
          </h1>
          <h1 className="mb-6 text-center text-3xl font-bold text-gray-800">
            Order & Billing
          </h1>
          <div className="space-y-6">
            {/* <div>
        <p className="text-gray-600">Order ID:</p>
        <p className="font-medium text-gray-900">{idRef.current}</p>
      </div> */}
            <div className="flex-col flex-wrap gap-2">
              <p className="text-gray-600">Customer Name:</p>
              <span className="font-medium text-gray-900">
                {orderDetails.customerName}
              </span>
              <p className="text-gray-600">Customer Phone:</p>
              <p className="font-medium text-gray-900">
                {orderDetails.customerPhone}
              </p>
              <p className="text-gray-600">Customer Mail:</p>
              <p className="font-medium text-gray-900">
                {orderDetails.customerMail}
              </p>
            </div>
            <div>
              <p className="text-gray-600">Items:</p>
              <ul className="space-y-3">
                {orderDetails.items.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center justify-between rounded-lg bg-gray-100 p-3 shadow"
                  >
                    <span className="font-medium">{item.naam}</span>
                    <span className="text-gray-700">₹{item.paisa}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-gray-600">Total:</p>
              <p className="text-2xl font-bold text-gray-800">
                ₹{productPrice}
              </p>
            </div>
          </div>
          {loading ? (
            <div className="mt-8 text-center">
              <p>Loading...</p>
            </div>
          ) : (
            <form onSubmit={processPayment}>
              <Button
                className="w-full transform rounded-lg bg-gradient-to-r from-blue-500 to-indigo-500 py-3 font-semibold text-white shadow-md transition-transform hover:scale-105 hover:from-indigo-500 hover:to-blue-500 active:scale-95"
                type="submit"
              >
                {loading ? "Processing..." : "Pay"}
              </Button>
            </form>
          )}
        </div>
      </div>
    </>
  );
}
