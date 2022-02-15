import React, { useState } from 'react';
import "./style.css"
import LUX_SA from "../../../images/LUX_SA_2.0.svg"
import LUX_A from "../../../images/LUX_A_2.0.svg"
import President from "../../../images/President.svg"
import VFe34 from "../../../images/VFe34.svg"
const ListCar=[{
    name:'LUX_SA_2.0',
    img:
    img:
}
]
const Moresp = () => {
    const [active,setActive] = useState(true)
    return (
        <div className="MoreSp_wrap">
            <div className="Sp__title">
                <p className={`${active?`Sp__title-active`:''}`} onClick={()=>setActive(true)}>Ô to</p>
                <p className={`${!active?`Sp__title-active`:''}`} onClick={()=>setActive(false)}>Xe gắn máy</p>
            </div>
            <div className="Sp__info">
                {active?(<div>
                    <div className="Sp__img">
                        <div className="Sp__img-name"></div>
                        <div className="Sp__img-price"></div>
                    </div>
                    <div className="Sp__button"></div>
                </div>):(<div>xe may</div>)}
            </div>
        </div>
    );
}

export default Moresp;
