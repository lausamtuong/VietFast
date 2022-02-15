import React from "react";
import "./style.css";

const Card = ({ title, name, gif, type, price, img }) => {
  return (
    <div className="Card-wrapper">
      <div className="Card_img">
        <img src={img} alt="imageCar" />
        <img src={gif} alt="imageCar" class/>
      </div>
      <div className="Card_title">
          <p>{title}</p>
      </div>
      <div className="Card_name">
      <p>{name}</p>
      </div>
      <div className="Card_des">
          <div className='Card_des-type'>
              <p>Dòng xe</p>
              <h4>{type}</h4>
          </div>
          <div className='Card_des-price'>
              <p>Giá niêm yết</p>
              <h4>{price}</h4>
          </div>
      </div>
      <div className="Card_btn"></div>
    </div>
  );
};

export default Card;
