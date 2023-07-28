import React from "react";
import "./Continent.css";

const Continent = ({ name, handleHover, selected }) => (
  <div
    className={`continent_201 flex-col align-center justify-center ${
      selected ? "continent_201-hover" : ""
    }`}
    onMouseEnter={() => handleHover(name)}
  >
    <span className={`continent_202 ${selected ? "continent_202-hover " : ""}`}>
      {name}
    </span>
  </div>
);

export default Continent;
