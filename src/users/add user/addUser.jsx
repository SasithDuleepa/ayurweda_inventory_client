import React from 'react';
import './addUser.css';

export default function AddUser() {
  return (
    <div>
      <p className='title'> Add User</p>
      <div className='container'>
        <div className='AddUser-form-container'>
          <div className='AddUser-form-div'>
            <label className='label'>User Id</label>
            <label  className='label'>:</label>
            <input className='form-input' type="text" />
          </div>
          <div className='AddUser-form-div'>
            <label className='label'>User Name</label>
            <label  className='label'>:</label>
            <input className='form-input' type="text" />
          </div>
          <div className='AddUser-form-div'>
            <label className='label'>User Password</label>
            <label  className='label'>:</label>
            <input className='form-input' type="text" />
          </div>
          <div className='AddUser-form-div'>
            <label className='label'>Branch</label>
            <label  className='label'>:</label>
            <select className='form-input-select'>
              <option>Select Branch</option>
            </select>
          </div>
          <div className='AddUser-form-div'>
            <label className='label'>User Status</label>
            <label  className='label'>:</label>
            <select className='form-input-select'>
              <option>Select Status</option>
            </select>
          </div>
        </div>
        <div className='AddUser-btn-div'>
          <button className='btn-submit'>ADD</button>
          <button className='btn-cancel'>CANCEL</button>
        </div>
      </div>
    </div>
  )
}
