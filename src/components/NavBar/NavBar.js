import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

import logo from "./images/logo.png";

const Navbar = () => {
  return (
    <>
      <div className="group_1 flex-col" />
      <div className="group_2 flex-row">
        <NavLink to="/">
          <img className="image_1" src={logo} alt="" />
        </NavLink>
        <img
          className="label_1"
          src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng991ca68a436528e5f4cdb863d1af507f74a7ef360accfad665d76278d8464719"
          alt=""
        />
        <span className="text_2">400-169-2688</span>
        <div className="text-wrapper_1 flex-col">
          <NavLink className="text_3" to="/">
            网站首页
          </NavLink>
        </div>
        <div className="text-wrapper_2 flex-col">
          <NavLink className="text_4" to="/visa">
            签证国家
          </NavLink>
        </div>
        <div className="text-wrapper_3 flex-col">
          <button className="text_5" to="/visa_application">
            签证申请
          </button>
        </div>
        <div className="text-wrapper_4 flex-col">
          <button className="text_6" to="/downloads">
            材料下载
          </button>
        </div>
        <div className="text-wrapper_5 flex-col">
          <button className="text_7" to="/tickets">
            订购机票
          </button>
        </div>
        <div className="text-wrapper_6 flex-col">
          <button className="text_8" to="/login">
            登录/注册
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
