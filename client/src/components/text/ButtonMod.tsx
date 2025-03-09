import React, { ReactNode } from "react";

const ButtonMod = ({ children }: { children: ReactNode }) => {
  return (
    <span className="bg-headingColor text-darkColor px-4 py-2 rounded-md cursor-pointer">
      {children}
    </span>
  );
};

export default ButtonMod;
