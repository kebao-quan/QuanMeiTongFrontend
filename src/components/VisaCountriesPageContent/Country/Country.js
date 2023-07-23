import React from "react";
import "./Country.css";
import { getCountryImage } from "../../../utils/CountryList";

const Country = ({ imageURL, name }) => {
  return (
    <div className="visa-country_101">
      <img className="visa-image_101" src={imageURL} alt="" />
      <div className="visa-image-overlay_101 flex-row">
        <img className="visa-flag_101" src={getCountryImage(name)} alt=""></img>
        <span className="visa-country-name_101">{name}</span>
        <span className="visa-apply-text_101">申请签证{">>"}</span>
      </div>
      <div className="visa-image-overlay_102">
        <div className="visa-textwrapper_101">
          <span className="visa-apply-text_102 flex-col">立即申请</span>
        </div>
      </div>
    </div>
  );
};

export default Country;
