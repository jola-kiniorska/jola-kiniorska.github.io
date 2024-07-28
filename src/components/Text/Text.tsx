import React from "react";

const Text = ({ text, span }: { text: string, span: string }) => {
  return <p className="content_text">
    {text}
    <span>{span}</span>
  </p>;
};

export default Text;