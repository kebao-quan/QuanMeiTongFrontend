import React, { useState } from "react";
import Country from "./Country/Country";
import Letter from "./Letter/Letter";
import SearchResultItem from "./SearchResultItem/SearchResultItem";
import "./VisaCountriesPageContent.css";
import { pinyin } from "pinyin-pro";

import {
  getCountriesByLetter,
  getCountriesByName,
} from "../../utils/CountryData";

import mg from "./images/mg.png";
import hg from "./images/hg.png";
import rb from "./images/rb.png";
import adly from "./images/adly.png";
import fg from "./images/fg.png";
import dg from "./images/dg.png";
import mlxy from "./images/mlxy.png";
import yn from "./images/yn.png";
import tg from "./images/tg.png";
import xjp from "./images/xjp.png";
import sous from "./images/sous.png";

const VisaCountriesPageContent = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLetter, setSelectedLetter] = useState("A");
  const [searchResultList, setSearchResultList] = useState(
    getCountriesByLetter("A")
  );

  const searchLetters = [
    "A",
    "B",
    "D",
    "E",
    "F",
    "G",
    "H",
    "J",
    "K",
    "L",
    "M",
    "N",
    "P",
    "R",
    "S",
    "T",
    "W",
    "X",
    "Y",
    "Z",
  ];

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    if (searchTerm === "") {
      setSelectedLetter("A");
      setSearchResultList(getCountriesByLetter("A"));
      return;
    }
    let pinyinTerm = pinyin(searchTerm, {
      toneType: "none",
    })[0][0].toUpperCase();
    if (searchLetters.includes(pinyinTerm)) {
      setSelectedLetter(pinyinTerm);
    } else {
      setSelectedLetter("");
    }
    setSearchResultList(getCountriesByName(searchTerm));
    console.log(searchResultList);
  };

  const handleLetterClick = (letter) => {
    setSelectedLetter(letter);
    setSearchResultList(getCountriesByLetter(letter));
  };

  const handleClear = () => {
    setSearchTerm("");
    setSelectedLetter("A");
    setSearchResultList(getCountriesByLetter("A"));
  };

  return (
    <div className="visa-background flex-col align-center">
      <div className="visa-bannner flex-col"></div>
      <div className="visa-group_2 flex-col">
        <div className="visa-text-group_1 flex-col">
          <p className="visa-text_1">热门国家</p>
          <p className="visa-text_2">Popular countries</p>
        </div>
        <div className="visa-grid_1 flex-row">
          <Country imageURL={mg} name="美国" />
          <Country imageURL={hg} name="韩国" />
          <Country imageURL={rb} name="日本" />
          <Country imageURL={adly} name="澳大利亚" />
          <Country imageURL={fg} name="法国" />
          <Country imageURL={dg} name="德国" />
          <Country imageURL={mlxy} name="马来西亚" />
          <Country imageURL={yn} name="英国" />
          <Country imageURL={tg} name="泰国" />
          <Country imageURL={xjp} name="新加坡" />
        </div>
      </div>
      <div className="flex-col">
        <div className="visa-search_1 flex-row align-center">
          <span className="visa-text_3 unselectable">按拼音查找</span>
          <div className="visa-text-group_2 flew-row align-center">
            {searchLetters.map((letter, index) => (
              <Letter
                key={index}
                letter={letter}
                handleClick={handleLetterClick}
                selected={selectedLetter === letter}
              />
            ))}
          </div>
          <div className="visa-searchbar_1 flex-row align-center">
            <img className="visa-search-icon_1" src={sous} alt=""></img>
            <form onSubmit={handleSearchSubmit}>
              <input
                className="visa-text-group_3"
                type="text"
                value={searchTerm}
                onChange={handleChange}
                placeholder="查找你的目的地国家"
              />
            </form>
          </div>
          <button
            className="visa-searchbar_2 justify-center align-center"
            onClick={handleSearchSubmit}
          >
            <span className="visa-text_5">搜索</span>
          </button>
        </div>
        <div className="visa-searchresult_1 flex-row">
          {searchResultList.length !== 0 && (
            <>
              <div className="visa-searchresult_2 flex-col justify-center align-center">
                <span className="visa-text_6">{selectedLetter}</span>
              </div>
              <div className="visa-searchresult_3 flex-col">
                {searchResultList.map((country, index) => (
                  <SearchResultItem key={index} country={country} />
                ))}
              </div>
            </>
          )}
          {searchResultList.length === 0 && (
            <div className="visa-searchresult_4 flex-col align-center">
              <span className="visa-text_7">暂无搜索的国家</span>
              <button className="visa-clear-search" onClick={handleClear}>
                <span className="visa-text_8">清空搜索</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VisaCountriesPageContent;
