import { useRouter } from "next/router";
import { mockData, EventData } from "../../utils/mockdata";
import { AuroraBackgroundDemo } from "@/components/backgroundaurora";

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
    <div>
      {/* Uncomment if AuroraBackgroundDemo is ready */}
      {/* <AuroraBackgroundDemo /> */}
      <div>
        <h1>{name}</h1>
        <img
          src={image}
          alt={name}
          style={{ width: "300px", height: "200px" }}
        />
        <p>{description}</p>
        <h2>Rules</h2>
        <ul>{rules}</ul>
      </div>
    </div>
  );
};

export default EventPage;
