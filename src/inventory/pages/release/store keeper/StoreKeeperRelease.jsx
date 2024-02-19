import React, { useEffect, useState } from 'react';
import './StoreKeeperRelease.css'
import Arrow from '../../../../icon/down-arrow.png';
import axios from 'axios';

export default function StoreKeeperRelease() {
    const [dropDown1,setDropDown1] = useState('dropdown-content-hide');
    const DropDown1Handler = () =>{
        if(dropDown1 === 'dropdown-content-hide'){
            setDropDown1('dropdown-content-show');
        }else{
            setDropDown1('dropdown-content-hide');
        
        }
    }
    const DropDown1SelectHandler = () =>{
        if(dropDown1 === 'dropdown-content-hide'){
            setDropDown1('dropdown-content-show');
        }else{
            setDropDown1('dropdown-content-hide');
        }
    }

    const [dropDown2,setDropDown2] = useState('dropdown-content-hide');
    const DropDown2Handler = () =>{
        if(dropDown2 === 'dropdown-content-hide'){
            setDropDown2('dropdown-content-show');
        }else{
            setDropDown2('dropdown-content-hide');

        }
    }

    const[invoice,setInvoice] = useState({})
    const DropDown2SearchHandler =async (e) =>{
        
        try {
            const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/request/get/request/${e.target.value}`)  
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
        if(dropDown2 === 'dropdown-content-hide'){
            setDropDown2('dropdown-content-show');
        }else{
            setDropDown2('dropdown-content-hide');
        }

        setJobPreviewWindow(true)

        //get request items
        try {
            const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/request/get/request/items/${invoice_id}`)  
            console.log(res.data)
            if ( res.data.length > 0) {
                const InvoiceData = {
                    invoice_id : res.data[0].invoice_id,
                    request_user : res.data[0].inventory_request_user ,
                    request_type : res.data[0].inventory_request_type,
                    request_items : res.data.map((item) => ({
                        item_id: item.inventory_item_id,
                        item_qty: item.inventory_request_qty,
                        available_qty:'',
                        measure_unit:'',
                        name:''
                    })),
                }
        
                setInvoiceData(InvoiceData)
              }
 
           
            
        } catch (error) {
            
        }



    }
