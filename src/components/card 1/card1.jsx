import React from 'react';
import './card1.css';

export default function Card1(props) {
  return (
    <div className='Card1'>
        <div className='Card1-title-div'>
            <p >{props.title}</p>
        </div>

        <div className='Card1-info-div'>
            <p className='p1'>{props.info1}</p>
            <p className='p2'>{props.info2}</p>
        </div>
    </div>
  )
}
