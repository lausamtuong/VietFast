import { Avatar } from '@nextui-org/react'
import React from 'react'
import './user-info.scss'
import avt from '../../assets/images/avt.jpg'
import { useSelector } from "react-redux";

const UserInfo = ({ user }) => {
  const admin = useSelector((state) => state?.auth?.login?.currentUser)

    return (
      <div className="user-info">
        <div className="user-info__img">
          <Avatar src={admin.image} size='xl' color="secondary" bordered zoomed />
        </div>
        <div className="user-info__text">
          <span className='name'>{admin.name}</span>
          <span className='role'>{user.role}</span>
        </div>
      </div>
    );
}

export default UserInfo
