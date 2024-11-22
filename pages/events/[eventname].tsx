import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { mockData, EventData } from "../../utils/mockdata";
import { BackgroundGradientDemo } from "@/components/background_gradient";

const EventPage: React.FC = () => {
  const router = useRouter();
  const { eventname } = router.query;

  useEffect(() => {
    if (!router.isReady) return; // Wait for router to be ready

    // Check if the page has been visited before in the current session
    const visitedBefore = sessionStorage.getItem("hasVisitedEventPage");

    if (!visitedBefore) {
      // Set a flag to mark this page has been visited in the session
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
      style={{
        backgroundImage: "url('/andy-holmes-rCbdp8VCYhQ-unsplash.jpg')",
        backgroundSize: "cover",
      }}
    >
      <BackgroundGradientDemo total={{ event, rules }} />
    </div>
  );
};

export default EventPage;
