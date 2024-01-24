import React from 'react';
import './AddSupplier.css';

import Close from '../../icons/close.png';

export default function AddSupplier(props) {
  return (
    <div className ='AddSupplier'>
    <div className ='AddSupplier-main'>
        <div className='AddSupplier-main-header'>
        <p className='title'>Create a New Supplier</p>
        <button onClick={props.closeFunction}>
        <img src={Close} alt="close"  className='AddSupplier-main-header-close'/>
        </button>
            
        </div>

        <div className='line'></div>
        <div className ='AddSupplier-form-div'>
            <div className ='AddSupplier-form'>
                <div className ='AddSupplier-form-sub'>
                    <label className ='AddSupplier-form-label'>Supplier name</label>
                    <p className ='sub_title'>:</p>
                    <input className ='AddSupplier-form-input' type="text" placeholder='Supplier name'/>
                </div>
                <p className ='AddSupplier-form-message'>gkhb</p>
            </div>

            <div className ='AddSupplier-form'>
                <div className ='AddSupplier-form-sub'>
                    <label className ='AddSupplier-form-label'>Supplier Name</label>
                    <p className ='sub_title'>:</p>
                    <input className ='AddSupplier-form-input' type="text" placeholder='Supplier name'/>
                </div>
                <p className ='AddSupplier-form-message'>gkhb</p>
            </div>

            <div className ='AddSupplier-form'>
                <div className ='AddSupplier-form-sub'>
                    <label className ='AddSupplier-form-label'>Supplier email</label>
                    <p className ='sub_title'>:</p>
                    <input className ='AddSupplier-form-input' type="text" placeholder='Supplier name'/>
                </div>
                <p className ='AddSupplier-form-message'>gkhb</p>
            </div>

            <div className ='AddSupplier-form'>
                <div className ='AddSupplier-form-sub'>
                    <label className ='AddSupplier-form-label'>Supplier Phone no.</label>
                    <p className ='sub_title'>:</p>
                    <input className ='AddSupplier-form-input' type="text" placeholder='Supplier name'/>
                </div>
                <p className ='AddSupplier-form-message'>gkhb</p>
            </div>

            <div className ='AddSupplier-form'>
                <div className ='AddSupplier-form-sub'>
                    <label className ='AddSupplier-form-label'>Supplier NIC</label>
                    <p className ='sub_title'>:</p>
                    <input className ='AddSupplier-form-input' type="text" placeholder='Supplier name'/>
                </div>
                <p className ='AddSupplier-form-message'>gkhb</p>
            </div>

            <div className ='AddSupplier-form'>
                <div className ='AddSupplier-form-sub'>
                    <label className ='AddSupplier-form-label'>Supplier Address</label>
                    <p className ='sub_title'>:</p>
                    <input className ='AddSupplier-form-input' type="text" placeholder='Supplier name'/>
                </div>
                <p className ='AddSupplier-form-message'>gkhb</p>
            </div>

        </div>

        <div className ='AddSupplier-btn-div'>
            <button className ='AddSupplier-btn'>Add Supplier</button>
        </div>

        
    </div>
</div>
  )
}
