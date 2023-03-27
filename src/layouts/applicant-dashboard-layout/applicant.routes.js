import { CgHomeAlt } from "react-icons/cg";
import { MdOutlineVerified, MdPayment, MdOutlineEventNote } from "react-icons/md";
import { TbSettings } from "react-icons/tb";

export const sideBarLinks = [
  {
    path: "/applicant/",
    icon: <CgHomeAlt size={22} />,
    text: "Dashboard",
    alt: "dashboard-icon",
  },
  {
    path: "/applicant/vetting",
    icon: <MdOutlineVerified size={22} />,
    text: "Vetting",
    alt: "vetting-icon",
  },
  {
    path: "/applicant/wallet",
    icon: <MdPayment size={22} />,
    text: "Wallet",
    alt: "vetting-icon",
  },
  {
    path: "/applicant/resume",
    icon: <MdOutlineEventNote size={22} />,
    text: "Resume",
    alt: "resume-icon",
  },
  {
    path: "/applicant/setting",
    icon: <TbSettings size={22} />,
    text: "Setting",
    alt: "setting-icon",
  },
];
