import React from "react";
import "./Letter.css";

const Letter = ({ letter, handleClick, selected}) => {
  return (
    <span className={`visa-text_4 unselectable ${selected ? "visa-letter-selected" : ""}`} onClick={() => handleClick(letter)}>
      {letter}
    </span>
  );
};

export default Letter;
