import React from "react";
import "./JobItem.css";
import MyCard from "../../shared/components/uielements/MyCard";
import "./JobItem.css";
import { Link } from "react-router-dom";
import locationIcon from "../../assets/location-icon.svg";

const JobItem = (props) => {
  const { jobs } = props;
  console.log(props);
  console.log(jobs);
  console.log(jobs.imagez);
  return (
    <MyCard className="job-card">
      <article className="job">
        <div className="job-item-type">
          <p>{jobs.type}</p>
        </div>
        <div className="job-item-upper">
          <div className="job-item-img">
            <img src={jobs.image} alt="home" />
          </div>
          <div>
            <div>
              <b>{jobs.role}</b>
            </div>
          </div>
        </div>
        <div className="job-item-lower">
          <div>
            <b>{jobs.company}</b>
          </div>
          <div className="job-item-action">
            <div className="location-icon-text">
              <span>
                <img src={locationIcon} alt="" />
              </span>
              <span>{jobs.location}</span>
            </div>
            <div>
              <Link to="/" className="job-apply-link">
                Apply now
              </Link>
            </div>
          </div>
        </div>
      </article>
    </MyCard>
  );
};

export default JobItem;
