import React, { useState } from 'react';
import './updateUser.css';
import Arrow from './../../icon/down-arrow.png';
import axios from 'axios';

export default function UpdateUser() {
  const [resultShow, setResultShow] = useState(false);


  const [users, setUsers] = useState([])
  const SearchUser = async (e) => {
    if (e.target.value !== '') {
      try {
        const res = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/user/search/name/status/${e.target.value}/ACTIVE`);
        console.log(res.data);
        setUsers(res.data)
      } catch (error) {
        
      }
    }
  };

  return (
    <div className='UpdateUser'>
      <p className='title'>Update User</p>
      <div className='container'>
        <div className='UpdateUser-search-div-main'>
          <p className='sub_title'>search user</p>
          <div className='UpdateUser-search-div'>
            <label className='label'>Find user</label>
            <label className='label'>:</label>
            <div>
            <button  className='UpdateUser-search-btn' onClick={()=>setResultShow(!resultShow)}>
              <input className='UpdateUser-search-input' onChange={(e)=>SearchUser(e)}/>
              <img className={resultShow ? 'UpdateUser-search-img-show' : 'UpdateUser-search-img-hide'} src={Arrow} alt="arrow"/>
            </button>
            <div  className={resultShow ?'UpdateUser-search-result-div' : 'UpdateUser-search-result-div-hidden'  }>
              {users.length > 0 ? users.map((user,index)=>(
                <button key={index} className='UpdateUser-search-result-btn'>{user.user_name}</button>
              )):<p>user not found</p>}
            </div>

            </div>
            
          </div>
        </div>
        <div className='line'></div>
        <div className='UpdateUser-info-div'>
        <p className='sub_title'>user details</p>
        <div className='UpdateUser-info-container'>
          <div  className='UpdateUser-info'>
            <label className='label'>User Id</label>
            <label className='label'>:</label>
            <input className='form-input' disabled/>
          </div>
          <div  className='UpdateUser-info'>
            <label className='label'>User Name</label>
            <label className='label'>:</label>
            <input className='form-input'/>
          </div>
          <div  className='UpdateUser-info'>
            <label className='label'>User Password</label>
            <label className='label'>:</label>
            <input className='form-input'/>
          </div>
          <div  className='UpdateUser-info'>
            <label className='label'>User Branch</label>
            <label className='label'>:</label>
            <select className='form-input-select'>
              <option>select branch</option>
            </select>
          </div>
          <div  className='UpdateUser-info'>
            <label className='label'>User Status</label>
            <label className='label'>:</label>
            <select className='form-input-select'>
              <option>select status</option>
            </select>
          </div>
        </div>
        </div>
        
        <div className='UpdateUser-btn-div'>
          <button className='btn-submit'>Update</button>
          <button className='btn-cancel'>Cancel</button>
        </div>
      </div>
    </div>
  )
}
