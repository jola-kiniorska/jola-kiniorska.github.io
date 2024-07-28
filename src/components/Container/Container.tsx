import React from "react";

interface ContainerProps {
  children: React.ReactNode
}

const Container = ({ children }: ContainerProps ) => {
  return <div className="portfolio-main">{children}</div>;
};

export default Container;