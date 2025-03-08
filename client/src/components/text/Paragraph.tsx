import React, { ReactElement, ReactNode } from "react";

const Paragraph: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <span className="text-sm font-light">{children}</span>;
};

export default Paragraph;
