"use client";
import ServiceCard from "@/components/ServiceCard";
import TextHelper from "@/components/text/TextHelper";
import React, { useEffect, useState } from "react";
import { addServiceToOrg, getServices } from "./networkcalls.purchase";
import { SlQuestion } from "react-icons/sl";

interface serviceINT {
  service_external_name: string;
  service_descp: string;
  purchaseButton: React.ReactNode;
  infoButton: React.ReactNode;
  service_internal_name: string;
  service_id: number;
  service_type: "TABLE" | "TICKETING" | "PRODUCT";
}

const page = () => {
  const [services, setServices] = useState<serviceINT[]>([]);
  useEffect(() => {
    getServices()
      .then((item) => {
        setServices(item);
      })
      .catch(() => alert("services fetching failed"));
  }, []);

  const HandlAaddServieToOrg = (
    service_id: number,
    service_type: "TABLE" | "TICKETING" | "PRODUCT"
  ) => {
    addServiceToOrg({ service_id, service_type })
      .then((item) => {
        alert("Purchased Successfully");
      })
      .catch((e) => {
        alert("Purchase Failed");
      });
  };
  const modifiedServicesHelper = services.map((item) => {
    const purchaseButton = (
      <button
        className=" border-2 text-sm rounded-md px-1 border-black"
        onClick={() => HandlAaddServieToOrg(item.service_id, item.service_type)}
      >
        Purchase
      </button>
    );
    const infoButton = (
      <button className="">
        <SlQuestion />
      </button>
    );
    let returnObj = {
      service_id: item.service_id,
      service_descp: item.service_descp,
      service_external_name: item.service_external_name,
      service_internal_name: item.service_internal_name,
      purchaseButton,
      infoButton,
    };
    return {
      ...returnObj,
    };
  });

  return (
    <div>
      {/* Heading */}
      <TextHelper className="text-2xl font-semibold text-center text-blackColor">
        Our Services
      </TextHelper>
      {/* Service List */}
      <div className="flex flex-row flex-wrap justify-center">
        {modifiedServicesHelper.map((elem, ind) => {
          return (
            <>
              <ServiceCard
                data={{
                  heading: elem.service_external_name,
                  desc: elem.service_descp,
                  leftbutton: elem.purchaseButton,
                  rightbutton: elem.infoButton,
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
