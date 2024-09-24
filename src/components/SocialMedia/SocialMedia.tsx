import React from "react";

interface SocialMediaProps {
  icon: string;
  link: string;
}

const SocialMedia = ({ icon, link }: SocialMediaProps) => {
  return (
    <a className="link" href={link} target="_blank" rel="noopener noreferrer">
      <img src={icon} alt={"social-media"}></img>
    </a>
  );
};

export default SocialMedia;