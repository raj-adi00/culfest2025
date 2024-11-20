import { VortexDemo } from "@/components/vortexdemo";
import { mockData } from "../mockdata";
import Image from "next/image";
import { MovingBorderDemo } from "@/components/ButtonBorder";

export const DummyContent1 = () => {
  return (
    <>
      {mockData.map((item, index) => {
        return (
          <VortexDemo key={"dummy-content" + index}>
            {/* <div
                
                className="mb-4 rounded-3xl bg-[#F5F5F7] p-8 md:p-14"
              > */}
            <p className="mx-auto max-w-3xl font-sans text-base text-white md:text-2xl">
              <span className="font-bold text-white">{item.eventname}</span>{" "}
              {item.description}
            </p>

            <Image
              src={item.image}
              alt="Macbook mockup from Aceternity UI"
              height={1500} // Increase the height
              width={1500} // Increase the width
              className="mx-auto w-full object-contain md:w-3/4 lg:w-2/3" // Adjust responsiveness
            />
            {/* </div> */}
            <MovingBorderDemo item={item} />
          </VortexDemo>
        );
      })}
    </>
  );
};
