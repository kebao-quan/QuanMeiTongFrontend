import React, { useState } from 'react';
import "./SearchBar.css"


const SearchBar = () => {

    const [searchTerm, setSearchTerm] = useState('');
    const [isFocused, setFocused] = useState(false);

    const handleChange = event => {
        setSearchTerm(event.target.value);
    }
    
    const handleSubmit = event => {
        event.preventDefault();
        // 这里写提交表单的逻辑，searchTerm就是表单的值
        console.log(searchTerm);
    }

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
            {isFocused && (
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
            <div className="text-wrapper_20 flex-row">
              <span className="text_51">美国</span>
              <span className="text_52">韩国</span>
              <span className="text_53">日本</span>
              <span className="text_54">澳大利亚</span>
              <span className="text_55">法国</span>
              <span className="text_56">德国</span>
            </div>
            <div className="text-wrapper_21 flex-row">
              <span className="text_57">马拉西亚</span>
              <span className="text_58">越南</span>
              <span className="text_59">泰国</span>
              <span className="text_60">新加坡</span>
              <span className="text_61">俄罗斯</span>
              <span className="text_62">新西兰</span>
            </div>
            <div className="text-wrapper_22 flex-row">
              <span className="text_63">沙特阿拉伯</span>
              <span className="text_64">英国</span>
              <span className="text_65">加拿大</span>
              <span className="text_66">意大利</span>
              <span className="text_67">西班牙</span>
              <span className="text_68">柬埔寨</span>
            </div>
            <div className="text-wrapper_23 flex-row">
              <span className="text_69">缅甸</span>
              <span className="text_70">老挝</span>
              <span className="text_71">巴基斯担</span>
              <span className="text_72">瑞士</span>
              <span className="text_73">土耳其</span>
              <span className="text_74">迪拜</span>
            </div>
            <div className="text-wrapper_24 flex-row">
              <span className="text_75">孟加拉</span>
              <span className="text_76">希腊</span>
              <span className="text_77">荷兰</span>
              <span className="text_78">瑞典</span>
              <span className="text_79">葡萄牙</span>
              <span className="text_80">冰岛</span>
            </div>
          </div>
            )}
      </div>
    )
}

export default SearchBar;