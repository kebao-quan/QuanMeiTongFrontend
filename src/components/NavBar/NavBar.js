import React from 'react';
import "./NavBar.css"

const Navbar = () => {
    return (
        <>
            <div className="group_1 flex-col" />
            <div className="group_2 flex-row">
                <img
                    className="image_1"
                    src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngecbeb4b89fcd16f691de8cb641edd71c88e3d507ac99adc7bdd8f9d45807ce4c"
                    alt = ""
                />
                <span className="text_1">全美通·签证</span>
                <img
                    className="label_1"
                    src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng991ca68a436528e5f4cdb863d1af507f74a7ef360accfad665d76278d8464719"
                    alt = ""
                />
                <span className="text_2">400-168-2688</span>
                <div className="text-wrapper_1 flex-col">
                    <button className="text_3" to="/">网站首页</button>
                </div>
                <div className="text-wrapper_2 flex-col">
                    <button className="text_4" to="/visa_countries">签证国家</button>
                </div>
                <div className="text-wrapper_3 flex-col">
                    <button className="text_5" to="/visa_application">签证申请</button>
                </div>
                <div className="text-wrapper_4 flex-col">
                    <button className="text_6" to="/downloads">材料下载</button>
                </div>
                <div className="text-wrapper_5 flex-col">
                    <button className="text_7" to="/tickets">订购机票</button>
                </div>
                <div className="text-wrapper_6 flex-col">
                    <button className="text_8" to="/login">登录/注册</button>
                </div>
            </div>
        </>
    );
};

export default Navbar;
