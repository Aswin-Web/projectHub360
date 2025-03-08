import React, { ReactNode } from "react";

const SubHeading1 = ({ children }: { children: ReactNode }) => {
  return <span className="text-base tracking-wider font-medium">{children}</span>;
};

export default SubHeading1;
