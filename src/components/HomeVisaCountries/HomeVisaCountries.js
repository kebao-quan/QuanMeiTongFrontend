import React, { useState } from "react";
import "./HomeVisaCountries.css";
import Country from "./Country";
import ContinentList from "./ContinentList";
import fuwu from "./images/fuwu.png";
import ks from "./images/ks.png";
import yiduiyi from "./images/yiduiyi.png";
import yinsi from "./images/yinsi.png";

import {
  getCountryImage,
  HotCountries,
  AsiaCountries,
  OceaniaCountries,
  EuropeCountries,
  AmericaCountries,
  AfricaCountries,
} from "../../utils/CountryData";

const continents = ["热门", "亚洲", "欧洲", "美洲", "大洋洲", "非洲"];

const HomeVisaCountries = () => {
  const [countries, setCountries] = useState(HotCountries);
  const [selectedContinent, setSelectedContinent] = useState("热门");
  

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
    <div className="block_3 flex-col" >
      <div className="group_6 flex-row">
        <div className="group_7 flex-row align-center">
          <div className="group_7_1 flex-row align-center">
            <div className="image-wrapper_1 flex-col align-center">
              <img className="image_2" src={fuwu} alt="" />
            </div>
            <div className="block_4 flex-col justify-between">
              <div className="text-wrapper_8 flex-col">
                <span className="text_10">400-168-2688</span>
              </div>
              <span className="text_11">24小时服务</span>
            </div>
          </div>
          <div className="vertical-line" />

          <div className="group_7_1 flex-row align-center">
            <div className="image-wrapper_2 flex-col align-center">
              <img className="image_4" src={yiduiyi} alt="" />
            </div>
            <div className="block_5 flex-col justify-between">
              <div className="text-wrapper_9 flex-col">
                <span className="text_12">专人服务</span>
              </div>
              <span className="text_13">一对一指导</span>
            </div>
          </div>
          <div className="vertical-line" />

          <div className="group_7_1 flex-row align-center">
            <div className="image-wrapper_3 flex-col align-center">
              <img className="image_6" src={yinsi} alt="" />
            </div>
            <div className="block_6 flex-col justify-between">
              <div className="text-wrapper_10 flex-col">
                <span className="text_14">放心安心</span>
              </div>
              <span className="text_15">隐私保护</span>
            </div>
          </div>
          <div className="vertical-line" />

          <div className="image-wrapper_4 flex-col align-center">
            <img className="image_8" src={ks} alt="" />
          </div>
          <div className="block_7 flex-col justify-between">
            <div className="text-wrapper_11 flex-col">
              <span className="text_16">省时省力</span>
            </div>
            <span className="text_17">快速出签</span>
          </div>
        </div>
      </div>

      <ContinentList
        continents={continents}
        handleContinentHover={handleContinentHover}
        selectedContinent={selectedContinent}
      />

      <div className="group_9 flex-row justify-between">
        <div className="grid_1 flex-row">
          {countries.map((country, index) => (
            <Country
              imageUrl={getCountryImage(country)}
              name={country}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeVisaCountries;
