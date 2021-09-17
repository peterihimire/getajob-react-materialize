import React from "react";
import Footer from "../../shared/components/Footer";
import Navbar from "../../shared/components/navigation/Navbar";
import Banner from "../../shared/components/Banner";
import RecommendedJobs from "../../jobs/components/RecommendedJobs";
import HowItWorks from "../components/HowItWorks";
import PopularCategories from "../../jobs/components/PopularCategories";
const HomePage = () => {
  return (
    <div id="page-container" className="App">
      <div id="content-wrapper">
        <Navbar />
        <Banner />
        <RecommendedJobs />
        <HowItWorks />
        <PopularCategories />
        <div className="main-content">
          <div className="main-content-container">
            {/* <h2>This is the homepage</h2> */}
            {/* <HowItWorks /> */}
            {/*  */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
