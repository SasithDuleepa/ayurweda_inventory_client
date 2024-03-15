import React, { useState } from 'react';
import './updateStore.css';
import axios from 'axios';

import Arrow from '../../icon/down-arrow.png'

export default function UpdateStores() {
  const currentDate = new Date(); // Get the current date and time
  const formattedDate = currentDate.toISOString(); // Format the date to ISO string
  const [userId,setUserId] = useState('USER-000000');


  const [resultShow,setResultShow] = useState(false);

  const [data,setData] = useState({
    branch_id: "",
    branch_name:'',
    store_description: "",
    store_id: "",
    store_name: "",
    store_update_date: "",
    store_update_user_id: "",
})


  const [stores,setStores] = useState([]);
  const SearchHandler = async(e) => {
    if(e.target.value !==''){
      try {
        const res = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/store/search/${e.target.value}`)
        console.log(res.data)
        setStores(res.data)
      } catch (error) {
        
      }
    }
  }

  const GetStore = async (id) => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/store/${id}`)
      console.log(res.data)
      setData(res.data[0])
    } catch (error) {
      
    }
  };


  const UpdateHandler = async () => { 
    const Data = {
      branch_id : data.branch_id, 
      store_name:data.store_name, 
      store_description:data.store_description, 
      store_update_date:formattedDate, 
      store_update_user_id:userId, 
      store_address:data.store_address,
    }
    try {
      const res = await axios.put(`${process.env.REACT_APP_BACKEND_URL}/store/${data.store_id}`,Data)
      console.log(res.data)
      if(res.status === 200 || res.status === 201){
        alert('Store Updated Successfully');
        window.location.reload();
    }
    } catch (error) {
      if(error.response.status === 409){
        alert('Store Already Exist')
    }else if (error.response.status === 400){
        alert('Store Not Updated')
    }else if (error.response.status === 500){
        alert('Internal Server Error')
    }else if (error.response.status === 404){
        alert('Store Not Found')
    }else if (error.response.status === 403){
        alert('Forbidden')
    }
    else if (error.response.status === 401){
        alert('Unauthorized')
    }
    }
  }


  const DeleteHandler = async () =>{
    try {
      const res = await axios.delete(`${process.env.REACT_APP_BACKEND_URL}/store/${data.store_id}`);
      console.log(res.data)
      if(res.status === 200 || res.status === 201){
        alert('Store Deleted Successfully');
    }
    } catch (error) {
      if(error.response.status === 409){
        alert('Store Already Exist')
    }else if (error.response.status === 400){
        alert('Store Not Deleted')
    }else if (error.response.status === 500){
        alert('Internal Server Error')
    }else if (error.response.status === 404){
        alert('Store Not Found')
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
      <p className='title'>Update Stores</p>
      <div className='container'>
        <div className='UpdateContainer-search-div'>
          <p className='sub_title'> find store</p>
          <div className='UpdateStore-search'>
            <label>search store</label>
            <label>:</label>
            <div  className='UpdateStore-search-main'>
              <button  className='UpdateStore-search-btn' onClick={()=>setResultShow(!resultShow)}>
                <input className='UpdateStore-search-input' onChange={(e)=>SearchHandler(e)}/>
                <img  className={resultShow ? 'UpdateStore-search-img-show':'UpdateStore-search-img-hide'} src={Arrow} alt='arrow'/>
              </button>
              <div className={resultShow ?'UpdateStore-search-result-div-show': 'UpdateStore-search-result-div-hide' }>
                {stores.length >0 ? stores.map((store,index)=>(
                  <button key={index} onClick={()=>GetStore(store.store_id)}>{store.store_name}</button>)):null}
              </div>
            </div>
          </div>
        </div>
        <div className='line'></div>
        <div className='UpdateContainer-info-div'>
          <div className='UpdateContainer-form'>
            <label className='label'>stores id</label>
            <label className='label'>:</label>
            <input className='form-input' value={data.store_id} onChange={()=>{}} disabled />
          </div>
          <div className='UpdateContainer-form'>
            <label className='label'>stores name</label>
            <label className='label'>:</label>
            <input className='form-input' value={data.store_name} onChange={(e)=>{
              const Data = {...data}
              Data.store_name = e.target.value
              setData(Data)              
            }} />
          </div>
          <div className='UpdateContainer-form'>
            <label className='label'>stores description</label>
            <label className='label'>:</label>
            <input className='form-input'  value={data.store_description} onChange={(e)=>{
              const Data = {...data}
              Data.store_description = e.target.value
              setData(Data)
            
            }}/>
          </div>
          <div className='UpdateContainer-form'>
            <label className='label'>store branch</label>
            <label className='label'>:</label>
            <input className='form-input' value={data.branch_name}  onChange={()=>{}} disabled/>
          </div>
        </div>
        <div className='UpdateContainer-btn-div'>
          <button className='btn-submit' onClick={UpdateHandler}> Update</button>
          <button className='btn-cancel'> Cancel</button>
          <button className='btn-delete' onClick={DeleteHandler}> Delete</button>
        </div>
      </div>
    </div>
  )
}
