import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import "../styles/Navbar.css";
import person from "../assets/person-image.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/">
        <img src={logo} />
      </Link>
      <Link to="/">
        <img className="person" src={person} alt="" srcset="" />
      </Link>
    </div>
  );
};

export default Navbar;
