import React, { useState } from 'react'
import './addSupplier.css'
import IdGenerate from '../../utils/id_generate'
import axios from 'axios'


export default function AddSupplier(props) {

  const currentDate = new Date(); // Get the current date and time
  const formattedDate = currentDate.toISOString(); // Format the date to ISO string
  const [userId,setUserId] = useState('USER-000000');


  const [data,setData] = useState({
    supplier_id:IdGenerate('SUPPLIER'),
    supplier_name:'',
    supplier_nic:'',
    supplier_address:'',
    supplier_contact_no:'',
    
  })


  const AddHandler = async() =>{
    const Data ={
      supplier_id:data.supplier_id,
      supplier_name:data.supplier_name,
      supplier_nic:data.supplier_nic,
      supplier_address:data.supplier_address,
      supplier_contact_no:data.supplier_contact_no,
      supplier_update_date:formattedDate,
      supplier_update_user_id:userId
    }

  }

  const CancelHandler = () =>{
    setData({
      supplier_id:IdGenerate('SUPPLIER'),
      supplier_name:'',
      supplier_nic:'',
      supplier_address:'',
      supplier_contact_no:'',
      
    })


  }
  return (
    <div>

<p className='title'> Add Supplier</p>
      
      <div className='container'>

        <div className='AddSupplier-container'>
          <div className='AddSupplier-form-div'>
            <label className='AddSupplier-form-label label'>Supplier ID</label>
            <label className='label'>:</label>
            <input className='AddSupplier-form-input form-input' type='text' value={data.supplier_id} onChange={''} disabled/>
          </div>

          <div className='AddSupplier-form-div'>
            <label className='AddSupplier-form-label label'>Supplier Name</label>
            <label className='label'>:</label>
            <input className='AddSupplier-form-input form-input' type='text' value={data.supplier_name} onChange={(e)=>{
              setData({
                ...data,
                supplier_name:e.target.value
              })
            }} />
          </div>

          <div className='AddSupplier-form-div'>
            <label className='AddSupplier-form-label label'>Supplier NIC</label>
            <label className=' label'>:</label>
            <input className='AddSupplier-form-input form-input' type='text' value={data.supplier_nic} onChange={(e)=>{
              setData({
                ...data,
                supplier_nic:e.target.value
              })
            }} />
          </div>

          <div className='AddSupplier-form-div'>
            <label className='AddSupplier-form-label label'>Supplier Address</label>
            <label className='label'>:</label>
            <input className='AddSupplier-form-input form-input' type='text' value={data.supplier_address} onChange={(e)=>{
              setData({
                ...data,
                supplier_address:e.target.value
              })
            }} />
          </div>

          <div className='AddSupplier-form-div'>
            <label className='AddSupplier-form-label label'>Supplier Contact No</label>
            <label className='label'>:</label>
            <input className='AddSupplier-form-input form-input' type='text' value={data.supplier_contact_no} onChange={(e)=>{
              setData({
                ...data,
                supplier_contact_no:e.target.value
              })
            }} />
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
