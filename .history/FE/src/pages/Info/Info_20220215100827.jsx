import React from "react";
import { useSelector } from "react-redux";
import "./style.scss";
import avt from "../../images/avt_default.png";
import { AiOutlineLogout } from "react-icons/ai";
import { BsCart2 } from "react-icons/bs";
const Info = () => {
  const isLog = useSelector((state) => state?.auth?.login?.isLogin);
  const user = useSelector((state) => state?.auth?.login?.currentUser);
  if (!isLog) window.location.replace("http://localhost:3000/login");
  return (
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
              <p class='user'>{user.}</p>
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
          <div className='flex'>
            <p>Họ Và Tên</p>
            <p>Hdasdsad</p>
          </div>
          <div className='flex'>
          <p>Email</p>
            <p>Hdasdsdaaaaaaaaaaaaaaasad</p>
          </div>
          <div className='flex'>
          <p>Mật Khẩu</p>
            <p>Hdasdsdaaaaaaaaaaaaaaasad</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
