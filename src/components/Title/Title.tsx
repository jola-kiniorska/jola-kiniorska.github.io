import React from "react";
import "./Title.scss";

const Title = ({ title }: { title: string }) => {
  return <div className="content_title">{title}</div>;
};

export default Title;