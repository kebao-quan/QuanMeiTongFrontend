import React from "react";
import "./VisaCountries.css";

const Contry = ({ imageUrl, name }) => (
    <div className="image-text_2-0 flex-col justify-between">
        <img className="image_9-0" src={imageUrl} />
        <span className="text-group_2-0">{name}</span>
    </div>
);


export default Contry;