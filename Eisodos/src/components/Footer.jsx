import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../Styles/Footer.css"

function Footer() {
  return (
    <div className="footer">
        
      <div className="socialMedia">
        <FacebookIcon /> <TwitterIcon /> <LinkedInIcon />
      </div>
      <p>Copyright &copy; 2023 </p>
    </div>
  );
}

export default Footer;
