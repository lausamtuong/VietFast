import React from 'react';
import "./style.css"

const Card = ({title,name,gif,type,price,img}) => {
    return (
        <div className="Card-wrapper">
            <div className="Card_img">
            
            </div>
            <div className="Card_title"></div>
            <div className="Card_name"></div>
            <div className="Card_des"></div>
            <div className="Card_btn"></div>
        </div>
    );
}

export default Card;
