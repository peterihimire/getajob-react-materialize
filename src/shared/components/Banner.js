import React, { Component } from "react";
import "./Banner.css";
import M from "materialize-css/dist/js/materialize.min.js";
// import bannerOne from "../../assets/hero-image.svg";
import bannerTwo from "../../assets/hero-image.svg";
import paystack from "../../assets/paystack-removebg-preview.svg";
import google from "../../assets/google-removebg-preview.svg";
import kpmg from "../../assets/kpmg-removebg-preview.svg";
import locationIcon from "../../assets/location-icon.svg";
import searchIcon from "../../assets/search-icon.svg";

class Banner extends Component {
  componentDidMount() {
    // header carousel
    const headerCarousel = document.querySelector(".carousel");
    const carouselH = document.querySelector(".carousel.carousel-slider");
    const carouselVx = document.querySelector(
      ".carousel.carousel-slider.visible-xs.mbxs",
    );
    M.Carousel.init(headerCarousel, {});
    M.Carousel.init(carouselH, {
      fullWidth: true,
    });
    M.Carousel.init(carouselVx, {
      fullWidth: false,
    });

    window.onload = function () {
      initCarousel(".carousel", {
        fullWidth: true,
        // indicators: true,
        autoScroll: 5000, // time in ms
      });
    };

    function initCarousel(elms, opts) {
      if (!window || !document) return null;

      const instances = M.Carousel.init(getElements(elms), opts);

      if (Array.isArray(instances)) {
        for (let i = 0; i < instances.length; ++i) {
          addAutoScroll(instances[i]);
        }
      } else {
        addAutoScroll(instances);
      }

      return instances;
    }

    function addAutoScroll(instance) {
      if (!instance.options.autoScroll) return;

      instance.autoScrollIntervalId = window.setInterval(() => {
        instance.next();
      }, instance.options.autoScroll);

      // instance.el.addEventListener("mouseover", carouselMouseOverTouchStart, {
      //   passive: true,
      // });
      // instance.el.addEventListener("mouseleave", carouselMouseOutTouchEnd, {
      //   passive: true,
      // });
      // instance.el.addEventListener("touchstart", carouselMouseOverTouchStart, {
      //   passive: true,
      // });
      // instance.el.addEventListener("touchend", carouselMouseOutTouchEnd, {
      //   passive: true,
      // });
    }

    // function carouselMouseOverTouchStart() {
    //   const instance = M.Carousel.getInstance(this);
    //   if (!instance) return;

    //   if (instance.autoScrollIntervalId) {
    //     window.clearInterval(instance.autoScrollIntervalId);
    //     instance.autoScrollIntervalId = undefined;
    //   }
    // }

    // function carouselMouseOutTouchEnd() {
    //   const instance = M.Carousel.getInstance(this);
    //   if (!instance) return;

    //   if (!instance.autoScrollIntervalId) {
    //     instance.autoScrollIntervalId = window.setInterval(() => {
    //       instance.next();
    //     }, instance.options.autoScroll);
    //   }
    // }

    // if searching for an element by id, insert a # in front of the passed in id
    function getElements(elms) {
      if (elms.charAt(0) === "#") {
        elms = elms.replace("#", "");
        return document.getElementById(elms);
      }

      return document.querySelectorAll(elms);
    }
  }

  render() {
    return (
      <section className="home">
        <div className="row full-height">
          <div className="container full-height">
            <div className="carousel carousel-slider full-height">
              <div className="carousel-item">
                <div className="col s12 pad0 center-sm">
                  <div className="col s12 m12 l5 ">
                    <div className="main-text-container">
                      <h1>
                        Find a <span>job</span> easily
                      </h1>
                      <p className="hide-on-med-and-down ">
                        With verified, up-to-date job listings directly from
                        employer websites, we create a premium experience for
                        job seekers, employers, and data seekers alike.
                      </p>

                      <div className="hide-on-med-and-down  form-div">
                        <form>
                          <div className="form-group">
                            <div className="input-no-icon">
                              <input
                                type="text"
                                placeholder="Enter keywords, skill, interest"
                                id="password"
                                name="password"
                              />
                            </div>
                            <div className="input-with-icon">
                              <img
                                src={locationIcon}
                                alt=" "
                                className="location-icon"
                              />
                              <input
                                type="text"
                                placeholder="Location"
                                id="password"
                                name="password"
                              />
                            </div>
                            <button className="banner-search-btn">
                              <img src={searchIcon} alt="" />
                            </button>
                          </div>
                        </form>

                        <div className="trusted-companies-div">
                          <p>Trusted by:</p>
                          <div className="trusted-companies">
                            <div className="trusted-company">
                              <img src={paystack} alt="" />
                            </div>
                            <div className="trusted-company">
                              <img src={google} alt="" />
                            </div>
                            <div className="trusted-company">
                              <img src={kpmg} alt="" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col s12 m12 offset-m0 l6 offset-l1">
                    <div className="rel right-align banner-home-img">
                      <img
                        src={bannerTwo}
                        alt="banner-img-1"
                        className="full-width home-img"
                      />
                    </div>
                  </div>
                  <div className="col s12 hide-on-large-only">
                    <div className="main-text-container">
                      <p>
                        With verified, up-to-date job listings directly from
                        employer websites, we create a premium experience for
                        job seekers, employers, and data seekers alike.
                      </p>

                      <div className="form-div">
                        <form>
                          <div className="form-group">
                            <div className="input-no-icon">
                              <input
                                type="text"
                                placeholder="Enter keywords, skill, interest"
                                id="password"
                                name="password"
                              />
                            </div>
                            <div className="input-with-icon">
                              <img
                                src={locationIcon}
                                alt=" "
                                className="location-icon"
                              />
                              <input
                                type="text"
                                placeholder="Location"
                                id="password"
                                name="password"
                              />
                            </div>
                            <button className="banner-search-btn">
                              <img src={searchIcon} alt="" />
                            </button>
                          </div>
                        </form>
                      </div>
                      <div className="trusted-companies-div">
                        <p>Trusted by:</p>
                        <div className="trusted-companies">
                          <div className="trusted-company">
                            <img src={paystack} alt="" />
                          </div>
                          <div className="trusted-company">
                            <img src={google} alt="" />
                          </div>
                          <div className="trusted-company">
                            <img src={kpmg} alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="carousel-item">
                <div className="col s12 pad0 center-sm">
                  <div className="col s12 m7 l5">
                    <div className="main-text-container">
                      <h1>
                        Find a <span>job</span> breezily
                      </h1>
                      <p className="hidden-xs">
                        With verified, up-to-date job listings directly from
                        employer websites, we create a premium experience for
                        job seekers, employers, and data seekers alike.
                      </p>
                      <div className="btn hidden-xs btn-bigger">buy a car</div>
                    </div>
                  </div>
                  <div className="col s12 m5 offset-m0 l5 offset-l2">
                    <div className="rel right-align banner-home-img">
                      <img
                        src={bannerOne}
                        alt="banner-img-1"
                        className="full-width home-img"
                      />
                    </div>
                  </div>
                  <div className="col s12 visible-xs">
                    <p>
                      With verified, up-to-date job listings directly from
                      employer websites, we create a premium experience for job
                      seekers, employers, and data seekers alike.
                    </p>
                    <div className="btn btn-bigger">buy a car</div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default Banner;
