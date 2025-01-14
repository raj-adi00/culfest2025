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
import { useRouter as useNavigator } from "next/navigation";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import Head from "next/head";

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
  const router1 = useRouter();
  // const [orderDetails] = useState({
  //   orderId: "123456",
  //   customerName: "John Doe",
  //   items: [
  //     { name: "Product A", price: 20, quantity: 2 },
  //     { name: "Product B", price: 15, quantity: 1 },
  //   ],
  // });

  const router = useNavigator();
  const { price, plan } = router1.query;
  // console.log(plan);
  const numericPrice = Number(price);

  const [loading, setLoading] = React.useState(false);
  const [loading1, setLoading1] = React.useState(true);
  const { data: session, status } = useSession();
  // const router = useRouter();
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
    if (session.user.isNITJSR) {
      if (plan === "Culfest 2025 Standard Plan" && numericPrice === 300) {
        product.price = 300;
      } else {
        product.price = 500;
      }
    } else {
      if (plan === "Culfest 2025 Standard Plan" && numericPrice === 650) {
        product.price = 650;
      } else {
        product.price = 1250;
      }
    }
  }
  const orderDetails = {
    customerName: session?.user?.name,
    customerMail: session?.user?.email,
    customerPhone: session?.user?.phone,
    order_id: orderId,
    order_amount: product.price,
    plan: plan,
    items: [
      { naam: "Participation Charge", paisa: 0 },
      { naam: "Accomodation Charge", paisa: 0 },
      { naam: "Food Charge", paisa: 0 },
      { naam: "Cultural Night Charge", paisa: 0 },
    ],
  };
  if (session && session.user?.isNITJSR) {
    orderDetails.items[0].paisa = Number(product.price);
  } else {
    if (product.price === 650) {
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
  const handleBuyNow = async (pricel: number) => {
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
          order_amount: pricel,
          plan: plan,
          customer_id: `cust_${new Date().getTime()}`,
          customer_phone: `${session.user.phone}`, // Sample phone number
          customer_name: `${session.user.name}`,
          customer_email: `${session.user.email}`,
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
    <>
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
                ₹{product.price}
              </p>
            </div>
          </div>
          {loading ? (
            <div className="mt-8 text-center">
              <p>Loading...</p>
            </div>
          ) : (
            <Button
              className="mt-8 transform bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-3 font-semibold text-white shadow-lg hover:scale-105"
              onClick={() => handleBuyNow(product.price)}
            >
              Pay Now
            </Button>
          )}
        </div>
      </div>
    </>
  );
};

export default PaymentComponent;