import React, { useState } from 'react';
import "./style.css"

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
                        
                    </div>
                    <div className="Sp__button"></div>
                </div>):(<div>xe may</div>)}
            </div>
        </div>
    );
}

export default Moresp;
