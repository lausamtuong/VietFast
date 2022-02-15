import React, { useEffect } from "react";

import "./style.scss";
import TextField from "@mui/material/TextField";
import { AiOutlineEye } from "react-icons/ai";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { loginUser } from "../../reduxToolkit/apiRequest";
import DotLoader from "react-spinners/DotLoader";
import { css } from "@emotion/react";
const target = document.querySelector(".overlayz");

import { AiOutlineCloseCircle } from "react-icons/ai";
const override = css`
  display: block;
  margin: 0 auto;
  border-color: #ffffff;
`;
const Login = () => {
  window.scrollTo(0, 0);
  let [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [type, setType] = useState("password");
  const [disabled, setDisable] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    if (email && password) setDisable(false);
    else setDisable(true);
  }, [email, password]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      email: email,
      password: password,
    };

    loginUser(data, dispatch, navigate);
  };
  const icon = document.querySelector(".input__icon");
  return (
    <>
      {loading && (
        <div className="overlay__loading">
          <DotLoader
            color={"#ffffff"}
            loading={loading}
            css={override}
            size={150}
          />
        </div>
      )}
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
          <Button
            type="submit"
            variant="contained"
            disabled={disabled}
            onClick={() => {
              setLoading(true);
              setTimeout(() => {
                setLoading(false);
                setSuccess(true);
              }, 3000);
            }}
          >
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
      <div className="overlayz ">
        <div className="box">
          
          <div className="flex">
            <AiOutlineCloseCircle 
              onClick={(e) => {
                target.classList.toggle("none");
              }}
            />
            <div className="title">Email hoặc mật khẩu sai!</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
