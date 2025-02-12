import React from "react";
const SidebarMenuItems = [
  { name: "Organisation", link: "setup/org", logo: "" },
  { name: "SubOrganization", link: "setup/sub-org", logo: "" },
];
const SidebarLayout = ({ children }:{children:React.ReactNode}) => {
  return <div className="h-full w-full bg-lightColor border-2">{children}</div>;
};

export default SidebarLayout;
