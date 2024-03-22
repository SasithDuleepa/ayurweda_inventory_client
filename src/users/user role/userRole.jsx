import React, { useEffect, useState } from 'react';
import './userRole.css'
import Arrow from './../../icon/down-arrow.png';
import axios from 'axios';

export default function UserRole() {
  const [resultsShow,setResultsShow] = useState(true);

  const [userRoles,setUserRoles] = useState([{
    status:'',
    role_id:'',
    user_id:''
  }]);


  const [userSearchResults,setUserSearchResults] = useState([]);  
  const UserSearchHandler =async (e) => {
    if(e.target.value !== ''){
      try {
        const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/user/search/name/status/${e.target.value}/ACTIVE`)  
        console.log(res.data);
        setUserSearchResults(res.data);
      } catch (error) {
        
      }
    }

  }
//get user roles

useEffect(()=>{
  const GetRoles = async () => { 
    try {
      const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/userRoles`)  
      console.log(res.data);

      const data = res.data;
      data.forEach(element => {
          const Data = [...userRoles]
          Data.push({
            status:'',
            role_id:element.role_id,
            user_id:element.user_id
          })
          setUserRoles(Data);

      }
      )

    } catch (error) {
      
    }
   }
   GetRoles();
},[])

  const SubmitHandler = async () => {
    const data =  {
      user_id:'',
      roles:[]
    }
  }
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
                <input className='UserRole-User-search-input' onChange={(e)=>UserSearchHandler(e)}/>
                <img src={Arrow} alt='arrow' className={resultsShow ?'UserRole-User-search-img-show':'UserRole-User-search-img-hide'}/>
              </button>
              <div className={resultsShow ? 'UserRole-User-search-results-div-show' : 'UserRole-User-search-results-div-hide'}>
                {userSearchResults .length > 0 ? userSearchResults.map((user,index)=> {
                  return <button key={index}>{user.user_name}</button>
                }):null
                }
              </div>
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
