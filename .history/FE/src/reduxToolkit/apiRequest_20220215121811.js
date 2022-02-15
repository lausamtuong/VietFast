import {
  loginFalse,
  loginStart,
  loginSuccess,
  registerFalse,
  registerSuccess,
  registerStart,
  logout
} from "./authSlice";

import axios from "axios";
export const loginUser = async (user, dispatch, navigate) => {
  dispatch(loginStart());
    axios.post("http://localhost:8080/WEB/BE/index.php", user)
    .then((res) => {
      if(res.data=="login false"){
        dispatch(loginFalse());
        setTimeout(() => {
          alert("Tài khoản hoặc mật khẩu sai!");
        }, 1000);
      }
      else{
        setTimeout(() => {
          dispatch(loginSuccess(res.data));
          navigate('/')
        }, 3000);
       
      }
      
    });
};
export const logoutUser = async ( dispatch, navigate) => {
  dispatch(logout());
  navigate('/login')
}
export const filterItem = async (data, dispatch) => {
    dispatch(filter(data))
}
export const registerUser = async (user, dispatch, navigate) => {
  dispatch(registerStart());
  try {
     axios.post(
      "http://localhost:8080/WEB/BE/index.php",
      user
    ).then((res)=>{
      console.log(res.data);
      if (res.data == "usernameError" )
        alert("Tài khoản  đã có người sử dụng!");
      else  if (res.data == "emailError" )
      alert("Email  đã có người sử dụng!");
      else {
        alert("Đăng kí thành công");
        dispatch(registerSuccess());
        navigate("/login");
      }
    })
  } catch (error) {
    dispatch(registerFalse());
  }
};

export const updateUserPassword = async (data,navigate) => {

    axios.post(
     "http://localhost:8080/WEB/BE/index.php",
     data
   ).then((res)=>{
    alert(res.data)
    navigate("/");
    //  if (res.data == "usernameError" )
    //    alert("Tài khoản  đã có người sử dụng!");
    //  else  if (res.data == "emailError" )
    //  alert("Email  đã có người sử dụng!");
    //  else {
    //    alert("Cập nh thành công");
    //    dispatch(updateSuccess());
    //    navigate("/");
    //  }
   })

};

