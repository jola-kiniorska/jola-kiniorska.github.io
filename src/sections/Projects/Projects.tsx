import React from "react";
import "./Projects.scss";
import Title from "../../components/Title/Title.tsx";
import ProjectsSet from "../../components/ProjectsSet/ProjectsSet.tsx";

const Projects = () => {
  return <div className="main_content-projects">
    <Title title="Projects" />
    <ProjectsSet />
  </div>;
};

export default Projects;