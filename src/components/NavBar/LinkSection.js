import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

const LinkSection = ({ name, to }) => {
  return (
    <div className="flex-col">
      <NavLink to={to} className="no-decoration">
        {({ isActive }) => (
          <div
            className={`navbar-text-wrapper_1 flex-col justify-center align-center ${
              isActive ? "link-selected" : ""
            }`}
          >
            <span className="navbar-text_3">{name}</span>
            <div className={`navbar-redline-selected ${isActive ? "link-selected" : ""}`}></div>
            <div className="navbar-overlay_1"></div>
          </div>
        )}
      </NavLink>
    </div>
  );
};

export default LinkSection;
