import React from 'react';
import './AddCustomer.css';
import Close from '../../icons/close.png';

import AddSupplier from '../add supplier/AddSupplier';

export default function AddCustomer(props) {
  return (
    <div className ='AddCustomer'>
        <div className ='AddCustomer-main'>
            <div className='AddCustomer-main-header'>
            <p className='title'>Create a New Customer</p>
            <button onClick={props.closeFunction}>
            <img src={Close} alt="close"  className='AddCustomer-main-header-close'/>
            </button>
                
            </div>

            <div className='line'></div>
            <div className ='AddCustomer-form-div'>
                <div className ='AddCustomer-form'>
                    <div className ='AddCustomer-form-sub'>
                        <label className ='AddCustomer-form-label'>customer name</label>
                        <p className ='sub_title'>:</p>
                        <input className ='AddCustomer-form-input' type="text" placeholder='customer name'/>
                    </div>
                    <p className ='AddCustomer-form-message'>gkhb</p>
                </div>

                <div className ='AddCustomer-form'>
                    <div className ='AddCustomer-form-sub'>
                        <label className ='AddCustomer-form-label'>Customer Name</label>
                        <p className ='sub_title'>:</p>
                        <input className ='AddCustomer-form-input' type="text" placeholder='customer name'/>
                    </div>
                    <p className ='AddCustomer-form-message'>gkhb</p>
                </div>

                <div className ='AddCustomer-form'>
                    <div className ='AddCustomer-form-sub'>
                        <label className ='AddCustomer-form-label'>Customer email</label>
                        <p className ='sub_title'>:</p>
                        <input className ='AddCustomer-form-input' type="text" placeholder='customer name'/>
                    </div>
                    <p className ='AddCustomer-form-message'>gkhb</p>
                </div>

                <div className ='AddCustomer-form'>
                    <div className ='AddCustomer-form-sub'>
                        <label className ='AddCustomer-form-label'>Customer Phone no.</label>
                        <p className ='sub_title'>:</p>
                        <input className ='AddCustomer-form-input' type="text" placeholder='customer name'/>
                    </div>
                    <p className ='AddCustomer-form-message'>gkhb</p>
                </div>

                <div className ='AddCustomer-form'>
                    <div className ='AddCustomer-form-sub'>
                        <label className ='AddCustomer-form-label'>Customer NIC</label>
                        <p className ='sub_title'>:</p>
                        <input className ='AddCustomer-form-input' type="text" placeholder='customer name'/>
                    </div>
                    <p className ='AddCustomer-form-message'>gkhb</p>
                </div>

                <div className ='AddCustomer-form'>
                    <div className ='AddCustomer-form-sub'>
                        <label className ='AddCustomer-form-label'>Customer Address</label>
                        <p className ='sub_title'>:</p>
                        <input className ='AddCustomer-form-input' type="text" placeholder='customer name'/>
                    </div>
                    <p className ='AddCustomer-form-message'>gkhb</p>
                </div>

            </div>

            <div className ='AddCustomer-btn-div'>
                <button className ='AddCustomer-btn'>Add Customer</button>
            </div>

            
        </div>
    </div>
  )
}
