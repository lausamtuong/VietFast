import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./style.scss";
import avt from "../../images/avt_default.png";
import avt1 from "../../images/Vinfast-logo.png";
import { AiOutlineEye, AiOutlineLogout } from "react-icons/ai";
import { FaTimes } from "react-icons/fa";
import { BsCart2 } from "react-icons/bs";
import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../reduxToolkit/apiRequest";
import { updateUserPassword } from "../../reduxToolkit/apiRequest";
const Info = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const isLog = useSelector((state) => state?.auth?.login?.isLogin);
  const user = useSelector((state) => state?.auth?.login?.currentUser);
  const [type, setType] = useState("password");
  if (!isLog) window.location.replace("http://localhost:3000/login");
  const [disabled, setDisabled] = useState(true);
  const icon = document.querySelector(".input__icon");
  const formik = useFormik({
    initialValues: {
      old_password: "",
      new_password: "",
      confirm: "",
    },
    validationSchema: Yup.object({
      old_password: Yup.string().matches(/^(?=.*[0-9])/, "color"),
      confirm: Yup.string()
        .oneOf([Yup.ref("new_password"), null], "Nhập lại mật khẩu không chính xác")
        .required("Yêu cầu nhập lại mật khẩu"),
     
    }),
    onSubmit: (values) => {
      const newUpdate = {
        password: values.new_password,
        action: "getUserUpdate",
      };
      if(user.password==newUpdate.password)
       updateUserPassword(newUpdate,dispatch,navigate)
       else{alert}
    },
  });
  useEffect(() => {
    if (
      formik.values.old_password &&
      formik.values.new_password &&
      formik.values.confirm &&
      formik.errors.confirm
    )
      setDisabled(false);
    else setDisabled(true);
  }, [formik.values.new_password, formik.values.confirm]);
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
          id="old_password"
          name="old_password"
          label="Mật khẩu cũ"
          type={type}
          variant="outlined"
          value={formik.values.old_password}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
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
          id="new_password"
          name="new_password"
          label="Mật khẩu mới"
          type={type}
          variant="outlined"
          value={formik.values.new_password}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
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
          type={type}
          variant="outlined"
          value={formik.values.confirm}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
        />
        {formik.touched.confirm && formik.errors.confirm ? (
          <div className="error_msg">{formik.errors.confirm}</div>
        ) : null}
        <Button type="submit" variant="contained"
         disabled={disabled}
        >
         Xác nhận
        </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Info;
