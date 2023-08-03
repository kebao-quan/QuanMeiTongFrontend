import React, {useState} from "react";
import { NavLink, Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { Dropdown, DropdownButton } from "react-bootstrap";
import styled from "styled-components";

import "./NavBar.css";

import logo from "./images/logo.png";
import dianhua from "./images/dianhua.png";

import LinkSection from "./LinkSection";

const Containter = styled.div`
  width: 100vw;

  & .horizontal-line {
    background-color: #d23028;
    height: 4px;
  }
`;

function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useMediaQuery({ query: "(max-width: 1272px)" });
  const isSmall = useMediaQuery({ query: "(max-width: 764px)" });

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    isMobile && (
      <div className="dropdown">
        <button className={`dropdown-button ${isSmall ? "small" : "large"}`} onClick={toggleOpen}>菜单</button>
        {isOpen && (
          <div className="dropdown-menu">
            <a className="dropdown-item" href="/">网站首页</a>
            <a className="dropdown-item" href="/countries">签证国家</a>
            <a className="dropdown-item" href="/apply">签证申请</a>
            <a className="dropdown-item" href="/purchase">订购机票</a>
          </div>
        )}
      </div>
    )
  );
}
const Navbar = () => {
  return (
    <Containter>
      <div className="horizontal-line" />
      <div className="navbar-group_2 flex-row justify-between align-center">
        <Menu />
        <div className="navbar-group_2_1 flex-row align-center">
          <NavLink to="/">
            <img className="navbar-image_1" src={logo} alt="" />
          </NavLink>
          <img className="navbar-label_1" src={dianhua} alt="" />
          <span className="navbar-text_2">400-169-2688</span>
        </div>
        <div className="flex-row align-center">
          <div className="navbar-link-wrapper_1 flex-row">
            <LinkSection name="网站首页" to="/" />
            <LinkSection name="签证国家" to="/countries" />
            <LinkSection name="签证申请" to="/apply" />
            <LinkSection name="订购机票" to="/purchase" />
          </div>
          <div className="navbar-login">
            <Link style={{ textDecoration: "none" }} to="/login">
              <button className="navbar-login-button_1">
                <span className="navbar-login-text_1" to="/login">
                  登录/注册
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </Containter>
  );
};

export default Navbar;
