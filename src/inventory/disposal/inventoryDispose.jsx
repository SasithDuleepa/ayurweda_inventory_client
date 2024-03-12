import React, { useState } from 'react';
import './inventoryDispose.css';
import Arrow from './../../icon/down-arrow.png';

export default function InventoryDispose() {
  const [resultsShow,setResultShow] = useState(false)
  return (
    <div>
      <p className='title'>Inventory Dispose</p>
      <div className='container'>
        <div className='InventoryDispose-details-div'>
          <p className='sub_title'>dispose details</p>
          <div  className='InventoryDispose-details'>
            <div  className='InventoryDispose-details-form'>
              <label className='label'>disposal id</label>
              <label className='label'>:</label>
              <input className='form-input' type='text' />
            </div>
            <div  className='InventoryDispose-details-form'>
              <label className='label'>disposal id</label>
              <label className='label'>:</label>
              <input className='form-input' type='text' />
            </div>
            <div  className='InventoryDispose-details-form'>
              <label className='label'>disposal id</label>
              <label className='label'>:</label>
              <input className='form-input' type='text' />
            </div>
            <div  className='InventoryDispose-details-form'>
              <label className='label'>disposal id</label>
              <label className='label'>:</label>
              <input className='form-input' type='text' />
            </div>
            <div  className='InventoryDispose-details-form'>
              <label className='label'>disposal id</label>
              <label className='label'>:</label>
              <input className='form-input' type='text' />
            </div>
          </div>
        </div>
        <div className='line'></div>
        <div className='InventoryDispose-search-div'>
          <p className='sub_title'> search items</p>
          <div  className='InventoryDispose-search-div-main'>

              <div className='InventoryDispose-search'>
                <button  className='InventoryDispose-search-btn' onClick={()=>setResultShow(!resultsShow)}>
                  <input  className='InventoryDispose-search-input'/>
                  <img src={Arrow} alt="" className={ resultsShow ?'InventoryDispose-search-img-show':'InventoryDispose-search-img-hide'}  />
                </button>
                <div className={resultsShow ?'InventoryDispose-search-result-div-show' :'InventoryDispose-search-result-div-hide'}></div>

            </div>
            
          </div>
        </div>
        <div className='line'></div>
        <div className='InventoryDispose-items-div'>
          <p className='sub_title'>dispose items</p>
          <div>
            <table>
              <thead>
                <tr>
                  <td>#</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                </tr>
              </tbody>

            </table>
          </div>
        </div>
        <div className='InventoryDispose-btn-div'>
          <button  className='btn-submit'>Submit</button>
          <button className='btn-cancel'>Cancel</button>
        </div>
      </div>
    </div>
  )
}
