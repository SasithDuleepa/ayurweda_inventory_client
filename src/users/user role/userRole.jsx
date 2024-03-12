import React, { useState } from 'react';
import './userRole.css'
import Arrow from './../../icon/down-arrow.png'

export default function UserRole() {
  const [resultsShow,setResultsShow] = useState(true)
  return (
    <div>
      <p className='title'>User Role</p>
      <div className='container'>
        <div className='UserRole-User-search-div'>
          <p className='sub_title'>find user</p>
          <div  className='UserRole-User-search-div-main'>
            <label className='label'>search user</label>
            <label className='label'>:</label>
            <div className='UserRole-User-search'>
              <button className='UserRole-User-search-btn' onClick={()=>setResultsShow(!resultsShow)}>
                <input className='UserRole-User-search-input'/>
                <img src={Arrow} alt='arrow' className={resultsShow ?'UserRole-User-search-img-show':'UserRole-User-search-img-hide'}/>
              </button>
              <div className={resultsShow ? 'UserRole-User-search-results-div-show' : 'UserRole-User-search-results-div-hide'}></div>
            </div>
          </div>
        </div>

        <div className='line'></div>

        <div className='UserRole-User-roles-div'>
          <p className='sub_title'>user roles</p>
          <div  className='UserRole-User-roles'>
            <div className='UserRole-User-roles-form-div'>
              <label>inventory</label>
              <input type='checkbox'/>
            </div>
          </div>
        </div>
        <div className='UserRole-btn-div'>
          <button className='btn-submit'>Submit</button>
          <button className='btn-cancel'>Cancel</button>
        </div>
      </div>
    </div>
  )
}
