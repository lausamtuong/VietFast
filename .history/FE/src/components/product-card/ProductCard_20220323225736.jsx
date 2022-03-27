import React, { useState } from "react";
import Button from "../button/Button";
import "./product-card.scss";
import { useNavigate } from "react-router-dom";
const ProductCard = ({ item, user, more }) => {
  const navigate = useNavigate();
  const [hide, setHide] = useState(0);
  return (
    <div className="card" style={{ display: `${hide ? "none" : "block"}` }}>
      <div
        className="card__img"
        style={{ backgroundImage: `url(${item?.src})` }}
      ></div>
      {more?
      <div className="card__info">
        <div className="card__info__name">{item?.name}</div>
        <div className="card__info__price">{item?.price}</div>
      </div>
      :
      <div className='more-'> 

      </div>}
      {more ? (
        <div
          className="detail__btn"
          onClick={() => navigate(`./detail/${item?.params}`)}
        >
          <Button
            label={"Xem chi tiết"}
            class="btn__transparent"
            detail={true}
          />
        </div>
      ) : (
        ""
      )}

      {user ? (
        <div
          className="detail__btn"
          onClick={() => {
            console.log(hide);
            setHide(!hide);
          }}
        >
          <Button
            label={"Xóa sản phẩm"}
            class="btn__transparent"
            detail={true}
          />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default ProductCard;
