import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import "./detail.scss";
import TextField from "@mui/material/TextField";
import avt from "../../images/avt_default.png";
import { Button } from "@mui/material";

const Detail = () => {
  const api = useSelector((state) => state?.auth.API);
  const user = useSelector((state) => state?.auth?.login);
  const params = useParams();
  const navigate = useNavigate();
  let item = api.ALL.filter((x) => x.params == params.id);
  window.scrollTo(0, 0);
  const sendComment = (data) => {
    if(!user.currentUser){
     alert("Bạn cần đăng nhập để bình luận!")
     navigate('/login')
    }
    else console.log(user)
  };
  return (
    <div className="detail">
      <div className="detail__header">
        <div className="text">
          <div className="text--shadow">{item[0].name.split(" ")[0]}</div>
          <div className="text--highlight">
            <div className="__label">VINFAST {item[0].name.split(" ")[0]}</div>
            <div className="__slogan">{item[0].slogan}</div>
          </div>
        </div>
        <div className="image">
          <img src={item[0].detail.img.banner} alt="" />
        </div>
        <div
          className="buy__box"
          onClick={() => {
            if (user?.isLogin) navigate(`../product/payment/${item[0].params}`);
            else {
              navigate(`/login`);
              alert("Bạn cần phải đăng nhập!");
            }
          }}
        >
          <div className="img">
            <img
              src="https://shop.vinfastauto.com/on/demandware.static/-/Sites-app_vinfast_vn-Library/default/dw56a65b84/images/theon/ShoppingBag.png"
              alt=""
            />
          </div>
          <div className="text">MUA NGAY</div>
        </div>
      </div>
      <div className="detail__content">
        <div className="text">
          <ul>
            {item[0].detail.text.map((item, index) => (
              <li key={index} className={`child-${index}`}>
                <div className="label">{item.label}</div>
                <div className="desc">{item.text}</div>
              </li>
            ))}
          </ul>
          <div className="product__btn">
            <button
              className="btn btn__buy"
              onClick={() => {
                if (user?.isLogin)
                  navigate(`../product/payment/${item[0].params}`);
                else {
                  navigate(`/login`);
                  alert("Bạn cần phải đăng nhập!");
                }
              }}
            >
              Mua ngay
            </button>
          </div>
        </div>
        <div className="image">
          <img src={item[0].detail.img.main} alt="" />
        </div>
      </div>
      <div className="detail__comment">
        <div className="comment-head">
          <div className="comment-head-avt">
            <img src={avt} alt="avt" />
          </div>

          <TextField
            className="comment-head-input"
            id="filled-textarea"
            label="Comment tại đây!"
            placeholder="Bạn có góp ý, trao đổi gì không?"
            multiline
            variant="filled"
          />
        </div>
        <div className="comment-btn">
          <Button variant="text">Hủy</Button>
          <Button
            variant="contained"
            onClick={() => sendComment({ email: 123 })}
          >
            Gửi
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Detail;
