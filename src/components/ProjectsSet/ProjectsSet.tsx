import React from "react";
import Text from "../Text/Text.tsx";
import github2 from "../../images/icon_github2.png";
import website from "../../images/icon_website.png";

const ProjectsSet = () => {
  return (
    <div className="content_set_projects">
      <div className="content_project-tile">
        <Text text="crown of polish mountains" span="" />
        <div className="project_links">
          <a className="project_link" href="http://localhost:3000/">
            <img className="github" src={github2} alt="github" />
          </a>
          <a className="project_link" href="http://localhost:3000/">
            <img className="website" src={website} alt="website" />
          </a>
        </div>
      </div>
      <div className="content_project-tile">
        <Text text="wedding flowers" span="" />
        <div className="project_links">
          <a className="project_link" href="https://github.com/jola-klodowska/lpage-wedding-flowers?tab=readme-ov-file#website-url">
            <img className="github" src={github2} alt="github" />
          </a>
          <a className="project_link" href="https://zealous-tree-0e3f34703.5.azurestaticapps.net/">
            <img className="website" src={website} alt="website" />
          </a>
        </div>
      </div>
      <div className="content_project-tile">
        <Text text="nutrition calculator" span="" />
        <div className="project_links">
          <a className="project_link" href="http://localhost:3000/">
            <img className="github" src={github2} alt="github" />
          </a>
          <a className="project_link" href="http://localhost:3000/">
            <img className="website" src={website} alt="website" />
          </a>
        </div>
      </div>
      <div className="content_project-tile">
        <Text text="project pizzeria" span="" />
        <div className="project_links">
          <a className="project_link" href="http://localhost:3000/">
            <img className="github" src={github2} alt="github" />
          </a>
          <a className="project_link" href="http://localhost:3000/">
            <img className="website" src={website} alt="website" />
          </a>
        </div>
      </div>
      <div className="content_project-tile">
        <Text text="stopwatch app" span="" />
        <div className="project_links">
          <a className="project_link" href="http://localhost:3000/">
            <img className="github" src={github2} alt="github" />
          </a>
          <a className="project_link" href="http://localhost:3000/">
            <img className="website" src={website} alt="website" />
          </a>
        </div>
      </div>
      <div className="content_project-tile">
        <Text text="currency base" span="" />
        <div className="project_links">
          <a className="project_link" href="http://localhost:3000/">
            <img className="github" src={github2} alt="github" />
          </a>
          <a className="project_link" href="http://localhost:3000/">
            <img className="website" src={website} alt="website" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectsSet;
