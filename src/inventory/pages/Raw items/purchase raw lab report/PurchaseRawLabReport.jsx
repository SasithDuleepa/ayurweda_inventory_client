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
            <p>Lot id</p>
            <p>Invoice id</p>
            <p>item</p>
            <p>qty</p>
            <p>location</p>
            <p>labreport id</p>
            <p>lab report status</p>
          </div>
          <div  className='PurchaseRawLabReport-main-table-body'>
            <p>Lot id</p>
            <p>Invoice id</p>
            <p>item</p>
            <p>qty</p>
            <p>location</p>
            <input />
            <input />
          </div>

        </div>

        <div className='PurchaseRawLabReport-btn-div'>
          <button className='btn'>Submit</button>
        </div>
      </div>
    </div>
  )
}
