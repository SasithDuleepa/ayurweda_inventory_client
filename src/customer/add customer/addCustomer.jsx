import React, { useEffect, useState } from 'react';
import './addCustomer.css';
import IdGenerate from '../../utils/id_generate';
import axios from 'axios';

export default function AddCustomer(props) {
    const currentDate = new Date(); // Get the current date and time
  const formattedDate = currentDate.toISOString(); // Format the date to ISO string
  const [userId,setUserId] = useState('USER-000000');

    const [id,setId] = useState(IdGenerate('CUSTOMER'));
    const [name,setName] = useState('');
    const [nic,setNic] = useState('');
    const [address,setAddress] = useState('');
    const [contact,setContact] = useState('');
    const [email,setEmail] = useState('');
    const [customerType,setCustomertype] = useState('');
    const [regNo,setRegNo] = useState('');




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


    const AddHandler = async ()=>{
        if(name === '' || nic === '' || address === '' || contact === '' || email === '' || customerType === '' ){
            window.alert('Please fill all the fields');
        }else{
            const data = {
                customer_id:id,
                customer_name:name,
                customer_nic:nic,
                customer_address:address,
                customer_contact_no:contact,
                customer_email:email,
                customer_type:customerType,
                reg_no:regNo,
                customer_update_user_id:userId,
                customer_update_date:formattedDate

            }
            try {
                const res = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/customer/add`, data)
                console.log(res.data);
                if(res.status === 201 || 200){
                    window.alert('Customer added successfully');
                    setId(IdGenerate('CUSTOMER'));
                    setName('');
                    setNic('');
                    setAddress('');
                    setContact('');
                    setEmail('');
                    setCustomertype('');
                    setRegNo('');
                    props.close()
                
                }
            } catch (error) {
                if(error.response.status === 500){
                    window.alert('Internal server error');
                    console.log(error);
                }else if(error.response.status === 400){
                    window.alert('Bad request');
                    console.log(error);
                }else if(error.response.status === 404){

                }
            }
        }
    
    }

    const CancelHandler = ()=>{
        // window.alert('Canceled');
        setId(IdGenerate('CUSTOMER'));
        setName('');
        setNic('');
        setAddress('');
        setContact('');
        setEmail('');
        setCustomertype('');
        setRegNo('');
        setUserId('');


        props.close()
    
    }

  return (
    <div>
        
        <div className='container'>
        <p className='title'>Add Customer</p>
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
                <button className='btn AddCustomer-add-btn' onClick={()=>AddHandler()}>ADD</button>
                <button className='btn AddCustomer-cancel-btn' onClick={()=>CancelHandler()}>CANCEL</button>
            </div>
            
        </div>
    </div>
  )
}
