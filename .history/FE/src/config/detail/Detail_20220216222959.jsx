import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./detail.scss";
import TextField from "@mui/material/TextField";
import avt from "../../images/avt_default.png";
import { Button } from "@mui/material";
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
    content: "",
    action: "sendComment",
    time:dateTime
  });
  const [comment,setComment]=useState([])
  let item = api.ALL.filter((x) => x.params == params.id);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    setComment(getComment({action:'fetchComment'}))
  }, []);
  const renderComment = () => {};
  const sendComment = (data) => {
    if (!user.currentUser) {
      alert("Bạn cần đăng nhập để bình luận!");
      navigate("/login");
    } else {
      senCommentToDB(data, dispatch);
      setComment(state=>{
        return{
          ...state,
        }
      })
      console.log(data);
      renderComment();
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
            <img src={avt} alt="avt" />
          </div>

          <TextField
            className="comment-head-input"
            id="filled-textarea"
            label="Comment tại đây!"
            placeholder="Bạn có góp ý, trao đổi gì không?"
            multiline
            variant="filled"
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
          <Button variant="text">Hủy</Button>
          <Button variant="contained" onClick={() => sendComment(data)}>
            Gửi
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Detail;
