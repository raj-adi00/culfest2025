import { useEffect } from "react";
import { useRouter } from "next/router";
import { mockData, EventData } from "../../utils/mockdata";
import { BackgroundGradientDemo } from "@/components/background_gradient";
import Head from "next/head";
const EventPage: React.FC = () => {
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
    return <p>Loading...</p>;
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
      className="flex items-center justify-center px-4 py-6"
      style={{
        backgroundImage: "url('/andy-holmes-rCbdp8VCYhQ-unsplash.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        // width: "100vw", // Ensures the width spans the viewport
        // height: "100vh", // Ensures the height spans the viewport
        // minHeight: "100vh", // A fallback to ensure minimum height fills the screen
      }}
    >
      <Head>
        <title>{eventname}</title>
        <meta name="description" content="Explore Event Page" />
      </Head>
      <BackgroundGradientDemo total={{ event, rules }} />
    </div>
  );
};

export default EventPage;
