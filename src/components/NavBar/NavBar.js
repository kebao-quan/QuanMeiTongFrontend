import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";

import "./NavBar.css";
import "bootstrap/dist/css/bootstrap.min.css";

import logo from "./images/logo.png";
import dianhua from "./images/dianhua.png";

import LinkSection from "./LinkSection";
import { useMediaQuery } from "react-responsive";
import { Dropdown, DropdownButton } from "react-bootstrap";

function BasicButtonExample() {
  const isMobile = useMediaQuery({ query: "(max-width: 1272px)" }); // Adjust this value to your needs

  return (
    isMobile && (
      <DropdownButton
        variant="light"
        id="dropdown-basic-button"
        size="sm"
        title="菜单"
        style={{marginLeft : "5px"}}
      >
        <Dropdown.Item href="/">网站首页</Dropdown.Item>
        <Dropdown.Item href="/countries">签证国家</Dropdown.Item>
        <Dropdown.Item href="/apply">签证申请</Dropdown.Item>
        <Dropdown.Item href="/purchase">订购机票</Dropdown.Item>
      </DropdownButton>
    )
  );
}

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-group_1" />
      <div className="navbar-group_2 flex-row justify-between align-center">
        <BasicButtonExample />
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
              <button className="navbar-login-button_1 flex-col align-center justify-center">
                <span className="navbar-login-text_1" to="/login">
                  登录/注册
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
