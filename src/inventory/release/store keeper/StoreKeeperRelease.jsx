import React, { useEffect, useState } from 'react';
import './StoreKeeperRelease.css'
import Arrow from '../../../icon/down-arrow.png';
import axios from 'axios';

import IdGenerate from './../../../utils/id_generate';

export default function StoreKeeperRelease() {
    const currentDate = new Date(); // Get the current date and time
    const formattedDate = currentDate.toISOString(); // Format the date to ISO string
    const [userId,setUserId] = useState('USER-000000');

    const [releaseInvoiceId,setReleaseInvoiceId] = useState(IdGenerate('RELEASE'))

    const [dropDownShow,setDropDownShow] = useState(false);
    

    const[invoice,setInvoice] = useState([])
    const DropDown2SearchHandler =async (e) =>{
        
        try {
            const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/inventoryRequest/search/request/${e.target.value}/PENDING`)  
            console.log(res.data)
            setInvoice(res.data)
        } catch (error) {
            
        }
    }

    const [invoiceData, setInvoiceData] = useState({
        invoice_id : 'res.data[0].invoice_id',
                    request_user : 'res.data[0].inventory_request_user' ,
                    request_type : 'res.data[0].inventory_request_type',
                    request_items :[],
    });
    const DropDown2SelectHandler =async (invoice_id) =>{
       try {
        const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/inventoryRequest/request/${invoice_id}`)  
        console.log(res.data)
        setInvoiceData({
            invoice_id : res.data[0].inventory_request_id,
            inventory_request_date:res.data[0].inventory_request_date,
            request_items:res.data.map(item=>{                //here should handle array with length
                return{
                    inventory_item_id:item.inventory_batch_id,
                    item_name:item.item_name,
                    item_current_qty:item.current_qty,
                    item_requested_qty:item.inventory_request_item_qty,
                    item_location:item.location,
                    item_measure_unit:item.item_measure_unit,
                    item_description:'',



                }

            })

        })
       } catch (error) {
        
       }







    }
useEffect(()=>{ 
    let inventoryItems = invoiceData.request_items
    if(inventoryItems.length > 0){

    }
},[invoiceData.request_items.length])



const ReleaseHandler = async () =>{
    const data = {
        release_invoice_id:releaseInvoiceId,
        request_invoice_id:invoiceData.invoice_id,
        release_user:userId,
        release_date:formattedDate,
        release_items:invoiceData.request_items
    }
    console.log(data)
    try {
        const res = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/inventoryRelease/add`,data)
        console.log(res.data)
        if(res.status === 200 || res.status === 201){
            alert('Release Success');

        }
    } catch (error) {
        if(error.response.status === 409){
          alert('Already Exist')
      }else if (error.response.status === 400){
          alert('Not Added')
      }else if (error.response.status === 500){
          alert('Internal Server Error')
      }else if (error.response.status === 404){
          alert(' Not Found')
      }else if (error.response.status === 403){
          alert('Forbidden')
      }
      else if (error.response.status === 401){
          alert('Unauthorized')
      }
    }
}


  return (
    <div className='StoreKeeperRelease'>
            <p className='title'>Inventory Release</p>

        <div className='line'></div>
        <div className='container'>
            <div className='StoreKeeperRelease-info-main-div'>
                <div className='StoreKeeperRelease-info-input-div'>
                    <label className='StoreKeeperRelease-info-input-label label'>Release Id</label>
                    <label className='StoreKeeperRelease-info-input-label label'>:</label>
                    <input className='StoreKeeperRelease-info-input form-input' type='text' placeholder='invoice no' value={releaseInvoiceId} onChange={(e)=>setReleaseInvoiceId(e.target.value)}/>
                </div>
                {/* <div className='StoreKeeperRelease-info-input-div'>
                    <label className='StoreKeeperRelease-info-input-label label'>date</label>
                    <label className='StoreKeeperRelease-info-input-label label'>:</label>
                    <input className='StoreKeeperRelease-info-input form-input' type='text' placeholder='invoice no'/>
                </div> */}
                
            </div>

            <div className='line'></div>


            <div className='StoreKeeperRelease-search-main-div'>

                <div  className='StoreKeeperRelease-search-select-div'>
                    <label className='label'>Search by Invoice</label>
                    <label className='label'>:</label>
                    <div className='StoreKeeperRelease-search-div-select'>
                        <button className='StoreKeeperRelease-search-div-select-btn' onClick={()=>setDropDownShow(!dropDownShow)} >
                            <input className='StoreKeeperRelease-search-div-select-input ' onChange={(e)=>DropDown2SearchHandler(e)} type='text' placeholder='INVOICE-XXXXXX'/>
                            <img src={Arrow} alt='arrow'  className={dropDownShow ? 'select-dropdown-img-on':'select-dropdown-img-off' }/>
                        </button>
                        {dropDownShow && 
                        <div  className='StoreKeeperRelease-search-results-div'>
                            {invoice.length>0 && invoice.map((item, index)=>(
                                <button key={index} className='StoreKeeperRelease-search-results-btn' onClick={()=>DropDown2SelectHandler(item.inventory_request_id)} >{item.inventory_request_id} , {item.inventory_request_date}</button>
                            ))}
                        </div>
}

                    </div>
                </div>
            </div>

            
            <div className='StoreKeeperRelease-input-main-div'>
                <table>
                    <thead>
                        <tr>
                        <td>no</td>
                        <td>Name</td>
                        <td>location</td>
                        <td>Available Qty</td>
                        <td>Requested Qty</td>
                        <td>Measure Unit</td>
                        <td>description</td>
                        

                        </tr>
                        
                    </thead>
                    <tbody>
                        {invoiceData.request_items.length>0 ? invoiceData.request_items.map((item,index)=>(
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{item.item_name}</td>
                                <td>{item.item_location}</td>
                                <td>{item.item_current_qty}</td>
                                <td>{item.item_requested_qty}</td>
                                <td>{item.item_measure_unit}</td>
                                <td><textarea value={item.item_description} onChange={(e)=>{
                                    let newReleaseItems = {...invoiceData}
                                    newReleaseItems.request_items[index].item_description = e.target.value
                                    setInvoiceData(newReleaseItems)
                                }}/></td>
                                

                            </tr>
                            )):
                            <tr></tr>}
                        
                        
                    </tbody>
                </table>
            </div>

            <div  className='StoreKeeperRelease-btn-main-div'>
                <button className='btn-submit' onClick={ReleaseHandler}>Release</button>
                <button className='btn-cancel'>Cancel</button>
            </div>
        </div>


    </div>
  )
}
