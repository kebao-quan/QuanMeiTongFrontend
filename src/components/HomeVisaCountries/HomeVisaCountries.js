import React, { useState } from "react";
import styled from "styled-components";

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

const Container = styled.div`
  background-color: rgba(247, 247, 247, 1);
  margin-top: -1px;
  width: 100vw;
  position: relative;
`;

const Info = styled.div`
  max-width: 1600px;
  width: 83.33333333333333%;
  aspect-ratio: 10 / 1;
  background-color: rgba(255, 255, 255, 1);
  margin: 60px auto 0 auto;

  & .vertical-line {
    border: none;
    border-left: 1px solid #edeeef;
    height: 37.5%;
    width: 1px;
  }

  @media (max-width: 1100px) {
    width: 90%;
    margin: 30px auto 0 auto;
  }

  @media (max-width: 460px) {
    width: 95%;
    margin: 15px auto 0 auto;
  }
`;

const InfoItem = styled.div`
  width: 25%;
  font-size: 12px;

  & .image {
    height: 20%;
    width: 20%;
    margin: 0 0 0 12.5%;
  }

  & .block {
    width: 31.25%;
    aspect-ratio: 125 / 60;
    margin: 0 0 0 4.5%;
  }

  & .text_1 {
    display: grid;
    place-items: center;
    height: 20px;
    background-color: #d23028;
    border-radius: 13px;
    text-align: center;
    overflow-wrap: break-word;
    color: rgba(255, 255, 255, 1);
    font-size: 1em;
    /* font-family: PingFangSC-Regular, PingFang SC; */
    text-align: left;
    white-space: nowrap;
    line-height: 12px;
  }

  & .text_2 {
    overflow-wrap: break-word;
    color: rgba(51, 51, 51, 1);
    font-size: 2em;
    /* font-family: PingFangSC-Regular; */
    text-align: left;
    white-space: nowrap;
  }

  @media (max-width: 1100px) {
    font-size: 6px;

    & .text_1 {
      width: 40px;
      height: 10px;
    }
  }

  @media (max-width: 460px) {
    font-size: 3px;

    & .text_1 {
      width: 20px;
      height: 5px;
    }
  }
`;

const CountryGrid = styled.div`
  width: 83.33333333333333%;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  gap: 20px;
  margin: 0 0 80px 0;

  @media (max-width: 1100px) {
    width: 90%;
    margin: 30px auto 40px auto;
  }

  @media (max-width: 460px) {
    width: 95%;
    margin: 15px auto 20px auto;
    justify-content: space-between;
  }
`;

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
    <Container className="flex-col align-center">
      <Info className="flex-row align-center">
        <InfoItem className="flex-row align-center">
          <img className="image" src={fuwu} alt="" />
          <div className="block flex-col justify-between">
            <span className="text_1">400-168-2688</span>
            <span className="text_2">24小时服务</span>
          </div>
        </InfoItem>
        <div className="vertical-line" />

        <InfoItem className="flex-row align-center">
          <img className="image" src={yiduiyi} alt="" />
          <div className="block flex-col justify-between">
            <span className="text_1">专人服务</span>
            <span className="text_2">一对一指导</span>
          </div>
        </InfoItem>
        <div className="vertical-line" />

        <InfoItem className="flex-row align-center">
          <img className="image" src={yinsi} alt="" />
          <div className="block flex-col justify-between">
            <span className="text_1">放心安心</span>
            <span className="text_2">隐私保护</span>
          </div>
        </InfoItem>
        <div className="vertical-line" />

        <InfoItem className="flex-row align-center">
          <img className="image" src={ks} alt="" />
          <div className="block flex-col justify-between">
            <span className="text_1">省时省力</span>
            <span className="text_2">快速出签</span>
          </div>
        </InfoItem>
      </Info>

      <ContinentList
        continents={continents}
        handleContinentHover={handleContinentHover}
        selectedContinent={selectedContinent}
      />

      <CountryGrid className="flex-row">
        {countries.map((country, index) => (
          <Country
            imageUrl={getCountryImage(country)}
            name={country}
            key={index}
          />
        ))}
      </CountryGrid>
    </Container>
  );
};

export default HomeVisaCountries;
