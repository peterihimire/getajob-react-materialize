import React, { useEffect } from "react";
import "./Navbar.css";
import logo from "../../../assets/logo.svg";
import MenuIcon from "../../../assets/menu-icon.svg";
// import CloseIcon from "../assets/x.svg";
import M from "materialize-css/dist/js/materialize.min.js";
import { NavLink } from "react-router-dom";

const Navbar = (props) => {
  console.log(props);
  useEffect(() => {
    // sidenav
    const sideNav = document.querySelector(".sidenav");
    M.Sidenav.init(sideNav, {});
  }, []);

  return (
    <>
      <div className="navbar">
        <nav className="trans-nav" role="navigation">
          <div className=" container nav-wrapper">
            <div className="logo-container">
              <a href="/" className="brand-logo left">
                <img src={logo} alt="gotajob" className="logo" />
              </a>
            </div>

            <a
              href="/"
              className="sidenav-trigger right"
              data-target="mobile-nav"
            >
              <img src={MenuIcon} alt="menu" className="menu-icon-img" />
            </a>
            {/* <NavLink
              exact
              activeClassName="active"
              to="/"
              className="sidenav-trigger right"
              data-target="mobile-nav"
            >
              <img src={MenuIcon} alt="menu" className="menu-icon-img" />
            </NavLink> */}

            <ul className="hide-on-med-and-down  nav-links">
              <li className="nav-item">
                <NavLink
                  exact
                  activeClassName="active"
                  className="navbar-single-link"
                  to="/about"
                >
                  Companies
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  activeClassName="active"
                  className="navbar-single-link"
                  to="/about"
                >
                  Candidate
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  activeClassName="active"
                  className="navbar-single-link"
                  to="/about"
                >
                  Assessment
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  activeClassName="active"
                  className="navbar-single-link"
                  to="/about"
                >
                  Post a Job
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  activeClassName="active"
                  className="navbar-single-link"
                  to="/about"
                >
                  Career Advice
                </NavLink>
              </li>
              {/* <li className="nav-item nav-login-group">
                <a href="/">Sign Up</a>
                <span>
                  <a href="/" className="btn nav-btn btn-bigger ">
                    Log In
                  </a>
                </span>
              </li> */}
            </ul>
            <ul className="hide-on-med-and-down  right nav-links">
              <li className="nav-item nav-login-group">
                <a href="/">Sign Up</a>
                <span>
                  <a href="/" className="btn nav-btn btn-bigger ">
                    Log In
                  </a>
                </span>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      <ul className="sidenav" id="mobile-nav">
        <div className="sidenav-close mobnav-close">
          {/* <img src={CloseIcon} alt="close" /> */}
        </div>
        <div className="sidenav-logo">
          {/* <a href="/">
            <img src={logo} alt="vasiti-logo" />
          </a> */}
          <NavLink
            exact
            activeClassName="active"
            className="navbar-single-link"
            to="/"
          >
            <img src={logo} alt="vasiti-logo" />
          </NavLink>
        </div>

        <li className="nav-item sidenav-close">
          <NavLink
            exact
            activeClassName="active"
            className="navbar-single-link"
            to="/contact"
          >
            contact
          </NavLink>
        </li>
        <li className="nav-item login-style sidenav-close">
          <a href="/" className="">
            log in
          </a>
        </li>
        <li className="nav-item signup-style sidenav-close">
          <a href="/" className="  ">
            sign up
          </a>
        </li>

        <li>
          <NavLink
            exact
            activeClassName="active"
            className="navbar-single-link"
            to="/marketplace"
          >
            marketplace
          </NavLink>
        </li>
        <li>
          <a href="/">wholesale center</a>
        </li>
        <li>
          <a href="/">seller center</a>
        </li>
        <li>
          <a href="/">services</a>
        </li>
        <li>
          <a href="/">internships</a>
        </li>
        <li>
          <a href="/">events</a>
        </li>

        <div className="sidenav-footer ">
          <div className="sidenav-footer-container ">
            {/* <div className="sidenav-social-icons">
              <a href="/" target="_blank">
                {" "}
                <img src="images/fb.svg" alt="" />
              </a>
              <a href="/" target="_blank">
                {" "}
                <img src="images/ig.svg" alt="" />
              </a>
              <a href="/" target="_blank">
                {" "}
                <img src="images/in.svg" alt="" />
              </a>
              <a href="/" target="_blank">
                {" "}
                <img src="images/tw.svg" alt="" />
              </a>
            </div> */}
            <div className=" sidenav-footer-copyright">
              <p>©COPYRIGHT VASITI 2021</p>
            </div>
          </div>
        </div>
      </ul>
    </>
  );
};

export default Navbar;
