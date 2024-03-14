import React, { useEffect, useState } from 'react';
import './updateItem.css';
import axios from 'axios';

import Arrow from '../../icon/down-arrow.png';

export default function UpdateItem() {

  const currentDate = new Date(); // Get the current date and time
  const formattedDate = currentDate.toISOString(); // Format the date to ISO string
  const [userId,setUserId] = useState('USER-000000');



  const[resultsShow,setResultsShow]= useState(false);

  const[results,setResults]=useState([]);
  const SearchHandler =async (e)=>{
    if(e.target.value !== ''){
      try {
        const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/item/search/name-status/ACTIVE/${e.target.value}`)
        console.log(res.data);
        setResults(res.data);
      } catch (error) {

      }
    }
  }

  const [category,setCategory] = useState([]);
  const GetCategoryData = async ()=>{
    try {
      const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/itemCategory/status/ACTIVE`)
      console.log(res.data);
      setCategory(res.data);
    } catch (error) {

    }
  }
  useEffect(()=>{
    GetCategoryData();
  },[])


  const [data,setData] = useState({
    item_category_id:'',
    item_category_name:'',
    item_description:"",
    item_id: "",
    item_measure_unit: "",
    item_name: "",
    item_status: "ACTIVE",
    item_unit_selling_price: "",
    item_update_date: "",
    item_update_user_id: "",

  })
  const GetItemData = async (id)=>{
    try {
      const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/item/item/${id}`)
      console.log(res.data);
      setData(res.data[0]);
    } catch (error) {
      
    }
  }

  const UpdateItemHandler = async ()=>{
    if(data.item_id !== ""){
      try {
        const res = await axios.put(`${process.env.REACT_APP_BACKEND_URL}/item/update/${data.item_id}`,{
          data:data,
          user_id:'USER-00001',
          update_date:formattedDate,
        })
        console.log(res.data);
        if(res.status === 200){
          alert('Item Updated Successfully');
          window.location.reload()
        }
      } catch (error) {
        if(error.response.status === 500){
          alert('Internal Server Error')
        }else if(error.response.status === 400){
          alert('fill all fields')
        }else if(error.response.status === 409){
          alert('Item Already Exists')
        }else{
          alert('Something Went Wrong')
        }
        
      }
    }
  }

  const DeleteItemHandler = async ()=>{
    if(data.item_id !== ""){
      try {
        const res = await axios.delete(`${process.env.REACT_APP_BACKEND_URL}/item/delete/${data.item_id}`)
        console.log(res.data);
        if(res.status === 200){
          alert('Item Deleted Successfully');
          window.location.reload()
        }
      } catch (error) {
        if(error.response.status === 500){
          alert('Internal Server Error')
        }else if(error.response.status === 400){
          alert('fill all fields')
        }else if(error.response.status === 409){
          alert('Item Already Exists')
        }else{
          alert('Something Went Wrong')
        }
      }
    }
  }


  const CancelItemHandler = ()=>{}
  
  return (
    <div>
      <p className='title'> Update Item</p>
      <div className='container'>
        <div className='UpdateItem-search-div'>
          <p className='sub_title'> find item</p>
          <div className='UpdateItem-search-main'>
            <label className='label'>search item</label>
            <label className='label'>:</label>
            <div  className='UpdateItem-search'>
              <button className='UpdateItem-search-btn' onClick={()=>setResultsShow(!resultsShow)}>
                <input  className='UpdateItem-search-input' onChange={(e)=>SearchHandler(e)}/>
                <img src={Arrow} alt='arrow'  className={resultsShow ? 'UpdateItem-search-img-show':'UpdateItem-search-img-hide'}/>
              </button>
              <div className={resultsShow ? 'UpdateItem-search-result-div-show':'UpdateItem-search-result-div-hide'}>
                {results.length > 0 ? results.map((item,index)=>{ 
                  return(
                    <button key={index}  onClick={()=>GetItemData(item.item_id)}>
                      {item.item_name}
                    </button>
                  )
                
                }) : <p>not found</p> }
              </div>
            </div>
          </div>
        </div>
        <div className='line'></div>
        <div className='UpdateItem-info-div'>
          <div className='UpdateItem-info-form'>
            <label className='label'>Item Id</label>
            <label className='label'>:</label>
            <input className='form-input' value={data.item_id} onChange={(e)=>{
              setData({...data,item_id:e.target.value})
            }}/>
          </div>
          <div className='UpdateItem-info-form'>
            <label className='label'>Item Name</label>
            <label className='label'>:</label>
            <input className='form-input' value={data.item_name} onChange={(e)=>{
              setData({...data, item_name:e.target.value})
            
            }}/>
          </div>
          <div className='UpdateItem-info-form'>
            <label className='label'>Item Category</label>
            <label className='label'>:</label>
            <select className='form-input-select' value={data.item_category_name ==="" ? 'item category' :data.item_category_name }
            onChange={(e)=>{
              setData({...data, 
                item_category_id:e.target.value.split('/')[1],
                item_category_name:e.target.value.split('/')[0]
              })
            }}>
             < option value={data.item_category_name ==="" ? '' :data.item_category_name }>{data.item_category_name ==="" ? 'item category' :data.item_category_name }</option>
              
              {category.length > 0 ? category.map((category, index)=>{
                return(
                  <option key={index} value={`${category.item_category_name}/${category.item_category_id}`}>{category.item_category_name}</option>
                )

              }):
              <option>select category</option>
              }
              
            </select>
          </div>
          <div className='UpdateItem-info-form'>
            <label className='label'>Item Measure Unit</label>
            <label className='label'>:</label>
            <input className='form-input' value={data.item_measure_unit} onChange={(e)=>{
              setData({...data, item_measure_unit:e.target.value})


            
            }}/>
          </div>
          <div className='UpdateItem-info-form'>
            <label className='label'>Item Selling Price</label>
            <label className='label'>:</label>
            <input className='form-input' value={data.item_unit_selling_price} onChange={(e)=>{
              setData({...data, item_unit_selling_price:e.target.value})


            
            }}/>
          </div>
          <div className='UpdateItem-info-form'>
            <label className='label'>Item Description</label>
            <label className='label'>:</label>
            <input className='form-input' value={data.item_description} onChange={(e)=>{
              setData({...data, item_description:e.target.value})


            
            }}/>
          </div>
        </div>
        <div className='UpdateItem-btn-div'>
          <button className='btn-submit' onClick={UpdateItemHandler}>Update</button>
          <button className='btn-delete' onClick={DeleteItemHandler}>Delete</button>
          <button className='btn-cancel'>Cancel</button>
        </div>
      </div>
    </div>
  )
}
