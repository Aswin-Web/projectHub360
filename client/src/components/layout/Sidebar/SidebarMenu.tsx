"use client";
import Button from "@/components/Button";
import Link from "next/link";
import React from "react";

const SidebarMenu = ({
  data,
}: {
  data: { name: string; logo: React.ReactElement; link: string };
}) => {
  return (
    <Link href={"/"+data.link}>
      <Button
        className="flex justify-start m-1 border-2 border-blackColor rounded-md w-11/12"
        handleClick={() => {}}
      >
        <div className="flex items-center">
          {/* logo */}
          <div className="w-1/6 flex justify-center">{data.logo}</div>
          {/* text */}
          <div className="text-sm w-5/6 text-left">{data.name}</div>
        </div>
      </Button>
    </Link>
  );
};

export default SidebarMenu;
