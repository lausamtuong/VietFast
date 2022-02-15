import React from 'react';
import { useSelector } from 'react-redux';
import './style.scss'
import avt from '../../images/Vinfast-logo.png';
const Info = () => {
    const user = useSelector(state=>state?.auth?.login?.isLogin)
    if(!user)
        window.location.replace("http://localhost:3000/login");
    return (
        <div className='Info'>
            <div className='Info_title'>Thông tin cá nhân</div>
            <div className='Info_body'>
                <div className='Info_body-user'>
                    <div className='name'>
                        <img src={avt} alt='avt'/>
                        <div>
                            <p>Xin Chào,</p>
                            <p>OBS</p>
                        </div>
                    </div>
                    <div className='button'>

                    </div>
                </div>
                <div className='Info_body-des'></div>
            </div>
        </div>
    );
}

export default Info;