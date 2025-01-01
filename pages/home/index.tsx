"use client";
import dynamic from "next/dynamic";
import Loader from "@/components/Loader";
import Page1 from "@/components/Page1";
import SliderHero from "@/components/SliderHero";
import Footer from "@/components/Footer";

// Dynamically import GSAP and Locomotive Scroll to prevent SSR issues
const CursorEffect = dynamic(() => import("@/components/CursorEffect"), {
  ssr: false,
});
const pastceleb = [
  {
    img: "/back6.png",
    location: "",
    description:
      "The journey to Machu Picchu typically starts in the mountain city of Cusco, which was the capital city of the Inca Empire",
    title: "Shirley Shetia",
  },
  {
    img: "/3.png",
    title: "Lost Stories",
    description:
      "The earth's geological history opens before your eyes in a mile-deep chasm",
    location: "",
  },
  {
    img: "/4.png",
    title: "Julia Bliss",
    description:
      "Wild animals in their natural environment, luxury safari lodges",
    location: "",
  },
  {
    img: "/5.png",
    title: "TRAP",
    description:
      "A stunning ancient jungle city with hundreds of intricately constructed temples",
    location: "",
  },
  {
    img: "/6.png",
    title: "Mukesh Srivastava",
    description:
      "Tropical beaches, volcano hikes, ancient temples, and friendly people",
    location: "",
  },
  {
    img: "/9.png",
    title: "Rahat Indori",
    description:
      "Tropical beaches, volcano hikes, ancient temples, and friendly people",
    location: "",
  },
  {
    img: "/8.png",
    title: "Jubin Nautiyal",
    description:
      "Tropical beaches, volcano hikes, ancient temples, and friendly people",
    location: "",
  },
  {
    img: "/Sachin-Jigar.png",
    title: "Sachin-Jigar",
    description:
      "Tropical beaches, volcano hikes, ancient temples, and friendly people",
    location: "",
  },
  {
    img: "/aseem.png",
    title: "Aseem Sharma",
    description:
      "Tropical beaches, volcano hikes, ancient temples, and friendly people",
    location: "",
  },
  {
    img: "/DJ-Rhea.png",
    title: "DJ Rhea",
    description:
      "Tropical beaches, volcano hikes, ancient temples, and friendly people",
    location: "",
  },
];
export default function Home() {
  return (
    <div id="main">
      {/* <Loader /> */}
      <Page1 />

      <CursorEffect />
      <SliderHero sliderData={pastceleb} />
    </div>
  );
}
