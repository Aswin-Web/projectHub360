"use client";
import SubHeading1 from "@/components/text/SubHeading1";
import TextHelper from "@/components/text/TextHelper";
import React, { useEffect, useState } from "react";
import { getPurchasedSeervices } from "./networkcalls.services";
import Paragraph from "@/components/text/Paragraph";
import Button from "@/components/Button";
import SubHeading from "@/components/text/SubHeading";
import { useRouter } from "next/navigation";

const page = () => {
  const [services, setServices] = useState([]);
  const router = useRouter();

  console.log("🚀 ~ page ~ services:", services);
  useEffect(() => {
    getPurchasedSeervices()
      .then((data) => {
        setServices(data);
      })
      .catch((e) => console.log(e));
  }, []);
  return (
    <div>
      {/* My Services */}
      <div className="text-center my-4">
        <SubHeading>Organization Services</SubHeading>
      </div>
      {/* List of Service */}
      <div className="flex flex-wrap w-11/12 items-center justify-center ">
        {services.map(
          (
            item: {
              service_name: string;
              description: string;
              internal_name: string;
            },
            elem
          ) => {
            return (
              <div
                key={elem}
                className="w-3/12 h-full border-2 border-borderLight rounded-xl my-2 mx-2 p-1 "
              >
                {/* Service Name */}
                <div className="px-4 pt-4 h-3/12 ">
                  <SubHeading1>{item?.service_name}</SubHeading1>
                </div>
                {/* Service Descp */}
                <div className="px-4 py-2 h-6/12">
                  <Paragraph>
                    {item.description.slice(0, 120) + "..."}
                  </Paragraph>
                </div>

                {/* Buttons */}
                <div className="px-4 h-3/12 flex gap-4 justify-center items-center">
                  <div className="flex-1 text-center">
                    <button className="text-xs flex-1 border-2 border-borderLight bg-lightColor px-4 py-1  rounded-lg">
                      Help
                    </button>
                  </div>
                  <div className="flex-1 text-center">
                    <button
                      className="text-xs flex-1 border-2 border-borderLight bg-lightColor px-4 py-1 rounded-lg"
                      onClick={() => router.push(item.internal_name)}
                    >
                      View
                    </button>
                  </div>
                </div>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};

export default page;
//
