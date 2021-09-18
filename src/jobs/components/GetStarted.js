import React from "react";
import "./GetStarted.css";
import { Link } from "react-router-dom";
// import LadySmile from "../../assets/lady-smile.svg";

const GetStarted = () => {
  return (
    <section className="get-started container">
      <div className="get-started-content">
        <h2>Get a Job you actually like</h2>
        <p>Create an account and start applying</p>
        <Link to="/">
          <button className="btn btn-bigger get-started-btn">
            Get started
          </button>
        </Link>
      </div>
    </section>
  );
};

export default GetStarted;
