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
            {/* <span className="font text-white"></span>{" "} */}
            <div className="relative inline-block w-max text-center font-AnotherFont text-4xl  [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
              <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat py-4 text-center text-7xl text-orange-500 text-transparent [text-shadow:0_0_rgba(0,0,0,0.1)]">
                {/* <span className="font-AnotherFont">{item.eventname}</span> */}
                {item.eventname}
              </div>
              <div className="relative bg-gradient-to-r bg-clip-text bg-no-repeat py-4 text-center text-7xl text-transparent text-yellow-600">
                {/* <span className="font-AnotherFont">{item.eventname}</span> */}
                {item.eventname}
              </div>
            </div>
            {/* <p className="mx-auto max-w-3xl  text-base text-white md:text-2xl">
              {item.description}
            </p> */}
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
