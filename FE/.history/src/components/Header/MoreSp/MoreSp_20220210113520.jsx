import React, { useState } from "react";
import "./style.css";
import LUX_SA from "../../../images/LUX_SA_2.0.svg";
import LUX_A from "../../../images/LUX_A_2.0.svg";
import President from "../../../images/President.svg";
import VFe34 from "../../../images/VFe34.svg";
const ListCar = [
  {
    name: "LUX_SA_2.0",
    img: LUX_SA,
    price: `Từ 1.220.965.000 vnđ`,
  },
  {
    name: "LUX_A2.0",
    img: LUX_A,
    price: `Từ 949.435.000 vnđ`,
  },
  {
    name: "President",
    img: President,
    price: `Từ 3.800.000.000 vnđ`,
  },
  {
    name: "VF e34",
    img: VFe34,
    price: `Từ 690.000.000 vnđ`,
  },
];
const Moresp = () => {
  const [active, setActive] = useState(true);
  return (
    <div className="MoreSp_wrap">
      <div className="Sp__title">
        <p
          className={`${active ? `Sp__title-active` : ""}`}
          onClick={() => setActive(true)}
        >
          Ô to
        </p>
        <p
          className={`${!active ? `Sp__title-active` : ""}`}
          onClick={() => setActive(false)}
        >
          Xe gắn máy
        </p>
      </div>
      <div className="Sp__info">
        {active ? (
          ListCar.map((item, index) => (
            <div key={index}>
              <div className="Sp__img">
              <img src=
                <div className="Sp__img-name">{item.name}</div>
                <div className="Sp__img-price">{item.price}</div>
              </div>
              <div className="Sp__button"></div>
            </div>
          ))
        ) : (
          <div>xe may</div>
        )}
      </div>
    </div>
  );
};

export default Moresp;
