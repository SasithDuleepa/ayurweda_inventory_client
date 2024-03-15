import React, { useState } from 'react'
import arrow from '../../icon/down-arrow.png'
import './updateBranches.css';
import axios from 'axios';

export default function UpdateBranches() {
  const currentDate = new Date(); // Get the current date and time
  const formattedDate = currentDate.toISOString(); // Format the date to ISO string
  const [userId,setUserId] = useState('USER-000000');


  const [resultShow, setResultShow] = useState(false);

  const [result, setResult] = useState([]);
  const SearchBranch = async (e) => {
    if(e.target.value !== ""){
      try {
        const res = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/branch/search/BranchName/Status/${e.target.value}/ACTIVE`);
        // console.log(res.data);
        setResult(res.data);
      } catch (error) {
        
      }
    }
  };

  const [branch, setBranch] = useState({
    branch_id:"",
    branch_name:"",
    branch_address:"",
    branch_description:"",
    branch_update_date:"",
  })
  const GetBranch = async(id) =>{
    try {
      const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/branch/branch/${id}`);
      // console.log(res.data[0]);
      setBranch(res.data[0]);
    } catch (error) {

    }
  
  }

  const UpdateHandler = async( ) => {
    const data = {
      branch_id:branch.branch_id,
      branch_name:branch.branch_name,
      branch_address:branch.branch_address,
      branch_description:branch.branch_description,
      branch_update_date:formattedDate,
      branch_update_user_id:userId
    }
    try {
      const res = await axios.put(`${process.env.REACT_APP_BACKEND_URL}/branch/update/Branch/${data.branch_id}`,data);
      // console.log(res.data);
    } catch (error) {
      if(error.response.status === 409){
        alert('Branch Already Exist')
    }else if (error.response.status === 400){
        alert('Branch Not Updated')
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

  const DeleteHandler = async() => {
    alert('are you sure!')
    try {
      const res = await axios.delete(`${process.env.REACT_APP_BACKEND_URL}/branch/delete/Branch/${branch.branch_id}`);
      // console.log(res.data);
    } catch (error) {
      if(error.response.status === 409){
        alert('Branch Already Exist')
    }else if (error.response.status === 400){
        alert('Branch Not Deleted')
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

  const CancelHandler = async() => {
    setBranch({
      branch_id:"",
      branch_name:"",
      branch_address:"",
      branch_description:"",
      branch_update_date:"",
    })
  
  }

  return (
    <div>
      <p className='title'> Update Branches</p>

      <div className='container'>
        <div className='UpdateBranches-search-div-main'>

          <p className='sub_title'> Search Branch</p>

          <div className='UpdateBranches-search-div'>
            <label className='label'> Find Branch </label>
            <label className='label'> : </label>
          <div>

          <button className='UpdateBranches-search-btn' onClick={()=>setResultShow(!resultShow)}>
          <input className='UpdateBranches-search-input' onChange={(e)=>SearchBranch(e)}/>
          <img className={resultShow ? 'UpdateBranches-search-image-show' : 'UpdateBranches-search-img-hide'} src={arrow} alt='arrow'/>
          </button>
          <div className={resultShow ? 'UpdateBranches-search-result-div':'UpdateBranches-search-result-div-hidden'}>
            {result.length > 0 ? result.map((item, index) => (
              <button key={index} onClick={()=>GetBranch(item.branch_id)}>{item.branch_name}</button>
            )):<p>no branch</p>}
          </div>
        </div>
        </div>
      </div>

      <div className='line'></div>
      <div className='UpdateBranches-info-div'>

        <p className='sub_title'> Branch Details</p>

        <div className='UpdateBranches-info-container'>

            <div className='UpdateBranches-info'>
              <label className='UpdateBranches-form-label label'> Branch ID</label>
              <label className='label'>:</label>
              <input className='UpdateBranches-form-input form-input' value={branch.branch_id} onChange={()=>{}} disabled/>
            </div>

            <div className='UpdateBranches-info'>
              <label className='UpdateBranches-form-label label'> Branch Name</label>
              <label className='label'>:</label>
              <input className='UpdateBranches-form-input form-input' value={branch.branch_name} onChange={(e)=>{
                setBranch({...branch, branch_name:e.target.value});
              }}/>
            </div>

            <div className='UpdateBranches-info'>
              <label className='UpdateBranches-form-label label'> Branch Address</label>
              <label className='label'>:</label>
              <input className='UpdateBranches-form-input form-input' value={branch.branch_address} onChange={(e)=>{
                setBranch({...branch, branch_address:e.target.value});
              }}/>
            </div>

            <div className='UpdateBranches-info'>
              <label className='UpdateBranches-form-label label'> Branch Description</label>
              <label className='label'>:</label>
              <input className='UpdateBranches-form-input form-input' value={branch.branch_description} onChange={(e)=>{
                setBranch({...branch, branch_description:e.target.value});
              }}/>
            </div>



        </div>

        <div  className='UpdateBranches-btn-container'>
                <button className='btn-submit' onClick={UpdateHandler}>UPDATE</button>
                <button className='btn-cancel' onClick={CancelHandler}>CANCEL</button>
                <button className='btn-delete' onClick={DeleteHandler}>DELETE</button>
        </div>

      </div>

    </div>
    </div>
  )
}
