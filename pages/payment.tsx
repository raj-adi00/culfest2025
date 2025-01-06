import { useState, useEffect } from "react";
import React from "react";
// @ts-ignore
import { load } from "@cashfreepayments/cashfree-js";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";
// import { Button } from "@/components/ui/button";
import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Link from "next/link";

interface PaymentResponse {
  success: boolean;
  data: {
    payment_session_id: string;
  };
}

interface Product {
  price: number;
}

const product = { price: 1250 };

const PaymentComponent: React.FC<{ product: Product }> = () => {
  const [loading, setLoading] = React.useState(false);
  const [loading1, setLoading1] = React.useState(true);
  const { data: session, status } = useSession();
  const router = useRouter();
  const [paymentSessionId, setPaymentSessionId] = useState<string>("");
  const [orderId, setOrderId] = useState<string | null>(null);
  const idRef = React.useRef<string | undefined>();
  // Load Cashfree SDK once on component mount
  React.useEffect(() => {
    const initializeSDK = async () => {
      try {
        await load({ mode: "production" });
        console.log("Cashfree SDK loaded successfully");
      } catch (error) {
        console.error("Error loading Cashfree SDK:", error);
      }
    };

    initializeSDK();
  }, []);

  if (status === "loading") {
    return (
      <div className="container flex min-h-screen items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }
  const generateTransactionId = (prefix = "order") => {
    const timestamp = new Date().toISOString().slice(2, 8).replace(/-/g, "");
    const uuid = crypto.randomUUID().replace(/-/g, "").slice(0, 12);
    return `${prefix}_${timestamp}_${uuid}`;
  };
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
  } else {
    product.price = session.user.isNITJSR ? 500 : 1250;
  }

  const handleBuyNow = async (price: number) => {
    setLoading(true);
    if (!session) {
      router.replace("/login");
      return;
    }

    // const orderId = `order_${new Date().getTime()}`;
    const orderId = generateTransactionId("order"); //unique orderID created
    // console.log(orderId)
    localStorage.setItem("order_id", orderId);
    idRef.current = orderId;
    if (!idRef.current) {
      console.error("Order ID is null");
      setLoading(false);
      return;
    }

    setOrderId(orderId);
    try {
      const id = idRef.current;
      const response = await fetch("/api/payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          order_id: id,
          order_amount: price,
          customer_id: `cust_${new Date().getTime()}`,
          customer_phone: `${session.user.phone}`, // Sample phone number
          session,
        }),
      });

      const data: any = await response.json();

      if (data?.success) {
        setPaymentSessionId(data.data.payment_session_id);
        initiatePayment(data.data.payment_session_id);
        setLoading(false);
      } else {
        alert(data?.msg);
        setLoading(false);
        router.replace("/profile");
      }
    } catch (error) {
      console.error("Network Error:", error);
      setLoading(false);
    }
  };

  const verifyPayment = async () => {
    setLoading(true);
    try {
      const id = idRef.current;
      const res = await axios.post("/api/authenticate", {
        id,
        session,
      });

      if (res && res.data.order_status === "Success") {
        setLoading(false);
        alert("Payment verified");
        router.replace("/profile");
      }
    } catch (error) {
      setLoading(false);
      console.error("Verification Error:", error);
    }
  };

  const initiatePayment = async (sessionId: string) => {
    const cashfree = await load({ mode: "production" });

    const checkoutOptions = {
      paymentSessionId: sessionId,
      redirectTarget: "_modal",
    };

    cashfree.checkout(checkoutOptions).then(() => {
      verifyPayment();
    });
  };

  return (
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
            <span className="font-bold">{product.price}</span>
          </CardDescription>
        </CardHeader>
        <CardContent>
          {/* <form onSubmit={processPayment}> */}
          <Button
            className="w-full transform rounded-lg bg-gradient-to-r from-blue-500 to-indigo-500 py-3 font-semibold text-white shadow-md transition-transform hover:scale-105 hover:from-indigo-500 hover:to-blue-500 active:scale-95"
            type="submit"
            onClick={() => handleBuyNow(product.price)}
          >
            {loading ? "Processing..." : "Pay"}
          </Button>
          {/* </form> */}
        </CardContent>
        <CardFooter className="flex">
          <motion.p
            className="cursor-pointer text-sm text-muted-foreground underline underline-offset-4 hover:text-indigo-500"
            whileHover={{ scale: 1.05 }}
          >
            <Link href={"/Culfest_Event_Policies.pdf"}>
              Please read the terms and conditions.
            </Link>
          </motion.p>
        </CardFooter>
      </Card>
      <Link href={"/contactus"}>
        <Button className="mt-16 transform bg-gradient-to-r from-pink-500 to-purple-500 px-6 py-3 font-semibold text-white shadow-lg hover:scale-105">
          Contact Us
        </Button>
      </Link>
    </motion.section>
  );
};

export default PaymentComponent;
