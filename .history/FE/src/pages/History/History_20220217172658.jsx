import React from "react";
import "./style.scss";
import{}
const History = () => {
  return (
    <div className="History">
      <div className="History-left">
        <div className="History-left-header">
          <div className="top">
            <div className="image">
              <img
                alt=""
                src="https://cf.shopee.vn/file/a7ae21d6e20e1bc55ab85122d378f5bc_tn"
              />
            </div>
            <div className="name">
              <p>obstuong</p>
            </div>
          </div>
            <div className="bot">
              <div className="navigate">
                  <p>Thông tin cá nhân</p>
              </div>
              <div className="navigate">
              <AiOutlineLogout/>
                  <p>Đăng Xuất</p>
              </div>
            </div>
        </div>
        <div className="History-left-body"></div>
      </div>
      <div className="History-right"></div>
    </div>
  );
};

export default History;
