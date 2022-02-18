import {
  loginFalse,
  loginStart,
  loginSuccess,
  registerFalse,
  registerSuccess,
  registerStart,
  logout,
  commentError,
  commentSuccess,
} from "./authSlice";

import axios from "axios";
export const loginUser = async (user, dispatch, navigate) => {
  dispatch(loginStart());
  axios.post("http://localhost:8080/WEB/BE/index.php", user).then((res) => {
    if (res.data == "login false") {
      dispatch(loginFalse());
      const target = document.querySelector(".overlayz");
      setTimeout(() => {
        target.classList.toggle("none");
      }, 3000);
    } else {
      setTimeout(() => {
        dispatch(loginSuccess(res.data));
        navigate("/");
      }, 3000);
    }
  });
};
export const logoutUser = async (dispatch, navigate) => {
  dispatch(logout());
  navigate("/login");
};
export const filterItem = async (data, dispatch) => {
  dispatch(filter(data));
};
export const registerUser = async (user, dispatch, navigate) => {
  dispatch(registerStart());
  try {
    axios.post("http://localhost:8080/WEB/BE/index.php", user).then((res) => {
      console.log(res.data);
      if (res.data == "emailError") {
        const target = document.querySelector(".overlayz");
        target.classList.toggle("none");
      } else {
        alert("Đăng kí thành công");
        dispatch(registerSuccess());
        navigate("/login");
      }
    });
  } catch (error) {
    dispatch(registerFalse());
  }
};

export const updateUserPassword = async (data, dispatch, navigate) => {
  axios.post("http://localhost:8080/WEB/BE/index.php", data).then((res) => {
    alert(res.data);
    dispatch(logout());
  });
};

export const updateUser = async (data, dispatch) => {
  axios.post("http://localhost:8080/WEB/BE/index.php", data).then((res) => {
    alert(res.data);
    dispatch(logout());
  });
};
export const senCommentToDB = async (data, dispatch) => {
  try {
    axios.post("http://localhost:8080/WEB/BE/index.php", data).then((res) => {
      dispatch(commentSuccess());
    });
  } catch (error) {
    dispatch(commentError());
  }
};
export const getComment = async (data) => {
  const list = axios
    .post("http://localhost:8080/WEB/BE/index.php", data)
    .then((res) => {
      return res.data;
    });
  return list;
};
export const setAvt = async (data) => {
  console.log(data);
  axios.post("http://localhost:8080/WEB/BE/index.php", data,).then((res) => {
    console.log(res.data);
  });
};
