import React, { useState } from "react";
import {
  OnlineConsult,
  WechatConsult,
  PhoneConsult,
  GeneralConsult,
} from "./ConsultBox";
import "./Consult.css";

const Consult = () => {
  const consults = [
    {
      imageUrl:
        "https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngb120051d7e653933e6370dcdd3275a242dbd78449c55a0ad9d82a940ba7d831d",
      text: "在线咨询",
    },
    {
      imageUrl:
        "https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng2010d494f43213514699211aa442401025b51621042cfb04a8bf5dc6cf0835b5",
      text: "微信咨询",
    },
    {
      imageUrl:
        "https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngfe8e3d800dd799ffef901fcc3e6edf0113a50845ddafa8c284064ed21530fa4d",
      text: "电话咨询",
    },
    {
      imageUrl:
        "https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng262236dc0f440b20cb349a81e7105f579502cd0dcc57c9e21a1502650561946d",
      text: "",
    },
  ];

  return (
    <div className="consult-group_1 flex-col">
      <OnlineConsult />
      <WechatConsult />
      <PhoneConsult />
      <GeneralConsult />
      {/* {consults.map((consult, index) => (
        <ConsultBox
            key={index}
            imageUrl={consult.imageUrl}
            text={consult.text}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            isActive={activeButton === index}
            />
        ))} */}
    </div>
  );
};

export default Consult;
