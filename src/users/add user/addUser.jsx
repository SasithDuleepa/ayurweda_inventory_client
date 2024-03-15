import React, { useEffect, useState } from 'react';
import './addUser.css';
import axios from 'axios';
import IdGenerate from '../../utils/id_generate';

export default function AddUser() {
  const [data,setData] = useState({
    userId:IdGenerate('USER'),
    userName:'',
    userPassword:'',
    branch_id:'',
    branch_name:''
  });


  const[branch,setBranch] = useState([])
  const GetBranches = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/branch/all/Branch/ACTIVE`);
      console.log(res.data);
      setBranch(res.data)
  } catch (error) {
      
  }
  };
  useEffect(()=>{
    GetBranches();
  },[])


  const SubmitHandler = async (e) => {
    const Data = {
      user_id:data.userId, 
      user_name:data.userName, 
      user_password:data.userPassword, 
      branch_id:data.branch_id,
   }
   try {
    const res = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/user/add`,Data);
    console.log(res.data);
    if(res.status === 200 || res.status === 201){
      alert('User Added Successfully');
      ResetHandler()
  }
   } catch (error) {
    if(error.response.status === 409){
      alert('User Already Exist')
  }else if (error.response.status === 400){
      alert('User Not Added')
  }else if (error.response.status === 500){
      alert('Internal Server Error')
  }else if (error.response.status === 404){
      alert('User Not Found')
  }else if (error.response.status === 403){
      alert('Forbidden')
  }
  else if (error.response.status === 401){
      alert('Unauthorized')
  }
   }
  };

  const ResetHandler = () => {
    setData({
      userId:IdGenerate('USER'),
      userName:'',
      userPassword:'',
      branch_id:'',
      branch_name:''
    })
    GetBranches();
  
  }
  return (
    <div>
      <p className='title'> Add User</p>
      <div className='container'>
        <div className='AddUser-form-container'>
          <div className='AddUser-form-div'>
            <label className='label'>User Id</label>
            <label  className='label'>:</label>
            <input className='form-input' type="text" value={data.userId} onChange={(e)=>{
              setData({
                ...data,
                userId:e.target.value
              })
            }}/>
          </div>
          <div className='AddUser-form-div'>
            <label className='label'>User Name</label>
            <label  className='label'>:</label>
            <input className='form-input' type="text" value={data.userName} onChange={(e)=>{
              setData({
                ...data,
                userName:e.target.value
              })
            }}/>
          </div>
          <div className='AddUser-form-div'>
            <label className='label'>User Password</label>
            <label  className='label'>:</label>
            <input className='form-input' type="text" value={data.userPassword} onChange={(e)=>{
              setData({
                ...data,
                userPassword:e.target.value
              })
            }}/>
          </div>
          <div className='AddUser-form-div'>
            <label className='label'>Branch</label>
            <label  className='label'>:</label>
            <select className='form-input-select' onChange={(e)=>{
              setData({
                ...data,
                branch_id:e.target.value.split('/')[0],
                branch_name:e.target.value.split('/')[1]
              })
              
            }}>
              <option>Select Branch</option>
              {branch.length>0 ? branch.map((item,index)=>{
                return <option key={index} value={`${item.branch_id}/${item.branch_name}`}>{item.branch_name}</option> 
              
              }):null}
            </select>
          </div>
          {/* <div className='AddUser-form-div'>
            <label className='label'>User Status</label>
            <label  className='label'>:</label>
            <select className='form-input-select'>
              <option>Select Status</option>
            </select>
          </div> */}
        </div>
        <div className='AddUser-btn-div'>
          <button className='btn-submit' onClick={SubmitHandler}>ADD</button>
          <button className='btn-cancel' onClick={ResetHandler}>CANCEL</button>
        </div>
      </div>
    </div>
  )
}
