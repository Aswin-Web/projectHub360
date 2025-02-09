import React from "react";
import NavbarLayout from "../../../components/layout/Navbar/NavbarLayout";
import { ProductName } from "@/components/Data";
import NavbarMenu from "@/components/layout/Navbar/NavbarMenu";
import SidebarLayout from "@/components/layout/Sidebar/SidebarLayout";
import SidebarMenuList from "@/components/layout/Sidebar/SidebarMenuList";
import { SiAwsorganizations } from "react-icons/si";
import { MdOutlineApps } from "react-icons/md";
import { RiCurrencyLine } from "react-icons/ri";
import { PiUsersThree } from "react-icons/pi";
import { GoOrganization } from "react-icons/go";
import { PiCity } from "react-icons/pi";
import { CgProfile } from "react-icons/cg";
import { LuBadgeInfo } from "react-icons/lu";

const layout = ({ children }: { children: React.ReactNode }) => {
  const navbarMenuItems = [
    { name: "Profile", link: "setup/org", logo: <CgProfile size={20} /> },
    // { name: "SubOrganization", link: "setup/sub-org", logo: "" },
  ];

  const sidebarMenu = [
    { name: "about", link: "setup/about", logo: <LuBadgeInfo /> },
    { name: "services", link: "setup/services", logo: <SiAwsorganizations /> },
    { name: "purchases", link: "setup/purchases", logo: <MdOutlineApps /> },
    { name: "transaction", link: "setup/transaction", logo: <RiCurrencyLine /> },
    { name: "users", link: "setup/users", logo: <PiUsersThree /> },
    { name: "org", link: "setup/org", logo: <GoOrganization /> },
    { name: "sub-org", link: "setup/sub-org", logo: <PiCity /> },
  ];
  return (
    <div className="">
      <div className="w-full flex">
        {/* Sidebar */}
        <div className="w-[15%]">
          <SidebarLayout>
            <SidebarMenuList list={sidebarMenu} />
          </SidebarLayout>
        </div>
        {/* NAvbar */}
        <div className="w-[85%]">
          <NavbarLayout navMenu={<NavbarMenu data={navbarMenuItems} />}>
            <></>
          </NavbarLayout>

          {/* Content */}
          <div className="m-4 overflow-y-scroll h-[85vh]">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default layout;
