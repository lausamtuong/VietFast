import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./detail.scss";
import TextField from "@mui/material/TextField";
import avt from "../../images/avt_default.png";
import { Avatar, Button } from "@mui/material";
import { getComment, senCommentToDB } from "../../reduxToolkit/apiRequest";
const Detail = () => {
  const api = useSelector((state) => state?.auth.API);
  const user = useSelector((state) => state?.auth?.login);
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  var today = new Date();
  var date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  var time =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  var dateTime = date + " " + time;
  const [data, setData] = useState({
    name: user?.currentUser?.username,
    image:user?.currentUser?.image,
    content: "",
    action: "sendComment",
    time: dateTime,
  });
  
  const [comment, setComment] = useState([]);

  let item = api.ALL.filter((x) => x.params == params.id);
  useEffect(() => {
    window.scrollTo(0, 0);
    getComment({ action: "fetchComment" }).then((res) => setComment(res));
  }, []);

  const sendComment = (data) => {
    console.log(user)
    console.log(data)
    if (!user.currentUser) {
      alert("Bạn cần đăng nhập để bình luận!");
      navigate("/login");
    } else {
      setComment((state) => [
        ...state,
        {
          image:data.image,
          username: data.name,
          comment: data.content,
          time: data.time,
        },
      ]);

      senCommentToDB(data, dispatch);
      setData({
        name: user?.currentUser?.username,
        content: "",
        action: "sendComment",
        time: dateTime,
      });
    }
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
            <img src={user.currentUser.image} alt="avt" />
          </div>

          <TextField
            className="comment-head-input"
            id="filled-textarea"
            label="Comment tại đây!"
            placeholder="Bạn có góp ý, trao đổi gì không?"
            multiline
            variant="filled"
            value={data.content}
            onChange={(e) => {
              setData((state) => {
                return {
                  ...state,
                  content: e.target.value,
                };
              });
            }}
          />
        </div>
        <div className="comment-btn">
          <Button
            variant="text"
            onClick={() => {
              setData({
                name: user?.currentUser?.username,
                content: "",
                action: "sendComment",
                time: dateTime,
              });
            }}
          >
            Hủy
          </Button>
          <Button variant="contained" onClick={() => sendComment(data)}>
            Gửi
          </Button>
        </div>
      </div>
      <div className="render__comment">
        {comment.map((item, index) => (
          <div className="render-box" key={index}>
            <div className="comment-main">
              <div className="comment-head-avt">
                <img src={comment.image} alt="avt" />
              </div>
              <div className="comment-box">
                <div className="comment-author">{item.username}</div>
                <div className="comment-des">{item.comment}</div>
              </div>
            </div>
            <div className="comment-handle">
              <div
                className="like"
                onClick={(e) => {
                  e.target.classList.toggle("like_active");
                }}
              >
                Thích
              </div>
              <div className="comment-time">{item.time}</div>
            </div>
          </div>
        ))}
      </div>
    
    </div>
  );
};

export default Detail;
