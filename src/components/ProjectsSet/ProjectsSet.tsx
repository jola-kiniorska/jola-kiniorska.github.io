import React from "react";
import "./ProjectsSet.scss";
import ProjectTile from "../ProjectTile/ProjectTile.tsx";

const ProjectsSet = () => {
  return <div className="content_set_projects">
    <ProjectTile text="crown_of_polish_mountains"/>
    <ProjectTile text="wedding_flowers"/>
    <ProjectTile text="nutrition_calculator"/>
    <ProjectTile text="project_pizzeria"/>
    <ProjectTile text="stopwatch_app"/>
    <ProjectTile text="currency_base"/>
  </div>;
};

export default ProjectsSet;