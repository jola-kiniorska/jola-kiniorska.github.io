import React from "react";
import ProjectTile from "../ProjectTile/ProjectTile.tsx";
import Popup from "../Popup/Popup.tsx";
import screen_wedding_flowers from "../../images/screen_wedding_flowers.png"

const ProjectsSet = () => {
  return (
    <div className="content_set_projects">
      <ProjectTile
        text="wedding flowers"
        link_github="https://github.com/jola-klodowska/lpage-wedding-flowers/tree/main"
        link_website="https://zealous-tree-0e3f34703.5.azurestaticapps.net/"
      />
      <Popup 
        description="landing page is built on react components, consists of 6 sections and a footer" 
        page_screen={screen_wedding_flowers} 
        technologies="React.js, React Router, TypeScript.js, SCSS" 
      />
    </div>
  );
};

export default ProjectsSet;
