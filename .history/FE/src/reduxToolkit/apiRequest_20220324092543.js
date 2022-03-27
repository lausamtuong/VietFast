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
  updateSuccess,
  filter,
} from "./authSlice";

import axios from "axios";
export const loginUser = async (user, dispatch, navigate) => {
  dispatch(loginStart());
  axios.post("http://localhost:8080/WEB/Vietfast/BE/index.php", user).then((res) => {
   
    if (res.data == "login false") {
      dispatch(loginFalse());
      const target = document.querySelector(".overlayz");
      setTimeout(() => {
        target.classList.toggle("none");
      }, 3000);
    } else {
     window.localStorage.setItem("user", JSON.stringify(res.data));
     const user =  JSON.parse(window.localStorage.getItem("user"));
     console.log(user)
      if (user.isAdmin == "false")
        setTimeout(() => {
          dispatch(loginSuccess(res.data));
          navigate("/");
        }, 3000);
      else
        setTimeout(() => {
          dispatch(loginSuccess(res.data));
          navigate("/admin");
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
    axios.post("http://localhost:8080/WEB/Vietfast/BE/index.php", user).then((res) => {
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
  axios.post("http://localhost:8080/WEB/Vietfast/BE/index.php", data).then((res) => {
    alert(res.data);
    dispatch(logout());
  });
};

export const updateUser = async (data, dispatch) => {
  axios.post("http://localhost:8080/WEB/Vietfast/BE/index.php", data).then((res) => {
  alert('Cập nhật thông tin thành công!');
    dispatch(logout());
  });
};
export const senCommentToDB = async (data, dispatch) => {
  try {
    console.log(data);
    axios.post("http://localhost:8080/WEB/Vietfast/BE/index.php", data).then((res) => {
      dispatch(commentSuccess());
    });
  } catch (error) {
    dispatch(commentError());
  }
};
export const deleteCommentToDB = async (data, dispatch) => {
    axios.post("http://localhost:8080/WEB/Vietfast/BE/index.php", data).then((res) => {
    });
  } 


export const getComment = async (data) => {
  const list = axios
    .post("http://localhost:8080/WEB/Vietfast/BE/index.php", data)
    .then((res) => {
      return res.data;
    });
  return list;
};
export const getTransaction = async (data) => {
  const list = axios
    .post("http://localhost:8080/WEB/Vietfast/BE/index.php", data)
    .then((res) => {
      console.log(res);
      return res.data;
    });
  return list;
};
export const setAvt = async (data, dispatch) => {
  axios.post("http://localhost:8080/WEB/Vietfast/BE/index.php", data).then((res) => {
    alert("Cập nhật ảnh đại diện thành công! Yêu cầu đăng nhập lại.");
    dispatch(logout());
  });
};
export const payment = async (data) => {
  console.log(data);
  axios.post("http://localhost:8080/WEB/Vietfast/BE/index.php", data).then((res) => {
    console.log(res.data)
  });
};
export const getRow = async (data) => {
  const list = axios
  .post("http://localhost:8080/WEB/Vietfast/BE/index.php", data)
  .then((res) => {
    return res.data;
  });
return list;
}
export const deleteUsers = async (data) => {
  axios.post("http://localhost:8080/WEB/Vietfast/BE/index.php", data).then((res) => {
    console.log(res.data)
  });
}
export const contact = async (data,navigate) => {
  axios.post("http://localhost:8080/WEB/Vietfast/BE/index.php", data).then((res) => {
    alert("Thành Công")
    navigate('/')
  });
}
export const getContact = async (data) => {
  const list = await axios.post("http://localhost:8080/WEB/Vietfast/BE/index.php", data).then((res) => {
   return (res.data);
  })
  return list;
}