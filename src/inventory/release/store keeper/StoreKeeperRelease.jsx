import React, { useEffect, useState } from 'react';
import './StoreKeeperRelease.css'
import Arrow from '../../../icon/down-arrow.png';
import axios from 'axios';

export default function StoreKeeperRelease() {

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
       







    }
useEffect(()=>{ 
    let inventoryItems = invoiceData.request_items
    if(inventoryItems.length > 0){

    }
},[invoiceData.request_items.length])


        //release main window
        const[releaseItems,setReleaseItems] = useState([])










    //job preview window
    const [jobPreviewWindow,setJobPreviewWindow] = useState(false);

    const JobPreviewCloseHandler = () =>{
        setJobPreviewWindow(false);
    }
    const JobPreviewSelectHandler = () => {
       
    };
    















  return (
    <div className='StoreKeeperRelease'>
            <p className='title'>Inventory Release</p>

        <div className='line'></div>
        <div className='container'>
            <div className='StoreKeeperRelease-info-main-div'>
                <div className='StoreKeeperRelease-info-input-div'>
                    <label className='StoreKeeperRelease-info-input-label label'>Release Id</label>
                    <label className='StoreKeeperRelease-info-input-label label'>:</label>
                    <input className='StoreKeeperRelease-info-input form-input' type='text' placeholder='invoice no'/>
                </div>
                {/* <div className='StoreKeeperRelease-info-input-div'>
                    <label className='StoreKeeperRelease-info-input-label label'>date</label>
                    <label className='StoreKeeperRelease-info-input-label label'>:</label>
                    <input className='StoreKeeperRelease-info-input form-input' type='text' placeholder='invoice no'/>
                </div> */}
                
            </div>

            <div className='line'></div>


            <div className='StoreKeeperRelease-search-main-div'>

                <div  className='search-select-div'>
                    <label className='StoreKeeperRelease-search-div-label label'>Search by Invoice</label>
                    <label className='StoreKeeperRelease-search-div-label label'>:</label>
                    <div className='StoreKeeperRelease-search-div-select'>
                        <button onClick={()=>setDropDownShow(!dropDownShow)} className='drop-down-btn '>
                            <input className='StoreKeeperRelease-search-div-select-input ' onChange={(e)=>DropDown2SearchHandler(e)} type='text' placeholder='INVOICE-XXXXXX'/>
                            <img src={Arrow} alt='arrow'  className={dropDownShow ? 'select-dropdown-img-on':'select-dropdown-img-off' }/>
                        </button>
                        {invoice.length > 0 ? 
                        <div >
                            {invoice.map((item, index)=>(
                                <button key={index} onClick={()=>DropDown2SelectHandler(item.inventory_request_id)} className='dropdown-select-btn'>{item.inventory_request_id}</button>
                            ))}
                        </div>
                        :
                        null}

                    </div>
                </div>
            </div>

            
            <div className='StoreKeeperRelease-input-main-div'>
                <table>
                    <thead>
                        <tr>
                        <td>no</td>
                        <td>Name</td>
                        <td>description</td>
                        <td>Available Quantity</td>
                        <td>qty</td>
                        <td>measure unit</td>
                        <td>unit price</td>
                        <td>released date</td>
                        <td>Total</td>
                        <td>location</td>

                        </tr>
                        
                    </thead>
                    <tbody>
                        {releaseItems.length>0 ? releaseItems.map((item,index)=>(
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{item.item_name}</td>
                                <td>{item.item_description}</td>
                                <td>{item.available_qty}</td>
                          
                                <td>{item.requested_quantity ? item.requested_quantity :<input />}</td>
                                <td>{item.measure_unit}</td>
                                <td>{item.item_price}</td>
                                <td>{item.item_released_date}</td>
                                <td>{item.total}</td>
                                <td>{item.location}</td>

                            </tr>
                            )):
                            <tr></tr>}
                        
                        
                    </tbody>
                </table>
            </div>

            <div  className='StoreKeeperRelease-btn-main-div'></div>
        </div>



{/* invoice preview window */}

        <div className={jobPreviewWindow ? 'StoreKeeperRelease-job-preview' : 'hide'}>
            <p className='title'>Requested Items</p>


            <div className='StoreKeeperRelease-job-preview-1'>
            <table>
                    <thead>
                        <tr>
                            <td>select</td>
                            <td>no</td>
                            <td>Name</td>
                            <td>requested qty</td>
                            <td>available qty</td>
                            <td>measure unit</td>
                        </tr>
                    </thead>
 
                    <tbody>
                        {invoiceData.request_items.length >0 ? invoiceData.request_items.map((item,index)=>(
                            <tr key={index}>
                                <td><input type='checkbox' /></td>
                                <td>{item.item_id}</td>
                                <td>{item.name}</td>
                                <td>{item.item_qty}</td>
                                <td>{item.available_qty}</td>
                                <td>{item.measure_unit}</td>

                            </tr>
                        )):
                        <tr></tr>
                        }


                    </tbody>

                    

                </table>
                <button className='btn' onClick={()=>JobPreviewSelectHandler()}>Select</button>
                <button className='btn' onClick={()=>JobPreviewCloseHandler()}>close</button>
            </div>
            <div className='StoreKeeperRelease-job-preview-1'></div>

        </div>




    </div>
  )
}
