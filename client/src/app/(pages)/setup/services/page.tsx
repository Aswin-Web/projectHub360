"use client";
import ServiceCard from "@/components/ServiceCard";
import TextHelper from "@/components/text/TextHelper";
import React, { useEffect, useState } from "react";
import { getServices } from "./networkcalls.purchase";
const item = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 11, 1, 1, 1];

const page = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    getServices()
      .then((item) => {
        setServices(item);
      })
      .catch(() => alert("services fetching failed"));
  }, []);
  return (
    <div>
      {/* Heading */}
      <TextHelper className="text-2xl font-semibold text-center text-blackColor">
        Our Services
      </TextHelper>
      {/* Service List */}
      <div className="flex flex-row flex-wrap justify-center">
        {services.map((elem, ind) => {
          return (
            <>
              <ServiceCard
                data={{
                  heading: elem.service_external_name,
                  desc: elem.service_descp,
                }}
              />
            </>
          );
        })}
      </div>
    </div>
  );
};

export default page;
