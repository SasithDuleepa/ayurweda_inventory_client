import React, { useState } from 'react';
import './addItemcategory.css';
import axios from 'axios';

import IdGenerate from './../../utils/id_generate'

export default function AddItemCategory() {
  const currentDate = new Date(); // Get the current date and time
    const formattedDate = currentDate.toISOString(); // Format the date to ISO string
    const [userId,setUserId] = useState('USER-000000');

  const [data, setData] = useState({
    categoryId: IdGenerate('ITEM-CATEGORY'),
    categoryName: '',
    categoryDescription: '',
    categoryStatus:''
  })
  const ChangeHandler =(e) => {
    const Data = {...data}
    Data[e.target.id] = e.target.value;
    setData(Data)
  }

  const SubmitHandler =async () => {
    if(data.categoryName === '' || data.categoryDescription === '' || data.categoryStatus === ''){
      alert('Please fill all the fields')
    }else{
      try {
        const res = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/itemCategory/add`, {
          item_category_id:data.categoryId,
          item_category_name:data.categoryName,
          item_category_update_date:formattedDate,
          item_category_update_user_id:userId,
          item_category_description:data.categoryDescription,
          item_category_status:data.categoryStatus
        })  
        if(res.status === 200){
          alert('Item Category Added Successfully');
          // setData({
          //   categoryId: IdGenerate('ITEM-CATEGORY'),
          //   categoryName: '',
          //   categoryDescription: '',
          //   categoryStatus:''
          // })
          // window.location.reload()
        }
      } catch (error) {
        if(error.response.status === 500){
          alert('Internal Server Error')
        }else if(error.response.status === 400){
          alert('fill all fields')
        }else if(error.response.status === 409){
          alert('Item Category Already Exists')
        
        }else{
          alert('Something Went Wrong')
        
        }

        
      }
    }
  }
  return (
    <div className='AddItemCategory'>
      <p className='title'> Add Item Category</p>
      <div className='container'>
        <div className='AddItemCategory-input-div'>
          <div  className='AddItemCategory-form-div'>
            <label className='label'>Category Id</label>
            <label className='label'>:</label>
            <input type="text" className='form-input' id='categoryId' onChange={(e)=>ChangeHandler(e)} value={data.categoryId}/>
          </div>
          <div  className='AddItemCategory-form-div'>
            <label className='label'>Category Name</label>
            <label className='label'>:</label>
            <input type="text" className='form-input' id='categoryName' value={data.categoryName} onChange={(e)=>ChangeHandler(e)} />
          </div>
          <div  className='AddItemCategory-form-div'>
            <label className='label'>Category Description</label>
            <label className='label'>:</label>
            <input type="text" className='form-input' id='categoryDescription' onChange={(e)=>ChangeHandler(e)} value={data.categoryDescription}/>
          </div>
          <div  className='AddItemCategory-form-div'>
            <label className='label'>Category Status</label>
            <label className='label'>:</label>
            <select className='form-input-select' id='categoryStatus' onChange={(e)=>ChangeHandler(e)} value={data.categoryStatus}>
              <option value=''>select status</option>
              <option value='ACTIVE'>ACTIVE</option>
              <option value='INACTIVE'>INACTIVE</option>
            </select>
          </div>

        </div>

        <div className='AddItemCategory-btn-div'>
          <button className='btn-submit' onClick={()=>SubmitHandler()}>ADD</button>
          <button className='btn-cancel'>Cancel</button>
        </div>
      </div>
    </div>
  )
}
