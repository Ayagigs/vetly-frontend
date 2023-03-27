import { CgHomeAlt } from "react-icons/cg";
import { MdOutlineVerified } from "react-icons/md";
import { TbSettings } from "react-icons/tb";
import { AiOutlineTeam } from "react-icons/ai";

export const sideBarLinks = [
  {
    path: "/admin/",
    icon: <CgHomeAlt size={22} />,
    text: "Dashboard",
    alt: "dashboard-icon",
  },
  {
    path: "/admin/registered-users",
    icon: <MdOutlineVerified size={22} />,
    text: "Registered Users",
    alt: "vetting-icon",
  },
  {
    path: "/admin/registered-companies",
    icon: <MdOutlineVerified size={22} />,
    text: "Registered Companies",
    alt: "vetting-icon",
  },
  {
    path: "/admin/team-members",
    icon: <AiOutlineTeam size={22} />,
    text: "Team Members",
    alt: "resume-icon",
  },
  {
    path: "/admin/setting",
    icon: <TbSettings size={22} />,
    text: "Setting",
    alt: "setting-icon",
  },
];
