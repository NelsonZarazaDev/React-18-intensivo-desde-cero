import React, { useState } from "react";
import { Link } from "react-router";
import { IconContext } from "react-icons";
import "./NavBar.css";
import { FaBars, FaIcons } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { Data } from "./Data";
import styled from "styled-components";
import SubMenu from "./SubMenu";

export default function NavBar() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div>
      <IconContext.Provider value={{ color: "#ffffff" }}>
        <Nav>
          <NavIcon to="#">
            <FaBars onClick={showSidebar} />
          </NavIcon>
          <SidebarNav sidebar={sidebar}>
            <SidebarWrab>
              <NavIcon to="#">
                <AiOutlineClose onClick={showSidebar} />
              </NavIcon>
              {Data.map((item, index) => {
                return <SubMenu key={index} item={item} close={showSidebar} />;
              })}
            </SidebarWrab>
          </SidebarNav>
        </Nav>

        {/* <div className="navbar">
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
        </nav> */}
      </IconContext.Provider>
    </div>
  );
}

const Nav = styled.div`
  background: #15171c;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const SidebarNav = styled.nav`
  background: #15171c;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  transition: 350ms;
  z-index: 10;
`;

const SidebarWrab = styled.div`
  width: 100%;
`;
