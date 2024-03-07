import React from 'react';
import './topNaw.css';
import Bell from '../../icon/bell.png';

export default function TopNaw(props) {
  return (
    <div className='TopNaw '>
        <div className='TopNaw-sub-1'>
            <p>{props.moduleName}</p>
        </div>
        <div className='TopNaw-sub-2'>
            <p>{props.userName}</p>
            <img src={Bell} alt="" />
        </div>

    </div>
  )
}
