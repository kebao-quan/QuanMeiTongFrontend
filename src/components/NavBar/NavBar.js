import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./NavBar.css";

import LinkSection from "./LinkSection";

import logo from "./images/logo.png";
import dianhua from "./images/dianhua.png";

const Navbar = () => {
  return (
    <>
      <div className="navbar-group_1 flex-col" />
      <div className="navbar-group_2 flex-row align-center">
        <NavLink to="/">
          <img className="navbar-image_1" src={logo} alt="" />
        </NavLink>
        <img className="navbar-label_1" src={dianhua} alt="" />
        <span className="navbar-text_2">400-169-2688</span>

        <div className="navbar-link-wrapper_1 flex-row">
          <LinkSection name="网站首页" to="/" />
          <LinkSection name="签证国家" to="/countries" />
          <LinkSection name="签证申请" to="/apply" />
          <LinkSection name="订购机票" to="/purchase" />
        </div>
        <Link style={{textDecoration: 'none'}} to="/login">
          <button className="navbar-login-button_1 flex-col align-center justify-center">
            <span className="navbar-login-text_1" to="/login">
              登录/注册
            </span>
          </button>
        </Link>
      </div>
    </>
  );
};

export default Navbar;
