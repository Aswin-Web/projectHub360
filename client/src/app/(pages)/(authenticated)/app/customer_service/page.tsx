"use client";
import React, { useState } from "react";
import MainHeading from "../../../../../components/text/MainHeading";
import ButtonMod from "../../../../../components/text/ButtonMod";
import PopupLayout from "../../../../../components/layout/PopUp/PopupLayout";
import CreateModel from "./CreateModel";

const page = () => {
  const [showAddCusPopup, setShowAddCusPopup] = useState(true);
  const [formData, setFormData] = useState();
  return (
    <div>
      {/* Heading */}
      <div className="flex justify-between m-4">
        <div>
          <MainHeading>Customer Services</MainHeading>
        </div>
        <div onClick={() => setShowAddCusPopup(true)}>
          <ButtonMod>Add Customer</ButtonMod>
        </div>
      </div>
      {/* Add Customer Popup */}
      {showAddCusPopup && (
        <CreateModel onClose={() => setShowAddCusPopup(false)} />
      )}
    </div>
  );
};

export default page;
