import React, { useState } from "react";
import { Link } from "react-router";
import { IconContext } from "react-icons";
import "./NavBar.css";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { AiFillHome } from "react-icons/ai";
import { IoIosPaper } from "react-icons/io";
import { FaCartPlus } from "react-icons/fa";

const Data = [
  { title: "Home", path: "/", cName: "nav-text", icon: <AiFillHome /> },
  {
    title: "Reports",
    path: "/reports",
    cName: "nav-text",
    icon: <IoIosPaper />,
  },
  {
    title: "Products",
    path: "/products",
    cName: "nav-text",
    icon: <FaCartPlus />,
  },
];

export default function NavBar() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div>
      <IconContext.Provider value={{ color: "#ffffff" }}>
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <FaBars onClick={showSidebar} />
          </Link>
        </div>

        <nav
          className={sidebar ? "nav-menu active" : "nav-menu"}
          onClick={showSidebar}
        >
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiOutlineClose />
              </Link>
            </li>
            {Data.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </div>
  );
}
