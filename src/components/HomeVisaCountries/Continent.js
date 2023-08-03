import React from "react";
import styled from "styled-components";

function Continent({ name, handleHover, selected }) {
  const ContinentWrapper = styled.div`
    height: 50px;
    width: 200px;
    background: rgba(255, 255, 255, 1);

    &.selected {
      background: rgba(51, 51, 51, 1) !important;
    }

    &.selected span {
      color: rgba(255, 255, 255, 1);
    }

    @media (max-width: 1100px) {
      width: 25vw;
    }

    @media (max-width: 460px) {
      width: 45vw;
    }
  `;

  return (
    <ContinentWrapper
      className={`flex-col ${selected ? "selected" : ""}`}
      onMouseEnter={() => handleHover(name)}
      onClick={() => handleHover(name)}
    >
      <span className="text_18-1">{name}</span>
    </ContinentWrapper>
  );
}

export default Continent;
