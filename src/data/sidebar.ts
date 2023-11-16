import { BiBorderOuter, BiDetail, BiDotsHorizontal, BiFastForwardCircle, BiHome, BiSolidCompass, BiSolidCube } from "react-icons/bi";
import { IconType } from "react-icons/lib";

export type MenuItem_TP = {
  id: string;
  icon: IconType;
  label: string;
  link?: string;
  heading?: string; // Add the heading property
  items?: {
    id: string;
    icon: IconType;
    label: string;
    link?: string;
    items?: MenuItem_TP[];
  }[];
};

export const sideBarItems: MenuItem_TP[] = [
  {
    id: crypto.randomUUID(),
    icon: BiHome,
    label: `${"Home"}`,
    link: "/",
  },
  {
    id: crypto.randomUUID(),
    icon: BiSolidCube,
    label: `${"Facilities and Employees"}`,
    items: [
      {
        id: crypto.randomUUID(),
        label: `${'Facilities'}`,
        link: "/Facilities ",
        icon: BiDotsHorizontal,
      },
      {
        id: crypto.randomUUID(),
        label: `${'Employee'}`,
        link: "/Employee ",
        icon: BiDotsHorizontal,
      },

    ],
  },
  {
    id: crypto.randomUUID(),
    icon:BiDetail,
    label: `${"Orders"}`,
    link: "/orders",
  },
];
