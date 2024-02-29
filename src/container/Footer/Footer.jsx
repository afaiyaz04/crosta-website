import React from "react";

import "./Footer.css";
import { FooterOverlay, Newsletter } from "../../components";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
import { images } from "../../constants";

const Footer = () => (
  <div className="app__footer section__padding">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">Address</p>
        <p className="p__opensans">Phone number 1</p>
        <p className="p__opensans">Phone number 2</p>
      </div>
      <div className="app__footer-links_logo">
        <img src={images.gericht} alt="footer_logo" />
        <p className="p__opensans">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In commodo
          non justo non dapibus.
        </p>
        <img
          src={images.spoon}
          alt="spoon"
          className="spoon__img"
          style={{ marginTop: "15px" }}
        />
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>
      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Monday - Friday:</p>
        <p className="p__opensans">10:00 am - 2:00 am</p>
        <p className="p__opensans">Saturday - Sunday:</p>
        <p className="p__opensans">11:00 am - 3:00 am</p>
      </div>
    </div>
    <div className="footer__copyright">
      <p className="p__opensans">Proteron Digital 2024. All Rights Reserved.</p>
    </div>
  </div>
);

export default Footer;
