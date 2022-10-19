import React from "react";
import { Link } from "react-router-dom";
import slack from "../assets/slack.png";
import "../styles/ResourceDetails.css";

const ResourcesDetails = (props) => {
  return (
    <>
      <div className="card-main">
        <div className="about">
          <div className="icon">
            <img src={slack} alt="Slack Image" />
          </div>
          <span className="text">
            <div className="title">slack</div>
            <div className="category">2345</div>
          </span>
        </div>

        <div className="link">
          <Link to="www.slack.com" target="_blank">
            www.slack.com
          </Link>
        </div>
        <div className="description">
          Slack brings the team together, wherever you are. With all of your
          communication and tools in one place, remote teams will stay
          productive no matter where you’re ...
        </div>
        <button className="form-btn">Update</button>
      </div>
      <div className="table-div"></div>
    </>
  );
};

export default ResourcesDetails;
