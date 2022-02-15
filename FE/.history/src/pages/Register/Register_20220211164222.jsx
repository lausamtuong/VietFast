import React, { useEffect, useState } from "react";
import "./style.css";
import TextField from "@mui/material/TextField";
import { AiOutlineEye, AiOutlineCheck } from "react-icons/ai";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [type, setType] = useState("password");
  const [disabled, setDisabled] = useState(true);
  const navigate = useNavigate()
  const re_1digit = new RegExp("^(?=.*[0-9])");
  const re_8chart = new RegExp("^(?=.{8,})");
  const re_low = new RegExp("^(?=.*[a-z])");
  const re_up = new RegExp("^(?=.*[A-Z])");
  const re_spe = new RegExp("^(?=.*[!@#$%^&*])");
  const formik = useFormik({
    initialValues: {
      name: "",
      password: "",
      confirm: "",
      email: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Yêu cầu nhập tài khoản")
        .min(6, "Tài khoản yêu cầu tối thiểu 6 kí tự"),
      password: Yup.string().matches(/^(?=.*[0-9])/, "color"),
      confirm: Yup.string()
        .oneOf([Yup.ref("password"), null], "Nhập lại mật khẩu không chính xác")
        .required("Yêu cầu nhập lại mật khẩu"),
      email: Yup.string()
        .required("Vui lòng nhập email")
        .min(8, "Vui lòng nhập email chính xác")
        .matches(
          /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
          "Vui lòng nhập email chính xác"
        ),
    }),
    onSubmit: (values) => {
      const newUser = {
        name: values.name,
        password: values.password,
        email: values.email,
      };
      setTimeout(() => {
        formik.setSubmitting(false);
      }, 2000);
    },
  });
  useEffect(() => {
    if (
      formik.values.email &&
      formik.values.password &&
      formik.values.confirm &&
      formik.values.name
    )
      setDisabled(false);
    else setDisabled(true);
  }, [formik.values.email, formik.values.password]);
  const icon = document.querySelector(".input__icon");
  return (
    <div className="register__form">
      <div className="form__register">
        <div className="title">Đăng ký tài khoản</div>
        <TextField
          name="email"
          id="email"
          label="Email"
          variant="outlined"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.email && formik.errors.email ? (
          <div className="error_msg">{formik.errors.email}</div>
        ) : null}
        <TextField
          id="name"
          name="name"
          label="Họ tên"
          variant="outlined"
          value={formik.values.name}
          onChange={formik.handleChange}
        />
        <TextField
          id="password"
          name="password"
          label="Mật khẩu"
          type={type}
          variant="outlined"
          value={formik.values.password}
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
          label="Nhập lại mật khẩu"
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
        <div className="footer__form">Mật khẩu bạn phải có: </div>
        <ul className="check__pw">
          <li className="">
            {re_1digit.test(formik.values.password) ? (
              <p className="color">
                <AiOutlineCheck /> Ít nhất 1 số
              </p>
            ) : (
              <p className="">
                <AiOutlineCheck />
                Ít nhất 1 số
              </p>
            )}
          </li>
          <li className="">
            {re_8chart.test(formik.values.password) ? (
              <p className="color">
                <AiOutlineCheck />
                Ít nhất 8 ký tự
              </p>
            ) : (
              <p className="">
                <AiOutlineCheck />
                Ít nhất 8 ký tự
              </p>
            )}
          </li>
          <li className="">
            {re_up.test(formik.values.password) ? (
              <p className="color">
                <AiOutlineCheck />
                Chữ cái viết hoa (A-Z)
              </p>
            ) : (
              <p className="">
                <AiOutlineCheck />
                Chữ cái viết hoa (A-Z)
              </p>
            )}
          </li>
          <li className="">
            {re_low.test(formik.values.password) ? (
              <p className="color">
                <AiOutlineCheck />
                Chữ cái viết thường (a-z)
              </p>
            ) : (
              <p className="">
                <AiOutlineCheck />
                Chữ cái viết thường (a-z)
              </p>
            )}
          </li>
          <li className="">
            {re_spe.test(formik.values.password) ? (
              <p className="color">
                <AiOutlineCheck />
                Kí tự đặc biệt
              </p>
            ) : (
              <p className="">
                <AiOutlineCheck />
                Kí tự đặc biệt
              </p>
            )}
          </li>
        </ul>
        <p className="dieuKhoan">
          Bằng việc bấm nút Đăng ký bên dưới, tôi xác nhận đã đọc, hiểu và đồng
          ý với các <a href="#">Điều kiện và Điều khoản </a>của VinFast.
        </p>
        <div className="camket">
          <input type="checkbox" />
          <p>
            Đăng ký nhận thông tin chương trình khuyến mãi, dịch vụ từ VinFast
          </p>
        </div>
        <Button type="submit" variant="contained" disabled={disabled}>
          Đăng Kí
        </Button>
        <p className="noti__trans">Đã có tài khoản?</p>
        <Button variant="outlined" onClick={() => navigate("/login")}>
            Đăng nhạp
          </Button>
      </div>
    </div>
  );
};

export default Register;
