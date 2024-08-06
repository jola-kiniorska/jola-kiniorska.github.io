import React from "react";
import Text from "../Text/Text.tsx";
import github2 from "../../images/icon_github2.png";
import website from "../../images/icon_website.png";
import info from "../../images/icon_info.png";
// import Popup from "../Popup/Popup.tsx";

interface ProjectTileProps {
  text: string;
  link_github: string;
  link_website: string;
  background_image: string;
  description: string;
  page_screen: string;
  technologies: string;
}

const ProjectTile = ({
  text,
  link_github,
  link_website,
  background_image,
  description,
  page_screen,
  technologies,
}: ProjectTileProps) => {
  const showPopup = (event) => {
    const openPopups = document.querySelectorAll('.popup');
    openPopups.forEach(popup => {
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      popup.classList.contains('hidden') ? "" : popup.classList.add('hidden');
    });
    const projectTile = event.target.parentNode.parentNode.parentNode;
    const projectPopup = projectTile.querySelector(".popup");
    projectPopup.classList.remove("hidden");
  };

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
        <div className="project_link">
          <img
            className="info"
            src={info}
            alt="info"
            onClick={(event) => showPopup(event)}
          />
        </div>
      </div>
      {/* <Popup
        description={description}
        page_screen={page_screen}
        technologies={technologies}
      /> */}
    </div>
  );
};

export default ProjectTile;
