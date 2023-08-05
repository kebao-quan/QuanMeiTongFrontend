import React, { useState } from "react";
import CountryList from "./CountryList";
import "./DropdownMenu.css";

import styled from "styled-components";

//热门国家
import { HotCountries } from "../../utils/CountryData";

const Containter = styled.div`
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.2);
  background-color: rgba(255, 255, 255, 1);
  z-index: 1;
  width: 660px;
  display: block;
  position: absolute;
  margin: 10px 0 0 0;
  display: flex;
  flex-direction: column;
`;

const DropdownMenu = React.forwardRef((props, ref) => {
  const [countries, setCountries] = useState(HotCountries);

  const handleClickInside = (event) => {
    event.stopPropagation();
  };

  return (
    <Containter ref={ref} onClick={handleClickInside}>
      <div className="box_19 flex-row justify-between">
        <div className="group_18 flex-col justify-end">
          <span className="text_45">热门</span>
          <div className="box_20 flex-col" />
        </div>
        <div className="text-wrapper_15 flex-col">
          <span className="text_46">ABCDE</span>
        </div>
        <div className="text-wrapper_16 flex-col">
          <span className="text_47">FGHIJ</span>
        </div>
        <div className="text-wrapper_17 flex-col">
          <span className="text_48">KLMNO</span>
        </div>
        <div className="text-wrapper_18 flex-col">
          <span className="text_49">PQRST</span>
        </div>
        <div className="text-wrapper_19 flex-col">
          <span className="text_50">UWXYZ</span>
        </div>
      </div>
      <div className="dropdownmenu-hr_1" />
      <div className="text-wrapper_101">
        <div className="grid_0">
          <CountryList countries={countries} />
        </div>
      </div>
    </Containter>
  );
});

export default DropdownMenu;
