import { VortexDemo } from "@/components/vortexdemo";
import { mockData } from "../mockdata";
import Image from "next/image";
import { MovingBorderDemo } from "@/components/ButtonBorder";

export const DummyContent5 = () => {
  const danceEvents = mockData.filter((item) => item.category === "Quizzing"); // Filter by category

  return (
    <div className="bg-cover bg-fixed bg-center">
      {danceEvents.length > 0 ? (
        danceEvents.map((item, index) => (
          <div
            className="mb-4 rounded-3xl bg-[#F5F5F7] p-6 md:p-10 lg:p-14"
            key={"dummy-content" + index}
          >
            <div className="relative text-center font-AnotherFont text-3xl [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))] md:text-4xl lg:text-5xl">
              <div className="absolute left-0 top-[1px] w-full bg-clip-text bg-no-repeat py-3 text-center text-5xl text-orange-500 text-transparent [text-shadow:0_0_rgba(0,0,0,0.1)] md:text-6xl lg:text-7xl">
                <span className="block break-words">{item.eventname}</span>
              </div>
              <div className="relative w-full bg-gradient-to-r bg-clip-text bg-no-repeat py-3 text-center text-5xl text-transparent text-yellow-600 md:text-6xl lg:text-7xl">
                <span className="block break-words">{item.eventname}</span>
              </div>
            </div>

            <Image
              src={item.image}
              alt={item.eventname + " mockup"} // Updated alt text for better accessibility
              height={1000}
              width={1000}
              className="mx-auto w-full object-contain sm:w-3/4 md:w-2/3 lg:w-2/3"
            />

            <MovingBorderDemo item={item} />
          </div>
        ))
      ) : (
        <p className="text-center text-white">No dance events available</p> // Fallback UI when no dance events
      )}
    </div>
  );
};
