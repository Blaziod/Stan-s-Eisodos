import React from "react";
import "../Styles/Footer.css";
import facebook from "../assets/facebook.png";
import twitter from "../assets/twitter.png";
import linkedin from "../assets/linkedin.png";

function Footer() {
  return (
    <div className="footer">
      <div className="footerContent">
        <div className="EISODOS">
          <h2>EISODOS</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur. Enim et egestas maecenas vel
            sit eget sed sed amet. Egestas nibh malesuada nulla bibendum mi
            velit risus. Morbi dolor imperdiet viverra integer.
          </p>

          <img className="SM1" src={facebook}></img>
          <img className="SM2" src={twitter}></img>
          <img className="SM3" src={linkedin}></img>
        </div>
        <div className="planEvents">
          <h3>Plan Events</h3>

          <p>Create and Setup</p>
          <p>Sell Tickets</p>
          <p>Online RSVP</p>
          <p>Online Events</p>
        </div>
        <div className="Name">
          <h3>Name</h3>

          <p>About us</p>
          <p>Press</p>
          <p>Contact Us</p>
          <p>Help Center</p>
          <p>How it works</p>
          <p>Privacy</p>
          <p>Terms</p>
        </div>
        <div className="SITL">
          <h3 className="sss">Stay in the loop</h3>
          <p>
            Join our mailing list to stay in the loop with our newest for Event
            and concert
          </p>
         
            <div className="buttonIn">
              <input type="text" name="name" className="sub-Space" placeholder="Enter your email address.."></input>
              <button className="sub-Btn"> Subscribe</button>
              </div>
           
         
        </div>
      </div>
      <div className="line">
        <hr />
      </div>

      <p className="Copyright">Copyright &copy; 2023 </p>
    </div>
  );
}

export default Footer;
