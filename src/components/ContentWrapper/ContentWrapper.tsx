import React from "react";
import "./ContentWrapper.scss";

interface ContentWrapperrProps {
  children: React.ReactNode
}

const ContentWrapper = ({ children }: ContentWrapperrProps ) => {
  return <div className="main_content">{children}</div>;
};

export default ContentWrapper;