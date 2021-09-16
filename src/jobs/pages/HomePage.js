import React from "react";
import Footer from "../../shared/components/Footer";
import Navbar from "../../shared/components/navigation/Navbar";
import Banner from "../../shared/components/Banner";

const HomePage = () => {
  return (
    <div id="page-container" className="App">
      <div id="content-wrapper">
        <Navbar />
        <Banner />
        {/* <RecommendedJobs /> */}
        <div className="main-content">
          <div className="main-content-container">
            {/* <h2>This is the homepage</h2> */}
            {/* <HowItWorks /> */}
            {/* <PopularCategories /> */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
