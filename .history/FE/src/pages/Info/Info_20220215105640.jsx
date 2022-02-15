import React from "react";
import { useSelector } from "react-redux";
import "./style.scss";
import avt from "../../images/avt_default.png";
import avt1 from "../../images/Vinfast-logo.png";
import { AiOutlineLogout } from "react-icons/ai";
import { FaTimes } from "react-icons/fa";
import { BsCart2 } from "react-icons/bs";
const Info = () => {
  const isLog = useSelector((state) => state?.auth?.login?.isLogin);
  const user = useSelector((state) => state?.auth?.login?.currentUser);
  if (!isLog) window.location.replace("http://localhost:3000/login");
  return (
    <>
      <div className="Info">
        <div className="Info_title">Thông tin cá nhân</div>
        <div className="Info_body">
          <div className="Info_body-user">
            <div className="Info_body-user-name-box">
              <div className="img">
                <img src={avt} alt="avt" />
              </div>
              <div>
                <p>Xin Chào,</p>
                <p class="user">{user.username}</p>
              </div>
            </div>
            <div className="Info_body-user-trans-box">
              <div className="item">
                <BsCart2 />
                <p>Lịch sử giao dịch</p>
              </div>
              <div className="item">
                <AiOutlineLogout />
                <p>Đăng xuất</p>
              </div>
            </div>
          </div>
          <div className="Info_body-des">
            <div className="flex">
              <p>Họ Và Tên</p>
              <p>{user.username}</p>
            </div>
            <div className="flex">
              <p>Email</p>
              <p>{user.email}</p>
            </div>
            <div className="flex">
              <p>Mật Khẩu</p>
              <input
                type="password"
                value={user.password}
                class="field left"
                readonly
              />
            </div>
            <button>Thay đổi mật Kkẩu</button>
          </div>
        </div>
        <div className="overlayz">
          <div className="box">
            <div className="header">
              <div className="image">
                <img src={avt1} alt="" />
              </div>
              <FaTimes />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Info;
