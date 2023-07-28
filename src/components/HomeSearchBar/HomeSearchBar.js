import React, { useState, useEffect, useRef } from "react";
import DropdownMenu from "./DropdownMenu";
import "./HomeSearchBar.css";

import sous from "./images/sous.png";

//主页Banner, 搜索栏与下拉菜单


const HomeSearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isFocused, setFocused] = useState(false);
  const ref = useRef(null);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(searchTerm);
  };

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setFocused(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="group_3 flex-col" ref={ref}>
      <div className="group_5 flex-row justify-between">
        <div className="box_1 flex-row">
          <div className="image-text_1 flex-row justify-between">
            <img className="label_2" src={sous} alt=""/>
            <input
              className="text-group_1"
              type="text"
              value={searchTerm}
              onChange={handleChange}
              onFocus={() => setFocused(true)}
              placeholder="查找你的目的地国家"
            />
          </div>
        </div>
        <button className="text-wrapper_7 flex-col" onClick={handleSubmit}>
          <span className="text_9">快速申请出国签证</span>
        </button>
      </div>
      {isFocused && <DropdownMenu ref={ref} />}
    </div>
  );
};

export default HomeSearchBar;
