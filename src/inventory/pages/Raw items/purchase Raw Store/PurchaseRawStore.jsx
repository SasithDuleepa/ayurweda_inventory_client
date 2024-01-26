import React, { useState } from 'react';
import './PurchaseRawStore.css';
import DropDown from './../../../icons/down-arrow.png';

export default function PurchaseRawStore() {
  const [showDropdown, setShowDropdown] = useState(false);      
    const toggleDropdown = () => {
      setShowDropdown(!showDropdown);
    };      
    const filterFunction = (e) => {
      console.log(e.target.value);
    };
  return (
    <div className='PurchaseRawStore'>
      <p className='title'>Purchase Raw Store</p>
      <div className='line'></div>

      <div className='PurchaseRawStore-main'>
      <div>
        <div className='select-sub'>
          <label>Invoice Id </label>
          <p>:</p>
          <div className="dropdown">
            <button onClick={toggleDropdown} className="dropbtn">
              <input type="text"  id="myInput" onKeyUp={(e)=>filterFunction(e)}/>
              <img className={`${showDropdown ? 'drop-down-arrow-clos' : 'drop-down-arrow-expand'}`} src={DropDown} alt="" />
            </button>
            <div id="myDropdown" className={`dropdown-content ${showDropdown ? 'show' : ''}`}>
              <button  className='dropdown-select-btn'>g</button>
              <button className='dropdown-select-btn'>ml</button>
            </div>
          </div>

        </div>
      </div>

      <div  className='PurchaseRawStore-data-table'>
        <div className='PurchaseRawStore-data-table-header' >
          <p>Lot Id</p>
          <p>invoice id</p>
          <p>Item</p>
          <p>qty</p>
          <p>Location</p>
        </div>
        <div className='PurchaseRawStore-data-table-body' >
          <p>Lot Id</p>
          <p>invoice id</p>
          <p>Item</p>
          <p>qty</p>
          <input />
        </div>
      </div>

      <div className='PurchaseRawStore-btn-div'>
        <button className='btn'>Add</button>
      </div>
      </div>

      
    </div>
  )
}
