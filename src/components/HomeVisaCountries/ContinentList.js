import React from "react";
import Continent from "./Continent";
import styled from "styled-components";

function ContinentList({
  continents,
  handleContinentHover,
  selectedContinent,
}) {
  const ContinentWrapper = styled.div`
    width: 83.333333333vw;
    margin: 60px auto;

    & .list {
      display: flex;
      width: 100%;
      flex-wrap: wrap;
      gap: 10px;
    }

    @media (max-width: 1100px) {
      width: 90vw;
      margin: 10px auto;
    }

    @media (max-width: 460px) {
      width: 95vw;
      margin: 5px auto;
    }
  `;

  return (
    <ContinentWrapper className="flex-row">
      <div className="list">
        {continents.map((continent, index) => (
          <Continent
            key={index}
            name={continent}
            handleHover={handleContinentHover}
            selected={continent === selectedContinent}
          />
        ))}
      </div>
    </ContinentWrapper>
  );
}

export default ContinentList;
