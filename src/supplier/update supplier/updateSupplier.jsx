import React, { useState } from 'react'
import arrow from '../../icon/down-arrow.png'
import './updateSupplier.css'

export default function UpdateSupplier() {

  const [resultShow, setResultShow] = useState(false)

  return (
    <div>
      <p className='title'>Update Supplier</p>
      
      <div className='container'>
      <div className='UpdateSupplier-search-div-main'>
          <p className='sub_title'> Search Supplier</p>
          <div className='UpdateSupplier-search-div'>
            <label className='label'> Find Supplier</label>
            <label className='label'>:</label>
          <div>

        <button className='UpdateSupplier-search-btn' onClick={()=>setResultShow(!resultShow)}>
        <input className='UpdateSupplier-search-input'/>
        <img className={resultShow ? 'UpdateSupplier-search-image-show' : 'UpdateSupplier-search-img-hide'} src={arrow} alt='arrow'/>
         </button>  
        <div className={resultShow ? 'UpdateSupplier-search-result-div':'UpdateSupplier-search-result-div-hidden'}></div>
        </div>
       
      </div>

      </div>

      <div className='line'></div>

      <div className='UpdateSupplier-info-div'>

        <p className='sub_title'> Supplier Details</p>

        <div className='UpdateSupplier-info-container'>

            <div className='UpdateSupplier-info'>
              <label className='UpdateSupplier-form-label label'> Supplier ID</label>
              <label className='label'>:</label>
              <input className='UpdateSupplier-form-input form-input'/>
            </div>

            <div className='UpdateSupplier-info'>
              <label className='UpdateSupplier-form-label label'> Supplier Name</label>
              <label className='label'>:</label>
              <input className='UpdateSupplier-form-input form-input'/>
            </div>

            <div className='UpdateSupplier-info'>
              <label className='UpdateSupplier-form-label label'> Supplier NIC</label>
              <label className='label'>:</label>
              <input className='UpdateSupplier-form-input form-input'/>
            </div>

            <div className='UpdateSupplier-info'>
              <label className='UpdateSupplier-form-label label'> Supplier Address</label>
              <label className='label'>:</label>
              <input className='UpdateSupplier-form-input form-input'/>
            </div>

            <div className='UpdateSupplier-info'>
              <label className='UpdateSupplier-form-label label'> Supplier Contact No</label>
              <label className='label'>:</label>
              <input className='UpdateSupplier-form-input form-input'/>
            </div>

        </div>

        <div  className='UpdateSupplier-btn-container'>
                <button className='btn UpdateSupplier-add-btn'>UPDATE</button>
                <button className='btn UpdateSupplier-cancel-btn'>CANCEL</button>
        </div>

      </div>

      </div>
    </div>
  )
}
