import React from "react";
import { NavLink } from "react-router-dom";
import logo from "./images/logo.png";
import "./BottonNavBar.css";

const BottonNavBar = () => {
  return (
    <>
      <div className="group_15 flex-row">
        <NavLink to={"/"}>
          <div
            className="image-text_9 flex-row justify-between"
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          >
            <img className="image_17" src={logo} alt="" />
          </div>
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            `text_32 ${isActive ? "text-32-selected_1" : ""}`
          }
          style={{ textDecoration: "none" }}
          to="/"
        >
          <span
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          >
            网站首页
          </span>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `text_33 ${isActive ? "text-32-selected_1" : ""}`
          }
          style={{ textDecoration: "none" }}
          to="/countries"
        >
          <span
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          >
            签证国家
          </span>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `text_34 ${isActive ? "text-32-selected_1" : ""}`
          }
          style={{ textDecoration: "none" }}
          to="/apply"
        >
          <span
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          >
            签证申请
          </span>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `text_35 ${isActive ? "text-32-selected_1" : ""}`
          }
          style={{ textDecoration: "none" }}
          to="/purchase"
        >
          <span
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          >
            订购机票
          </span>
        </NavLink>
        <NavLink
          to="/login"
          className="text-wrapper_97 flex-col"
          style={{ textDecoration: "none" }}
        >
          <span className="text_37">登录/注册</span>
        </NavLink>
      </div>
      <div className="text-wrapper_13 flex-row justify-center align-center">
        <span className="text_19">
          公安备案|&nbsp;沪ICP备18035802号-20
        </span>
      </div>
    </>
  );
};

export default BottonNavBar;
