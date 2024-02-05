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


    const[idError,setIdError] = useState('');
    const[nameError,setNameError] = useState('');
    const[emailError,setEmailError] = useState('');
    const[phoneNoError, setPhoneNoError] = useState('');
    const[nicError,setNicError] = useState('');
    const[addressError,SetAddressError] = useState('');

    const IdHandler = (e) =>{
        let id = e.target.value;
        setSupplerId(id)    
        if(id.length === 0){
            setIdError('Supplier ID is required');
        }else{
            setIdError('')
        }

        }

    const NameHandler = (e) => {
        let Name = e.target.value;
        setSupplierName(Name)
        if(Name.length === 0){
            setNameError('Supplier Name is required')
        }else{
            setNameError('')
        }
    };
    const EmailHandler = (e) => {
         let mail = e.target.value;
         setSupplierEmail(mail)



         const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
         if (!emailRegex.test(mail)) {
            setEmailError('enter valid e-mail');
        }else{
            setEmailError('');
        }



    };
    const PhoneNoHandler = (e) => {
        let phone = e.target.value;
        setSupplierPhone(phone)
        if(supplierPhone.length === 0){
            setPhoneNoError('Supplier Phone number is required')
        }else{
            setPhoneNoError('')
        }
    };
    const NicHandler = (e) => {
        let nic = e.target.value;
        setSupplierNIC(nic)
        if(supplierNIC.length === 0 ){
            setNicError('Supplier NIC required')
        }else{
            setNameError('')
        }
    };
    const AddressHandler = (e) => {
        let address = e.target.value;
        setSupplierAddress(address)
        if(supplierAddress.length === 0){
            SetAddressError('Supplier Address required')
        }else{
            SetAddressError('')
        }
    };



    const SubmitHandler =async( ) =>{
        if(supplierId !== '' && supplierName !== '' && supplierEmail !== '' && supplierPhone !== '' && supplierAddress !== '' && supplierNIC !== '' &&
         idError === '' && nameError==='' && emailError === '' && phoneNoError === '' && nicError ==='' && addressError === '' ){
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

        }else{
            window.alert('All fields are required');
        
        }


    }
  return (
    <div className ='AddSupplier'>
    <div className ='AddSupplier-main'>
        <div className='AddSupplier-main-header'>
        <p className='title'>Create a New Supplier</p>
        <button className='AddSupplier-main-header-close-btn' onClick={props.closeFunction}>
        <img src={Close} alt="close"  className='AddSupplier-main-header-close'/>
        </button>
            
        </div>

        <div className='line'></div>
        <div className ='AddSupplier-form-div'>
            <div className ='AddSupplier-form'>
                <div className ='AddSupplier-form-sub'>
                    <label className ='AddSupplier-form-label'>Supplier Id</label>
                    <p className ='sub_title'>:</p>
                    <input className ='AddSupplier-form-input' type="text" placeholder='Supplier id' value={supplierId} onChange={(e)=>IdHandler(e)}/>
                </div>
                <p className ='AddSupplier-form-message'>{idError}</p>
            </div>

            <div className ='AddSupplier-form'>
                <div className ='AddSupplier-form-sub'>
                    <label className ='AddSupplier-form-label'>Supplier Name</label>
                    <p className ='sub_title'>:</p>
                    <input className ='AddSupplier-form-input' type="text" placeholder='Supplier name' value={supplierName} onChange={(e)=>NameHandler(e)}/>
                </div>
                <p className ='AddSupplier-form-message'>{nameError}</p>
            </div>

            <div className ='AddSupplier-form'>
                <div className ='AddSupplier-form-sub'>
                    <label className ='AddSupplier-form-label'>Supplier email</label>
                    <p className ='sub_title'>:</p>
                    <input className ='AddSupplier-form-input' type="text" placeholder='Supplier email' value={supplierEmail} onChange={(e)=>EmailHandler(e)}/>
                </div>
                <p className ='AddSupplier-form-message'>{emailError}</p>
            </div>

            <div className ='AddSupplier-form'>
                <div className ='AddSupplier-form-sub'>
                    <label className ='AddSupplier-form-label'>Supplier Phone no.</label>
                    <p className ='sub_title'>:</p>
                    <input className ='AddSupplier-form-input' type="text" placeholder='Supplier Phone no.' value={supplierPhone} onChange={(e)=>PhoneNoHandler(e)}/>
                </div>
                <p className ='AddSupplier-form-message'>{phoneNoError}</p>
            </div>

            <div className ='AddSupplier-form'>
                <div className ='AddSupplier-form-sub'>
                    <label className ='AddSupplier-form-label'>Supplier NIC</label>
                    <p className ='sub_title'>:</p>
                    <input className ='AddSupplier-form-input' type="text" placeholder='Supplier NIC' value={supplierNIC} onChange={(e)=>NicHandler(e)}/>
                </div>
                <p className ='AddSupplier-form-message'>{nicError}</p>
            </div>

            <div className ='AddSupplier-form'>
                <div className ='AddSupplier-form-sub'>
                    <label className ='AddSupplier-form-label'>Supplier Address</label>
                    <p className ='sub_title'>:</p>
                    <input className ='AddSupplier-form-input' type="text" placeholder='Supplier Address' value={supplierAddress} onChange={(e)=>AddressHandler(e)}/>
                </div>
                <p className ='AddSupplier-form-message'>{addressError}</p>
            </div>

        </div>

        <div className ='AddSupplier-btn-div'>
            <button onClick={SubmitHandler} className ='AddSupplier-btn'>Add Supplier</button>
        </div>

        
    </div>
</div>
  )
}
