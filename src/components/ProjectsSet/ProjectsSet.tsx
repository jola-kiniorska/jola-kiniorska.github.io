import React from "react";
import ProjectTile from "../ProjectTile/ProjectTile.tsx";
import project_wedding_flowers from "../../images/project_wedding_flowers.png";
import project_mountains from "../../images/project_mountains.png";
import project_nutrition_calc from "../../images/project_nutrition_calc.png";

const ProjectsSet = () => {
  return (
    <div className="content_set_projects">
      <ProjectTile
        text="wedding flowers"
        link_github="https://github.com/jola-klodowska/lpage-wedding-flowers/tree/main"
        link_website="https://zealous-tree-0e3f34703.5.azurestaticapps.net/"
        background_image={project_wedding_flowers}
      />
      <ProjectTile
        text="crown of polish mountains"
        link_github="https://github.com/jola-klodowska/crown-of-polish-mountains-app"
        link_website="https://black-grass-023cd2603.5.azurestaticapps.net/"
        background_image={project_mountains}
      />
      <ProjectTile
        text="nutrition calculator"
        link_github="https://github.com/jola-klodowska/nutrition-calculator"
        link_website=""
        background_image={project_nutrition_calc}
      />
    </div>
  );
};

export default ProjectsSet;
