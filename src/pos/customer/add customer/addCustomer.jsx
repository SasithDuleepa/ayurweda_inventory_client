import React, { useEffect, useState } from 'react';
import './addCustomer.css';
import IdGenerate from '../../../utils/id_generate';

export default function AddCustomer() {
    const [id,setId] = useState(IdGenerate('CUSTOMER'));
    const [name,setName] = useState('');
    const [nic,setNic] = useState('');
    const [address,setAddress] = useState('');
    const [contact,setContact] = useState('');
    const [email,setEmail] = useState('');
    const [customerType,setCustomertype] = useState('');
    const [regNo,setRegNo] = useState('');

    const [userId,setUserId] = useState('');
    const [date,setDate] = useState('');


    const [regNoView,setRegNoView] = useState(false);
    useEffect(()=>{
        if(customerType === 'doctor'){
            setRegNoView(true);
        }else{
            setRegNoView(false);
        }
    },[
        customerType
    ])



    const CancelHandler = ()=>{
        window.alert('Canceled');
        setId(IdGenerate('CUSTOMER'));
        setName('');
        setNic('');
        setAddress('');
        setContact('');
        setEmail('');
        setCustomertype('');
        setRegNo('');
        setUserId('');
        setDate('');
    
    }

  return (
    <div>
        
        <div className='container'>
        <p className='title'>add customer</p>
        <div className='line'></div>
            <div className=' AddCustomer-container'>
            <div className='AddCustomer-form-div'>
                    <label className='AddCustomer-form-label label'>Customer Id</label>
                    <label className='label'>:</label>
                    <input className='AddCustomer-form-input form-input' type="text" value={id} onChange={(e)=>setId(e.target.value)} disabled/> 
                </div>
                <div className='AddCustomer-form-div'>
                    <label className='AddCustomer-form-label label'>Name</label>
                    <label className='label'>:</label>
                    <input className='AddCustomer-form-input form-input' type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder='customer name'/>
                </div>
                <div className='AddCustomer-form-div'>
                    <label className='AddCustomer-form-label label'>NIC</label>
                    <label className='label'>:</label>
                    <input className='AddCustomer-form-input form-input' type="text" value={nic} onChange={(e)=>setNic(e.target.value)} placeholder='xxxxxxxxxV'/>
                </div>
                <div className='AddCustomer-form-div'>
                    <label className='AddCustomer-form-label label'>Address</label>
                    <label className='label'>:</label>
                    <input className='AddCustomer-form-input form-input' type="text" value={address} onChange={(e)=>setAddress(e.target.value)} placeholder='no.XX, lane , city'/>
                </div>
                <div className='AddCustomer-form-div'>
                    <label className='AddCustomer-form-label label'>Contact number</label>
                    <label className='label'>:</label>
                    <input className='AddCustomer-form-input form-input' type="text" value={contact} onChange={(e)=>setContact(e.target.value)} placeholder=' 0XX XX XX XXX'/>
                </div>
                <div className='AddCustomer-form-div'>
                    <label className='AddCustomer-form-label label'>E-mail Address</label>
                    <label className='label'>:</label>
                    <input className='AddCustomer-form-input form-input' type="text" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='customer@mail.com'/>
                </div>
                <div className='AddCustomer-form-div'>
                    <label className='AddCustomer-form-label label'>Customer type</label>
                    <label className='label'>:</label>
                    <select className='AddCustomer-form-input form-input' value={customerType} onChange={(e)=>setCustomertype(e.target.value)}>
                        <option>select customer type</option>
                        <option value={'doctor'}>doctor</option>
                        <option value={'agent'}>agent</option>
                    </select>
                </div>
                <div className='AddCustomer-form-div'>
                    <label className='AddCustomer-form-label label'>reg. No. </label>
                    <label className='label'>:</label>
                    <input className='AddCustomer-form-input form-input' type="text" value={regNo} onChange={(e)=>setRegNo(e.target.value)} placeholder='register number' disabled={!regNoView} />
                </div>


            </div>

            <div  className=' AddCustomer-btn-container'>
                <button className='btn AddCustomer-add-btn'>ADD</button>
                <button className='btn AddCustomer-cancel-btn' onClick={()=>CancelHandler()}>CANCEL</button>
            </div>
            
        </div>
    </div>
  )
}
