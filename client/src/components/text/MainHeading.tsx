import React, { ReactNode } from "react";

const MainHeading = ({ children }: { children: ReactNode }) => {
  return (
    <div className="text-2xl text-blackColor font-bold tracking-wider">
      {children}
    </div>
  );
};

export default MainHeading;
