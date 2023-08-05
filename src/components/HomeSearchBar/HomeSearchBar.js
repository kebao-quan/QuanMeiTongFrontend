import React, { useState, useEffect, useRef } from "react";
import DropdownMenu from "./DropdownMenu";
import "./HomeSearchBar.css";
import styled from "styled-components";

import sous from "./images/sous.png";

//主页Banner, 搜索栏与下拉菜单

const SearchBar = styled.div`
  width: 660px;
  margin: 0 auto;
  margin-top: 25%;

  & .search-bar-input {
    display: flex;
    justify-content: space-between;
    height: 60px;
  }

  & .image-text_1 {
    width: 66.6%;
    background: #ffffff;
  }

  & .text-wrapper_7 {
    background-color: rgba(51, 51, 51, 1);
    width: 33.3%;
    cursor: pointer;
  }

  @media (max-width: 764px) {
    width: 330px;

    & .search-bar-input {
      height: 30px;
    }
  }
`;

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
      <SearchBar>
        <div className="search-bar-input">
          <div className="image-text_1 flex-row align-center">
            <img className="label_2" src={sous} alt="" />
            <input
              className="text-group_1"
              type="text"
              value={searchTerm}
              onChange={handleChange}
              onFocus={() => setFocused(true)}
              placeholder="查找你的目的地国家"
            />
          </div>
          <button
            className="text-wrapper_7 flex-col justify-center align-center"
            onClick={handleSubmit}
          >
            <span className="text_9">快速申请出国签证</span>
          </button>
        </div>
        {isFocused && <DropdownMenu ref={ref} />}
      </SearchBar>
    </div>
  );
};

export default HomeSearchBar;
