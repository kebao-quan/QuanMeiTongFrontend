import React from "react";
import "./Consult.css";

const ConsultBox = ({ imageUrl, text, onMouseEnter, onMouseLeave, isActive }) => {
  return (
    <div className="box_101" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      {text !== "" ? (
        <div className={`image-text_3 flex-col justify-between ${isActive ? "isActive" : ""}`}>
          <img className="label_3" src={imageUrl} alt="" />
          <span className="text-group_3">{text}</span>
        </div>
      ) : <img className="label_6" src={imageUrl} alt="" />}
    </div>
  );
};

export default ConsultBox;
