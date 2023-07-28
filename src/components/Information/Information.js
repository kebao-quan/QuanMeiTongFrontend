import React from "react";
import "./Information.css";
import Image1 from "./images/1.png";
import zytd from "./images/zytd.png";
import Image2 from "./images/2.png";
import jyff from "./images/jyff.png";
import Image3 from "./images/3.png";
import aqkk from "./images/aqkk.png";
import Image4 from "./images/4.png";
import fwzd from "./images/fwzd.png";

const Information = () => {
  return (
    <>
      <div className="group_13 flex-col">
        <div className="box_3 flex-col">
          <div className="text-wrapper_99 flex-row">
            <span className="text_28">
              全天在线服务&nbsp;&nbsp;期待与您合作&nbsp;&nbsp;提供一站式解决方案
            </span>
          </div>
          <div className="group_14 flex-row">
            <img className="image_11" src={Image1} alt=""/>
            <div className="image-text_7 flex-col justify-between">
              <img className="image_12" src={zytd} alt="" />
              <span className="text-group_8">专业团队</span>
            </div>
            <img className="image_13" src={Image2} alt="" />
            <div className="image-text_8 flex-col justify-between">
              <img className="label_7" src={jyff} alt="" />
              <span className="text-group_9">经验丰富</span>
            </div>
            <img className="image_14" src={Image3} alt="" />
            <div className="section_1 flex-col justify-between">
              <img className="image_15" src={aqkk} alt="" />
              <span className="text_29">安全可靠</span>
            </div> 
            <img className="image_16" src={Image4} alt=""/>
            <div className="section_2 flex-col justify-between">
              <img className="label_8" src={fwzd} alt="" />
              <span className="text_30">服务周到</span>
            </div>
          </div>
        </div>
      </div>
      <div className="phone-information-text-wrapper_1 flex-col">
        <span className="phone-information-text_1">
          24小时咨询电话：400-169-2688
        </span>
      </div>
    </>
  );
};

export default Information;
