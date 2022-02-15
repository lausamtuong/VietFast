import React from 'react';
import { useSelector } from 'react-redux';
import './style.scss'
const Info = () => {
    const user = useSelector(state=>state?.auth?.login?.currentUser.isLogin)
    if(user){console.log(123)}
    else
    window.location.replace("http://stackoverflow.com");
    return (
        <div>
            
        </div>
    );
}

export default Info;
