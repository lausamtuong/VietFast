import React, { useEffect, useState } from "react";
import Moresp from "./MoreSp/MoreSp";
import { useSelector } from "react-redux";
import {
  AiOutlineMenu,
  AiOutlineGlobal,
  AiOutlineHome,
  AiFillCar,
  AiOutlineGift,
  AiOutlineLogout,
} from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import { BsCart2 } from "react-icons/bs";
import { BiNews } from "react-icons/bi";
import { FaTimes } from "react-icons/fa";
import "./style.scss";
import Sidebar from "../Sidebar/Sidebar";
import { Link, useNavigate } from "react-router-dom";
import avt from "../../images/avt_default.png";
const NavItems = [
  {
    display: "Trang chủ",
    icon: <AiOutlineHome />,
    to: "/",
    section: "",
    class_name: "home_page",
  },
  {
    display: "Sản phẩm",
    icon: <AiFillCar />,
    to: "",
    section: "sanpham",
    class_name: "san_pham",
    more: <Moresp />,
  },
  {
    display: "Tin Tức",
    icon: <BiNews />,
    to: "/news",
    section: "news",
    class_name: "news_",
  },
  {
    display: "Liên hệ",
    icon: <AiOutlineGift />,
    to: "contact",
    section: "contact",
    class_name: "gift_",
  },
];
const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state?.auth?.login?.currentUser);
  const isLogin = useSelector((state) => state?.auth?.login?.isLogin);
  const [name, setName] = useState("Tài Khoản");
  const more_user=  document.querySelector('.more__user')
  const header_user_info = document.querySelector('.header_user_info')
  header_user_info.addEventListener("mouseover",()=>{
    more_user
  })
  useEffect(() => {
    setName(user?.username);
  }, [user]);
  return (
    <div className="container">
      <div className="header">
        <div className="header__logo" onClick={() => navigate("/")}>
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
                <li>{item.display}</li>
                {item?.more ? item.more : ""}
              </Link>
            ))}
            <li className="language">
              {" "}
              <AiOutlineGlobal /> VN
            </li>
          </ul>
          {isLogin ? (
            <div className="relative">
              <div className="header__user-info">
                <div className="image">
                  <img alt="user-img" src={avt} />
                </div>
                <div className="username">
                  <p>{user.username}</p>
                </div>
              </div>
              <div className="more__user">
                <div className="more__user-info">
                  <BiUserCircle />
                  <p>Thông tin tài khoản</p>
                </div>
                <div className="more__user-info">
                  <BsCart2 />
                  <p>Lịch sử giao dịch</p>
                </div>
                <div className="more__user-info">
                  <AiOutlineLogout />
                  <p>Đăng xuất</p>
                </div>
              </div>
            </div>
          ) : (
            <button className="button" onClick={() => navigate("/login")}>
              <span className="button-text">Tài khoản</span>
            </button>
          )}
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
