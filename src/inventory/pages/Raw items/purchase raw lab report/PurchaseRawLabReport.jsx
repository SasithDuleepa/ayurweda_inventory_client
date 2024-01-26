import React, { useState , useEffect } from 'react';
import './PurchaseRawLabReport.css';
import DropDown from './../../../icons/down-arrow.png';

export default function PurchaseRawLabReport() {

  const [showDropdown, setShowDropdown] = useState(false);      
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };      
  const filterFunction = (e) => {
    console.log(e.target.value);
  };
  return (
    <div className='PurchaseRawLabReport'>
      <p className='sub_title'> Purchase Raw Lab Report</p>
      <div className='line'></div>


      <div className='PurchaseRawLabReport-main'>
        <div>
        <div className='select-sub'>
                            <label>Invoice no</label>
                            <p>:</p>
                            <div className="dropdown">
                                <button onClick={toggleDropdown} className="dropbtn">
                                    <input type="text"  id="myInput" onKeyUp={(e)=>filterFunction(e)}/>
                                    <img className={`${showDropdown ? 'drop-down-arrow-clos' : 'drop-down-arrow-expand'}`} src={DropDown} alt="" />
                                </button>
                             <div id="myDropdown" className={`dropdown-content ${showDropdown ? 'show' : ''}`}>
                                    <button className='dropdown-select-btn'>g</button>
                                    <button  className='dropdown-select-btn'>ml</button>
                                </div>
                            </div>
                            </div>
        </div>

        <div className='PurchaseRawLabReport-main-table'>
          <div  className='PurchaseRawLabReport-main-table-header'>
            <p className='PurchaseRawLabReport-main-table-col-1'>Lot id</p>
            <p className='PurchaseRawLabReport-main-table-col-2'>Invoice id</p>
            <p className='PurchaseRawLabReport-main-table-col-3'>Item Name</p>
            <p className='PurchaseRawLabReport-main-table-col-4'>qty</p>
            <p className='PurchaseRawLabReport-main-table-col-5'>Unit</p>
            <p className='PurchaseRawLabReport-main-table-col-6'>Location</p>
            <p className='PurchaseRawLabReport-main-table-col-7'>Lab Report Id</p>
            <p className='PurchaseRawLabReport-main-table-col-8'>Lab Report Status</p>
          </div>
          <div  className='PurchaseRawLabReport-main-table-body'>
          <p className='PurchaseRawLabReport-main-table-col-1'>Lot id</p>
            <p className='PurchaseRawLabReport-main-table-col-2'>Invoice id</p>
            <p className='PurchaseRawLabReport-main-table-col-3'>Item Name</p>
            <p className='PurchaseRawLabReport-main-table-col-4'>qty</p>
            <p className='PurchaseRawLabReport-main-table-col-5'>Unit</p>
            <p className='PurchaseRawLabReport-main-table-col-6'>Location</p>
            <input className='PurchaseRawLabReport-main-table-col-7 PurchaseRawLabReport-main-table-col-7-input'/>
            <select  className='PurchaseRawLabReport-main-table-col-7'>
              <option value="g">g</option>
              <option value="ml">ml</option>
            </select>
          </div>

        </div>

        <div className='PurchaseRawLabReport-btn-div'>
          <button className='btn PurchaseRawLabReport-btn'>Submit</button>
        </div>
      </div>
    </div>
  )
}
