import React, { ReactNode } from "react";

const SubHeading = ({ children }: { children: ReactNode }) => {
  return <span className="text-xl tracking-wider font-medium">{children}</span>;
};

export default SubHeading;
