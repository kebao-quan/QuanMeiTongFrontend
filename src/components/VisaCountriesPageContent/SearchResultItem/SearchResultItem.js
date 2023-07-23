import React from "react";
import "./SearchResultItem.css";
import { getCountryImage } from "../../../utils/CountryList";

import bllc from "./images/bllc.png";
import zpyq from "./images/zpyq.png";
import xiazai from "./images/xiazai.png";

const SearchResultItem = ({ country }) => {
  return (
    <>
      <div className="search-result-item_1 flex-row align-center">
        <img
          className="search-result-item-image_1"
          src={getCountryImage(country)}
          alt=""
        />
        <span className="search-result-item-text_1">{country}</span>
        <img className="search-result-item-image_2" src={bllc} alt=""></img>
        <span className="search-result-item-text_2">办理流程</span>
        <img className="search-result-item-image_3" src={zpyq} alt=""></img>
        <span className="search-result-item-text_2">照片要求</span>
        <img className="search-result-item-image_3" src={xiazai} alt=""></img>
        <span className="search-result-item-text_2">材料下载</span>
        <button className="search-result-item-button_1">申请签证</button>
      </div>
      <div className="search-result-horizontal-line"></div>
    </>
  );
};

export default SearchResultItem;
