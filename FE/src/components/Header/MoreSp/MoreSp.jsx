import React, { useState } from "react";
import "./style.css";
import LUX_SA from "../../../images/LUX_SA_2.0.svg";
import LUX_A from "../../../images/LUX_A_2.0.svg";
import President from "../../../images/President.svg";
import VFe34 from "../../../images/VFe34.svg";
import xe3 from "../../../images/xe3.png";
import xe4 from "../../../images/xe4.png";
import Faliz from "../../../images/Faliz.svg";
import Theon from "../../../images/Theon.svg";
import {useNavigate,Link} from 'react-router-dom'
const ListCar = [
  {
    name: "LUX SA 2.0",
    img: LUX_SA,
    price: `Từ 1.220.965.000 vnđ`,
  },
  {
    name: "LUX A2.0",
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
]
const ListMoto = [
  {
    name: "Theon",
    img: Theon,
    price: `Từ 63.900.000 vnđ`,
  },
  {
    name: "Feliz",
    img: Faliz,
    price: `Từ 63.900.000 vnđ`,
  },
  {
    name: "Klara A2",
    img: xe3,
    price: `Từ 26.900.000 vnđ`,
  },
  {
    name: "Tempest",
    img: xe4,
    price: `Từ 19.250.000 vnđ`,
  },
  ]
const Moresp = () => {
  const navigate = useNavigate()
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
          <div className="Sp__flex">
            {ListCar.map((item, index) => (
              <div key={index}>
                <div className="Sp__img">
                  <img src={item.img} alt="" />
                  <div className="Sp__img-name">{item.name}</div>
                  <div className="Sp__img-price">{item.price}</div>
                </div>
               
              </div>
            ))}
            
          </div>
        ) : (
          <div className="Sp__flex">
            {ListMoto.map((item, index) => (
              <div key={index}>
                <div className="Sp__img">
                  <img src={item.img} alt="" />
                  <div className="Sp__img-name">{item.name}</div>
                  <div className="Sp__img-price">{item.price}</div>
                </div>
               
              </div>
            ))}
            
          </div>
        ) }
        <div className="link__button">
          <Link to='./product' className="Sp__button" onClick={()=> navigate('./product')}>Xem tất cả các xe</Link>
        </div>
      </div>
    </div>
  );
};

export default Moresp;
