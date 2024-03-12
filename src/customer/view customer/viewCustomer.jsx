import React, { useState } from 'react';
import './viewCustomer.css';
import Arrow from './../../icon/down-arrow.png';
import axios from 'axios';

export default function ViewCustomer() {
  const [customerInfo,setCustomerInfo] = useState({})

  const [dropDownView,setDropDownView] = useState(false);
  const DropDownHandler = () => {
    setDropDownView(!dropDownView);
  }

  const [customers,setCustomers]=useState([])
  const CustomerSearchHandler =async (e) => {
    if( e.target.value !== ''){
      try {
        const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/customer/search/${e.target.value}`) 
        console.log(res.data);
        setCustomers(res.data)
      } catch (error) {
        
      }
    }
  }
  const CustomerSelectHandler =async (id) =>{
    try {
      const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/customer/${id}`)
      console.log(res.data);
      setCustomerInfo(res.data[0])
    } catch (error) {

    }
  
  }
  return (
    <div className='ViewCustomer'>
      <div className='container'>
        <div>
          <p className='title'>Customer View</p>
        </div>
        

        <div className='line'></div>

        <div className='ViewCustomer-search-div'>
          <div className='ViewCustomer-search'>
            <label>Find Customer</label>
            <label>:</label>
            <div  className='ViewCustomer-search-sub'>
              <button onClick={()=>DropDownHandler()}  className='ViewCustomer-search-btn'>
                <input className='ViewCustomer-search-btn-input' onChange={(e)=>CustomerSearchHandler(e)} placeholder='name , id , contact no.'/>
                <img src={Arrow}  className={!dropDownView ? 'ViewCustomer-search-btn-img-show' : 'ViewCustomer-search-btn-img-hide'} alt='arrow'/>
              </button>
              <div className={dropDownView ? 'ViewCustomer-search-select-div-show' : 'ViewCustomer-search-select-div-hide'}>
                {customers.length > 0 ? customers.map((customer,index)=>{
                  return <button onClick={()=>CustomerSelectHandler(customer.customer_id)} key={index}>{customer.customer_name}</button>
                }):null}
              </div>
            </div>
            
          </div>
        </div>

        <div className='line'></div>

        
        <div className='ViewCustomer-info-div'>
          <div className='ViewCustomer-info'>
            <p className='label'>Customer Name</p>
            <p className='label'>:</p>
            <p className='label'>{customerInfo.customer_name}</p>
          </div>

          <div className='ViewCustomer-info'>
            <p className='label'>Added Date/Last Update</p>
            <p className='label'>:</p>
            <p className='label'>{customerInfo.customer_added_date}</p>
          </div>

          <div className='ViewCustomer-info'>
            <p className='label'>Added User</p>
            <p className='label'>:</p>
            <p className='label'>{customerInfo.customer_added_user_id}</p>
          </div>

          <div className='ViewCustomer-info'>
            <p className='label'>Customer Address</p>
            <p className='label'>:</p>
            <p className='label'>{customerInfo.customer_address}</p>
          </div>

          <div className='ViewCustomer-info'>
            <p className='label'>Customer Contact</p>
            <p className='label'>:</p>
            <p className='label'>{customerInfo.customer_contact}</p>
          </div>

          <div className='ViewCustomer-info'>
            <p className='label'>Customer E-mail</p>
            <p className='label'>:</p>
            <p className='label'>{customerInfo.customer_email}</p>
          </div>

          <div className='ViewCustomer-info'>
            <p className='label'>Customer NIC</p>
            <p className='label'>:</p>
            <p className='label'>{customerInfo.customer_nic}</p>
          </div>

          <div className='ViewCustomer-info'>
            <p className='label'>Customer Type</p>
            <p className='label'>:</p>
            <p className='label'>{customerInfo.customer_type}</p>
          </div>
          {customerInfo.customer_type === 'doctor' ?
          <div className='ViewCustomer-info'>
          <p className='label'>Reg. No.</p>
          <p className='label'>:</p>
          <p className='label'>{customerInfo.customer_reg_no}</p>
        </div>
        :
        null
          }

          
          
        </div>

        <div className='line'></div>

        <div className='ViewCustomer-bill-div'>
          <p>customer bill</p>
          <div className='ViewCustomer-bill-table'>
            <div className='ViewCustomer-bill-table-head'>
              <p className='customer-bill-p1 label'>Invoice No</p>
              <p className='customer-bill-p2 label'>Date</p>
              <p className='customer-bill-p3 label'>Amount</p>
            </div>
            <div className='ViewCustomer-bill-table-body'>
              <p className='customer-bill-p1'>Invoice No</p>
              <p className='customer-bill-p2'>Date</p>
              <p className='customer-bill-p3'>Amount</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
