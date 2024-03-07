import React, { useState } from 'react';
import './topNaw.css';
import Bell from '../../icon/bell.png';

export default function TopNaw(props) {
  const[notificationShow,setNotificationShow] = useState(false)
  return (
    <div className='TopNaw '>
        <div className='TopNaw-sub-1'>
            <p>{props.moduleName}</p>
        </div>
        <div className='TopNaw-sub-2'>
            <p>{props.userName}</p>
            <img src={Bell} alt="" onClick={()=>setNotificationShow(!notificationShow)} />
            <div className={notificationShow ? 'TopNaw-notification-show': 'TopNaw-notification-hide'}></div>
        </div>

    </div>
  )
}
