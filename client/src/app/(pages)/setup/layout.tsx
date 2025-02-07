import React from "react";
import NavbarLayout from "../../../components/layout/Navbar/NavbarLayout";
import { ProductName } from "@/components/Data";
import NavbarMenu from "@/components/layout/Navbar/NavbarMenu";
import SidebarLayout from "@/components/layout/Sidebar/SidebarLayout";

const layout = ({ children }) => {
  const navbarMenuItems = [
    { name: "Organisation", link: "setup/org", logo: "" },
    { name: "SubOrganization", link: "setup/sub-org", logo: "" },
  ];
  return (
    <div>
      <NavbarLayout
        brandLogo={<ProductName />}
        navMenu={<NavbarMenu data={navbarMenuItems} />}
      >
        <></>
      </NavbarLayout>
      <div className="w-full">
        {/* Sidebar */}
        <div className="w-[20%]">
          <SidebarLayout />
        </div>
        {/* Content */}
        <div className="w-[80%]">{children}</div>
      </div>
    </div>
  );
};

export default layout;
