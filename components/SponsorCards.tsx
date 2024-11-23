"use client"
import {InfiniteMovingCards} from "../components/ui/infinte-moving-card"
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
    <div className=" w-full bg-gray-900 reletive flex flex-col items-center justify-center overflow-hidden">
        <h2 className="text-5xl text-center font-semibold text-gray-200 drop-shadow-sm md-8 z-10 pb-8">Our Proud Sponsors</h2>
       <div className="flex justify-center align-center w-full overflow-hidden px-4 mt-22 sm:px-6 mt-31 lg:px-8 mt-45">
         <div className="">
        <InfiniteMovingCards
        items={sponsors}
        direction="right"
        speed="fast"
      />
        </div>
    </div>
    </div>
  )
}

export default SponsorCards