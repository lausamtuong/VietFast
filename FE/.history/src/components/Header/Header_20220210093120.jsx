import React from "react";
import Moresp from "./MoreSp"
import {
  AiOutlineMenu,
  AiOutlineGlobal,
  AiOutlineHome,
  AiFillCar,
  AiOutlineGift,
} from "react-icons/ai";
import { BiNews } from "react-icons/bi";
import { GrContact } from "react-icons/gr";
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
  },
  {
    display: "Sản phẩm",
    icon: <AiFillCar />,
    to: "/sanpham",
    section: "sanpham",
  },
  {
    display: "Tin Tức",
    icon: <BiNews />,
    to: "/news",
    section: "news",
  },
  {
    display: "Ưu đãi",
    icon: <AiOutlineGift />,
    to: "/gift",
    section: "gift",
  },
];
const Header = () => {
  const navigate = useNavigate()
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
              <Link to={item.to} key={index}>
                <li className={``}>{item.display}</li>
              </Link>
            ))}
            <li>
              {" "}
              <AiOutlineGlobal /> VN
            </li>
          </ul>
          <button className="btn" onClick={()=>navigate('/login')}>
            <span className="btn-text" > Tài khoản</span>
          </button>
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
          <div className="nav__tablet-title">VinFast</div>
          <Sidebar />
        </div>
      </div>
      <Moresp/>
    </div>
  );
};

export default Header;
