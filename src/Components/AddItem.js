import React from "react";
import "../styles/AddItem.css";
import image from "../assets/image9.png";

const AddItem = () => {
  return (
    <>
      <div className="additem-main">
        <div className="additem-form">
          <h2>Item Details</h2>

          <div className="form-div">
            <label>Item Name</label>
            <input type="text" name="name" />
          </div>
          <div className="form-div">
            <label>Link</label>
            <input type="text" name="name" />
          </div>
          <div className="form-div">
            <label>Resource Name</label>
            <input type="text" name="name" />
          </div>
          <div className="form-div">
            <label>Description</label>
            <input type="text" name="name" />
          </div>

          <button className="form-btn">CREATE</button>
        </div>
        <div className="additem-img">
          <img src={image} alt="Image9" srcset="" />
        </div>
      </div>
    </>
  );
};

export default AddItem;
