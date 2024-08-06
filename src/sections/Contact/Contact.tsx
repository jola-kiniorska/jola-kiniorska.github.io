import React from "react";
import Title from "../../components/Title/Title.tsx";
import contact_phone from "../../images/contact_phone.png";
import contact_email from "../../images/contact_email.png";
import contact_website from "../../images/contact_wifi.png";

const Contact = () => {
  return (
    <div className="main_content-contact">
      <Title title="Contact" />
      <div className="contact_wrapper">
        <img src={contact_phone} alt="contact-phone" />
        <p className="contact_title">PHONE NUMBER</p>
        <p className="contact_text">+48 514 581 251</p>
      </div>
      <div className="contact_wrapper">
        <img src={contact_email} alt="contact-phone" />
        <p className="contact_title">EMAIL ADDRESS</p>
        <p className="contact_text">jola.kiniorska@gmail.com</p>
      </div>
      <div className="contact_wrapper">
        <img src={contact_website} alt="contact-phone" />
        <p className="contact_title">WEBSITES</p>
        <p className="contact_text">https://www.linkedin.com/in/jolanta-klodowska/</p>
        <p className="contact_text">https://github.com/jola-klodowska</p>
      </div>
    </div>
  );
};

export default Contact;
