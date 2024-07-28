import React from "react";
import logo from "../../images/logo.png";
import icon_github from "../../images/icon_github.png";
import icon_linkedin from "../../images/icon_linkedin.png";
import icon_behance from "../../images/icon_behance.png";
import SocialMedia from "../../components/SocialMedia/SocialMedia.tsx";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar_wrapper">
        <a className="logo_link" href="http://localhost:3000/">
          <img src={logo} alt="logo" />
        </a>
        <div className="wrapper_nav-text">
          <a className="nav-text" href="http://localhost:3000/">
            Home
          </a>
          <a className="nav-text" href="http://localhost:3000/">
            About
          </a>
          <a className="nav-text" href="http://localhost:3000/">
            Projects
          </a>
          <a className="nav-text" href="http://localhost:3000/">
            Contact
          </a>
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

export default Navbar;
