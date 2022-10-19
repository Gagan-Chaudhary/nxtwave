import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import AddItem from "./AddItem";
import "../styles/Navigator.css";
import Container from "./Container";
import ResourcesDetails from "./ResourcesDetails";

const Navigator = () => {
  const [resourceType, setResource] = useState(<Container />);
  let t1 = false;

  useEffect(() => {});

  return (
    <>
      <div className="navigator">
        <button
          onClick={() => {
            setResource(<Container />);
          }}
        >
          Resources
        </button>
        <button
          onClick={() => {
            setResource( <ResourcesDetails/>);
          }}
        >
          Requests
        </button>
        <button
          onClick={() => {
            setResource(<AddItem/>);
             
          }}
        >
          Users
        </button>
      </div>
      <div>{resourceType}</div>
      {/* <div><ResourcesContainer/></div> */}
    </>
  );
};

export default Navigator;
