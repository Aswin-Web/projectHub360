"use client";
import TextHelper from "@/components/text/TextHelper";
import React, { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import PopupLayout from "../../../../components/layout/PopUp/PopupLayout";
import CreateASubOrgDialog from "./CreateASubOrg";
import { createSubOrgService } from "./networkcalls.suborg";

const page = () => {
  const [showPopup, setShowpopup] = useState(false);
  // const [subOrgName, setSubOrgName] = useState("");

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
    </div>
  );
};

export default page;
