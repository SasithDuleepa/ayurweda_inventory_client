import React from 'react';
import './createItem.css';

export default function CreateItem() {
  return (
    <div>
      <p className='title'>Create Item</p>
      <div className='container'>
        <div className='CreateItem-info-div'>
          <div  className='CreateItem-form'>
            <label className='label'>Item Id</label>
            <label className='label'>:</label>
            <input type="text" className='form-input' />
          </div>
          <div  className='CreateItem-form'>
            <label className='label'>Item Id</label>
            <label className='label'>:</label>
            <input type="text" className='form-input' />
          </div>
          <div  className='CreateItem-form'>
            <label className='label'>Item Name</label>
            <label className='label'>:</label>
            <input type="text" className='form-input' />
          </div>
          <div  className='CreateItem-form'>
            <label className='label'>Item Category</label>
            <label className='label'>:</label>
            <input type="text" className='form-input' />
          </div>
          <div  className='CreateItem-form'>
            <label className='label'>Item Measure Unit</label>
            <label className='label'>:</label>
            <input type="text" className='form-input' />
          </div>
          <div  className='CreateItem-form'>
            <label className='label'>Item Unit Selling Price</label>
            <label className='label'>:</label>
            <input type="text" className='form-input' />
          </div>
          <div  className='CreateItem-form'>
            <label className='label'>Item Description</label>
            <label className='label'>:</label>
            <input type="text" className='form-input' />
          </div>
          <div  className='CreateItem-form'>
            <label className='label'>Item Status</label>
            <label className='label'>:</label>
            <input type="text" className='form-input' />
          </div>
        </div>

        <div  className='CreateItem-btn-div'>
          <button>Update</button>
          <button>Delete</button>
          <button>Cancel</button>

        </div>
      </div>
    </div>
  )
}
