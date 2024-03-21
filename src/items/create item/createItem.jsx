import React, { useEffect, useState } from 'react';
import './createItem.css';
import axios from 'axios';

import IdGenerate from './../../utils/id_generate'

export default function CreateItem() {
  const currentDate = new Date(); // Get the current date and time
  const formattedDate = currentDate.toISOString(); // Format the date to ISO string
  const [userId,setUserId] = useState('USER-000000');


  const [data,setData] =useState({
    item_id:IdGenerate('ITEM'),
    item_name:'',
    item_category_id:'',
    item_category_name:'',
    item_measure_unit:'',
    item_unit_selling_price:'',
    item_description:'',
    item_update_date:formattedDate,
    item_update_user_id:userId,
    item_status:'ACTIVE'

  })


  const[category,setCategory] = useState([])

  const GetItemCategory = async() => {
   
    try {
      const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/itemCategory/status/ACTIVE`)
      // console.log(res.data);
      setCategory(res.data)
    } catch (error) {
      
    }
  
  }
  useEffect(()=>{
    GetItemCategory()
  },[])

  const SubmitHandler = async() => {
    console.log(data)
    if(data.item_name !== '' && data.item_category_id !== '' && data.item_measure_unit !== ''){
      try {
        const res = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/item/add` , data)
        // console.log(res.data);
        if(res.status === 200 || res.status === 201){
          alert('Item Added Successfully');
          ResetHandler()
      }
        
      } catch (error) {
        if(error.response.status === 409){
          alert('Item Already Exist')
      }else if (error.response.status === 400){
          alert('Item Not Added')
      }else if (error.response.status === 500){
          alert('Internal Server Error')
      }else if (error.response.status === 404){
          alert('Item Not Found')
      }else if (error.response.status === 403){
          alert('Forbidden')
      }
      else if (error.response.status === 401){
          alert('Unauthorized')
      }
      }
    }
  }

  const ResetHandler = () => {
    setData({
      item_id:IdGenerate('ITEM'),
      item_name:'',
      item_category_id:'',
      item_category_name:'',
      item_measure_unit:'',
      item_unit_selling_price:'',
      item_description:'',
      item_update_date:formattedDate,
      item_update_user_id:userId,
      item_status:'ACTIVE'

    })
  
  }
  return (
    <div>
      <p className='title'>Create Item</p>
      <div className='container'>
        <div className='CreateItem-info-div'>
          
          <div  className='CreateItem-form'>
            <label className='label'>Item Id</label>
            <label className='label'>:</label>
            <input type="text" className='form-input' value={data.item_id} onChange={()=>{}}  disabled/>
          </div>
          <div  className='CreateItem-form'>
            <label className='label'>Item Name</label>
            <label className='label'>:</label>
            <input type="text" className='form-input' value={data.item_name} onChange={(e)=>{
              const Data = {...data}
              Data.item_name = e.target.value
              setData(Data)
            }}/>
          </div>
          <div  className='CreateItem-form'>
            <label className='label'>Item Category</label>
            <label className='label'>:</label>
             <select className='form-input-select' value={data.item_category_name} onChange={(e)=>{
              const Data = {...data}
              Data.item_category_name = e.target.value.split('/')[0]
              Data.item_category_id = e.target.value.split('/')[1]
              setData(Data)           
            }}>
              <option value="">{data.item_category_name === '' ?'select category' :data.item_category_name}</option>
              {category.length >0 ? category.map((category,index)=>{
                return <option key={index} value={`${category.item_category_name}/${category.item_category_id}`}>{category.item_category_name}</option> 
              
              }):null}
            </select>
          </div>
          <div  className='CreateItem-form'>
            <label className='label'>Item Measure Unit</label>
            <label className='label'>:</label>
            <select className='form-input-select' value={data.item_measure_unit} onChange={(e)=>{
              const Data = {...data}
              Data.item_measure_unit = e.target.value
              setData(Data)
              
            }}>
              <option value="">select measure unit</option>
              <option value="kg">kg</option>
              <option value="l">l</option>
              <option value="pcs">pcs</option>              
            </select>
          </div>
          <div  className='CreateItem-form'>
            <label className='label'>Item Unit Selling Price</label>
            <label className='label'>:</label>
            <input type="text" className='form-input' value={data.item_unit_selling_price} onChange={(e)=>{
              const Data = {...data}
              Data.item_unit_selling_price = e.target.value
              setData(Data)
            }}/>
          </div>
          <div  className='CreateItem-form'>
            <label className='label'>Item Description</label>
            <label className='label'>:</label>
            <input type="text" className='form-input' value={data.item_description} onChange={(e)=>{
              const Data = {...data}
              Data.item_description = e.target.value
              setData(Data)
            
            }}/>
          </div>

        </div>

        <div  className='CreateItem-btn-div'>
          <button className='btn-submit' onClick={SubmitHandler}>Submit</button>
          <button className='btn-cancel' onClick={ResetHandler}>Cancel</button>

        </div>
      </div>
    </div>
  )
}
