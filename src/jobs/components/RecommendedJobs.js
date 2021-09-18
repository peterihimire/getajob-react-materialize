import React from "react";
import "./RecommendedJobs.css";
// import { Link } from "react-router-dom";
import JobSlide from "./JobSlide";
// import { FaLongArrowAltRight } from "react-icons/fa";

const RecommendedJobs = () => {
  return (
    <section className="recommended">
      <div className="title recommended-title-container container">
        <h4>Recommended Jobs</h4>
      </div>
      <div className="">
        <JobSlide />
      </div>
    </section>
  );
};

export default RecommendedJobs;
