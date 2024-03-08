import React, { useState } from 'react';
import './addBranch.css';
import axios from 'axios';
import IdGenerate from '../../utils/id_generate';

export default function AddBranches() {
  const [data,setData] = useState({
    branch_id:IdGenerate('BRANCH'),
    branch_name:'',
    branch_address:'',
    branch_status :'',
  })

  const CancelHandler = () => {
    setData({
      branch_id:IdGenerate('BRANCH'),
      branch_name:'',
      branch_address:'',
      branch_status :'',
    })
  
}

const SubmitHandler =async () => {
  try {
    const res = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/branch/add` , data)
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
            <label className='label'>Branch Status</label>
            <label className='label'> :</label>
            <select className='form-input' value={data.branch_status} onChange={(e)=>{
              const Data = {...data}
              Data.branch_status = e.target.value
              setData(Data)
            }}>
              <option value={''}>SELECT STATUS</option>
              <option value={'ACTIVE'}>ACTIVE</option>
              <option value={'INACTIVE'}>INACTIVE</option>
            </select>
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
