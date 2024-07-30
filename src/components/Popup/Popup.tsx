import React from "react";
import closeIcon from "../../images/icon_close.png";

interface PopupProps {
  description: string;
  page_screen: string;
  technologies: string;
}

const Popup = ({ description, page_screen, technologies }: PopupProps) => {
  const closePopup = (event) => {
    const projectPopup = event.target.parentNode;
    projectPopup.classList.add("hidden");
  };

  return (
    <div className="popup hidden">
      <img
        className="popup_close"
        src={closeIcon}
        alt="popup_close"
        onClick={(event) => {
          closePopup(event);
        }}
      />
      <div className="popup_elem popup_description">
        <p className="popup_elem-title">DESCRIPTION</p>
        <p className="popup_elem-description">{description}</p>
      </div>
      <div className="popup_elem popup_image">
        <p className="popup_elem-title">PAGE PREVIEW</p>
        <img src={page_screen} alt="page_screenshot" />
      </div>
      <div className="popup_elem popup_technologies">
        <p className="popup_elem-title">TECHNOLOGIES</p>
        <p className="popup_elem-description">{technologies}</p>
      </div>
    </div>
  );
};

export default Popup;
