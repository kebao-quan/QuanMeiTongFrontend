import React, { useState } from "react";
import "./Consult.css";

import zixun from "./images/zixun.png";
import zxzx2 from "./images/zxzx2.png";
import weixin from "./images/weixin.png";
import wx from "./images/wx.png";
import dianhua from "./images/dianhua.png";
import dh2 from "./images/dh2.png";
import huidingbu from "./images/huidingbu.png";
import hddb2 from "./images/hddb2.png";
import logo2 from "./images/logo2.png";
import jts from "./images/jts.png";
import jtx from "./images/jtx.png";

import styled from "styled-components";

const ConsultChat = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  height: 80px;
  width: 410px;
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.2);
  background: #d23028;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: width 0.3s ease, height 0.3s ease;

  &.expanded {
    height: 540px;
    width: 668px;
  }

  & .top-bar {
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: space-between;
  }

  & .consult-chat-group_1 {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: calc(100% - 40px);
    margin: 0 auto;
  }

  & .consult-chat-text_1 {
    width: 248px;
    height: 33px;
    font-size: 24px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #ffffff;
    line-height: 33px;
    margin: 0 0 0 10px;
  }

  & .chat-area {
    width: 100%;
    height: 100%;
    background: #fff;
  }
`;

const OnlineConsultChat = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <ConsultChat className={isExpanded ? "expanded" : ""}>
      <div className="top-bar">
        <div className="consult-chat-group_1">
          <div className="flex-row align-center">
            <img className="" src={logo2} alt="logo" />
            <span className="consult-chat-text_1">全球签证顾问 在线咨询</span>
          </div>
          <button onClick={handleExpand}>
            <img className="" src={isExpanded ? jtx : jts} alt="" />
          </button>
        </div>
      </div>
      <div className="chat-area"></div>
    </ConsultChat>
  );
};

export const OnlineConsult = () => {
  const [active, setActive] = useState(false);

  const handleMouseEnter = () => {
    setActive(true);
  };

  const handleMouseLeave = () => {
    setActive(false);
  };

  return (
    <>
      <div
        className="consult-box_101"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="image-text_3 flex-col justify-between">
          <img className="label_3" src={active ? zxzx2 : zixun} alt="" />
          <span className="text-group_3">在线咨询</span>
        </div>
      </div>
      <OnlineConsultChat />
    </>
  );
};

export const WechatConsult = () => {
  const [active, setActive] = useState(false);

  const handleMouseEnter = () => {
    setActive(true);
  };

  const handleMouseLeave = () => {
    setActive(false);
  };

  return (
    <>
      <div
        className="consult-box_102"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="image-text_3 flex-col justify-between">
          <img className="label_3" src={active ? wx : weixin} alt="" />
          <span className="text-group_3">微信咨询</span>
        </div>
      </div>
      {active && (
        <div className="wechatQR-group flex-row justify-between">
          <div className="wechat-image-text_1 flex-col justify-between">
            <img
              className="wecharQR-image_1"
              src={
                "https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPnga8f3fce27bc73166b82065d10fbbb5a369b213fec913a387cf56100db2ff7e9e"
              }
            />
            <span className="wechat-text_1">钱老师</span>
          </div>
          <div className="wechat-image-text_2 flex-col justify-between">
            <img
              className="wecharQR-image_2"
              src={
                "https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPnga8f3fce27bc73166b82065d10fbbb5a369b213fec913a387cf56100db2ff7e9e"
              }
            />
            <span className="wechat-text_2">赵老师</span>
          </div>
        </div>
      )}
    </>
  );
};

export const PhoneConsult = () => {
  const [active, setActive] = useState(false);

  const handleMouseEnter = () => {
    setActive(true);
  };

  const handleMouseLeave = () => {
    setActive(false);
  };

  return (
    <>
      <div
        className="consult-box_103"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="image-text_3 flex-col justify-between">
          <img className="label_3" src={active ? dh2 : dianhua} alt="" />
          <span className="text-group_3">电话咨询</span>
        </div>
      </div>
      {active && (
        <div className="phone-group_1 flex-col justify-center align-center">
          <span className="phone-text_1">全国免费咨询电话</span>
          <span className="phone-text_2">400-168-2688</span>
        </div>
      )}
    </>
  );
};

export const GeneralConsult = () => {
  const [active, setActive] = useState(false);

  const handleMouseEnter = () => {
    setActive(true);
  };

  const handleMouseLeave = () => {
    setActive(false);
  };

  return (
    <>
      <div
        className="consult-box_104"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img
          className="general-consult-image_1"
          src={active ? hddb2 : huidingbu}
          alt=""
        />
      </div>
    </>
  );
};
