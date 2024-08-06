import React from "react";
import Title from "../../components/Title/Title.tsx";
import Text from "../../components/Text/Text.tsx";
import StickerSet from "../../components/StickersSet/StickersSet.tsx";

const About = () => {
  return (
    <div className="main_content-about">
      <Title title="About" />
      <div className="page_content">
        <div className="flex-wrapper wrapper-first">
          <Text text=" Programming is a creative task where you can create something out of almost nothing. I am curious about the world surrounding me and I am keen on learning new things and meeting new people. Currently, I care about continuous growing in the field of frontend development." />
        </div>
        <div className="flex-wrapper wrapper-second">
          <Text text="My skills" />
          <StickerSet />
        </div>
      </div>
    </div>
  );
};

export default About;
