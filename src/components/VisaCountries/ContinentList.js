import React, { useState } from "react";
import Continent from "./Continent";

function ContinentList({
  continents,
  handleContinentHover,
  selectedContinent,
}) {
  return (
    <div className="group_8 flex-row">
      <div className="list_1 flex-row">
        {continents.map((continent, index) => (
          <Continent
            key={index}
            name={continent}
            handleHover={handleContinentHover}
            selected={continent === selectedContinent}
          />
        ))}
      </div>
    </div>
  );
}

export default ContinentList;
