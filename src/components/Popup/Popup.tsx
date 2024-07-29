import React from "react";

interface PopupProps {
    description: string;
    page_screen: string;
    technologies: string;
}

const Popup = ({description, page_screen, technologies}: PopupProps) => {
  return (
    <div className="popup">
        <div className="popup_elem popup_description">
            <p>Description</p>
            <p>{description}</p>
        </div>
        <div className="popup_elem popup_image"></div>
            <p>Page preview</p>
            <img src={page_screen} alt="page_screenshot" />
        <div className="popup_elem popup_technologies">
            <p>Technologies</p>
            <p>{technologies}</p>
        </div>
    </div>
  );
};

export default Popup;
