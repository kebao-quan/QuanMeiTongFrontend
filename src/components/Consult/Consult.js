import React from "react";
import { useMediaQuery } from "react-responsive";
import {
  OnlineConsult,
  WechatConsult,
  PhoneConsult,
  GeneralConsult,
} from "./ConsultBox";
import "./Consult.css";



const Consult = () => {
  const isMobile = useMediaQuery({ query: "(min-width: 460px)" });

  return isMobile && (
    <div className="consult-group_1 flex-col">
      <OnlineConsult />
      <WechatConsult />
      <PhoneConsult />
      <GeneralConsult />
    </div>
  );
};

export default Consult;
