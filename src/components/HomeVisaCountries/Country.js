import React from "react";
import "./HomeVisaCountries.css";
import styled from "styled-components";

const CountryWrapper = styled.div`
  width: 160px;
  height: 130px;

  .image {
    width: 100%;
    aspect-ratio: 16 / 10;
    transition: transform 0.3s ease-in-out;
  }

  .image:hover {
    transform: scale(1.1); /* 放大10% */
    cursor: pointer;
  }

  @media (max-width: 960px) {
    width: 80px;
    height: 65px;
  }
`;

const Country = ({ imageUrl, name }) => (
  <CountryWrapper className="flex-col justify-between">
    <img className="image" src={imageUrl} alt="" />
    <span className="text-group_2-0">{name}</span>
  </CountryWrapper>
);

export default Country;
