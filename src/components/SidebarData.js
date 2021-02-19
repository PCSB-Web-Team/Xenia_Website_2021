import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
  {
    title: "Profile",
    path: "/myprofile",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Cart",
    path: "/mycart",
    icon: <FaIcons.FaCartPlus />,
    cName: "nav-text",
  },
  {
    title: "Events",
    path: "/myevents",
    icon: <IoIcons.IoMdPeople />,
    cName: "nav-text",
  },
];
