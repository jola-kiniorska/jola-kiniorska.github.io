import React from "react";
import "./ProjectTile.scss";

const ProjectTile = ({ text }: { text: string }) => {
  return <div className="content_project-tile">{text}</div>;
};

export default ProjectTile;