import Link from "next/link";
import React from "react";
import NavbarMenuItem from "./NavbarMenuItem";

const NavbarMenu = ({
  data,
}: {
  data: { name: string; logo: React.ReactNode; link: string }[];
}) => {
  return (
    <>
      {data.map((item, ind) => {
        return (
          <>
            <NavbarMenuItem item={item} key={ind} />
          </>
        );
      })}
    </>
  );
  //
};

export default NavbarMenu;
