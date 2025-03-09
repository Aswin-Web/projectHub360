import PopupLayout from "@/components/layout/PopUp/PopupLayout";
import ButtonMod from "@/components/text/ButtonMod";
import textTransform from "@/config/textTransform";
import React, { useState } from "react";

const CreateModel = ({ onClose }: { onClose: () => void }) => {
  const [formData, setFormData] = useState({
    customer_name: "",
    email: "",
    phone: "",
    address: [],
    city: "",
    state: "",
    pincode: "",
    customer_type: "",
  });
  const keyName = Object.keys(formData);
  return (
    <div>
      <div>
        <PopupLayout>
          <div className="bg-lightColor min-h-[30vh] max-h-[80vh] w-[80vw] border-2 rounded border-borderLight overflow-y-scroll p-4">
            {/* Close */}
            <div className="text-right" onClick={onClose}>
              <ButtonMod>Close</ButtonMod>
            </div>
            {/* Customer Details */}
            <div className="flex flex-col max-h-[80vh]">
              <div>
                <div className="grid gap-6 mb-6 md:grid-cols-2">
                  {keyName.map((item) => (
                    <div>
                      <label
                        //   for="first_name"
                        className="block mb-2 text-sm font-medium text-gray-900"
                      >
                        {textTransform(item)}{" "}
                      </label>
                      <input
                        type="text"
                        id="first_name"
                        className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="John"
                        required
                      />
                    </div>
                  ))}

                  
                </div>
                <div>{/* <input type="text" name="" id="" /> */}</div>
              </div>
            </div>
          </div>
        </PopupLayout>
      </div>
    </div>
  );
};

export default CreateModel;
