import React, { useState } from 'react';
import './addBranch.css';
import axios from 'axios';
import IdGenerate from '../../utils/id_generate';

export default function AddBranches() {
  const currentDate = new Date(); // Get the current date and time
  const formattedDate = currentDate.toISOString(); // Format the date to ISO string
  const [userId,setUserId] = useState('USER-000000');

  const [data,setData] = useState({
    branch_id:IdGenerate('BRANCH'),
    branch_name:'',
    branch_address:'',
    branch_status :'',
    branch_description:'',
    branch_update_date:formattedDate,
    branch_update_user_id:userId
  })

  const CancelHandler = () => {
    setData({
      branch_id:IdGenerate('BRANCH'),
      branch_name:'',
      branch_address:'',
      branch_status :'',
      branch_description:'',
    })
  
}

const SubmitHandler =async () => {
  try {
    const res = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/branch/addBranch` , {
      branch_id:data.branch_id,
      branch_name:data.branch_name,
      branch_address:data.branch_address,
      branch_status :data.branch_status,
      branch_description:data.branch_description,
      branch_update_date:formattedDate,
      branch_update_user_id:userId
    })
    console.log(res.data)
    if(res.status === 200 || res.status === 201){
      alert('Branch Added Successfully');
      CancelHandler()
  }
  } catch (error) {
    if(error.response.status === 409){
      alert('Branch Already Exist')
  }else if (error.response.status === 400){
      alert('Branch Not Added')
  }else if (error.response.status === 500){
      alert('Internal Server Error')
  }else if (error.response.status === 404){
      alert('Branch Not Found')
  }else if (error.response.status === 403){
      alert('Forbidden')
  }
  else if (error.response.status === 401){
      alert('Unauthorized')
  }
  }

}
  return (
    <div>
      <p className='title'> ADD BRANCH</p>

      <div className='container'>
        <div className='AddBranches-main-1'>
          <div className='AddBranches-form-div'>
            <label className='label'>Branch Id</label>
            <label className='label'> :</label>
            <input className='form-input' type="text"value={data.branch_id} onChange={(e)=>{
              const Data = {...data}
              Data.branch_id = e.target.value
              setData(Data)
            }}/>
          </div>

          <div className='AddBranches-form-div'>
            <label className='label'> Branch Name</label>
            <label className='label'> :</label>
            <input className='form-input' type="text" value={data.branch_name} onChange={(e)=>{
              const Data = {...data}
              Data.branch_name = e.target.value
              setData(Data)
            }}/>
          </div>

          <div className='AddBranches-form-div'>
            <label className='label'>Branch Address</label>
            <label className='label'> :</label>
            <input className='form-input' type="text" value={data.branch_address} onChange={(e)=>{
              const Data = {...data}
              Data.branch_address = e.target.value
              setData(Data)
            }}/>
          </div>

          <div className='AddBranches-form-div'>
            <label className='label'>Branch Description</label>
            <label className='label'> :</label>
            <input className='form-input' type="text" value={data.branch_description} onChange={(e)=>{
              const Data = {...data}
              Data.branch_description = e.target.value
              setData(Data)
            }}/>
          </div>

        </div>

        <div className='AddBranches-main-2'>
          <button className='btn-submit' onClick={SubmitHandler}>ADD BRANCH</button>
          <button className='btn-cancel' onClick={CancelHandler}>CANCEL</button>
        </div>
      </div>
    </div>
  )
}
