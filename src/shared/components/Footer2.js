import React from "react";
import "./Footer2.css";
import logoAlt from "../../assets/logo-alt.svg";
import twitter from "../../assets/Twitter-green.svg";

const Footer = () => {
  return (
    <footer>
      <div className="footer-wrapper container">
        <div className="footer-one">
          <div className="footer-one-one">
            <div className="footer-item">
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

          <div className="footer-one-two">
            <div className="footer-item">
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
            <div className="footer-item">
              <p>job seekers</p>
              <ul>
                <li>
                  <a href="/">Sign up to ride</a>
                </li>
                <li>
                  <a href="/">Fare Estimate</a>
                </li>
                <li>
                  <a href="/">Lyft Pink</a>
                </li>
              </ul>
            </div>
            <div className="footer-item">
              <p>employers</p>
              <ul>
                <li>
                  <a href="/">Careers</a>
                </li>
                <li>
                  <a href="/">LyftUp</a>
                </li>
                <li>
                  <a href="/">Business</a>
                </li>
              </ul>
            </div>

            <div className="footer-item">
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

        <div className="footer-two">
          <p>&copy; Copyright Get-A-Job RMS 2019, All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
