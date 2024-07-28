import React from "react";
import "./Text.scss";

const Text = ({ text, span }: { text: string, span: string }) => {
  return <div className="content_text">
    {text}
    <span>{span}</span>
  </div>;
};

export default Text;