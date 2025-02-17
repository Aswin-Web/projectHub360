import React from "react";
import TextHelper from "./text/TextHelper";

const ServiceCard = ({
  data,
}: {
  data: {
    heading: string;
    desc: string;
    leftbutton: React.ReactNode;
    rightbutton: React.ReactNode;
  };
}) => {
  return (
    <div className="h-[30vh] border-2 w-1/5 bg-lightColor m-3 relative rounded-lg">
      {/* Service Name */}
      <div className="h-1/6  w-full text-base tracking-wider font-medium mx-4 mt-1">
        {" "}
        {data.heading}
      </div>
      {/* Service Body */}
      <div className="h-4/6 overflow-hidden mx-2 font-light text-justify">
        <p>{data.desc}</p>
      </div>

      <div className="h-1/6 absolute bottom-0 w-full bg-white">
        <div className="flex justify-between items-center mx-4 h-full">
          <p>{data.leftbutton}</p>
          {/*Info  */}
          <div className="overflow-hidden">{data.rightbutton}</div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
