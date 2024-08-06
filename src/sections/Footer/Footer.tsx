import React from "react";
import copyrights from "../../images/footer_copyrights.png"


const Footer = () => {
  return <div className="main_content-footer">
    <img src={copyrights} alt="copyrights"/>
    <p className="footer_text">ALL RIGHTS RESERVED</p>
  </div>;
};

export default Footer;