import React, { useState } from "react";
import "./style.scss";
import avt from "../../images/avt_default.png";
import { AiOutlineLogout } from "react-icons/ai";
import { GrContactInfo } from "react-icons/gr";
import Itemcard from "./ItemCard";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const History = () => {
  const user = useSelector((state) => state?.auth?.login?.currentUser);
  const api = useSelector((state) => state?.auth.API);
  const navigate = useNavigate();
  if (user?.username) {
  } else {
    navigate("/");
  }
  const [items, setItems] = useState();
  const getData = async () => {
    const x = await axios
      .post("http://localhost:8080/WEB/BE/index.php", {
        action: "getItem",
        email: user?.email,
      })
      .then((res) => {
        return res.data;
      });
    return x;
  };
  const promise = getData();
  promise.then((res) => {
    setItems(res[0].item);
  });
  const List = items?.split(",");

  return (
    <div className="History">
      <div className="History-left">
        <div className="History-left-header">
          <div className="top">
            <div className="image">
              <img alt="" src={user?.image ? user.image : avt} />
            </div>
            <div className="name">
              <p>{user?.username}</p>
            </div>
          </div>
          <div className="bot">
            <div className="navigate">
              <GrContactInfo />
              <p>Thông tin cá nhân</p>
            </div>
            <div className="navigate">
              <AiOutlineLogout />
              <p>Đăng Xuất</p>
            </div>
          </div>
        </div>
      </div>
      <div className="History-right">
      {List?.map((item, index) => {
        const y = api.ALL.filter((x) => x.params == item)
        console.log
        return <Itemcard props={y}/>
      })}</div>
    </div>
  );
};

export default History;
