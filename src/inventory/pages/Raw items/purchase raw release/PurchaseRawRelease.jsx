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
            <p>lotid</p>
            <p>invoice id</p>
            <p>customer</p>
            <p>item</p>
            <p>qty</p>
            <p>current qty</p>
            <p>description</p>
            <p>unit price</p>
          </div>
          <div className='PurchaseRawRelease-main-table-body'>
          <p>lotid</p>
            <p>invoice id</p>
            <p>customer</p>
            <p>item</p>
            <p>qty</p>
            <p>current qty</p>
            <p>description</p>
            <p>unit price</p>
          </div>

        </div>

        <div className='PurchaseRawRelease-btn-div'>
          <button className='btn'>Submit</button>
        </div>

      </div>
    </div>
  )
}
