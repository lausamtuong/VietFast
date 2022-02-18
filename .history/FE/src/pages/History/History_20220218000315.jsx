import React, { useState } from "react";
import "./style.scss";
import{AiOutlineLogout} from 'react-icons/ai'
import{GrContactInfo} from 'react-icons/gr'
import Itemcard from "./ItemCard";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import avt from '../../'
const History = () => {
  const user = useSelector((state) => state.auth?.login?.currentUser);
  const navigate = useNavigate();
  // if(user){
   
  // }
  // else {
  //   //navigate('/')
  // }
  const [items,setItems] = useState()
  const getData = async () => {
    const x = await axios
      .post("http://localhost:8080/WEB/BE/index.php", {
        action: "getItem",
        email: "admin123asd@gmail.com",
      })
      .then((res) => {
        return res.data;
      });
    return x ;
  };
  const promise= getData()
  promise.then((res)=>{
    setItems(res[0].item)
  })
 
 
console.log(items?.split(','))
  return (
    <div className="History">
      <div className="History-left">
        <div className="History-left-header">
          <div className="top">
            <div className="image">
              <img
                alt=""
                src={user.image?.user.image:avt}
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
