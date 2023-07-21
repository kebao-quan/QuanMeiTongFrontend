import React from "react";

function Continent({ name, handleHover, selected }) {
  return (
    <div
      className={`text-wrapper_12-1 flex-col ${selected ? "selected" : ""}`}
      onMouseEnter={() => handleHover(name)}
    >
      <span className="text_18-1">{name}</span>
    </div>
  );
}

export default Continent;
