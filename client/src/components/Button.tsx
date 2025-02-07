import React from "react";

const Button = ({
  children,
  handleClick,
}: {
  children: string;
  handleClick: (e: any) => void;
}) => {
  return (
    <button
      className="cursor-pointer p-2 border-2 border-subHeadingColor rounded-lg text-textColor"
      onClick={(e)=>handleClick(e)}
    >
      {children}
    </button>
  );
};

export default Button;
