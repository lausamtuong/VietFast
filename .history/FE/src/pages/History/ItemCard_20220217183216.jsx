import React from "react";
import "./itemcard.scss";
import { FaMotorcycle } from "react-icons/fa";
import { BsCheck2Circle } from "react-icons/bs";
const Itemcard = () => {
  return (
    <div className="Item_card">
      <div className="Item_header">
        <div className="Item_header-type">
          <p>MECXEDES</p>
        </div>
        <div className="Item_header-status">
          <div className="green">
            <FaMotorcycle />
            <span>Giao hàng thành công</span>
          </div>
          <div className="red">
            <BsCheck2Circle />
            <span>ĐÃ THANH TOÁN</span>
          </div>
        </div>
      </div>
      <div className="Item_body">
        <div className="Item_body-top">
          <div className="Item_body-img">
            <img
              alt="img"
              src="https://cf.shopee.vn/file/a7ae21d6e20e1bc55ab85122d378f5bc_tn"
            />
          </div>
          <div className="Item_body-des">
            <p>xe hoi dep nhatz</p>
            <p>lorem ipsum dolor sit amet, consectetur
            orem ipsum dolor sit amet, consectetur
            orem ipsum dolor sit amet, consectetur
            </p>
          </div>
          <div className="Item_body-price">
              <p>1000.000.000</p>
              <p>
              <span>Thuế:</span>10%
              </p>
            
          </div>
        </div>
      </div>
        <div className="Item_footer">
          <div className="Item_footer-total">
          <span>Tổng: </span>
          12312321312321</div>
          <div className="Item_footer-btn"><button>gui</button></div>
        </div>
    </div>
  );
};

export default Itemcard;
