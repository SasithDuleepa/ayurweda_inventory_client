import React, { useState } from 'react';
import './AddSupplier.css';
import IdGenerate from '../../utils/IdGenerate';
import axios from 'axios';

import Close from '../../icons/close.png';

export default function AddSupplier(props) {

    const[supplierId, setSupplerId] = useState(IdGenerate('SUPPLIER'));
    const[supplierName, setSupplierName] = useState('');
    const[supplierEmail, setSupplierEmail] = useState('');
    const[supplierPhone, setSupplierPhone] = useState('');
    const[supplierAddress, setSupplierAddress] = useState('');
    const[supplierNIC,setSupplierNIC] = useState('');
    const[date,setDate] = useState(new Date());


    const SubmitHandler =async( ) =>{
        try {
            const res= await axios.post('http://localhost:8080/supplier/add',{
            supplierId:supplierId,
            supplierName:supplierName,
            supplierEmail:supplierEmail,
            supplierPhone:supplierPhone,
            supplierAddress:supplierAddress,
            supplierNIC:supplierNIC,
            date:date
        })
        if(res.status===200){
            window.alert('Supplier Added Successfully');
            window.location.reload()
    }

        // console.log(res.data);
        } catch (error) {
            if(error.response.status === 401){
                window.alert("Unauthorized");
            }else if(error.response.status === 400){
                window.alert("All fields are required");
            }else if(error.response.status === 500){
                window.alert("Internal server error");
             }else if(error.response.status === 409){
                window.alert("Customer already exists");
             }
             else{
             window.alert("Error adding Customer");
             }
        }
        
    }
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
                    <label className ='AddSupplier-form-label'>Supplier Id</label>
                    <p className ='sub_title'>:</p>
                    <input className ='AddSupplier-form-input' type="text" placeholder='Supplier id' value={supplierId} onChange={(e)=>setSupplerId(e.target.value)}/>
                </div>
                <p className ='AddSupplier-form-message'>gkhb</p>
            </div>

            <div className ='AddSupplier-form'>
                <div className ='AddSupplier-form-sub'>
                    <label className ='AddSupplier-form-label'>Supplier Name</label>
                    <p className ='sub_title'>:</p>
                    <input className ='AddSupplier-form-input' type="text" placeholder='Supplier name' value={supplierName} onChange={(e)=>setSupplierName(e.target.value)}/>
                </div>
                <p className ='AddSupplier-form-message'>gkhb</p>
            </div>

            <div className ='AddSupplier-form'>
                <div className ='AddSupplier-form-sub'>
                    <label className ='AddSupplier-form-label'>Supplier email</label>
                    <p className ='sub_title'>:</p>
                    <input className ='AddSupplier-form-input' type="text" placeholder='Supplier email' value={supplierEmail} onChange={(e)=>setSupplierEmail(e.target.value)}/>
                </div>
                <p className ='AddSupplier-form-message'>gkhb</p>
            </div>

            <div className ='AddSupplier-form'>
                <div className ='AddSupplier-form-sub'>
                    <label className ='AddSupplier-form-label'>Supplier Phone no.</label>
                    <p className ='sub_title'>:</p>
                    <input className ='AddSupplier-form-input' type="text" placeholder='Supplier Phone no.' value={supplierPhone} onChange={(e)=>setSupplierPhone(e.target.value)}/>
                </div>
                <p className ='AddSupplier-form-message'>gkhb</p>
            </div>

            <div className ='AddSupplier-form'>
                <div className ='AddSupplier-form-sub'>
                    <label className ='AddSupplier-form-label'>Supplier NIC</label>
                    <p className ='sub_title'>:</p>
                    <input className ='AddSupplier-form-input' type="text" placeholder='Supplier NIC' value={supplierNIC} onChange={(e)=>setSupplierNIC(e.target.value)}/>
                </div>
                <p className ='AddSupplier-form-message'>gkhb</p>
            </div>

            <div className ='AddSupplier-form'>
                <div className ='AddSupplier-form-sub'>
                    <label className ='AddSupplier-form-label'>Supplier Address</label>
                    <p className ='sub_title'>:</p>
                    <input className ='AddSupplier-form-input' type="text" placeholder='Supplier Address' value={supplierAddress} onChange={(e)=>setSupplierAddress(e.target.value)}/>
                </div>
                <p className ='AddSupplier-form-message'>gkhb</p>
            </div>

        </div>

        <div className ='AddSupplier-btn-div'>
            <button onClick={SubmitHandler} className ='AddSupplier-btn'>Add Supplier</button>
        </div>

        
    </div>
</div>
  )
}
