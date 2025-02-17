"use client";
import TextHelper from "@/components/text/TextHelper";
import React, { useEffect, useState } from "react";
import { IoMdAdd } from "react-icons/io";
import PopupLayout from "../../../../components/layout/PopUp/PopupLayout";
import CreateASubOrgDialog from "./CreateASubOrg";
import { createSubOrgService, getSubService } from "./networkcalls.suborg";
import ServiceCard from "@/components/ServiceCard";

const page = () => {
  const [showPopup, setShowpopup] = useState(false);
  // const [subOrgName, setSubOrgName] = useState("");
  const [subOrgs, setSubOrg] = useState([]);
  useEffect(() => {
    getSubService()
      .then((x) => setSubOrg(x))
      .catch((e) => console.log(e));
  }, []);
  const submitSubOrgCreate = (data: string) => {
    createSubOrgService(data)
      .then(() => alert("created successfully"))
      .catch(() => alert("error occurred"));
  };
  return (
    <div>
      {/* Heading  */}
      <div className="flex w-4/6 justify-center items-center mx-auto">
        <TextHelper className="text-center text-2xl font-medium">
          {" "}
          Sub Organization Lists{" "}
        </TextHelper>
        <div
          className="text-white rounded bg-subHeadingColor p-1 cursor-pointer"
          onClick={() => setShowpopup(true)}
        >
          <IoMdAdd />
        </div>
      </div>
      {/* Popup */}
      <div>
        {showPopup && (
          <PopupLayout>
            <CreateASubOrgDialog
              onClose={() => setShowpopup(false)}
              submitSubOrgCreate={submitSubOrgCreate}
            />
          </PopupLayout>
        )}
      </div>
      {/* Body */}
      <div className="flex flex-wrap justify-center">
        {subOrgs.map((elem: { sub_external_name: string }, ind) => (
          <>
            <ServiceCard
              data={{
                heading: elem.sub_external_name,
                desc: "testing",
                leftbutton: <></>,
                rightbutton: <>View More</>,
              }}
            />
          </>
        ))}
      </div>
    </div>
  );
};

export default page;
