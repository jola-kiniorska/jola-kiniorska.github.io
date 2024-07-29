import React from "react";
import Text from "../Text/Text.tsx";
import github2 from "../../images/icon_github2.png";
import website from "../../images/icon_website.png";
import info from "../../images/icon_info.png";

interface ProjectTileProps {
  text: string;
  link_github: string;
  link_website: string;
}

const ProjectTile = ({ text, link_github, link_website }: ProjectTileProps) => {
  return (
    <div className="content_project-tile">
      <Text text={text} span="" />
      <div className="project_links">
        <a className="project_link" href={link_github}>
          <img className="github" src={github2} alt="github" />
        </a>
        <a className="project_link" href={link_website}>
          <img className="website" src={website} alt="website" />
        </a>
        <div className="project_link">
          <img className="info" src={info} alt="info" />
        </div>
      </div>
    </div>
  );
};

export default ProjectTile;
