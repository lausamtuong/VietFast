import React from "react";
import "./style.css";

const Card = ({ title, name, gif, type, price, img }) => {
  return (
    <div className="Card-wrapper">
      <div className="Card_img">
        <img src={img} alt="imageCar" />
      </div>
      <div className="Card_title">
          <p>{title}</p>
      </div>
      <div className="Card_name">
      <p>{title}</p>
      </div>
      <div className="Card_des"></div>
      <div className="Card_btn"></div>
    </div>
  );
};

export default Card;
