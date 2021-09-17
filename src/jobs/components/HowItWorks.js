import React from "react";
import "./HowItWorks.css";
import topWorkersImg from "../../assets/top-workers.svg";
import greenCheck from "../../assets/greencheck-round.svg";

const HowItWorks = () => {
  return (
    <section className="buycar">
      <div className="container">
        <div className="row">
          <div className="col s12">
            <div className="col s12 m7 l7 ">
              <div className="hidden-xs">
                <div className="buycar-image-container">
                  <img src={topWorkersImg} alt="person" width="100%" />
                </div>
              </div>
            </div>
            <div className="col s12 m5 offset-m0 l5 offset-l0">
              <div className="hxs">
                {/* <div className="buycar-text-container">
                  <div className="buycar-header">
                    <h3>Buy A Car</h3>
                  </div>
                  <div className="buycar-text-content">
                    <p className="">
                      I had the best experience shopping with vasiti. Usability
                      of the website was great, very good customer
                    </p>
                    <p>
                      I had the best experience shopping with vasiti. Usability
                      of the website was great, very good customer service, an
                      all round great experience. I would definately be coming
                      back!
                    </p>
                    <p>
                      I had the best experience shopping with vasiti. Usability
                      of the website was great, very good customer service, an
                      all round great experience. I would definately be coming
                      back!
                    </p>
                  </div>
                  <div>
                    <a href="/" className="btn btn-bigger">
                      Buy a car{" "}
                    </a>
                  </div>
                </div> */}
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
                <div className="visible-xs">
                  <div className="buycar-image-container">
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
