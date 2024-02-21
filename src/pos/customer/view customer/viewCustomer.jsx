import React, { useState } from 'react';
import './viewCustomer.css';
import Arrow from './../../../icon/down-arrow.png';

export default function ViewCustomer() {

  const [dropDownView,setDropDownView] = useState(false);
  const DropDownHandler = () => {
    setDropDownView(!dropDownView);
  }
  return (
    <div className='ViewCustomer'>
      <div className='container'>
        <div>
          <p className='title'>Customer View</p>
        </div>
        

        <div className='line'></div>

        <div className='ViewCustomer-search-div'>
          <div className='ViewCustomer-search'>
            <label>Find Customer</label>
            <label>:</label>
            <div  className='ViewCustomer-search-sub'>
              <button onClick={()=>DropDownHandler()}  className='ViewCustomer-search-btn'>
                <input className='ViewCustomer-search-btn-input' placeholder='name , id , contact no.'/>
                <img src={Arrow}  className={!dropDownView ? 'ViewCustomer-search-btn-img-show' : 'ViewCustomer-search-btn-img-hide'} alt='arrow'/>
              </button>
              <div className={dropDownView ? 'ViewCustomer-search-select-div-show' : 'ViewCustomer-search-select-div-hide'}>
                <button>select</button>
              </div>
            </div>
            
          </div>
        </div>

        <div className='line'></div>

        
        <div className='ViewCustomer-info-div'>
          <div className='ViewCustomer-info'>
            <p className='label'>Customer Name</p>
            <p className='label'>:</p>
            <p className='label'>jytyky k kjvh</p>
          </div>

          <div className='ViewCustomer-info'>
            <p className='label'>Customer Name</p>
            <p className='label'>:</p>
            <p className='label'>jytyky k kjvh</p>
          </div>

          <div className='ViewCustomer-info'>
            <p className='label'>Customer Name</p>
            <p className='label'>:</p>
            <p className='label'>jytyky k kjvh</p>
          </div>

          <div className='ViewCustomer-info'>
            <p className='label'>Customer Name</p>
            <p className='label'>:</p>
            <p className='label'>jytyky k kjvh</p>
          </div>

          <div className='ViewCustomer-info'>
            <p className='label'>Customer Name</p>
            <p className='label'>:</p>
            <p className='label'>jytyky k kjvh</p>
          </div>

          <div className='ViewCustomer-info'>
            <p className='label'>Customer Name</p>
            <p className='label'>:</p>
            <p className='label'>jytyky k kjvh</p>
          </div>

          <div className='ViewCustomer-info'>
            <p className='label'>Customer Name</p>
            <p className='label'>:</p>
            <p className='label'>jytyky k kjvh</p>
          </div>
          
        </div>

        <div className='line'></div>

        <div className='ViewCustomer-bill-div'>
          <p>customer bill</p>
          <div className='ViewCustomer-bill-table'>
            <div className='ViewCustomer-bill-table-head'>
              <p className='customer-bill-p1 label'>Invoice No</p>
              <p className='customer-bill-p2 label'>Date</p>
              <p className='customer-bill-p3 label'>Amount</p>
            </div>
            <div className='ViewCustomer-bill-table-body'>
              <p className='customer-bill-p1'>Invoice No</p>
              <p className='customer-bill-p2'>Date</p>
              <p className='customer-bill-p3'>Amount</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
