import React from "react";
import "./Country.css";

const Country = ({ name, imageURL, setSelectedCountry }) => {
  return (
    <div className="visaapply-country-group_1">
      <div className="flex-col">
        <button
          className="visaapply-country-group_2"
          onClick={() => {
            setSelectedCountry(name);
          }}
        >
          <img className="visaapply-country-image" src={imageURL} alt="" />
        </button>
        <div className="visaapply-country-group_3 flex-col align-center justify-end">
          <span className="visaapply-country-text_1">{name}</span>
        </div>
      </div>
    </div>
  );
};

export default Country;
