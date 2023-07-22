import React, { useState } from "react";
import "./Consult.css";

export const OnlineConsult = () => {
  const [active, setActive] = useState(false);

  const handleMouseEnter = () => {
    setActive(true);
  };

  const handleMouseLeave = () => {
    setActive(false);
  };

  return (
    <div
      className="consult-box_101"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="image-text_3 flex-col justify-between">
        <img
          className="label_3"
          src={
            active
              ? "https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng526abdf8276b8cb6152289ec439437106318a4fa9bde7176d38ba85e0f728423"
              : "https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngb120051d7e653933e6370dcdd3275a242dbd78449c55a0ad9d82a940ba7d831d"
          }
          alt=""
        />
        <span className="text-group_3">在线咨询</span>
      </div>
    </div>
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
          <img
            className="label_3"
            src={
              active
                ? "https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPnga5b028b84425e5c60fdff49bdf2896f5f01782e47c923560f12086a1b714d416"
                : "https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng2010d494f43213514699211aa442401025b51621042cfb04a8bf5dc6cf0835b5"
            }
            alt=""
          />
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
          <img
            className="label_3"
            src={
              active
                ? "https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng9de1a519553510259e051635eb6678ef4a8b1d0ee0d05c8b00a8dfb1755a99ce"
                : "https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngfe8e3d800dd799ffef901fcc3e6edf0113a50845ddafa8c284064ed21530fa4d"
            }
            alt=""
          />
          <span className="text-group_3">电话咨询</span>
        </div>
      </div>
      {active && (
        <div className="phone-group_1 flex-row">
          <div className="phone-text-group_1 flex-col justify-between">
            <span className="phone-text_1">全国免费咨询电话</span>
            <span className="phone-text_2">400-168-2688</span>
          </div>
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
          src={
            active
              ? "https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngcb3a773316bb880cbec5437b295ef730e9d69bf470760d8c6f0155b037761dd2"
              : "https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng262236dc0f440b20cb349a81e7105f579502cd0dcc57c9e21a1502650561946d"
          }
          alt=""
        />
      </div>
    </>
  );
};
