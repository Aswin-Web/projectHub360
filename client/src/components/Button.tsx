import React from "react";

const Button = ({
  children,
  handleClick,
  className,
}: {
  children?: React.ReactNode;
  handleClick: (e: any) => void;
  className?: string;
}) => {
  return (
    <button
      className={
        "cursor-pointer p-2 border-2 border-subHeadingColor rounded-lg text-textColor" +
        className
      }
      onClick={(e) => handleClick(e)}
    >
      {children}
    </button>
  );
};

export default Button;
