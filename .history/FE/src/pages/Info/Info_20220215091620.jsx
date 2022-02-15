import React from 'react';
import { useSelector } from 'react-redux';
import './style.scss'
const Info = () => {
    const user = useSelector(state=>state?.auth?.login?.isLogin)
    if(!user)
        window.location.replace("http://localhost:3000/login");
    return (
        <div>
            
        </div>
    );
}

export default Info;
