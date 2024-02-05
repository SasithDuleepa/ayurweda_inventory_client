import React, { useState , useEffect } from 'react';
import './PurchaseRawLabReport.css';
import DropDown from './../../../icons/down-arrow.png';
import axios from 'axios';

export default function PurchaseRawLabReport() {
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
  const SearchHandler =async(e) =>{
    setSelectedInvoice(e.target.value);
    if(e.target.value !== ''){
      const res =await axios.get(`${process.env.REACT_APP_BACKEND_URL}/purchase/raw/raw/${e.target.value}`)
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
      const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/purchase/raw/search/labreport/${invoice_id}`)
      console.log(res.data);
      setInvoiceItemData(res.data)

    }


    const SubmitHandler =async( ) =>{
      
      try {
        const res = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/purchase/raw/labreport`,{
          invoice_Item_Data:invoiceItemData,
          invoice_id:selectedInvoice,
        })
        if(res.status===200){
          window.alert('Lab Report Added Successfully');
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
       window.alert("Error adding Lab Report");
       }
      }
    }

  return (
    <div className='PurchaseRawLabReport'>
      <p className='sub_title'> Purchase Raw Lab Report</p>
      <div className='line'></div>


      <div className='PurchaseRawLabReport-main'>
        <div>
        <div className='select-sub'>
                            <label>Invoice no</label>
                            <p>:</p>
                            <div className="dropdown">
                                <button onClick={toggleDropdown} className="dropbtn">
                                    <input type="text"  id="myInput" value={selectedInvoice} onChange={(e)=>SearchHandler(e)} onKeyUp={(e)=>filterFunction(e)}/>
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

        <div className='PurchaseRawLabReport-main-table'>
          <div  className='PurchaseRawLabReport-main-table-header'>
            <p className='PurchaseRawLabReport-main-table-col-1'>Lot id</p>
            <p className='PurchaseRawLabReport-main-table-col-2'>Invoice id</p>
            <p className='PurchaseRawLabReport-main-table-col-3'>Supplier</p>
            <p className='PurchaseRawLabReport-main-table-col-4'>Item Name</p>
            <p className='PurchaseRawLabReport-main-table-col-5'>qty</p>
            <p className='PurchaseRawLabReport-main-table-col-6'>Unit</p>
            <p className='PurchaseRawLabReport-main-table-col-7'>Unit Price</p>
            <p className='PurchaseRawLabReport-main-table-col-8'>Total</p>
            <p className='PurchaseRawLabReport-main-table-col-9'>Purchase Date</p>
            <p className='PurchaseRawLabReport-main-table-col-10'>Purchased person</p>
            <p className='PurchaseRawLabReport-main-table-col-11'>Location</p>
            <p className='PurchaseRawLabReport-main-table-col-12'>Lab Report Id</p>
            <p className='PurchaseRawLabReport-main-table-col-13'>Lab Report Status</p>

          </div>
          {invoiceItemData.length > 0 ?
          invoiceItemData.map((item,index)=>{
            return <div className='PurchaseRawLabReport-main-table-body' key={index}>
            <p className='PurchaseRawLabReport-main-table-col-1'>{item.lot_id}</p>
            <p className='PurchaseRawLabReport-main-table-col-2'>{item.invoice_id}</p>
            <p className='PurchaseRawLabReport-main-table-col-3'>{item.supplier_name}</p>
            <p className='PurchaseRawLabReport-main-table-col-4'>{item.raw_item_name}</p>
            <p className='PurchaseRawLabReport-main-table-col-5'>{item.item_qty}</p>
            <p className='PurchaseRawLabReport-main-table-col-6'>{item.item_unit}</p>
            <p className='PurchaseRawLabReport-main-table-col-7'>{item.unit_price}</p>
            <p className='PurchaseRawLabReport-main-table-col-8'>{item.item_qty * item.unit_price}</p>
            <p className='PurchaseRawLabReport-main-table-col-9'>{item.purchased_date}</p>
            <p className='PurchaseRawLabReport-main-table-col-10'>{item.item_location}</p>
            <p className='PurchaseRawLabReport-main-table-col-11'>{item.item_lab_report_id}</p>

            <input className='PurchaseRawLabReport-main-table-col-12 PurchaseRawLabReport-main-table-col-12-input' onChange={(e)=>{
              let temp = [...invoiceItemData]
              temp[index].item_lab_report_id = e.target.value
              setInvoiceItemData(temp)
              console.log(invoiceItemData);
              
            }}/>
            <select  className='PurchaseRawLabReport-main-table-col-13 PurchaseRawLabReport-main-table-col-13-input' onChange={(e)=>{
              let temp = [...invoiceItemData]
              temp[index].item_lab_report_status = e.target.value
              temp[index].item_lab_report_added_user = userId
              temp[index].item_lab_report_added_date = date
              setInvoiceItemData(temp)
              console.log(invoiceItemData);
              
            }}>
              <option value="">Select</option>
              <option value="fail">fail</option>
              <option value="pass">pass</option>
            </select>
            </div>
            
          }) : null}



        </div>

        <div className='PurchaseRawLabReport-btn-div'>
          <button className='btn PurchaseRawLabReport-btn' onClick={SubmitHandler}>Submit</button>
        </div>
      </div>
    </div>
  )
}