useEffect(()=>{ 
    let inventoryItems = invoiceData.request_items
    if(inventoryItems.length > 0){
        inventoryItems.map(async(item,index) => {
           let item_type = item.item_id.split("-");
           console.log()

           if(item_type[1] === 'PRODUCT'){
            try {
                const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/inventory/product/item/RELEASED/${item.item_id}`)
                // console.log(res.data)
                const data = {...invoiceData}
                data.request_items[index].available_qty = res.data[0].product_shadow_qty;
                data.request_items[index].measure_unit = res.data[0].product_measure_unit;
                data.request_items[index].name = res.data[0].product_name;
                setInvoiceData(data)
                // console.log(data)
            } catch (error) {
                
            }
           }
           else if(item_type[1] === 'RAW'){
            try {
                const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/inventory/raw/item/RELEASED/${item.item_id}`)
                // console.log(res.data)
                const data = {...invoiceData}
                data.request_items[index].available_qty = res.data[0].raw_item_shadow_qty ;
                data.request_items[index].measure_unit = res.data[0].raw_item_measure_unit;
                data.request_items[index].name = res.data[0].raw_item_name                ;
 
                setInvoiceData(data)
            } catch (error) {
                
            }
           }
           else if(item_type[1] === 'NRAW'){
            try {
                const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/inventory/non-raw/item/RELEASED/${item.item_id}`)
                // console.log(res.data)
                const data = {...invoiceData}
                data.request_items[index].available_qty = res.data[0].non_raw_shadow_qty ;
                data.request_items[index].measure_unit = res.data[0].non_raw_measure_unit;
                data.request_items[index].name = res.data[0].raw_item_name                ;
                // data.request_items[index].name = res.data.product_measure_unit;
                setInvoiceData(data)
            } catch (error) {
                
            }
           }
        })
    }
},[invoiceData.request_items.length])


        //release main window
        const[releaseItems,setReleaseItems] = useState([])










    //job preview window
    const [jobPreviewWindow,setJobPreviewWindow] = useState(false);
    const JobPreviewHandler = (item_id,req_qty,item_description) =>{
      
    }
    const JobPreviewCloseHandler = () =>{
        setJobPreviewWindow(false);
    }
    const JobPreviewSelectHandler = () => {
        if (invoiceData.request_items.length > 0) {
            let Items = invoiceData.request_items;
            let updatedReleaseItems = [...releaseItems]; 
    
            Items.forEach((item) => {
                updatedReleaseItems.push({
                    item_id: item.item_id,
                    requested_quantity: item.item_qty
                });
            });
    
            setReleaseItems(updatedReleaseItems); 
            return updatedReleaseItems; 
        } else {
            return releaseItems; 
        }
    };
    
useEffect(()=>{
    if(releaseItems.length > 0){
    releaseItems.map(async(item, index) => {
        
        if(item.item_id){
            let item_type = item.item_id.split("-");
            // console.log(item_type)
            if(item_type[1] === 'PRODUCT'){
                try {
                    const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/inventory/product/item/RELEASED/${item.item_id}`)
                    // console.log(res.data)
                    const data = {...releaseItems}
                    data[index].available_qty = res.data[0].product_shadow_qty;
                    data[index].measure_unit = res.data[0].product_measure_unit;
                    data[index].item_name = res.data[0].product_name;
                    data[index].item_price= res.data[0].product_unit_price;
                    data[index].item_released_date= res.data[0].product_released_date ;
                    data[index].location= res.data[0].product_location_id ;
                    data[index].item_description= res.data[0].inventory_product_description;
                    setReleaseItems(data)
                    // console.log(data)
                } catch (error) {

                }
               }
               else if(item_type[1] === 'RAW'){
                try {
                    const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/inventory/raw/item/RELEASED/${item.item_id}`)
                    // console.log(res.data)
                    const data = [...releaseItems]
                    data[index].available_qty = res.data[0].raw_item_shadow_qty ;
                    data[index].measure_unit = res.data[0].raw_item_measure_unit;
                    data[index].item_name= res.data[0].raw_item_name  ;
                    data[index].item_price= res.data[0].raw_item_unit_price  ;
                    data[index].item_released_date= res.data[0].raw_item_released_date ;
                    data[index].location= res.data[0].raw_item_location_id;
                    data[index].item_description= res.data[0].inventory_raw_item_description;

                    setReleaseItems(data)
                } catch (error) {

                }
               }
               else if(item_type[1] === 'NRAW'){
                try {
                    const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/inventory/non-raw/item/RELEASED/${item.item_id}`)
                    // console.log(res.data)
                    const data = {...releaseItems}
                    data[index].available_qty = res.data[0].non_raw_shadow_qty ;
                    data[index].measure_unit = res.data[0].non_raw_measure_unit;
                    data[index].item_name = res.data[0].non_raw_item_name              ;
                    
                 
                    data[index].item_price= res.data[0].non_raw_item_unit_price ;
                    data[index].item_released_date= res.data[0].non_raw_released_date;
                    data[index].location= res.data[0].non_raw_location_id;
                    data[index].item_description= res.data[0].non_raw_item_description;
                    setReleaseItems(data)
                } catch (error) {

                }
               }
        }
       
    })
    }
},[releaseItems.length])














  return (
    <div className='StoreKeeperRelease'>
            <p className='title'>Inventory Store Keeper Release</p>

        <div className='line'></div>
        <div className='container'>
            <div className='StoreKeeperRelease-info-main-div'>
                <div className='StoreKeeperRelease-info-input-div'>
                    <label className='StoreKeeperRelease-info-input-label label'>invoice no</label>
                    <label className='StoreKeeperRelease-info-input-label label'>:</label>
                    <input className='StoreKeeperRelease-info-input form-input' type='text' placeholder='invoice no'/>
                </div>
                <div className='StoreKeeperRelease-info-input-div'>
                    <label className='StoreKeeperRelease-info-input-label label'>date</label>
                    <label className='StoreKeeperRelease-info-input-label label'>:</label>
                    <input className='StoreKeeperRelease-info-input form-input' type='text' placeholder='invoice no'/>
                </div>
                <div className='StoreKeeperRelease-info-input-div'>
                    <label className='StoreKeeperRelease-info-input-label label'>requested by</label>
                    <label className='StoreKeeperRelease-info-input-label label'>:</label>
                    <input className='StoreKeeperRelease-info-input form-input' type='text' placeholder='invoice no'/>
                </div>
                <div className='StoreKeeperRelease-info-input-div'>
                    <label className='StoreKeeperRelease-info-input-label label'>invoice no</label>
                    <label className='StoreKeeperRelease-info-input-label label'>:</label>
                    <input className='StoreKeeperRelease-info-input form-input' type='text' placeholder='invoice no'/>
                </div>
            </div>

            <div className='line'></div>


            <div className='StoreKeeperRelease-search-main-div'>
            <div  className='search-select-div'>
                    <label className='StoreKeeperRelease-search-div-label label'>Search by (Raw Item Name)</label>
                    <label className='StoreKeeperRelease-search-div-label label'>:</label>
                    <div className='StoreKeeperRelease-search-div-select'>
                        <button onClick={()=>DropDown1Handler()} className='drop-down-btn '>
                            <input className='StoreKeeperRelease-search-div-select-input ' type='text' placeholder='(Raw Item) Name'/>
                            <img src={Arrow} alt='arrow'  className={dropDown1 ==='dropdown-content-hide'? 'select-dropdown-img-on':'select-dropdown-img-off' }/>
                        </button>
                        <div className={dropDown1}>
                            <button onClick={()=>DropDown1SelectHandler()} className='dropdown-select-btn'>jythfgjh</button>
                        </div>
                    </div>
                </div>
                <div  className='search-select-div'>
                    <label className='StoreKeeperRelease-search-div-label label'>Search by Invoice</label>
                    <label className='StoreKeeperRelease-search-div-label label'>:</label>
                    <div className='StoreKeeperRelease-search-div-select'>
                        <button onClick={()=>DropDown2Handler()} className='drop-down-btn '>
                            <input className='StoreKeeperRelease-search-div-select-input ' onChange={(e)=>DropDown2SearchHandler(e)} type='text' placeholder='INVOICE-XXXXXX'/>
                            <img src={Arrow} alt='arrow'  className={dropDown2 ==='dropdown-content-hide'? 'select-dropdown-img-on':'select-dropdown-img-off' }/>
                        </button>
                        {invoice.length > 0 ? 
                        <div className={dropDown2}>
                            {invoice.map((item, index)=>(
                                <button key={index} onClick={()=>DropDown2SelectHandler(item.invoice_id)} className='dropdown-select-btn'>{item.invoice_id}</button>
                            ))}
                        </div>
                        :
                        null}
                        {/* <div className={dropDown2}>
                            <button onClick={()=>DropDown2SelectHandler()} className='dropdown-select-btn'>JOB-0001</button>
                        </div> */}
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
