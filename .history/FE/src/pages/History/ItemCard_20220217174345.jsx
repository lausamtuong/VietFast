import React from 'react';
import './itemcard.scss'
const Itemcard = () => {
    return (
        <div className='Item_card'>
            <div className='Item_header'>
                <div className='Item_header-type'>
                    <p>MECXEDES</p>
                </div>
                <div className='Item_header-status'>
                    <span>giao hang thanh cong</span>
                    <span>Da giao</span>
                </div>
            </div>
            <div className='Item_body'>
                <div className='Item_body-img'></div>
                <div className='Item_body-des'></div>
                <div className='Item_body-price'></div>
            </div>
            <div className='Item_footer'>
                <div className='Item_footer-total'></div>
                <div className='Item_footer-btn'></div>
            </div>
        </div>
    );
}

export default Itemcard;
