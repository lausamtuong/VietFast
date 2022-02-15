import React from "react";
import { useSelector } from "react-redux";
import "./style.scss";
import avt from "../../images/avt_default.png";
import avt1 from "../../images/Vinfast-logo.png";
import { AiOutlineEye, AiOutlineLogout } from "react-icons/ai";
import { FaTimes } from "react-icons/fa";
import { BsCart2 } from "react-icons/bs";
import { TextField } from "@mui/material";
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
            <div className="box-header">
              <div className="image">
                <img src={avt1} alt="" />
              </div>
              <FaTimes />
            </div>
            <div className='title'>
              Đổi mật khẩu
            </div>
            <div className='box-body'>
            <TextField
          id="password"
          name="password"
          label="Mật khẩu mới"
          // type={type}
          variant="outlined"
          // value={formik.values.password}
          // onBlur={formik.handleBlur}
          // onChange={formik.handleChange}
          InputProps={{
            endAdornment: (
              <AiOutlineEye
                className="input__icon"
                onClick={() => {
                  icon.classList.toggle("icon__active");
                  if (type == "password") setType("text");
                  else setType("password");
                }}
              />
            ),
          }}
        />
        <TextField
          id="confirm"
          label="Nhập lại mật khẩu mới"
          name="confirm"
          // type={type}
          variant="outlined"
          // value={formik.values.confirm}
          // onBlur={formik.handleBlur}
          // onChange={formik.handleChange}
        />
        {/* {formik.touched.confirm && formik.errors.confirm ? (
          <div className="error_msg">{formik.errors.confirm}</div>
        ) : null} */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Info;
