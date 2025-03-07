import React from "react";

const PopupLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="fixed inset-0 bg-white  z-10  bg-opacity-80 flex justify-center items-center top-0 right-0">
      <div>{children}</div>
    </div>
  );
};

export default PopupLayout;
