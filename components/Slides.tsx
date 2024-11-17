// import { Data } from "@/pages";
import React from "react";
import SliderCard from "./SliderCard";
import { FloatingDockDemo } from "./Header";

type Props = {
  data: any[];
};

function Slides({ data }: Props) {
  return (
    <>
      <div className=" flex w-full gap-6">
        {data.map((data) => {
          return <SliderCard key={data.img} data={data} />;
        })}
      </div>
    </>
  );
}

export default Slides;
