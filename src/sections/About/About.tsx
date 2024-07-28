import React from "react";
import Title from "../../components/Title/Title.tsx";
import Text from "../../components/Text/Text.tsx";
import StickerSet from "../../components/StickersSet/StickersSet.tsx";

const About = () => {
  return <div className="main_content-about">
    <Title title="About"/>
    <div className="page_content">
      <div className="flex-wrapper wrapper-first">
        <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et feugiat ipsum. Curabitur pulvinar convallis interdum. Ut luctus porta ullamcorper. Sed bibendum nisi ut fermentum efficitur. Fusce ut sapien massa. Duis purus lectus, pulvinar eget fermentum non, blandit eget ex. Vivamus eu tortor ac orci finibus accumsan ac at orci.  Quisque facilisis, ipsum eu mollis malesuada, risus lorem dapibus eros, vel vehicula nulla augue consectetur metus."
              span="" />
      </div>
      <div className="flex-wrapper wrapper-second">
        <Text text="My " span="skills" />
        <StickerSet />
      </div>
    </div>
  </div>;
};

export default About;