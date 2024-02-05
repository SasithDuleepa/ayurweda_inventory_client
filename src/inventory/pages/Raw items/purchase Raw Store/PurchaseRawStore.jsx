import React, { useEffect, useState } from 'react';
import './PurchaseRawStore.css';
import DropDown from './../../../icons/down-arrow.png';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function PurchaseRawStore() {
  const {invoice_id} = useParams();

  const[invoiceItemData, setInvoiceItemData] = useState([])
     const GetInvoiceData = async (invoice_id) =>{
      const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/purchase/raw/search/forstore/${invoice_id}`)
      console.log(res.data);
      setInvoiceItemData(res.data)

    }



  
  useEffect(() => {
    if(invoice_id){
      GetInvoiceData(invoice_id)
    }
  },[invoice_id])
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
        const res =await axios.get(`${process.env.REACT_APP_BACKEND_URL}/purchase/raw/search/forstore/${e.target.value}`)
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

    


    const SubmitHandler =async( ) =>{
      if(selectedInvoice === '' && !invoice_id){
        window.alert('Please Select Invoice Id')
      }else{
        try {
          const res = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/purchase/raw/store`,{
            invoice_Item_Data:invoiceItemData,
            invoice_id:selectedInvoice,
          })
          if(res.status===200){
            window.alert('Raw Items Location Added Successfully');
            window.location.href=`/purchase/raw/store`;
        }
        } catch (error) {
          if(error.response.status === 401){
            window.alert("Unauthorized");
        }else if(error.response.status === 400){
            window.alert("All fields are required");
        }else if(error.response.status === 500){
            window.alert("Internal server error");
         }else if(error.response.status === 409){
            window.alert("Data already exists");
         }
         else{
         window.alert("Error Adding Raw Items Location");
         }
        }

      }
      
    }
  return (
    <div className='PurchaseRawStore'>
      <p className='title'>Purchased Raw Store</p>
      <div className='line'></div>

      <div className='PurchaseRawStore-main'>
      <div>
        <div className='select-sub'>
          <label>Invoice Id </label>
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

      <div  className='PurchaseRawStore-data-table'>
        <div className='PurchaseRawStore-data-table-header' >
          <p className='PurchaseRawStore-data-table-col1'>Lot Id</p>
          <p className='PurchaseRawStore-data-table-col2'>invoice id</p>
          <p className='PurchaseRawStore-data-table-col3'>supplier</p>
          <p className='PurchaseRawStore-data-table-col4'>Item Name</p>
          <p className='PurchaseRawStore-data-table-col5'>Qty</p>
          <p className='PurchaseRawStore-data-table-col6'>Unit</p>
          <p className='PurchaseRawStore-data-table-col7'>Unit Price</p>
          <p className='PurchaseRawStore-data-table-col8'>Total</p>
          <p className='PurchaseRawStore-data-table-col9'>purchased date</p>
          <p className='PurchaseRawStore-data-table-col10'>purchased person</p>
          <p className='PurchaseRawStore-data-table-col11'>Location</p>
        </div>

        {invoiceItemData.length > 0 ?
        invoiceItemData.map((item,index)=>{
          return <div className='PurchaseRawStore-data-table-body' key={index}>
          <p className='PurchaseRawStore-data-table-col1'>{item.lot_id}</p>
          <p className='PurchaseRawStore-data-table-col2'>{item.invoice_id}</p>
          <p className='PurchaseRawStore-data-table-col3'>{item.supplier_name}</p>
          <p className='PurchaseRawStore-data-table-col4'>{item.raw_item_name}</p>
           
          <p className='PurchaseRawStore-data-table-col5'>{item.item_qty}</p>
          <p className='PurchaseRawStore-data-table-col6'>{item.item_unit}</p>
          <p className='PurchaseRawStore-data-table-col7'>Rs. {item.unit_price}</p>
          <p className='PurchaseRawStore-data-table-col8'>Rs. {item.item_qty * item.unit_price}</p>
          <p className='PurchaseRawStore-data-table-col9'>{item.item_purchased_date}</p>
          <p className='PurchaseRawStore-data-table-col10'>{item.item_purchased_user_id}</p>
          <select className='PurchaseRawStore-data-table-col11 PurchaseRawStore-data-table-col11-input' onChange={(e)=>{
            let temp = [...invoiceItemData]
            temp[index].item_location= e.target.value
            temp[index].item_location_added_date = date
            temp[index].item_location_added_user = userId

            setInvoiceItemData(temp)
            console.log(invoiceItemData);
            
          }
          }>
            <option value="">Location</option>
            <option value="store1">Store1</option>
            <option value="store2">Store2</option>
            <option value="store3">Store3</option>
          </select>

        </div>
        }
        ) : null
      }


       
      </div>

      <div className='PurchaseRawStore-btn-div'>
        <button onClick={SubmitHandler} className='btn PurchaseRawStore-btn'>Submit</button>
      </div>
      </div>

      
    </div>
  )
}
