import React from "react";

const NavbarLayout = ({
  children,
  navMenu,
}: {
  children: React.ReactNode;
  navMenu: React.ReactNode;
}) => {
  return (
    <div className="h-[8vh] bg-lightColor overflow-hidden flex px-4 border-2 ">
      {/* <div className="flex-1 m-4">{brandLogo}</div> */}
      <div className="flex-1 flex justify-end w-full m-4">{navMenu}</div>
    </div>
  );
};
export default NavbarLayout;
