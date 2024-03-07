import React, { useState } from 'react';
import './inventoryStore.css';
import Arrow from '../../icon/down-arrow.png';
import axios from 'axios';
import IdGenerate from '../../utils/id_generate';

export default function InventoryStore() {
    const [poShow,setPoShow] = useState(false);

    const[branch,setBranch] = useState('Navinna');
    const[poId, setPoId] = useState('')
    const[poDate , setPoDate] = useState('')
    const[userId, setUsetId] = useState('USER-00001')


    const [Po,setPo] =useState([])
    const PoSearchHandler =async (e) => {
        if(e.target.value !== ''){
            try {
                const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/purchase/Search/${e.target.value}/RECEIVED`)  
                // console.log(res.data);
                setPo(res.data)
            } catch (error) {
                
            }
        }
    }


    const GetPoInfo = async(po) => {
        try {
            const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/purchase/po_items/${po}`)
            // console.log(res.data);
            setPoId(res.data[0].purchase_order_id)
            setPoDate(res.data[0].purchase_order_date)
        } catch (error) {
            
        }
    }


    const [items,setItems] = useState([])
    const GetPoData = async (po) => {
        try {
            const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/inventory/all/items/${po}`)
            console.log(res.data);
            setItems(res.data)
           
        } catch (error) {
            
        }
        GetPoInfo(po)


    }


    const currentDate = new Date(); // Get the current date and time
    const formattedDate = currentDate.toISOString(); // Format the date to ISO string
    const SubmitHandler =async () => {
        console.log(poId)
        console.log(items)

        try {
            const res = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/inventory/all/store`, {
                po_items:items,
                po_id : poId,
                updated_date  : formattedDate,
            })

        } catch (error) {
            
        }
    }
  return (
    <div>
        <p className='title'>Purchased Inventory Items Store</p>
        <div className='line'></div>
        <div className='container'>
            <div className='inventory-store-search-div'>
                <p className='sub_title'>Find Purchase Order</p>
                <div className='inventory-store-po-search-div'>
                    <label> Purchase Order Id</label>
                    <label>:</label>
                    <div  className='inventory-store-po-search-btn-div'>
                        <button className='inventory-store-po-search-btn' onClick={() => {setPoShow(!poShow)}}>
                            <input  className='inventory-store-po-search-input' onChange={(e)=>PoSearchHandler(e)} />
                            <img src={Arrow} alt='arrow' className={poShow ? 'inventory-store-po-search-img-show': 'inventory-store-po-search-img-hide'}/>
                        </button>
                         <div className={poShow ? 'inventory-store-po-search-results-div-show' : 'inventory-store-po-search-results-div-hide'}>
                         {Po.length>0 ? Po.map((item,index)=>(
                                <button className='InventoryPurchase-po-search-results-btn' onClick={()=>{
                                    GetPoData(item.purchase_order_id);
                                    setPoShow(false);

                                }} key={index}>{item.purchase_order_id}</button>
                            )):null}
                         </div>

                    </div>
                </div>
            </div>

            <div className='line'></div>

            <div className='inventory-store-search-results-div'>
                <p className='sub_title'>Purchase Order Details</p>
                <div className='inventory-store-search-info-main'>
                    <div  className='inventory-store-info-div'>
                        <p className='label'>Purchase Order Id </p>
                        <p className=''>:</p>
                        <p>{poId}</p>
                    </div>
                    <div  className='inventory-store-info-div'>
                        <p className='label'>Purchase Order Date </p>
                        <p className=''>:</p>
                        <p>{poDate}</p>
                    </div>
                    <div  className='inventory-store-info-div'>
                        <p className='label'>User Id</p>
                        <p className=''>:</p>
                        <p>{userId}</p>
                    </div>
                    {/* <div  className='inventory-store-info-div'>
                        <p className='label'>Purchase Order Id </p>
                        <p className=''>:</p>
                        <p>567uuyg</p>
                    </div>
                    <div  className='inventory-store-info-div'>
                        <p className='label'>Purchase Order Id </p>
                        <p className=''>:</p>
                        <p>567uuyg</p>
                    </div> */}
                </div>
            </div>

            <div className='line'></div>

            <div className='inventory-store-div'>
                <p className='sub_title'>Add Store Details</p>
                <div>
                    <table>
                        <thead>
                            <tr>
                                <td className='InventoryPurchase-purchase-t-1'>select</td>
                                <td className='InventoryPurchase-purchase-t-2'>name</td>
                                <td className='InventoryPurchase-purchase-t-3'>supplied qty</td>
                                <td className='InventoryPurchase-purchase-t-4'>store</td>
                                <td className='InventoryPurchase-purchase-t-5'>location</td>
                                <td className='InventoryPurchase-purchase-t-6'>measure unit</td>
                                
                                
                                <td className='InventoryPurchase-purchase-t-9'>status</td>
                            </tr>
                        </thead>
                        <tbody>
                            {items.length>0 ? items.map((item, index)=>(
                                <tr key={index}>
                                    <td className='InventoryPurchase-purchase-t-1'><input type='checkbox' /></td>
                                    <td className='InventoryPurchase-purchase-t-2'>{item.item_name}</td>
                                    <td className='InventoryPurchase-purchase-t-3'>{item.supplied_qty}</td>
                                    <td className='InventoryPurchase-purchase-t-4'>{item.store_id}</td>
                                    <td className='InventoryPurchase-purchase-t-5'>
                                        <input type='text' value={item.location} onChange={(e)=>{
                                            const data = [...items]
                                            
                                            data[index].location = e.target.value                                            
                                            setItems(data)
                                            
                                        
                                        }}/>
                                    </td>
                                    <td className='InventoryPurchase-purchase-t-6'>{item.measure_unit}</td>
                                   
                                    
                                    <td className='InventoryPurchase-purchase-t-9'>
                                        {/* {item.item_status} */}
                                    <select value={item.item_status} onChange={(e)=>{
                                        const data = [...items]
                                        data[index].item_status = e.target.value
                                        
                                        setItems(data)                                    
                                    }}>
                                        <option value={'PENDING'}>PENDING</option>
                                        <option value={'RELEASED'}>RELEASED</option>
                                    </select>
                                    </td>
                                </tr>
                            )) :
                            <tr>
                                <td colSpan='7'>No Items Found</td>
                            </tr>
}

                        </tbody>
                    </table>
                </div>
            </div>

            <div className='line'></div>

            <div className='inventory-store-search-btn-div'>
                <button className='btn' onClick={()=>{
                    setItems([])
                }}>Cancel</button>
                <button className='btn' onClick={()=>SubmitHandler()}>Save</button>
            </div>
        </div>
    </div>
  )
}
