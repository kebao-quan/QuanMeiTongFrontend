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

const DropdownMenu = React.forwardRef((props, ref) => {
  const [countries, setCountries] = useState(HotCountries);

  const handleClickInside = (event) => {
    event.stopPropagation();
  };

  return (
    <div className="section_15 flex-col" ref={ref} onClick={handleClickInside}>
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
          <ContryList countries={countries} />
        </div>
      </div>
    </div>
  );
});

export default DropdownMenu;
