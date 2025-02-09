import React from "react";
import TextHelper from "./text/TextHelper";
import { SlQuestion } from "react-icons/sl";

const ServiceCard = () => {
  return (
    <div className="h-[30vh] border-2 w-1/5 bg-lightColor m-3 relative rounded-lg">
      {/* Service Name */}
      <div className="h-1/6  w-full text-base tracking-wider font-medium mx-4 mt-1">
        {" "}
        Recurring Service
      </div>
      {/* Service Body */}
      <div className="h-4/6 overflow-hidden mx-2 font-light text-justify">
        <p>
          We are a dedicated team focused on developing services tailored to
          your business requirements. Share your needs with us—if they align
          with what others require, we can build the solution at a significantly
          lower cost for you while making it available for other organizations
          to purchase. This way, you get a cost-effective, high-quality service
          while contributing to a broader solution that benefits multiple
          businesses.
        </p>
      </div>

      <div className="h-1/6 absolute bottom-0 w-full bg-white">
        <div className="flex justify-between items-center mx-4 mt-2">
          <p>$ 2000 /-</p>
          {/*Info  */}
          <div>
            <SlQuestion />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
