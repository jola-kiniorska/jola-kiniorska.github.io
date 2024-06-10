import React from "react";
import "./Home.scss";
import Title from "../../components/Title/Title.tsx";
import Subtitle from "../../components/Subtitle/Subtitle.tsx";

const Home = () => {
  return <div className="main_content-home">
    <Title title="Welcome to my creative story..."/>
    <Subtitle subtitle="I’m Jolanta Kiniorska" />
    <Subtitle subtitle="Frontend Developer" />
  </div>;
};

export default Home;