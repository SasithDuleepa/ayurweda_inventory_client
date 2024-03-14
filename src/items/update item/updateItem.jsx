import React, { useState } from 'react';
import './updateItem.css';
import axios from 'axios';

import Arrow from '../../icon/down-arrow.png';

export default function UpdateItem() {
  const[resultsShow,setResultsShow]= useState(false);

  const[results,setResults]=useState([]);
  const SearchHandler =async (e)=>{
    if(e.target.value !== ''){
      try {
       
        const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/item/search/name-status/ACTIVE/${e.target.value}`)
        console.log(res.data);
      } catch (error) {
        
      
        
      }
    }
  }

  const [data,setData] = useState({})
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
              <div className={resultsShow ? 'UpdateItem-search-result-div-show':'UpdateItem-search-result-div-hide'}></div>
            </div>
          </div>
        </div>
        <div className='line'></div>
        <div className='UpdateItem-info-div'>
          <div className='UpdateItem-info-form'>
            <label className='label'>Item Id</label>
            <label className='label'>:</label>
            <input className='form-input'/>
          </div>
          <div className='UpdateItem-info-form'>
            <label className='label'>Item Name</label>
            <label className='label'>:</label>
            <input className='form-input'/>
          </div>
          <div className='UpdateItem-info-form'>
            <label className='label'>Item Category</label>
            <label className='label'>:</label>
            <input className='form-input'/>
          </div>
          <div className='UpdateItem-info-form'>
            <label className='label'>Item Measure Unit</label>
            <label className='label'>:</label>
            <input className='form-input'/>
          </div>
          <div className='UpdateItem-info-form'>
            <label className='label'>Item Selling Price</label>
            <label className='label'>:</label>
            <input className='form-input'/>
          </div>
          <div className='UpdateItem-info-form'>
            <label className='label'>Item Description</label>
            <label className='label'>:</label>
            <input className='form-input'/>
          </div>
        </div>
        <div className='UpdateItem-btn-div'>
          <button className='btn-submit'>Update</button>
          <button className='btn-delete'>Delete</button>
          <button className='btn-cancel'>Cancel</button>
        </div>
      </div>
    </div>
  )
}
