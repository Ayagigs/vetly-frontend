import { CgHomeAlt } from "react-icons/cg";
import { MdOutlineVerified, MdPayment } from "react-icons/md";
import { TbSettings } from "react-icons/tb";

export const sideBarLinks = [
  {
    path: "/business/",
    icon: <CgHomeAlt size={22} />,
    text: "Dashboard",
    alt: "dashboard-icon",
  },
  {
    path: "/business/vetting",
    icon: <MdOutlineVerified size={22} />,
    text: "Vetting",
    alt: "vetting-icon",
  },
  {
    path: "/business/subscription",
    icon: <MdPayment size={22} />,
    text: "Subscription",
    alt: "vetting-icon",
  },
  {
    path: "/business/setting",
    icon: <TbSettings size={22} />,
    text: "Settings",
    alt: "setting-icon",
  },
];
