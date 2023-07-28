import React, { useState, useEffect } from "react";
import "./StepLogin.css";


import zhuye from "./images/zhuye.png";
import { NavLink } from "react-router-dom";

export default function StepLogin({ setLoginSuccess }) {
  const [mobile, setMobile] = useState("");
  const [picCode, setPicCode] = useState("");
  const [smsCode, setSmsCode] = useState("");

  //短信验证码倒计时秒数
  const [seconds, setSeconds] = useState(0);

  //检查手机号码是否有效
  function isValidPhoneNumber(phoneNumber) {
    const phoneNumberRegex = /^\+?\d{10,14}$/;
    return phoneNumberRegex.test(phoneNumber);
  }

  //检查图形验证码是否有效
  function isValidPicCode(picCode) {
    const picCodeRegex = /^[a-zA-Z0-9]{4}$/;
    return picCodeRegex.test(picCode);
  }

  //检查短信验证码是否有效
  function isValidSmsCode(smsCode) {
    const smsCodeRegex = /^\d{6}$/;
    return smsCodeRegex.test(smsCode);
  }

  //点击获取短信验证码
  function handleGetSmsClick() {
    // if (!isValidPhoneNumber(mobile)) {
    //   alert("请输入有效的手机号码");
    //   return;
    // }
    // if (!isValidPicCode(picCode)) {
    //   alert("请输入有效的图形验证码");
    //   return;
    // }
    // alert("验证码已发送");
    setSeconds(10);
  }

  //点击登录
  function handleLoginClick() {
    // if (!isValidPhoneNumber(mobile)) {
    //   alert("请输入有效的手机号码");
    //   return;
    // }
    // if (!isValidPicCode(picCode)) {
    //   alert("请输入有效的图形验证码");
    //   return;
    // }
    // if (!isValidSmsCode(smsCode)) {
    //   alert("请输入有效的短信验证码");
    //   return;
    // }
    // alert("登录成功");
    setLoginSuccess(true);
  }

  useEffect(() => {
    let interval = null;
    if (seconds > 0) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds - 1);
      }, 1000);
    } else if (seconds === 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [seconds]);
  return (
    <div className="login-group_5 flex-col align-center">
      <div className="login-group_6 flex-row align-center">
        <span className="login-text_5 unselectable">登录/注册</span>
        <NavLink to={"/"} style={{ textDecoration: "none" }}>
          <div className="flex-row align-center">
            <img className="login-image_2" src={zhuye} alt="" />
            <span className="login-text_6">返回首页</span>
          </div>
        </NavLink>
      </div>
      <div className="login-group_7">
        <input
          className="login-input_1"
          type="text"
          placeholder="手机号"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />
      </div>
      <div className="login-group_8 flex-row align-center">
        <div className="login-group_9">
          <input
            className="login-input_2"
            type="text"
            placeholder="输入图形验证码"
            value={picCode}
            onChange={(e) => setPicCode(e.target.value)}
          />
        </div>
        <div className="login-group_10">
          <img
            className="login-image_3"
            src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng9bafbfb2c124c4a303fe3c5aa3610911e40b333cffa899eac2e542abb285b1e6"
            alt=""
          />
        </div>
        <span className="login-text_7">换一换</span>
      </div>
      <div className="login-group_11 flex-row align-center justify-between">
        <input
          className="login-input_3"
          type="text"
          placeholder="请输入验证码"
          value={smsCode}
          onChange={(e) => setSmsCode(e.target.value)}
        />
        {seconds === 0 ? (
          <span onClick={handleGetSmsClick} className="login-text_8">
            获取验证码
          </span>
        ) : (
          <span className="login-text_9 unselectable">
            {seconds}s后重新获取
          </span>
        )}
      </div>
      <button
        className="login-group_12 flex-row align-center justify-center"
        onClick={handleLoginClick}
      >
        <span className="login-text_10">点击登录</span>
      </button>
      <p className="login-text_11">
        注册/登录代表您已同意
        <span className="login-text_12">《用户服务协议》</span>
        <span className="login-text_12">《信息保护声明》</span>
      </p>
    </div>
  );
}
