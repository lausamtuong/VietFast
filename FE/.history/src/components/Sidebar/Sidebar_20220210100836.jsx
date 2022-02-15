import React, { useEffect, useRef, useState } from "react";
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
import { Link, useLocation, useNavigate } from "react-router-dom";
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
const Sidebar = () => {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);
  const [stepHeight, setStepHeight] = useState(0);
  const sideBarRef = useRef();
  const indicatorRef = useRef();
  const location = useLocation();
  useEffect(() => {
    setTimeout(() => {
      const sideBaritem = sideBarRef.current.querySelector(".nav__tablet-item");
      indicatorRef.current.style.height = `${sideBaritem.clientHeight }px`;
      setStepHeight(sideBaritem.clientHeight+20);
    }, 50);
  }, []);
  useEffect(() => {
    const curPath = window.location.pathname.split("/")[1];

    const activeItem = NavItems.findIndex((item) => item.section === curPath);
    setActiveIndex(curPath.length === 0 ? 0 : activeItem);
    if (curPath === "login") setActiveIndex(-10);
  }, [location]);
  return (
    <ul ref={sideBarRef} className="nav__tablet-list">
      <div
        ref={indicatorRef}
        style={{
          transform: `translateX(-50%) translateY(${
            activeIndex * stepHeight
          }px)`,
        }}
        className="indicator"
      ></div>
      {NavItems.map((item, index) => (
        <Link to={item.to} key={index}>
          <li
            className={`nav__tablet-item ${
              activeIndex === index ? "active" : ""
            }`}
          >
            {item.icon}
            <p>{item.display}</p>
          </li>
        </Link>
      ))}

      <div className="button" onClick={() => navigate("login")}>
        <button className="btn">
          <span className="btn-text"> Tài khoản</span>
        </button>
      </div>
      <li className="nav__tablet-item">
        <GrContact />
        Liên hệ
      </li>
    </ul>
  );
};

export default Sidebar;
