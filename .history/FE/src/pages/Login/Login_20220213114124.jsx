import React, { useEffect } from "react";
import Footer from "../../components/Footer/Footer";
import "./style.css";
import TextField from "@mui/material/TextField";
import { AiOutlineEye } from "react-icons/ai";
import { useState } from "react";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";


const Login = () => {
  const [type, setType] = useState("password");
  const [disabled, setDisable] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    if (email && password) setDisable(false);
     else setDisable(true);
  }, [email,password]);
  const handleSubmit = (e)=>{
    e.preventDefault()
    const data = {
      email:email,
      password:password
    }
    console.log(data)
  }
  const icon = document.querySelector(".input__icon");
  return (
    <>
      <div className="login__form">
        <form className="form__login" onSubmit={handleSubmit}>
          <div className="Title">Đăng nhập</div>
          <TextField
            id="email"
            label="Email"
            variant="outlined"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <TextField
            id="password"
            label="Mật khẩu"
            type={type}
            variant="outlined"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
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
          <div className="fogot__pw">
            <div className="remember__pw">
              <input type="checkbox" />
              <p>Ghi nhớ tài khoản</p>
            </div>
            <p>Quên mật khẩu?</p>
          </div>
          <Button type="submit" variant="contained" disabled={disabled}>
            Đăng nhập
          </Button>
          <p style={{ color: "gray", fontSize: "12px", textAlign: "center" }}>
            Chưa có tài khoản ?
          </p>
          <Button variant="outlined" onClick={() => navigate("/register")}>
            Đăng kí
          </Button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Login;
