import React from "react";
import "./HowItWorks.css";
import topWorkersImg from "../../assets/top-workers.svg";
import greenCheck from "../../assets/greencheck-round.svg";

const HowItWorks = () => {
  return (
    <section className="how-it-works">
      <div className="container">
        <div className="row">
          <div className="col s12">
            <div className="col s12 m7 l7 ">
              {/* SHOWS THIS IMAGE ON PHONE TABLET AND LAPTOP SCREEN */}
              <div className="hidden-xs">
                <div className="how-it-works-image-container">
                  <img src={topWorkersImg} alt="person" width="100%" />
                </div>
              </div>
            </div>
            <div className="col s12 m5 offset-m0 l4 offset-l1">
              <div className="hxs">
                <div className="how-it-works-text-container">
                  <div className="how-it-works-heading">
                    <div className="title">
                      <h4>How it works</h4>
                    </div>
                    <p>
                      Getajob helps you find the right job easily. Getajob helps
                      you find the right job easily. Getajob helps you find the
                      right job easily.
                    </p>
                  </div>

                  <div className="howitworks-item">
                    <div className="howitworks-item-title">
                      <div className="green-check-icon">
                        <img src={greenCheck} alt="" />
                      </div>
                      <div className="">
                        <p className="howitworks-head">Search Jobs</p>
                      </div>
                    </div>
                    <p>
                      We have jobs in the most popular industries and with top
                      companies. Plus, you can create alerts so you never miss a
                      job opportunity.
                    </p>
                  </div>
                  <div className="howitworks-item">
                    <div className="howitworks-item-title">
                      <div className="green-check-icon">
                        <img src={greenCheck} alt="" />
                      </div>
                      <div className="">
                        <p className="howitworks-head">
                          Create a Profile and Get Noticed
                        </p>
                      </div>
                    </div>
                    <p>
                      Create a profile to showcase your skills and experience so
                      recruiters can find you. Upload your CV so you can apply
                      for jobs quickly and easily.
                    </p>
                  </div>
                  <div className="howitworks-item">
                    <div className="howitworks-item-title">
                      <div className="green-check-icon">
                        <img src={greenCheck} alt="" />
                      </div>
                      <div className="">
                        <p className="howitworks-head">Apply for jobs</p>
                      </div>
                    </div>
                    <p>
                      Find the training you need to improve your skills, or
                      visit our Career Center for tips and advice to build your
                      career.
                    </p>
                  </div>
                </div>
                {/* SHOWS THIS IMAGE ON PHONE SCREEN */}
                <div className="visible-xs">
                  <div className="how-it-works-image-container">
                    <img src={topWorkersImg} alt="person" width="100%" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
