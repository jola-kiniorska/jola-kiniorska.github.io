import React from "react";
import Title from "../../components/Title/Title.tsx";
import contact_linkedin from "../../images/contact_linkedin.png";
import contact_github from "../../images/contact_github.png";

const Contact = () => {
  return (
    <div className="main_content-contact">
      <Title title="Contact" />
      <div className="contact_container">
        <div className="contact_wrapper">
          <img src={contact_linkedin} alt="contact-img" />
          <p className="contact_title">SEE MY PROFILE</p>
          <a
            className="contact_text"
            href="https://www.linkedin.com/in/jolanta-klodowska/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Linkedin
          </a>
        </div>
        <div className="contact_wrapper">
          <img src={contact_github} alt="contact-img" />
          <p className="contact_title">SEE MY CODE</p>
          <a
            className="contact_text"
            href="https://github.com/jola-kiniorska"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
