import React from 'react';
import { useSelector } from 'react-redux';
import './style.scss'
const Info = () => {
   const user = useSelector(state=>state?.auth?.login?.currentUser.isLogin)
   if(!user)
    return (
        <div>
            
        </div>
    );
}

export default Info;