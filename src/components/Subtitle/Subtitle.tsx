import React from "react";
import "./Subtitle.scss";

const Subtitle = ({ subtitle }: { subtitle: string }) => {
  return <div className="content_subtitle">{subtitle}</div>;
};

export default Subtitle;