import React from "react";
import "./style.scss";
import{AiOutlineLogout} from 'react-icons/ai'
import{GrContactInfo} from 'react-icons/gr'
import Itemcard from "./ItemCard";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const History = () => {
  const user = useSelector((state) => state.auth?.login?.currentUser);
  const navigate = useNavigate();
  if(user){
    navigate('/')
  }
  else
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
              <GrContactInfo/>
                  <p>Thông tin cá nhân</p>
              </div>
              <div className="navigate">
              <AiOutlineLogout/>
                  <p>Đăng Xuất</p>
              </div>
            </div>
        </div>
        
      </div>
      <div className="History-right">
          <Itemcard/>
          <Itemcard/>
      </div>
    </div>
  );
};

export default History;
