import React, { useState , useEffect } from 'react';
import './PurchaseRawLotView.css';
import axios from 'axios';
import DropDown from './../../../icons/down-arrow.png';



export default function PurchaseRawLotView() {


    const [showDropdown, setShowDropdown] = useState(false);      
    const toggleDropdown = () => {
      setShowDropdown(!showDropdown);
    };      
    const filterFunction = (e) => {
      console.log(e.target.value);
    };

    const[invoiceData,setInvoiceData] = useState([])

    const SearchHandlerInvoiceId =async (e) =>{
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
     const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/purchase/raw/search/raw/${invoice_id}`)
     console.log(res.data);
     setInvoiceItemData(res.data)

   }
  return (
    <div className='PurchaseRawLotView'>
        <p className='title'>purchase raw lot view</p>
        <div className='line'></div>

        <div className='PurchaseRawLotView-main-1'>
            <div className='PurchaseRawLotView-main-1-search-div'>
                <div className='PurchaseRawLotView-search-form'>
                    <label className='sub_title'>Lot Id</label>
                    <p className='sub_title'>:</p>
                    <input className='form-input'  />
                </div>
                <div className='PurchaseRawLotView-search-form'>


                    <div className='select-sub'>
                            <label>Invoice no</label>
                            <p>:</p>
                            <div className="dropdown">
                                <button onClick={toggleDropdown} className="dropbtn">
                                    <input type="text"  id="myInput" value={selectedInvoice} onChange={(e)=>SearchHandlerInvoiceId(e)} onKeyUp={(e)=>filterFunction(e)}/>
                                    <img className={`${showDropdown ? 'drop-down-arrow-clos' : 'drop-down-arrow-expand'}`} src={DropDown} alt="" />
                                </button>
                             <div id="myDropdown" className={`dropdown-content ${showDropdown ? 'show' : ''}`}>
                                {invoiceData.length>0 ? 
                                    invoiceData.map((item,index)=>{
                                        return(
                                            <button key={index} onClick={()=>InvoiceSelectHandler(item.invoice_id)} className='dropdown-select-btn'>{item.invoice_id}</button>
                                        )
                                    }):
                                    null}
                                        
                           
                     

                                </div>
                            </div>
                            </div>

                   

                </div>
                <div className='PurchaseRawLotView-search-form'>
                    <label className='sub_title'>Date</label>
                    <p className='sub_title'>:</p>
                    <input className='form-input' type="date" />
                </div>
                <div className='PurchaseRawLotView-search-form'>
                    <label className='sub_title'>Customer</label>
                    <p className='sub_title'>:</p>
                    <input className='form-input'  />
                </div>

            </div>



            <div className='PurchaseRawLotView-table1-div'>
                <div className='PurchaseRawLotView-table1-header'>
                    <p className='PurchaseRawLotView-table1-col-1'>Invoice Id</p>
                    <p className='PurchaseRawLotView-table1-col-2'>Lot id</p>
                    <p className='PurchaseRawLotView-table1-col-3'>Date</p>
                    <p className='PurchaseRawLotView-table1-col-4'>Supplier</p>
                    <p className='PurchaseRawLotView-table1-col-5'>Status</p>
                </div>
                {invoiceItemData.length>0 ?
                invoiceItemData.map((item,index)=>{
                    return <a href={`/purchase/raw/preview/${selectedInvoice}`} className='PurchaseRawLotView-table1-body' key={index}>
                    <p className='PurchaseRawLotView-table1-col-1'>{item.invoice_id}</p>
                    <p className='PurchaseRawLotView-table1-col-2'>{item.lot_id}</p>
                    <p className='PurchaseRawLotView-table1-col-3'>{item.purchased_date}</p>
                    <p className='PurchaseRawLotView-table1-col-4'>{item.supplier_id}</p>
                    <p className='PurchaseRawLotView-table1-col-5'>{item.status}</p>
                </a>
                }
                ):
                null}
                
            </div>

        </div>
    </div>
  )
}
