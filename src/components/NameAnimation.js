// src/components/NameAnimation.js
import React from "react";
import "../Styles/NameAnimation.css";

const NameAnimation = ({ name }) => {
  return (
    <div className="name-animation">
      {name.split("").map((letter, index) => (
        <span key={index} className="name-letter">
          {letter}
        </span>
      ))}
    </div>
  );
};

export default NameAnimation;
