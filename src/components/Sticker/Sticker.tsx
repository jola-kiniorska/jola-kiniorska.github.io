import React from "react";
import "./Sticker.scss";

const Sticker = ({ text }: { text: string }) => {
  return <div className="content_sticker">{text}</div>;
};

export default Sticker;