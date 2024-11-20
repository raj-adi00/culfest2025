"use client";
import dynamic from "next/dynamic";
import { useRouter } from 'next/navigation';
import Loader from "@/components/Loader";
import Page1 from "@/components/Page1";
import SliderHero from "@/components/SliderHero";

const CursorEffect = dynamic(() => import("@/components/CursorEffect"), {
  ssr: false,
});
const pastceleb = [
  {
    img: "/back6.png",
    location: "",
    description: "",
    title: "Shirley Shetia",
  },
  {
    img: "/3.png",
    title: "Lost Stories",
    description: "",
    location: "",
  },
  {
    img: "/4.png",
    title: "Julia Bliss",
    description: "",
    location: "",
  },
  {
    img: "/5.png",
    title: "TRAP",
    description: "",
    location: "",
  },
  {
    img: "/6.png",
    title: "Mukesh Srivastava",
    description: "",
    location: "",
  },
  {
    img: "/9.png",
    title: "Rahat Indori",
    description: "",
    location: "",
  },
  {
    img: "/8.png",
    title: "Jubin Nautiyal",
    description: "",
    location: "",
  },
];
export default function Home() {
  const router = useRouter();

  return (
    <div id="main">
      <Page1 />
      <CursorEffect />
      <SliderHero sliderData={pastceleb} />
      <button onClick={() => router.push('/sponsors')}>
        Go to Sponsors
      </button>
    </div>
  );
}
