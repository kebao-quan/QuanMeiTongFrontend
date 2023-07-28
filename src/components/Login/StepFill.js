import React, { useState } from "react";
import "./StepFill.css";

import zhuye from "./images/zhuye.png";
import jtx from "./images/jtx.png";
import { NavLink } from "react-router-dom";

//自定义CheckBox组件
const CheckBox = ({ checked, setSelectedOption }) => {
  return (
    <div
      className="login-checkbox-container flex-row justify-center align-center"
      onClick={setSelectedOption}
    >
      {checked && <div className="login-checkbox-check"></div>}
    </div>
  );
};

const option1 = "旅行社";
const option2 = "企业";
const option3 = "家庭";

export default function StepFill() {
  const [selectedOption, setSelectedOption] = useState(option1);

  const [travelAgencyName, setTravelAgencyName] = useState("");
  const [city, setCity] = useState("");
  const [contactName, setContactName] = useState("");
  const [contactMobile, setContactMobile] = useState("");

  function handleTravelAgencyNameChange(e) {
    setTravelAgencyName(e.target.value);
  }

  function handleCityChange(e) {
    setCity(e.target.value);
  }

  function handleContactNameChange(e) {
    setContactName(e.target.value);
  }

  function handleContactMobileChange(e) {
    setContactMobile(e.target.value);
  }

  return (
    <div className="login-group_5 flex-col align-center">
      <div className="login-group_6 flex-row align-center">
        <span className="login-text_5 unselectable">完善信息</span>
        <NavLink to={"/"} style={{ textDecoration: "none" }}>
          <div className="flex-row align-center">
            <img className="login-image_2" src={zhuye} alt="" />
            <span className="login-text_6">返回首页</span>
          </div>
        </NavLink>
      </div>
      <div className="login-group_101 flex-row align-center">
        <span className="login-text_101">选择身份</span>

        <div
          className="login-group_102 flex-row align-center"
          onClick={() => {
            setSelectedOption(option1);
          }}
        >
          <CheckBox checked={selectedOption === option1} />
          <span
            className="login-text_102"
            style={
              selectedOption === option1
                ? { color: "#333333" }
                : { color: "#999999" }
            }
          >
            {option1}
          </span>
        </div>

        <div
          className="login-group_103 flex-row align-center"
          onClick={() => {
            setSelectedOption(option2);
          }}
        >
          <CheckBox checked={selectedOption === option2} />
          <span
            className="login-text_102"
            style={
              selectedOption === option2
                ? { color: "#333333" }
                : { color: "#999999" }
            }
          >
            {option2}
          </span>
        </div>

        <div
          className="login-group_103 flex-row align-center"
          onClick={() => {
            setSelectedOption(option3);
          }}
        >
          <CheckBox checked={selectedOption === option3} />
          <span
            className="login-text_102"
            style={
              selectedOption === option3
                ? { color: "#333333" }
                : { color: "#999999" }
            }
          >
            {option3}
          </span>
        </div>
      </div>
      {/* 旅行社显示内容 */} {/* 企业显示内容 */}
      {(selectedOption === option1 || selectedOption === option2) && (
        <>
          <div className="login-group_104 flex-row align-center">
            <input
              className="login-input_101"
              type="text"
              placeholder={
                selectedOption === option1
                  ? "请输入旅行社名称"
                  : "请输入公司名称"
              }
              value={travelAgencyName}
              onChange={handleTravelAgencyNameChange}
            />
          </div>
          <div className="login-group_104 flex-row align-center">
            <input
              className="login-input_101"
              type="text"
              placeholder="选择所在城市"
              value={city}
              onChange={handleCityChange}
            />
            <img className="login-image_101" src={jtx} alt="" />
          </div>
          <div className="login-group_104 flex-row align-center">
            <input
              className="login-input_101"
              type="text"
              placeholder="请输入联系人称呼"
              value={contactName}
              onChange={handleContactNameChange}
            />
          </div>
          <div className="login-group_104 flex-row align-center">
            <input
              className="login-input_101"
              type="text"
              placeholder="请输入联系人手机号"
              value={contactMobile}
              onChange={handleContactMobileChange}
            />
          </div>
          <button className="login-group_105 flex-row align-center justify-center">
            <span className="login-text_103">确认</span>
          </button>
        </>
      )}
      {/* 家庭显示内容 */}
      {selectedOption === option3 && (
        <>
          <div className="login-group_104 flex-row align-center">
            <input
              className="login-input_101"
              type="text"
              placeholder="请输入您的名字"
              value={contactName}
              onChange={handleContactNameChange}
            />
          </div>
          <div className="login-group_104 flex-row align-center">
            <input
              className="login-input_101"
              type="text"
              placeholder="选择所在城市"
              value={city}
              onChange={handleCityChange}
            />
            <img className="login-image_101" src={jtx} alt="" />
          </div>
          <div className="login-group_104 flex-row align-center">
            <input
              className="login-input_101"
              type="text"
              placeholder="请输入您的手机号"
              value={contactMobile}
              onChange={handleContactMobileChange}
            />
          </div>
          <button className="login-group_105 flex-row align-center justify-center">
            <span className="login-text_103">确认</span>
          </button>
        </>
      )}
    </div>
  );
}
