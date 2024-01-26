import React, { useState , useEffect } from 'react';
import './PurchaseRawRelease.css';

import DropDown from './../../../icons/down-arrow.png';

export default function PurchaseRawRelease() {
  const [showDropdown, setShowDropdown] = useState(false);      
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };      
  const filterFunction = (e) => {
    console.log(e.target.value);
  };
  return (
    <div className='PurchaseRawRelease'>
      <p className='sub_title'> Purchase Raw Release</p>
      <div className='line'></div>

      <div className='PurchaseRawRelease-main'>

        <div>
        <div className='select-sub'>
                            <label>Invoice id</label>
                            <p>:</p>
                            <div className="dropdown">
                                <button onClick={toggleDropdown} className="dropbtn">
                                    <input type="text"  id="myInput" onKeyUp={(e)=>filterFunction(e)}/>
                                    <img className={`${showDropdown ? 'drop-down-arrow-clos' : 'drop-down-arrow-expand'}`} src={DropDown} alt="" />
                                </button>
                             <div id="myDropdown" className={`dropdown-content ${showDropdown ? 'show' : ''}`}>
                                    <button  className='dropdown-select-btn'>g</button>
                                    <button  className='dropdown-select-btn'>ml</button>
                                </div>
                            </div>

                </div>
        </div>



        <div className='PurchaseRawRelease-main-table'>
          <div className='PurchaseRawRelease-main-table-header'>
            <p className='PurchaseRawRelease-main-table-col-1'>Lot Id</p>
            <p className='PurchaseRawRelease-main-table-col-2'>Invoice Id</p>
            <p className='PurchaseRawRelease-main-table-col-3'>Customer</p>
            <p className='PurchaseRawRelease-main-table-col-4'>Item Name</p>
            <p className='PurchaseRawRelease-main-table-col-5'>Qty</p>
            <p className='PurchaseRawRelease-main-table-col-6'>Unit</p>
            <p className='PurchaseRawRelease-main-table-col-10'>Unit Price</p>
            <p className='PurchaseRawRelease-main-table-col-11'>Total</p>
            <p className='PurchaseRawRelease-main-table-col-7'>Lab Report Status</p>
            <p className='PurchaseRawRelease-main-table-col-8'>Current Qty</p>
            <p className='PurchaseRawRelease-main-table-col-9'>Description</p>
            
            
          </div>
          <div className='PurchaseRawRelease-main-table-body'>
            <p className='PurchaseRawRelease-main-table-col-1'>Lot Id</p>
            <p className='PurchaseRawRelease-main-table-col-2'>Invoice Id</p>
            <p className='PurchaseRawRelease-main-table-col-3'>customer</p>
            <p className='PurchaseRawRelease-main-table-col-4'>Item Name</p>
            <p className='PurchaseRawRelease-main-table-col-5'>Qty</p>
            <p className='PurchaseRawRelease-main-table-col-6'>Unit</p>
            <p className='PurchaseRawRelease-main-table-col-10'>Unit Price</p>
            <p className='PurchaseRawRelease-main-table-col-11'>total</p>
            <p className='PurchaseRawRelease-main-table-col-7'>Lab Report Status</p>
            <input className='PurchaseRawRelease-main-table-col-8 PurchaseRawRelease-main-table-col-8-input'/>
            <textarea className='PurchaseRawRelease-main-table-col-9 PurchaseRawRelease-main-table-col-9-input'/>
            
            
          </div>

        </div>

        <div className='PurchaseRawRelease-btn-div'>
          <button className='btn PurchaseRawRelease-btn'>Submit</button>
        </div>

      </div>
    </div>
  )
}
