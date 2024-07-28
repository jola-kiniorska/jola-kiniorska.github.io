import React from "react";
import "./Dots.scss";
import dot_1 from "../../images/dot_1.png";
import dot_2 from "../../images/dot_2.png";
import dot_3 from "../../images/dot_3.png";
import dot_4 from "../../images/dot_4.png";

const Dots = () => {
  return <div className="dots_set">
    <img src={dot_4} alt="dot_1" />
    <img src={dot_3} alt="dot_1" />
    <img src={dot_2} alt="dot_1" />
    <img src={dot_1} alt="dot_1" />
    <img src={dot_2} alt="dot_1" />
    <img src={dot_3} alt="dot_1" />
    <img src={dot_4} alt="dot_1" />
  </div>;
};

export default Dots;