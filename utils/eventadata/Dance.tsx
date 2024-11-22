import { VortexDemo } from "@/components/vortexdemo";
import { mockData } from "../mockdata";
import Image from "next/image";
import { MovingBorderDemo } from "@/components/ButtonBorder";

export const DummyContent = () => {
  return (
    <div className=" bg-cover bg-fixed bg-center">
      {mockData.length > 0 ? (
        mockData.map((item, index) => (
          <div
            className="mb-4 rounded-3xl bg-[#F5F5F7] p-8 md:p-14"
            key={"dummy-content" + index}
          >
            <p className="mx-auto max-w-3xl font-sans text-base text-white md:text-2xl">
              <span className="font-bold text-white">{item.eventname}</span>{" "}
              {item.description}
            </p>

            <Image
              src={item.image}
              alt={item.eventname + " mockup"} // Updated alt text for better accessibility
              height={1500} // Increase the height
              width={1500} // Increase the width
              className="mx-auto w-full object-contain md:w-3/4 lg:w-2/3" // Adjust responsiveness
            />

            <MovingBorderDemo item={item} />
          </div>
        ))
      ) : (
        <p className="text-center text-white">No events available</p> // Fallback UI when mockData is empty
      )}
    </div>
  );
};
