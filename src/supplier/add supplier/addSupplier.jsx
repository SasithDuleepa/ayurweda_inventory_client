import React, { useState } from 'react'
import './addSupplier.css'
import IdGenerate from '../../utils/id_generate'
import axios from 'axios'


export default function AddSupplier(props) {

  // const [id,setId] = useState(IdGenerate('SUPPLIER'))
  // const [name,setName] = useState('')
  // const [nic,setNic] = useState('')
  // const [address,setAddress] = useState('')
  // const [contact,setContact] = useState('')

  // const [userId, setUserId] = useState('USER-0001')
  // const [date, setDate] = useState(
  //   new Date().toLocaleDateString('en-GB',{
  //     year: 'numeric',
  //     month: '2-digit',
  //     day : '2-digit',
  //     hour : '2-digit',
  //     minute: '2-digit',
  //     second:'2-digit'
  //   })
  // )

  const AddHandler = async() =>{
  //   if(name === '' || nic === '' || address === '' || contact === ''){
  //     window.alert('Please fill all the fields');
  // }else{
  //     const data = {
  //         Supplier_id:id,
  //         Supplier_name:name,
  //         Supplier_nic:nic,
  //         Supplier_address:address,
  //         Supplier_contact:contact,
          
  //         Supplier_added_user_id:userId,
  //         Supplier_added_date:date
  //     }
  //     try {
  //         const res = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/supplier/add`, data)
  //         console.log(res.data);
  //         if(res.status === 201){
  //             window.alert('Supplier added successfully');
  //             setId(IdGenerate('SUPPLIER'));
  //             setName('')
  //             setNic('')
  //             setAddress('')
  //             setContact('')
              
  //             setUserId('')
  //             setDate(new Date().toLocaleDateString('en-GB', {
  //               year: 'numeric',
  //               month: '2-digit',
  //               day: '2-digit',
  //               hour: '2-digit',
  //               minute: '2-digit',
  //               second: '2-digit',
  //               hour12: false
  //           }
  //       ))
  //         props.close()
  //      }
  //       } catch (error) {
  //         if(error.response.status === 500){
  //             window.alert('Internal server error');
  //             console.log(error);
  //         }else if(error.response.status === 400){
  //             window.alert('Bad request');
  //             console.log(error);
  //         }else if(error.response.status === 404){

  //         }
  //     }
  // }

  }

  const CancelHandler = () =>{
    // setId(IdGenerate('CSUPPLIER'))
    // setName('')
    // setNic('')
    // setAddress('')
    // setContact('')
    
    // setUserId('')
    // setDate('')

    // props.close()

  }
  return (
    <div>

<p className='title'> Add Supplier</p>
      
      <div className='container'>

        <div className='AddSupplier-container'>
          <div className='AddSupplier-form-div'>
            <label className='AddSupplier-form-label label'>Supplier ID</label>
            <label className='label'>:</label>
            <input className='AddSupplier-form-input form-input' type='text' value={''} onChange={''} disabled/>
          </div>

          <div className='AddSupplier-form-div'>
            <label className='AddSupplier-form-label label'>Supplier Name</label>
            <label className='label'>:</label>
            <input className='AddSupplier-form-input form-input' type='text' value={''} onChange={''} disabled/>
          </div>

          <div className='AddSupplier-form-div'>
            <label className='AddSupplier-form-label label'>Supplier NIC</label>
            <label className=' label'>:</label>
            <input className='AddSupplier-form-input form-input' type='text' value={''} onChange={''} disabled/>
          </div>

          <div className='AddSupplier-form-div'>
            <label className='AddSupplier-form-label label'>Supplier Address</label>
            <label className='label'>:</label>
            <input className='AddSupplier-form-input form-input' type='text' value={''} onChange={''} disabled/>
          </div>

          <div className='AddSupplier-form-div'>
            <label className='AddSupplier-form-label label'>Supplier Contact No</label>
            <label className='label'>:</label>
            <input className='AddSupplier-form-input form-input' type='text' value={''} onChange={''} disabled/>
          </div>

          


        </div>

        <div  className='AddSupplier-btn-container'>
            <button className='btn AddSupplier-add-btn' onClick={()=>AddHandler()}>ADD</button>
            <button className='btn AddSupplier-cancel-btn' onClick={()=>CancelHandler()}>CANCEL</button>
        </div>




      </div>



    </div>
  )
}
