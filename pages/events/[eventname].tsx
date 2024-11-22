import { useRouter } from "next/router";
import { mockData, EventData } from "../../utils/mockdata";
import { AuroraBackgroundDemo } from "@/components/backgroundaurora";
import Image from "next/image";
import { TypewriterEffectDemo } from "@/components/typewritermodel";
import { TypewriterEffectDemo2 } from "@/components/typewriterdemo2";
import { MovingBorderDemo } from "@/components/ButtonBorder";
import { MovingBorderDemo2 } from "@/components/moving-border-exm";
import { BackgroundGradientDemo } from "@/components/background_gradient";

const EventPage: React.FC = () => {
  const router = useRouter();
  const { eventname } = router.query;

  if (!router.isReady || !eventname) {
    return <p>Loading...</p>;
  }

  const event: EventData | undefined = mockData.find(
    (item) => item.id.toLowerCase() === (eventname as string).toLowerCase()
  );

  if (!event) {
    return <p>Event not found!</p>;
  }

  const { eventname: name, description, image, rules } = event;

  return (
    <div
      style={{
        backgroundImage: "url('/andy-holmes-rCbdp8VCYhQ-unsplash.jpg')",
        backgroundSize: "cover",
        // backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        position: "relative",
        color: "white",
      }}
    >
      <BackgroundGradientDemo/>
    </div>
  );
};

export default EventPage;
