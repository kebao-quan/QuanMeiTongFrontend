import React from "react";
import Contry from "./Contry";
import "./SearchBar.css";

const ContryList = ({ countries }) => {
  return countries.map((country, index) => {
    return <Contry name={country} key={index} />;
  });
};



export default ContryList;