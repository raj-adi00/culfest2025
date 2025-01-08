import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { mockData, EventData } from "../../utils/mockdata";
import { BackgroundGradientDemo } from "@/components/background_gradient";
import Head from "next/head";
import { motion } from "framer-motion";
import { useSession } from "next-auth/react";
import axios from "axios";

const EventPage: React.FC = () => {
  const session = useSession();
  const [posts, setPosts] = useState<any>(null);
  const [message, setMessage] = useState<any>(null);
  const [status, setStatus] = useState<string | null>("Loading");
  console.log(session);
  useEffect(() => {
    if (session.status === "authenticated") {
      setStatus("authenticated");
      const fetchPosts = async () => {
        // Use a function expression here
        try {
          const res = await axios.post("/api/verifyPaymentStatus", {
            session,
          });
          console.log(res.data);
          setPosts(res.data);
          // console.log(posts);
          if (res.data.message == "Payment not found") {
            setMessage("Payment not found");
          } else if (res.data.message == "User not found") {
            setMessage("User not found");
          } else if (res.data.message == "Payment verified successfully") {
            setMessage("Payment verified successfully");
          }
        } catch (error) {
          console.error("Error fetching posts:", error);
        }
      };
      fetchPosts();
    } else if (session.status === "unauthenticated") {
      setStatus("unauthenticated");
    }
  }, [session]);
  const router = useRouter();
  const { eventname } = router.query;

  useEffect(() => {
    if (!router.isReady) return; // Wait for router to be ready

    // Check if the page has been visited before in the current session
    const visitedBefore = sessionStorage.getItem("hasVisitedEventPage");

    if (!visitedBefore) {
      // Set a flag to mark this page as visited in the session
      sessionStorage.setItem("hasVisitedEventPage", "true");

      // Force reload the page
      window.location.reload();
    } else {
      // After the reload, clear the session storage flag
      sessionStorage.removeItem("hasVisitedEventPage");
    }
  }, [router.isReady]);

  if (!router.isReady || !eventname) {
    return (
      // <div className=">
      <div
        className="bg-black"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          // backgroundColor: "",
          zIndex: 9999, // Ensure it's on top
          pointerEvents: "none", // Allow background elements to remain clickable
        }}
      >
        <div
          className="custom-loader"
          style={{
            pointerEvents: "auto", // Enable interaction for the button only
          }}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative z-10 w-full overflow-hidden rounded-md border-2 border-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 px-4 py-2 font-semibold text-white"
            style={{
              backgroundClip: "padding-box",
              boxShadow: "0 0 10px rgba(255, 255, 255, 0.5)",
            }}
          >
            <div
              className="absolute inset-0 rounded-md bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 opacity-70 blur-lg"
              style={{
                zIndex: -1,
                animation: "glowAnimation 3s linear infinite",
              }}
            ></div>
            Loading ...
          </motion.button>
        </div>
      </div>
      // </div>
    );
  }

  const event: EventData | undefined = mockData.find(
    (item) => item?.id.toLowerCase() === (eventname as string).toLowerCase()
  );

  if (!event) {
    return <p>Event not found!</p>;
  }

  const { rules } = event;

  return (
    <div
      className="flex items-center justify-center "
      style={{
        backgroundImage: "url('/bg122.jpg')", // Add the path to your background image
        backgroundSize: "cover", // Ensures the image covers the full screen
        backgroundPosition: "center", // Centers the image
        backgroundAttachment: "fixed", // Keeps the background image fixed when scrolling
        minHeight: "100vh",
      }}
    >
      <Head>
        <title>{eventname}</title>
        <meta name="description" content="Explore Event Page" />
      </Head>
      <BackgroundGradientDemo
        total={{ event, rules, message, status, eventname }}
      />
    </div>
  );
};

export default EventPage;
