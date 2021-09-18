import React from "react";
import Footer from "../../shared/components/Footer";
import Navbar from "../../shared/components/navigation/Navbar";
import Banner from "../../shared/components/Banner";
import RecommendedJobs from "../../jobs/components/RecommendedJobs";
import HowItWorks from "../components/HowItWorks";
import PopularCategories from "../../jobs/components/PopularCategories";
import CompaniesNetwork from "../components/CompaniesNetwork";
import Testimonial from "../components/Testimonials";
import GetStarted from "../components/GetStarted";

const HomePage = () => {
  return (
    <div id="page-container" className="App">
      <div id="content-wrapper">
        <Navbar />
        <Banner />
        <RecommendedJobs />
        <HowItWorks />
        <PopularCategories />
        <CompaniesNetwork />
        <Testimonial />
        <GetStarted />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
