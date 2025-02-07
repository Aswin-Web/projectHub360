import React from "react";

const NavbarLayout = ({
  children,
  brandLogo,
  navMenu,
}: {
  children: React.ReactNode;
  brandLogo: React.ReactNode;
  navMenu: React.ReactNode;
}) => {
  return (
    <div className="h-[8vh] bg-darkColor overflow-hidden flex ">
      <div className="flex-1 m-4">{brandLogo}</div>
      <div className="flex-1 flex justify-evenly w-full m-4">{navMenu}</div>
    </div>
  );
};
export default NavbarLayout;
