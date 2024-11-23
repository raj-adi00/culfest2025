"use client";
import { InfiniteMovingCards } from "../components/ui/infinte-moving-card";
// Sample data for sponsors
const sponsors = [
  { name: "Domino Pizza", logo: "/ss_files/DominoPizza-asAvgJIR.png" },
  { name: "Hero", logo: "/ss_files/HERO-O7GO_Fiv.png" },
  { name: "Himalaya", logo: "/ss_files/himalaya-RXMg820Q.png" },
  { name: "The Social House", logo: "/ss_files/socialHouse-7oJnnpNJ.png" },
  { name: "Swiggy", logo: "/ss_files/swiggy-1BDPCukC.png" },
  // Add more sponsors as needed
];

function SponsorCards() {
  return (
    <div
      className=" reletive flex w-full flex-col items-center justify-center overflow-hidden bg-gray-900 p-6 "
      style={{
        backgroundImage: "url('/andy-holmes-rCbdp8VCYhQ-unsplash.jpg')",
      }}
    >
      <h2 className="md-8 z-10 pb-8 text-center font-AnotherFont text-5xl text-yellow-600 drop-shadow-sm">
        Our Proud Sponsors
      </h2>
      <div className="align-center mt-22 mt-31 mt-45 flex w-full justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="">
          <InfiniteMovingCards
            items={sponsors}
            direction="right"
            speed="fast"
          />
        </div>
      </div>
    </div>
  );
}

export default SponsorCards;
