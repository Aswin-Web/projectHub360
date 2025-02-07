import React from "react";
import NavbarMenu from "./NavbarMenu";
import Link from "next/link";

const NavbarMenuItem = ({
  item,
}: {
  item: { name: string; logo: string; link: string };
}) => {
  return <Link className="text-textColor" href={item.link}>{item.name}</Link>;
};
export default NavbarMenuItem;
