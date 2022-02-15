import React, { useEffect, useState } from "react";
import Moresp from "./MoreSp/MoreSp"
import { useDispatch, useSelector } from "react-redux";
import {
  AiOutlineMenu,
  AiOutlineGlobal,
  AiOutlineHome,
  AiFillCar,
  AiOutlineGift,
} from "react-icons/ai";
import { BiNews } from "react-icons/bi";
import { FaTimes } from "react-icons/fa";
import "./style.css";
import Sidebar from "../Sidebar/Sidebar";
import { Link, useNavigate } from "react-router-dom";
const NavItems = [
  {
    display: "Trang chủ",
    icon: <AiOutlineHome />,
    to: "/",
    section: "",
    class_name:'home_page'
  },
  {
    display: "Sản phẩm",
    icon: <AiFillCar />,
    to: "",
    section: "sanpham",
    class_name:'san_pham',
    more: <Moresp />
   
  },
  {
    display: "Tin Tức",
    icon: <BiNews />,
    to: "/news",
    section: "news",
    class_name:'news_'
  
  },
  {
    display: "Liên hệ",
    icon: <AiOutlineGift />,
    to: "contact",
    section: "contact",
    class_name:'gift_',
      
  
  },
];
const Header = () => {
  const navigate = useNavigate()
  const user = useSelector((state) => state?.auth?.login?.currentUser);
  const isLogin = useSelector((state) => state?.auth?.login?.isLogin);
  const [name,setName] = useState("Tài Khoản")
  useEffect(()=>{
  setName(user?.username)  
  },[user])
  return (
    <div className="container">
      <div className="header">
        <div className="header__logo" onClick={()=>navigate("/")}>
          <img
            class="logo-main"
            alt="Porto"
            width="62"
            height="62"
            src="https://ototot.com.vn/wp-content/uploads/2021/03/logo-vinfast.png"
          ></img>
        </div>
        <div className="header__right ">
          <ul className="header__list">
            {NavItems.map((item, index) => (
              <Link to={item.to} key={index} className={item.class_name}>
                <li >{item.display}</li>
                {item?.more?item.more:''}
              </Link>
            ))}
            <li className="language">
              {" "}
              <AiOutlineGlobal /> VN
            
            </li>
          </ul>
         { isLogin
         ?()
         :(
           <button className="button" onClick={()=>navigate('/login')}>
            <span className="button-text" >  {user?.username?name:'Tài khoản'}</span>
          </button>
          }
        </div>
        <div className="icon">
          <AiOutlineMenu
            onClick={() => {
              document.querySelector(".nav__tablet")?.classList.toggle("trans");
              document.querySelector(".overlay")?.classList.toggle("view");
            }}
          />
        </div>
        <div className="overlay"></div>
        <div className="nav__tablet">
          <div
            className="nav__icon"
            onClick={() => {
              document.querySelector(".nav__tablet")?.classList.toggle("trans");
              document.querySelector(".overlay")?.classList.toggle("view");
            }}
          >
            <FaTimes />
          </div>
          <div className="nav__tablet-title">VietFast</div>
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default Header;
