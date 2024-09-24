import React from "react";
import Text from "../Text/Text.tsx";
import github2 from "../../images/icon_github2.png";
import website from "../../images/icon_website.png";

interface ProjectTileProps {
  text: string;
  link_github: string;
  link_website: string;
  background_image: string;
}

const ProjectTile = ({
  text,
  link_github,
  link_website,
  background_image,
}: ProjectTileProps) => {
  return (
    <div
      className="content_project-tile"
      style={{ backgroundImage: `url(${background_image})` }}
    >
      <Text text={text} />
      <div className="project_links">
        <a className="project_link" href={link_github}>
          <img className="github" src={github2} alt="github" />
        </a>
        <a className="project_link" href={link_website}>
          <img className="website" src={website} alt="website" />
        </a>
      </div>
    </div>
  );
};

export default ProjectTile;
