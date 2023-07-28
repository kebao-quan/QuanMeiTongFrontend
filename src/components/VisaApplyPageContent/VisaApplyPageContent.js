import React, { useState } from "react";
import "./VisaApplyPageContent.css";

import Continent from "./Continent";
import Country from "./Country";
import {
  HotCountries,
  AsiaCountries,
  EuropeCountries,
  AmericaCountries,
  OceaniaCountries,
  AfricaCountries,
  getCountryImage
} from "../../utils/CountryData";

const continents = ["热门", "亚洲", "欧洲", "美洲", "大洋洲", "非洲"];

const VisaApplyPageContent = () => {
  const [selectedContinent, setSelectedContinent] = useState("热门");
  const [countries, setCountries] = useState(HotCountries);
  //鼠标悬浮大陆时，改变selectedContinent的值

  const handleContinentHover = (continent) => {
    setSelectedContinent(continent);
    switch (continent) {
      case "热门":
        setCountries(HotCountries);
        break;
      case "亚洲":
        setCountries(AsiaCountries);
        break;
      case "大洋洲":
        setCountries(OceaniaCountries);
        break;
      case "欧洲":
        setCountries(EuropeCountries);
        break;
      case "美洲":
        setCountries(AmericaCountries);
        break;
      case "非洲":
        setCountries(AfricaCountries);
        break;
      default:
        setCountries(HotCountries);
    }
  };

  return (
    <div className="visaapply-background flex-col align-center">
      <div className="visaapply-bannner flex-col"></div>
      <div className="visaapply-group_2 flex-col align-center">
        <span className="visaapply-text_1">选择您要申请签证的国家</span>
        <span className="visaapply-text_2">选择目的地快速申请出国签证</span>
        <div className="visaapply-group_3 flex-row">
          {continents.map((continent, index) => (
            <Continent
              name={continent}
              key={index}
              handleHover={handleContinentHover}
              selected={selectedContinent === continent}
            />
          ))}
        </div>
        <div className="visaapply-grid_1 flex-row">
          {countries.map((country, index) => (
            <Country
              name={country}
              key={index}
              imageURL={getCountryImage(country)}
              />
          ))}
        </div>
      </div>
    </div>
  );
};

export default VisaApplyPageContent;
