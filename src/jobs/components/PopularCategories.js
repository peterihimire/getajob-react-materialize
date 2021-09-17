import React from "react";
import "./PopularCategories.css";
// import { FaBuilding, FaSearch, FaList } from "react-icons/fa";
import oilIcon from "../../assets/oil-and-gas.svg";

const PopularCategories = () => {
  return (
    <div className="popular container">
      <div className="popular-heading">
        <div className="title">
          <h4>Popular Categories</h4>
        </div>
      </div>
      <div className="popular-content-logo">
        <div className="popular-content">
          <div className="popular-logo">
            <img src={oilIcon} alt="" />
          </div>
          <div className="popular-text">
            <p className="popular-head">Oil and Gas</p>
            <p>(10 new jobs)</p>
          </div>
        </div>
        <div className="popular-content">
          <div className="popular-logo">
            <img src={oilIcon} alt="" />
          </div>
          <div className="popular-text">
            <p className="popular-head">Education</p>
            <p>(10 new jobs)</p>
          </div>
        </div>
        <div className="popular-content">
          <div className="popular-logo">
            <img src={oilIcon} alt="" />
          </div>
          <div className="popular-text">
            <p className="popular-head">Health Care</p>
            <p>(10 new jobs)</p>
          </div>
        </div>
        <div className="popular-content">
          <div className="popular-logo">
            <img src={oilIcon} alt="" />
          </div>
          <div className="popular-text">
            <p className="popular-head">Accounting</p>
            <p>(10 new jobs)</p>
          </div>
        </div>
        <div className="popular-content">
          <div className="popular-logo">
            <img src={oilIcon} alt="" />
          </div>
          <div className="popular-text">
            <p className="popular-head">Technology</p>
            <p>(10 new jobs)</p>
          </div>
        </div>
        <div className="popular-content">
          <div className="popular-logo">
            <img src={oilIcon} alt="" />
          </div>
          <div className="popular-text">
            <p className="popular-head">Security</p>
            <p>(10 new jobs)</p>
          </div>
        </div>
        <div className="popular-content">
          <div className="popular-logo">
            <img src={oilIcon} alt="" />
          </div>
          <div className="popular-text">
            <p className="popular-head">Data Analysis</p>
            <p>(10 new jobs)</p>
          </div>
        </div>
        <div className="popular-content">
          <div className="popular-logo">
            <img src={oilIcon} alt="" />
          </div>
          <div className="popular-text">
            <p className="popular-head">Design, Art and Multimedia</p>
            <p>(10 new jobs)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularCategories;
