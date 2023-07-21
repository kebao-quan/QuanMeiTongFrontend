import React, { useState } from "react";
import ContryList from "./ContryList";
import "./SearchBar.css";

const HotCountries = [
  "美国",
  "韩国",
  "日本",
  "澳大利亚",
  "法国",
  "德国",
  "马来西亚",
  "越南",
  "泰国",
  "新加坡",
  "俄罗斯",
  "新西兰",
  "沙特阿拉伯",
  "英国",
  "加拿大",
  "意大利",
  "西班牙",
  "柬埔寨",
  "缅甸",
  "老挝",
  "巴基斯坦",
  "瑞士",
  "土耳其",
  "迪拜",
  "孟加拉",
  "希腊",
  "荷兰",
  "瑞典",
  "葡萄牙",
  "冰岛",
];



const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isFocused, setFocused] = useState(false);
  const [countries, setCountries] = useState(HotCountries);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // 这里写提交表单的逻辑，searchTerm就是表单的值
    console.log(searchTerm);
  };

  const handleFocus = () => {
    setFocused(true);
  };

  const handleBlur = () => {
    setFocused(false);
  };

  return (
    <div className="group_3 flex-col">
      <div className="group_4 flex-row">
        <div className="block_2 flex-col" />
      </div>
      <div className="group_5 flex-row justify-between">
        <div className="box_1 flex-row">
          <div className="image-text_1 flex-row justify-between">
            <img
              className="label_2"
              src={
                "https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng73df93eca1c333b15333df621003416bcb8369e08b2fd92df543c310224a2b4c"
              }
            />
            <input
              className="text-group_1"
              type="text"
              value={searchTerm}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              placeholder="查找你的目的地国家"
            />
          </div>
        </div>
        <button className="text-wrapper_7 flex-col" onClick={handleSubmit}>
          <span className="text_9">快速申请出国签证</span>
        </button>
      </div>
      {true && (
        <div className="section_15 flex-col">
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
          <img
            className="image_57"
            src={
              "https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngb61f192893c4ca3a60819005855fb1ce312900abc9e86b7f8374585497a16f12"
            }
          />
          <div className="text-wrapper_101">
            <div className="grid_0">
              <ContryList countries={countries}/>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
