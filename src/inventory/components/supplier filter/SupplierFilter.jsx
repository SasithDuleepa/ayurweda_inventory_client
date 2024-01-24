import React from 'react';
import './SupplierFilter.css';

import Close from '../../icons/close.png';

export default function SupplierFilter(props) {
  return (

        <div className='SupplierFilter-main'>
            <div className='SupplierFilter-main-top'>
                <button className='SupplierFilter-close-btn' onClick={props.closeFunction}><img className='SupplierFilter-close-icon' src={Close} alt="close" /></button>                
                <p className='title SupplierFilter-main-top-title'>Filter Suppliers</p>
            </div>
            <div className='SupplierFilter-form-div'>
                <div className='SupplierFilter-form'>
                    <label className='SupplierFilter-form-label sub_title'>Supplier Code :</label>
                    <input className='SupplierFilter-form-input' type="text" placeholder='Supplier Code' />
                </div>
                <div className='SupplierFilter-form'>
                    <label className='SupplierFilter-form-label sub_title'>Supplier Code :</label>
                    <input className='SupplierFilter-form-input' type="text" placeholder='Supplier Code' />
                </div>
                <div className='SupplierFilter-form'>
                    <label className='SupplierFilter-form-label sub_title'>Supplier Code :</label>
                    <input className='SupplierFilter-form-input' type="text" placeholder='Supplier Code' />
                </div>
                <div className='SupplierFilter-form'>
                    <label className='SupplierFilter-form-label sub_title'>Supplier Code :</label>
                    <input className='SupplierFilter-form-input' type="text" placeholder='Supplier Code' />
                </div>
                <div className='SupplierFilter-btn-div'>
                    <button className='SupplierFilter-btn-1'>Filter</button>
                    <button className='SupplierFilter-btn-2'>Clear</button>
                </div>
                
            </div>
        </div>

  )
}
