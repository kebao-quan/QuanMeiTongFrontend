import React from "react";
import Country from "./Country";
import "./HomeSearchBar.css";

const CountryList = ({ countries }) => {
  return countries.map((country, index) => {
    return <Country name={country} key={index} />;
  });
};



export default CountryList;