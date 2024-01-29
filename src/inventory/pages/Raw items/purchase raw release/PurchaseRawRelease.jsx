import React, { useState , useEffect } from 'react';
import './PurchaseRawRelease.css';
import axios from 'axios';

import DropDown from './../../../icons/down-arrow.png';

export default function PurchaseRawRelease() {
  const date = new Date();
  const[userId, setUserId] = useState('user-002')
  const [showDropdown, setShowDropdown] = useState(false);      
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };      
  const filterFunction = (e) => {
    console.log(e.target.value);
  };


  
  const[invoiceData,setInvoiceData]= useState([])

  const Searchhandler = async(e) =>{
    setSelectedInvoice(e.target.value)
    if(e.target.value !== ''){
      const res =await axios.get(`${process.env.REACT_APP_BACKEND_URL}/purchase/raw/search/raw/${e.target.value}`)
      console.log(res.data);
      setInvoiceData(res.data)

    }
    
  }
  const[selectedInvoice,setSelectedInvoice] = useState('')
  const InvoiceSelectHandler = async (invoice_id) =>{
    if(showDropdown === true){
      setShowDropdown(false)
    }
    setSelectedInvoice(invoice_id);
    GetInvoiceData(invoice_id)
    
  }

  const[invoiceItemData, setInvoiceItemData] = useState([])
   const GetInvoiceData = async (invoice_id) =>{
    const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/purchase/raw/raw/${invoice_id}`)
    console.log(res.data);
    setInvoiceItemData(res.data)

  }


  const SubmitHandler =async( ) =>{
    try {
      const res = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/purchase/raw/release`,{
        invoice_Item_Data:invoiceItemData,
        invoice_id:selectedInvoice
      })
      console.log(res.data);
    } catch (error) {
      
    }
  }
  return (
    <div className='PurchaseRawRelease'>
      <p className='sub_title'> Purchase Raw Release</p>
      <div className='line'></div>

      <div className='PurchaseRawRelease-main'>

        <div>
        <div className='select-sub'>
                            <label>Invoice id</label>
                            <p>:</p>
                            <div className="dropdown">
                                <button onClick={toggleDropdown} className="dropbtn">
                                    <input type="text"  id="myInput" value={selectedInvoice} onChange={(e)=>Searchhandler(e)} onKeyUp={(e)=>filterFunction(e)}/>
                                    <img className={`${showDropdown ? 'drop-down-arrow-clos' : 'drop-down-arrow-expand'}`} src={DropDown} alt="" />
                                </button>
                             <div id="myDropdown" className={`dropdown-content ${showDropdown ? 'show' : ''}`}>
                             {invoiceData.length > 0 ?
            invoiceData.map((item,index)=>{
           
                      return <button  key={index} onClick={()=>InvoiceSelectHandler(item.invoice_id)}   className='dropdown-select-btn'>{item.invoice_id}</button>
                      

            }) : null
            }
                                </div>
                            </div>

                </div>
        </div>



        <div className='PurchaseRawRelease-main-table'>
          <div className='PurchaseRawRelease-main-table-header'>
            <p className='PurchaseRawRelease-main-table-col-1'>Lot Id</p>
            <p className='PurchaseRawRelease-main-table-col-2'>Invoice Id</p>
            <p className='PurchaseRawRelease-main-table-col-3'>Customer</p>
            <p className='PurchaseRawRelease-main-table-col-4'>Item Name</p>
            <p className='PurchaseRawRelease-main-table-col-5'>Qty</p>
            <p className='PurchaseRawRelease-main-table-col-6'>Unit</p>
            <p className='PurchaseRawRelease-main-table-col-10'>Unit Price</p>
            <p className='PurchaseRawRelease-main-table-col-11'>Total</p>
            <p className='PurchaseRawRelease-main-table-col-7'>Lab Report Status</p>
            <p className='PurchaseRawRelease-main-table-col-8'>Current Qty</p>
            <p className='PurchaseRawRelease-main-table-col-9'>Description</p>
          </div>

          {invoiceItemData.length > 0 ?
          invoiceItemData.map((item,index)=>{
            return <div className='PurchaseRawRelease-main-table-body' key={index}>
            <p className='PurchaseRawRelease-main-table-col-1'>{item.lot_id}</p>
            <p className='PurchaseRawRelease-main-table-col-2'>{item.invoice_id}</p>
            <p className='PurchaseRawRelease-main-table-col-3'>{item.customer_id}</p>
            <p className='PurchaseRawRelease-main-table-col-4'>{item.item_id}</p>
            <p className='PurchaseRawRelease-main-table-col-5'>{item.item_qty}</p>
            <p className='PurchaseRawRelease-main-table-col-6'>{item.item_unit}</p>
            <p className='PurchaseRawRelease-main-table-col-10'>{item.unit_price}</p>
            <p className='PurchaseRawRelease-main-table-col-11'>{item.item_qty * item.unit_price}</p>
            <p className='PurchaseRawRelease-main-table-col-7'>{item.item_lab_report_status}</p>
            <input className='PurchaseRawRelease-main-table-col-8 PurchaseRawRelease-main-table-col-8-input' onChange={(e)=>{
              let temp = [...invoiceItemData]
              temp[index].item_releasing_qty= e.target.value
              temp[index].item_releasing_user_id = userId
              temp[index].item_releasing_date= date
              setInvoiceItemData(temp)
              console.log(invoiceItemData);
              
            }}/>
            <textarea className='PurchaseRawRelease-main-table-col-9 PurchaseRawRelease-main-table-col-9-input' onChange={(e)=>{
              let temp = [...invoiceItemData]
              temp[index].item_releasing_description= e.target.value
              setInvoiceItemData(temp)
              console.log(invoiceItemData);
              
            }}/>
            </div>
          }
          ) : null
        }
          

        </div>

        <div className='PurchaseRawRelease-btn-div'>
          <button onClick={SubmitHandler} className='btn PurchaseRawRelease-btn'>Submit</button>
        </div>

      </div>
    </div>
  )
}
