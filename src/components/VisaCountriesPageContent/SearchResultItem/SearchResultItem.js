import React from "react";
import "./SearchResultItem.css";
import { getCountryImage, getCountryCode } from "../../../utils/CountryData";
import { Link } from "react-router-dom";

import bllc from "./images/bllc.png";
import zpyq from "./images/zpyq.png";
import xiazai from "./images/xiazai.png";

const SearchResultItem = ({ country }) => {
  const code = getCountryCode(country);
  return (
    <>
      <div className="search-result-item_1 flex-row align-center">
        <Link to={`/countries/${code}`}>
          <img
            className="search-result-item-image_1"
            src={getCountryImage(country)}
            alt=""
          />
        </Link>
        <span className="search-result-item-text_1">{country}</span>
        <div className="search-result-item_2 flex-row align-center">
          <img className="search-result-item-image_2" src={bllc} alt=""></img>
          <span className="search-result-item-text_2">办理流程</span>
        </div>
        <div className="search-result-item_2 flex-row align-center">
          <img className="search-result-item-image_3" src={zpyq} alt=""></img>
          <span className="search-result-item-text_2">照片要求</span>
        </div>
        <div className="search-result-item_2 flex-row align-center">
          <img className="search-result-item-image_3" src={xiazai} alt=""></img>
          <span className="search-result-item-text_2">材料下载</span>
        </div>
        <Link to={`/countries/${code}`}>
          <button className="search-result-item-button_1">申请签证</button>
        </Link>
      </div>
      <div className="search-result-horizontal-line"></div>
    </>
  );
};

export default SearchResultItem;
