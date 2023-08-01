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
  getCountryImage,
} from "../../utils/CountryData";

const continents = ["热门", "亚洲", "欧洲", "美洲", "大洋洲", "非洲"];
const districts = ["北京", "上海", "天津", "重庆", "河北", "山西", "内蒙古", "辽宁", "吉林", "黑龙江", "江苏", "浙江", "安徽", "福建", "江西", "山东", "河南", "湖北", "湖南", "广东", "广西", "海南", "四川", "贵州", "云南", "西藏", "陕西", "甘肃", "青海", "宁夏", "台湾", "香港","钓鱼岛"]

const Districts = ({ name, handleDistrictClick, selected }) => {
  return (
    <button
      className={`visaapply-districts-group_1 flex-row align-center justify-center ${
        selected ? "visaapply-districts-group_1-selected" : ""
      }`}
      onClick={handleDistrictClick}
    >
      <span className="visaapply-districts-text_1">{name}</span>
    </button>
  );
};

const VisaApplyPageContent = () => {
  const [selectedContinent, setSelectedContinent] = useState("热门");
  const [countries, setCountries] = useState(HotCountries);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [nextStep, setNextStep] = useState(false);
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
        {selectedCountry === "" && (
          <>
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
                  setSelectedCountry={setSelectedCountry}
                />
              ))}
            </div>
          </>
        )}

        {selectedCountry !== "" && nextStep === false && (
          <div className="visaapply-group_4 flex-col align-center">
            <div className="visaapply-group_5 flex-row">
              <div className="visaapply-group_6 flex-row">
                <span className="visaapply-text_3">户籍所在地</span>
              </div>
              <div className="visaapply-grid_2 flex-row">
                {districts.map((district, index) => (
                  <Districts
                    name={district}
                    key={index}
                    handleDistrictClick={() => setSelectedDistrict(district)}
                    selected={selectedDistrict === district}
                  />
                ))}
              </div>
            </div>
            <div className="visaapply-group_7 flex-row">
              <span className="visaapply-text_4 flex-col align-center">
                签证类型
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default VisaApplyPageContent;
