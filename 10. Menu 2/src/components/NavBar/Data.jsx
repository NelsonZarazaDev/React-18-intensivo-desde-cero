import { AiFillHome } from "react-icons/ai";
import { IoIosPaper } from "react-icons/io";
import { FaCartPlus } from "react-icons/fa";
import * as RiIcons from "react-icons/ri";

export const Data = [
  {
    title: "Home",
    path: "/",
    cName: "nav-text",
    icon: <AiFillHome />,
  },
  {
    title: "Reports",
    path: "/reports",
    cName: "nav-text",
    icon: <IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpFill />,
    subNav: [
      { title: "Reports1", path: "/reports1", icon: <IoIosPaper /> },
      { title: "Reports2", path: "/reports2", icon: <IoIosPaper /> },
    ],
  },
  {
    title: "Products",
    path: "/products",
    cName: "nav-text",
    icon: <FaCartPlus />,
  },
];
