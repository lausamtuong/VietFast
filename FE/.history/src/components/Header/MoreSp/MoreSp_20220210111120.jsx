import React, { useState } from 'react';
import "./style.css"

const Moresp = () => {
    const [active,setActive] = useState(true)
    return (
        <div className="MoreSp_wrap">
            <div className="Sp__title">
                <p>Ô to</p>
                <p>Xe gắn máy</p>
            </div>
            <div className="Sp__info"></div>
        </div>
    );
}

export default Moresp;
