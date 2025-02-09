import React from "react";
import SidebarMenu from "./SidebarMenu";
import { ProductName } from "@/components/Data";

interface ListItem {
  name: string;
  logo: React.ReactElement;
  link: string;
}
const SidebarMenuList = ({ list }: { list: ListItem[] }) => {
  return (
    <div>
      {/* brandLogo */}
      <div className="flex justify-center p-5">
        <ProductName />
      </div>
      <></>
      {list.map((item, ind) => {
        return (
          <>
            <SidebarMenu data={item} />
          </>
        );
      })}
    </div>
  );
};

export default SidebarMenuList;
