import React from "react";
import "./BottonNavBar.css";

const BottonNavBar = () => {
  return (
    <>
      <div className="group_15 flex-row">
        <div className="image-text_9 flex-row justify-between">
          <img
            className="image_17"
            src={
              "https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngecbeb4b89fcd16f691de8cb641edd71c88e3d507ac99adc7bdd8f9d45807ce4c"
            }
          />
          <span className="text-group_10">全美通·签证</span>
        </div>
        <span className="text_32">网站首页</span>
        <span className="text_33">签证国家</span>
        <span className="text_34">签证申请</span>
        <span className="text_35">材料下载</span>
        <span className="text_36">订购机票</span>
        <div className="text-wrapper_97 flex-col">
          <span className="text_37">登录/注册</span>
        </div>
      </div>
      <div className="text-wrapper_13 flex-col">
        <span className="text_19">
          公安备案&nbsp;1234567890号&nbsp;|&nbsp;沪ICP1234567890号
        </span>
      </div>
    </>
  );
};

export default BottonNavBar;
