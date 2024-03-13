import React, { useState } from 'react';
import './updateItemCategory.css';
import Arrow from './../../icon/down-arrow.png';
import axios from 'axios';

export default function UpdateItemCategory() {
  const[resultShow,setResultShow] = useState(false);


  const [results,setResults] = useState([]);
  const CategorySearchHandler = async(e) => {
    if(e.target.value !== ''){
      try {
        const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/itemCategory?status=ACTIVE&category=${e.target.value}`)
        console.log(res.data);
        setResults(res.data);
      } catch (error) {
        console.log(error)
      }
    }

  }


  const [results2,setResults2] = useState({
    item_category_description: "",
    item_category_id: "",
    item_category_name: "",
    item_category_status: "",
    item_category_update_date: "2",
    item_category_update_user_id: "",
  });
  const GetItemCategory = async(id) => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/itemCategory/category?id=${id}`)
      console.log(res.data);
      setResults2(res.data[0]);
    } catch (error) {
      console.log(error)
    }
  
  }

  const UpdateItemCategoryHandler = async() => {
    if(results2.item_category_name !== '' && results2.item_category_status !==''){
      try {
        const res = await axios.put(`${process.env.REACT_APP_BACKEND_URL}/itemCategory/update?id=${results2.item_category_id}`,results2)
        console.log(res.data);
      } catch (error) {
        
      }

    }else{
      alert('please fill all field')
    }
  }

  const CancelHandler = () => {
    setResults2({
      item_category_description: "",
      item_category_id: "",
      item_category_name: "",
      item_category_status: "",
      item_category_update_date: "0",
      item_category_update_user_id: "",
    });
  }
  
  return (
    <div className='UpdateItemCategory'>
      <p className='title'> Update Item Category</p>
      <div className='container'>
        <div className='UpdateItemCategory-search-div'>
          <p className='sub_title'>find item category</p>
          <div className='UpdateItemCategory-search'>
            <label className='label'> search item category</label>
            <label className='label'>:</label>
            <div>
              <button className='UpdateItemCategory-search-btn' onClick={()=>{setResultShow(!resultShow)}}>
                <input  className='UpdateItemCategory-search-input' onChange={(e)=>CategorySearchHandler(e)}/>
                <img src={Arrow} alt='arrow'  className={resultShow ? 'UpdateItemCategory-search-img-show':'UpdateItemCategory-search-img-hide'}/>
              </button>
              <div className={resultShow ? 'UpdateItemCategory-search-result_div-show': 'UpdateItemCategory-search-result_div-hide' }>
                {results.length > 0 ? results.map((result,index)=>{
                  return <button onClick={()=>GetItemCategory(result.item_category_id)} className='UpdateItemCategory-search-result-btn' key={index}>{result.item_category_name}</button> 
                
                }):<p>not found</p>}
              </div>
            </div>
          </div>
        </div>

        <div className='line'></div>

        <div className='UpdateItemCategory-info-div'>
          <p className='sub_title'> item category info</p>
          <div className='UpdateItemCategory-info'>
            <div  className='UpdateItemCategory-form'>
              <label className='label'>item category id</label>
              <label className='label'>:</label>
              <input className='form-input' value={results2.item_category_id} onChange={()=>{}} readOnly  /> 
            </div>
            <div  className='UpdateItemCategory-form'>
              <label className='label'>item category name</label>
              <label className='label'>:</label>
              <input className='form-input' value={results2.item_category_name} 
              onChange={(e)=>{
                const data = {...results2}
                data.item_category_name = e.target.value;
                setResults2(data);

              
              }}   />
            </div>
            <div  className='UpdateItemCategory-form'>
              <label className='label'>item category update user</label>
              <label className='label'>:</label>
              <input className='form-input' value={results2.item_category_update_user_id} onChange={()=>{}} readOnly/>
            </div>
            <div  className='UpdateItemCategory-form'>
              <label className='label'>item category description</label>
              <label className='label'>:</label>
              <input className='form-input' value={results2.item_category_description} 
              onChange={(e)=>{
                const data = {...results2}
                data.item_category_description = e.target.value;
                setResults2(data);
              
              }}/>
            </div>
            <div  className='UpdateItemCategory-form'>
              <label className='label'>item category status</label>
              <label className='label'>:</label>
              <select className='form-input-select' value={results2.item_category_status} 
              onChange={(e)=>{
                const data = {...results2}
                data.item_category_status = e.target.value;
                setResults2(data);
              }}>
                <option value=''>select status</option>
                <option value='ACTIVE'>ACTIVE</option>
                <option value='INACTIVE'>INACTIVE</option>
            </select>
            </div>
          </div>
        </div>
        <div className='UpdateItemCategory-btn-div'>
          <button className='btn-submit' onClick={UpdateItemCategoryHandler}>Update</button>
          <button className='btn-cancel' onClick={CancelHandler}>Cancel</button>
        </div>
      </div>
    </div>
  )
}
