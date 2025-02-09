import ServiceCard from "@/components/ServiceCard";
import TextHelper from "@/components/text/TextHelper";
import React from "react";
const item = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 11, 1, 1, 1];

const page = () => {
  return (
    <div>
      {/* Heading */}
      <TextHelper className="text-2xl font-semibold text-center text-blackColor">
        Our Services
      </TextHelper>
      {/* Service List */}
      <div className="flex flex-row flex-wrap justify-center">
      {item.map((elem, ind) => {
        return <>
        <ServiceCard/>
        </>;
      })}
      </div>
    </div>
  );
};

export default page;
