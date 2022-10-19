import React from "react";
import { Link } from "react-router-dom";
import "../styles/Card.css";

const  Card = ({ props }) => {
  return (
    <div className="card-main">
      <div className="about">
        <div className="icon">
          <img src={props.icon_url} alt={props.icon_url} />
        </div>
        <span className="text">
          <div className="title">{props.title}</div>
          <div className="category">{props.category}</div>
        </span>
      </div>

      <div className="link">
        <Link to={props.link} target="_blank">
          {props.link}
        </Link>
      </div>
      <div className="description">{props.description}</div>
    </div>
  );
};

export default  Card;

