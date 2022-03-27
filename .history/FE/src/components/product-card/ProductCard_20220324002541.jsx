import React, { useState } from "react";
import Button from "../button/Button";
import "./product-card.scss";
import { useNavigate } from "react-router-dom";
import { AiOutlinePlusCircle } from "react-icons/ai";
const ProductCard = ({ item, list, user, more, setList }) => {
  const navigate = useNavigate();
  const [hide, setHide] = useState(0);
  const [pop, setPop] = useState(1);
  const [target, setTarget] = useState("");
  return (
    <>
      <div className="card" style={{ display: `${hide ? "none" : "block"}` }}>
        {more ? (
          <>
            <div
              className="card__img"
              style={{ backgroundImage: `url(${item?.src})` }}
            ></div>
            <div className="card__info">
              <div className="card__info__name">{item?.name}</div>
              <div className="card__info__price">{item?.price}</div>
            </div>
          </>
        ) : !user ? (
          <div
            className="more_"
            onClick={() => {
             setPop(!pop)
             setTarget(item.params)
              setList((state) => {
                return [...state, {name:'xehoi',price:'123'}];
              });
            }}
          >
            <AiOutlinePlusCircle />
          </div>
        ) : (
          "123"
        )}

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
              console.log(list);
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
      </div>{
        item.params==target?
      }
     <div className="popup" style={{ display: `${pop ? "none" : "block"}` }}>

     </div>
    </>
  );
};

export default ProductCard;
