import React, { useState } from "react";
import "./VisaCountries.css";
import Country from "./Country";
import ContinentList from "./ContinentList";
import {
  getCountryImage,
  HotCountries,
  AsiaCountries,
  OceaniaCountries,
  EuropeCountries,
  AmericaCountries,
  AfricaCountries,
} from "../../utils/CountryList";

const continents = ["热门", "亚洲", "欧洲", "美洲", "大洋洲", "非洲"];

const VisaCountries = () => {
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
    <div className="block_3 flex-col">
      <div className="group_6 flex-row">
        <div className="group_7 flex-row">
          <div className="image-wrapper_1 flex-col align-center">
            <img
              className="image_2"
              src={
                "https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng607fd0581198bb62a76c56fe500a139df434098f8e13d0b3b90057b2068f5e88"
              }
              alt=""
            />
          </div>
          <div className="block_4 flex-col justify-between">
            <div className="text-wrapper_8 flex-col">
              <span className="text_10">400-168-2688</span>
            </div>
            <span className="text_11">24小时服务</span>
          </div>
          <img
            className="image_3"
            src={
              "https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngcf8fcedbc77f6c7f565d30b86e13dc42819bc286eb526f88b6aa4765433bb8fe"
            }
            alt=""
          />
          <div className="image-wrapper_2 flex-col align-center">
            <img
              className="image_4"
              src={
                "https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng989924926eadb68bf17e1506010873460feaffcb63e21ac867ea0e2c2837451e"
              }
              alt=""
            />
          </div>
          <div className="block_5 flex-col justify-between">
            <div className="text-wrapper_9 flex-col">
              <span className="text_12">专人服务</span>
            </div>
            <span className="text_13">一对一指导</span>
          </div>
          <img
            className="image_5"
            src={
              "https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngcf8fcedbc77f6c7f565d30b86e13dc42819bc286eb526f88b6aa4765433bb8fe"
            }
            alt=""
          />
          <div className="image-wrapper_3 flex-col align-center">
            <img
              className="image_6"
              src={
                "https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng98a1d64f842da068c5e1bc5b973646d9696efc0ed0c649632f45f1dadb9a51d8"
              }
              alt=""
            />
          </div>
          <div className="block_6 flex-col justify-between">
            <div className="text-wrapper_10 flex-col">
              <span className="text_14">放心安心</span>
            </div>
            <span className="text_15">隐私保护</span>
          </div>
          <img
            className="image_7"
            src={
              "https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngcf8fcedbc77f6c7f565d30b86e13dc42819bc286eb526f88b6aa4765433bb8fe"
            }
            alt=""
          />
          <div className="image-wrapper_4 flex-col align-center">
            <img
              className="image_8"
              src={
                "https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng6a9d6747ba08ada2f59cebb1c2b873f39a20ab922bf59ac713f28e3c23159142"
              }
              alt=""
            />
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

export default VisaCountries;
