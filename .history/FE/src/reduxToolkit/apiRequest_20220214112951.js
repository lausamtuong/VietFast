import {
  loginFalse,
  loginStart,
  loginSuccess,
  registerFalse,
  registerSuccess,
  registerStart,
  loginInit,
} from "./authSlice";

import axios from "axios";
export const loginUser = async (user, dispatch, navigate) => {
  dispatch(loginStart());

  const res = axios
    .post("http://localhost:8080/WEB/BE/index.php", user)
    .then(() => {
      console.log(");
      dispatch(loginSuccess(res.data));
      dispatch(loginFalse());
      setTimeout(() => {
        alert("Tài khoản hoặc mật khẩu sai!");
      }, 2000);
    });

  // setTimeout(()=>{navigate('/')},1000)
};
export const registerUser = async (user, dispath, navigate) => {
  dispath(registerStart());
  try {
    const res = await axios.post(
      "https://leaflixxx-obs.herokuapp.com/register",
      user
    );
    dispath(registerSuccess());
    navigate("/login");
  } catch (error) {
    dispath(registerFalse());
  }
};

export const updateUser = async (id, dispath, monney) => {
  dispath(updateStart());
  try {
    console.log(id, monney);
    const res = await axios.put(
      `https://leaflixxx-obs.herokuapp.com/main/${id}`,
      monney
    );
    dispath(updateSuccess(res.data));
  } catch (error) {
    dispath(updateError(error.response.data));
  }
};

export const totalMoneyAPI = async (dispatch, data) => {
  dispatch(totalMoney(data));
};
export const startMonneyAPI = async (dispatch, data) => {
  dispatch(startMonney(data));
};
export const recivePriceAPI = async (dispatch, data) => {
  dispatch(recivePrice(data));
};
export const amountAwardAPI = async (dispatch, data) => {
  dispatch(amountAward(data));
};
export const userSelectAPI = async (dispatch, data) => {
  dispatch(userSelect(data));
};
export const disabledAPI = async (dispatch, data) => {
  dispatch(disabled(data));
};
export const resumeAPI = async (dispatch, data) => {
  dispatch(resume(data));
};
export const isChoiceAPI = async (dispatch, data) => {
  dispatch(isChoice(data));
};
export const resultAPI = async (dispatch, data) => {
  dispatch(result(data));
};