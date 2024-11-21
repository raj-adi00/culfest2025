"use client";
import Image from "next/image";
import React from "react";
// export function OurSponser() {
//   const cards = data.map((card, index) => (
//     <Card key={card.src} card={card} index={index} layout={true} />
//   ));

 // Sample data for sponsors
const sponsors = [
    { name: "Domino Pizza", logo: "/ss_files/DominoPizza-asAvgJIR.png" },
    { name: "Hero", logo: "/ss_files/HERO-O7GO_Fiv.png" },
    { name: "Himalaya", logo: "/ss_files/himalaya-RXMg820Q.png" },
    { name: "The Social House", logo: "/ss_files/socialHouse-7oJnnpNJ.png" },
    { name: "Swiggy", logo: "/ss_files/swiggy-1BDPCukC.png" },
    // Add more sponsors as needed
  ];
  
  export function OurSponsors() {
    return (
      <div className="h-full w-full py-20 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 dark:from-gray-800 dark:via-gray-900 dark:to-black">
        <h2 className="text-center text-4xl text-white font-extrabold mb-12">Our Proud Sponsors</h2>
        
        {/* Sponsor Grid with a unique layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 px-6 dark:bg-gray-700">
          {sponsors.map((sponsor, index) => (
            <div key={index} className="relative group transform hover:scale-105 transition-all duration-300 ease-in-out">
              {/* Sponsor Card */}
              <div className="w-full h-60 bg-white shadow-xl rounded-2xl overflow-hidden transform hover:shadow-2xl transition-all duration-300">
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="w-full h-full object-contain transition-transform duration-500 ease-in-out group-hover:rotate-6 group-hover:scale-110"
                />
              </div>
              {/* Sponsor Name with a flip effect */}
              <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-2xl">
                <span className="text-white text-2xl font-semibold">{sponsor.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
