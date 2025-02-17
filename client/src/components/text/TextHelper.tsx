import React from "react";

const TextHelper = ({
  children,
  className,
}: {
  children?: React.ReactNode | string;
  className?: string;
}) => {
  return <div className={`tracking-wider m-4 ${className}`}>{children}</div>;
};

export default TextHelper;
