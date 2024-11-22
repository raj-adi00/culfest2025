import { useRouter } from "next/router";
import { mockData, EventData } from "../../utils/mockdata";
import { AuroraBackgroundDemo } from "@/components/backgroundaurora";
import Image from "next/image";
import { TypewriterEffectDemo } from "@/components/typewritermodel";
import { TypewriterEffectDemo2 } from "@/components/typewriterdemo2";
import { MovingBorderDemo } from "@/components/ButtonBorder";
import { MovingBorderDemo2 } from "@/components/moving-border-exm";

const EventPage: React.FC = () => {
  const router = useRouter();
  const { eventname } = router.query;

  // Handle loading state if the router is not ready
  if (!router.isReady || !eventname) {
    return <p>Loading...</p>;
  }

  // Find the event by its ID (case-insensitive search)
  const event: EventData | undefined = mockData.find(
    (item) => item.id.toLowerCase() === (eventname as string).toLowerCase()
  );

  // Handle 404 if the event is not found
  if (!event) {
    return <p>Event not found!</p>;
  }

  const { eventname: name, description, image, rules } = event;

  return (
    <div
      style={{
        backgroundImage: "url('/andy-holmes-rCbdp8VCYhQ-unsplash.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        position: "relative",
        color: "white",
      }}
    >
      {/* Uncomment if AuroraBackgroundDemo is ready */}
      {/* <AuroraBackgroundDemo /> */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          padding: "2rem",
          backgroundColor: "rgba(0, 0, 0, 0.0)",
          // maxWidth: "1000px",
          margin: "0 auto",
          borderRadius: "10px",
        }}
      >
        {/* Animated border for title */}
        {/* <MovingBorderDemo2> */}
        <div className="mx-auto mb-8 rounded-lg bg-black bg-opacity-20 p-4 text-center">
          <TypewriterEffectDemo2 name={name} />
        </div>
        {/* </MovingBorderDemo2> */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            gap: "2rem",
            marginBottom: "2rem",
          }}
        >
          {/* Image on the left */}
          <Image
            src={image}
            alt={name}
            width={600} // Increased size
            height={400} // Increased size
            style={{
              borderRadius: "8px",
              flexShrink: 0,
            }}
          />
          {/* Description on the right */}
          <div
            style={{
              flex: 2, // Increased content space
              backgroundColor: "rgba(0, 0, 0, 0.2)",
              padding: "2rem", // Added padding
              borderRadius: "8px",
            }}
          >
            <h2>Description</h2>
            <p>{description}</p>
          </div>
        </div>

        {/* Rules below */}
        <div
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.2)",
            padding: "2rem", // Increased padding
            borderRadius: "8px",
          }}
        >
          <h2>Rules</h2>
          <ul>{rules}</ul>
        </div>
      </div>

      <style jsx>{`
        .event-title {
          text-align: center;
          font-size: 3rem; /* Increased size */
          font-weight: bold;
          color: #fff;
 .bg-opacity-20       }
        {background-color: rgba(0, 0, 0, 0.2);}
      `}</style>
    </div>
  );
};

export default EventPage;
