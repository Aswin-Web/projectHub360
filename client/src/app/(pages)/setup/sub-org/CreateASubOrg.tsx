"use client";
import React, { useEffect, useState } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
import TextHelper from "@/components/text/TextHelper";
import Button from "@/components/Button";

const CreateASubOrgDialog = ({
  onClose,
  submitSubOrgCreate,
}: {
  onClose: () => void;
  submitSubOrgCreate: (data: string) => void;
}) => {
  const [subOrgName, setSubOrgName] = useState("");

  const handleCreate = () => {
    submitSubOrgCreate(subOrgName);
  };
  return (
    <div className="w-[50vw] h-[50vh] bg-lightColor p-3">
      <div className="my-auto">
        {/* Top */}
        <div
          onClick={() => onClose()}
          className="flex justify-end cursor-pointer"
        >
          <IoCloseCircleOutline size={25} />
        </div>
        {/* Body */}
        <div>
          <div className="text-center text-lg font-medium">
            <TextHelper> Create An New Sub Org</TextHelper>
          </div>
          {/* Input Elements */}
          <div className="w-4/6 mx-auto">
            <div className="flex flex-col gap-4">
              <label>Enter the Sub Orgnization Name</label>
              <input
                type="text"
                className="h-8 border-2 py-1"
                value={subOrgName}
                onChange={(e) => setSubOrgName(e.target.value)}
              ></input>
            </div>
            <div className="mt-4 text-center ">
              <Button
                className="block w-4/6 text-base"
                handleClick={() => handleCreate()}
              >
                Create
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateASubOrgDialog;
