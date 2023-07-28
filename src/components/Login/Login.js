import React, { useState, useEffect } from "react";
import "./Login.css";

import logob from "./images/logob.png";

import StepLogin from "./StepLogin"
import StepFill from "./StepFill";

export default function Login() {
  const [loginSuccess, setLoginSuccess] = useState(false);


  return (
    <div className="login-group_1 flex-row">
      <div className="login-group_2 flex-col align-center">
        <div className="login-logo">
          <img className="login-image_1" src={logob} alt="" />
        </div>
        <span className="login-text_1">专注于全球签证代办服务</span>
        <span className="login-text_2">
          全天在线服务 期待与您合作 提供一站式解决方案
        </span>
        <div className="login-group_3 flex-row">
          <div className="login-dot_1"></div>
          <span className="login-text_3">专业团队</span>
          <div className="login-dot_1"></div>
          <span className="login-text_3">经验丰富</span>
          <div className="login-dot_1"></div>
          <span className="login-text_3">安全可靠</span>
          <div className="login-dot_1"></div>
          <span className="login-text_3">服务周到</span>
        </div>
        <div className="login-group_4 flex-row align-center justify-center">
          <span className="login-text_4">咨询电话：400-168-2688</span>
        </div>
      </div>
      {loginSuccess ? (<StepFill/>) : (<StepLogin setLoginSuccess={setLoginSuccess}/>)}
    </div>
  );
}
