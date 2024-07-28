import React from "react";
import "./SocialMedia.scss";

interface SocialMediaProps {
  icon: string;
  link: string;
}

const SocialMedia = ({ icon, link }: SocialMediaProps) => {
  return (
    <a className="link" href={link}>
      <img src={icon} alt={"social-media"}></img>
    </a>
  );
};

export default SocialMedia;