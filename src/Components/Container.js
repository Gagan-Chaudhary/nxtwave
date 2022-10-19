import React, { useEffect, useState } from "react";
import Card from "./Card";
import Axios from "axios";

const Container = () => {
  const [res, setResource] = useState([]);
  const url =
    "https://media-content.ccbp.in/website/react-assignment/resources.json";

  useEffect(() => {
    const fetchData = (url, setData) => {
      Axios.get(url)
        .then(({ data }) => setData(data))
        .catch((err) => console.error(err));
    };
    fetchData(url, setResource);
  }, []);

  return (
    <>
      <div className="search-div">
        <input className="field-div " type="text" placeholder="🔍 Search" />
      </div>

      <div className=" container">
        {res.map((resource, key) => {
          return <Card key={key} props={resource} />;
        })}
      </div>
    </>
  );
};

export default Container;
