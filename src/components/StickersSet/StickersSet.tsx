import React from "react";
import "./StickersSet.scss";
import Sticker from "../Sticker/Sticker.tsx";

const StickersSet = () => {
  return <div className="content_set_stickers">
    <Sticker text="HTML"/>
    <Sticker text="CSS"/>
    <Sticker text="SASS"/>
    <Sticker text="JavaScript"/>
    <Sticker text="TypeScript"/>
    <Sticker text="React"/>
    <Sticker text="Webpack"/>
    <Sticker text="PHP"/>
    <Sticker text="Bitbucket"/>
    <Sticker text="Docker"/>
    <Sticker text="Magento"/>
    <Sticker text="Git"/>
    <Sticker text="Jira"/>
    <Sticker text="Confluence"/>
    <Sticker text="Figma"/>
  </div>;
};

export default StickersSet;