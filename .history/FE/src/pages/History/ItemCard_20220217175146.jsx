import React from 'react';
import './itemcard.scss'
import FaMotorcycle from 're'
const Itemcard = () => {
    return (
        <div className='Item_card'>
            <div className='Item_header'>
                <div className='Item_header-type'>
                    <p>MECXEDES</p>
                </div>
                <div className='Item_header-status'>
                    <div>
                    <FaMotorcycle/>
                    giao hang thanh cong
                    </div>
                    <span>Da giao</span>
                </div>
            </div>
            <div className='Item_body'>
                <div className='Item_body-img'>
                    <img alt='img' src='https://cf.shopee.vn/file/a7ae21d6e20e1bc55ab85122d378f5bc_tn'/>
                </div>
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
