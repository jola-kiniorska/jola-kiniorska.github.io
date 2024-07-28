import React from "react";
import "./Content.scss";

interface ContentProps {
  children: React.ReactNode
}

const Content = ({ children }: ContentProps ) => {
  return <div className="page_content">{children}</div>;
};

export default Content;