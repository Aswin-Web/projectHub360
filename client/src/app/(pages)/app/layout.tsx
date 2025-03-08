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
      { name: "Services", link: "app/services", logo: <SiAwsorganizations /> },
      { name: "Messages", link: "app/purchases", logo: <MdOutlineApps /> },
      { name: "Notification", link: "app/transaction", logo: <RiCurrencyLine /> },
      { name: "Profile", link: "app/users", logo: <PiUsersThree /> },
      { name: "About Us", link: "app/about", logo: <LuBadgeInfo /> },
    // { name: "org", link: "setup/org", logo: <GoOrganization /> },
    // { name: "sub-org", link: "setup/sub-org", logo: <PiCity /> },
  ];
  return (
    <div className="">
      <div className="w-full flex">
        {/* Sidebar */}
        <div className="w-[15%] h-[100vh]">
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
