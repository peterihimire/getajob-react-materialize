import React from "react";
import "./Footer.css";
// import logoAlt from "../assets/logo-alt.svg";
// import twIcon from "../assets/tw.svg";
// import fbIcon from "../assets/fb.svg";
// import inIcon from "../assets/in.svg";
import logoAlt from "../../assets/logo-alt.svg";
import twitter from "../../assets/Twitter-green.svg";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        {/* <div className="footer-logo center">
          <a href="/">
            <img src={logoAlt} alt="paymonthly logo-alt" />
          </a>
        </div>
        <hr /> */}
        <div className="row footer-content-one">
          <div className=" col s12 m12 l3 ">
            <div className="s12 m4  black-text">
              <div className="footer-logo">
                <img src={logoAlt} alt="" />
              </div>
              <div className="footer-text">
                <p>
                  Getajobng provides a full online service for anyone looking
                  for a new job. We're not a recruitment agency, we're a job
                  site.
                </p>
              </div>
            </div>
          </div>
          <div className=" col s12 m12 l8 offset-l1 ">
            <div className="footer-item col s6 m3  black-text">
              <p>information</p>
              <ul>
                <li>
                  <a href="/">About us</a>
                </li>
                <li>
                  <a href="/">Earnings</a>
                </li>
                <li>
                  <a href="/">Cities</a>
                </li>
              </ul>
            </div>
            <div className="footer-item col s6 m3  black-text">
              <p>job seekers</p>
              <ul>
                <li>
                  <a href="/">About us</a>
                </li>
                <li>
                  <a href="/">Earnings</a>
                </li>
                <li>
                  <a href="/">Cities</a>
                </li>
              </ul>
            </div>
            <div className="footer-item col s6 m3  black-text">
              <p>employers</p>
              <ul>
                <li>
                  <a href="/">About us</a>
                </li>
                <li>
                  <a href="/">Earnings</a>
                </li>
                <li>
                  <a href="/">Cities</a>
                </li>
              </ul>
            </div>
            <div className="footer-item col s6 m3  black-text">
              <p>social media:</p>
              <div className="footer-social-div">
                <div className="footer-social">
                  <img src={twitter} alt="" />
                </div>
                <div className="footer-social">
                  <img src={twitter} alt="" />
                </div>
                <div className="footer-social">
                  <img src={twitter} alt="" />
                </div>
                <div className="footer-social">
                  <img src={twitter} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <p>&copy; Copyright Get-A-Job RMS 2019, All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
