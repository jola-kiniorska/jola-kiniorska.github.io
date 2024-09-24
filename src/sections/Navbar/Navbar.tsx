import React from "react";
import logo from "../../images/logo.png";
import icon_github from "../../images/icon_github.png";
import icon_linkedin from "../../images/icon_linkedin.png";
import icon_behance from "../../images/icon_behance.png";
import SocialMedia from "../../components/SocialMedia/SocialMedia.tsx";
import { isMobile } from "react-device-detect";

const Navbar = () => {
  const scroll = (section: string) => {
    document
      .querySelector(`.main_content-${section}`)
      ?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const renderContent = () => {
    if (isMobile) {
      return (
        <div className="navbar">
          <div className="navbar_wrapper">
            <div className="wrapper_nav-text">
              <p className="nav-text" onClick={() => scroll("home")}>
                Home
              </p>
              <p className="nav-text" onClick={() => scroll("about")}>
                About
              </p>
              <p className="nav-text" onClick={() => scroll("projects")}>
                Projects
              </p>
              <p className="nav-text" onClick={() => scroll("contact")}>
                Contact
              </p>
            </div>
          </div>
        </div>
      );
    }
    return (
      <div className="navbar">
        <div className="navbar_wrapper">
          <div className="logo_link" onClick={() => scroll("home")}>
            <img src={logo} alt="logo" />
          </div>
          <div className="wrapper_nav-text">
            <p className="nav-text" onClick={() => scroll("home")}>
              Home
            </p>
            <p className="nav-text" onClick={() => scroll("about")}>
              About
            </p>
            <p className="nav-text" onClick={() => scroll("projects")}>
              Projects
            </p>
            <p className="nav-text" onClick={() => scroll("contact")}>
              Contact
            </p>
          </div>
          <div className="wrapper_social-media">
            <SocialMedia
              icon={icon_github}
              link={"https://github.com/jola-klodowska"}
            />
            <SocialMedia
              icon={icon_linkedin}
              link={"https://www.linkedin.com/in/jolanta-klodowska/"}
            />
            <SocialMedia
              icon={icon_behance}
              link={"https://www.behance.net/jolaklodowska"}
            />
          </div>
        </div>
      </div>
    );
  };

  return renderContent();
};

export default Navbar;
