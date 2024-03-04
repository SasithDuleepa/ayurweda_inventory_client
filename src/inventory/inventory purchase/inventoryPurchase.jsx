import React, { useState } from 'react';
import './inventoryPurchase.css';
import Arrow from './../../icon/down-arrow.png';
import axios from 'axios';
import IdGenerate from '../../utils/id_generate';

export default function InventoryPurchase() {
    const[userId,setUserId] = useState('USER-00001');
    const[branch,setBranch] = useState('Navinna')



    const [PoSearchShow, setPoSearchShow] = useState(true);
    const PoSearchShowHandler = () => {
        setPoSearchShow(!PoSearchShow);
    }

    const [Po,setPo] =useState([])
    const PoSearchHandler =async (e) => {
        if(e.target.value !== ''){
            try {
                const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/purchase/search/${e.target.value}`)  
                console.log(res.data);
                setPo(res.data)
            } catch (error) {
                
            }
        }
    }

    const [PoData, setPoData] = useState({
        purchase_order_id:'',
        supplier_id:'',
        supplier_name:'',
        supplier_address:'',
        supplier_phone:'',
        supplier_email:'',
        branch:'Navinna',
        po_items:[]

    })
    const GetPoData = async (po) => {
        try {
            const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/purchase/po_items/${po}`)
            console.log(res.data);
            setPoData({
                purchase_order_id:res.data[0].purchase_order_id,
                supplier_id:res.data[0].supplier_id,
                branch:branch,
                po_items:res.data.map((item,index)=>({
                    item_id:item.purchase_order_item_id,
                    item_name:item.item_name,
                    item_requested_quantity:item.purchase_order_item_qty,
                    item_supplied_quantity:0,
                    
                    
                    item_measure_unit:item.item_measure_unit,
                    item_unit_purchasing_price:item.purchase_order_item_unit_price,


                    item_inventory_id:IdGenerate(`INVENTORY-${item.purchase_order_item_id.split('-')[0]}`),
                    item_supplied_qty:0,
                    item_store:'',
                    item_location:'',
                    item_description:'',
                    item_status:'',
                }))

            })
        } catch (error) {
            
        }
    }



    const SubmitHandler = async() => {
        // console.log(PoData);
        try {
            const res = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/inventory/all`,PoData)
            console.log(res.data); 
            if(res.status === 200 || res.status === 201){
                alert('Inventory Added Successfully')
            }
        } catch (error) {
            if(error.response.status === 409){
                alert('Inventory Already Exist')
            }else if (error.response.status === 400){
                alert('Inventory Not Added')
            }else if (error.response.status === 500){
                alert('Internal Server Error')
            }else if (error.response.status === 404){
                alert('Inventory Not Found')
            }else if (error.response.status === 403){
                alert('Forbidden')
            }
            else if (error.response.status === 401){
                alert('Unauthorized')
            }
        }
    
    }
  return (
    <div>
        <p className='title'>Inventory Items Purchase</p>

        <div className='line'></div>

        <div className='container'>
            <div className='InventoryPurchase-po-main-div'>
                <p className='sub_title'>Find Purchase Order</p>
                <div className='InventoryPurchase-po-div'>
                    <label className='label'> Purchase Order Id</label>
                    <label className='label'> :</label>
                    <div  className='InventoryPurchase-po-search-div'>
                        <button className='InventoryPurchase-po-search-bth' onClick={()=>PoSearchShowHandler()}>
                            <input onChange={(e)=>PoSearchHandler(e)} className='InventoryPurchase-po-search-input'/>
                            <img className={PoSearchShow ? 'InventoryPurchase-po-search-img-show' : 'InventoryPurchase-po-search-img-hide '} src={Arrow} alt='arrow'/>
                        </button>
                    
                        <div className={PoSearchShow ? 'InventoryPurchase-po-search-results-div-show' : 'InventoryPurchase-po-search-results-div-hide'}>
                            {Po.length>0 ? Po.map((item,index)=>(
                                <button className='InventoryPurchase-po-search-results-btn' onClick={()=>{
                                    GetPoData(item.purchase_order_id);
                                    setPoSearchShow(false);

                                }} key={index}>{item.purchase_order_id}</button>
                            )):null}
                        </div>
                    </div>
                </div>
           </div>

            <div className='line'></div>
            <div className='InventoryPurchase-po-info-main-div'>
                <p className='sub_title'>Purchase Order Details</p>
                <div className='InventoryPurchase-po-info-div'>
                    <div className='InventoryPurchase-po-info'>
                        <p className='label'>Purchase Order Id </p>
                        <p className=''>:</p>
                        <p>{PoData.purchase_order_id}</p>
                    </div>

                    <div className='InventoryPurchase-po-info'>
                        <p className='label'>Supplier Name  </p>
                        <p className=''>:</p>
                        <p>{PoData.supplier_id}</p>
                    </div>

                    <div className='InventoryPurchase-po-info'>
                        <p className='label'>Purchase Date </p>
                        <p className=''>:</p>
                        <p>5634756uiykghj</p>
                    </div>

                    <div className='InventoryPurchase-po-info'>
                        <p className='label'>User Id </p>
                        <p className=''>:</p>
                        <p>5634756uiykghj</p>
                    </div>

                    <div className='InventoryPurchase-po-info'>
                        <p className='label'>Branch </p>
                        <p className=''>:</p>
                        <p>{PoData.branch}</p>
                    </div>
                </div>
            </div>


            <div className='line'></div>


            <div className='InventoryPurchase-purchase-items-main-div'>
                <p className='sub_title'>Purchasing Items</p>
                <div className='InventoryPurchase-purchase-items-div'>
                    <table>
                        <thead>
                            <tr>
                                <td className='InventoryPurchase-purchase-t-1'>select</td>
                                <td className='InventoryPurchase-purchase-t-2'>name</td>
                                <td className='InventoryPurchase-purchase-t-3'>requested qty</td>
                                <td className='InventoryPurchase-purchase-t-3'>supplied qty</td>
                                <td className='InventoryPurchase-purchase-t-4'>store</td>
                                <td className='InventoryPurchase-purchase-t-5'>location</td>
                                <td className='InventoryPurchase-purchase-t-6'>measure unit</td>
                                <td className='InventoryPurchase-purchase-t-7'>unit purchasing price</td>
                                <td className='InventoryPurchase-purchase-t-8'>description</td>
                                <td className='InventoryPurchase-purchase-t-9'>status</td>
                            </tr>
                        </thead>
                        <tbody>
                           
                                {PoData.po_items.length>0 ? PoData.po_items.map((item, index)=>(
                                    <tr key={index}>
                                        <td className='InventoryPurchase-purchase-t-1'><input type='checkbox' /></td>
                                        <td className='InventoryPurchase-purchase-t-2'>{item.item_name}</td>
                                        <td className='InventoryPurchase-purchase-t-3'>{item.item_requested_quantity}</td>
                                        <td className='InventoryPurchase-purchase-t-3'>
                                            <input type='number' value={item.item_supplied_qty} onChange={(e)=>{
                                                const data = {...PoData}
                                                const items = [...data.po_items]
                                                items[index].item_supplied_qty = e.target.value
                                                data.po_items = items
                                                setPoData(data)
                                                
                                            }}/>
                                        </td>
                                        <td className='InventoryPurchase-purchase-t-4'>
                                            <select value={item.item_store} onChange={(e)=>{
                                                const data = {...PoData}
                                                const items = [...data.po_items]
                                                items[index].item_store = e.target.value
                                                data.po_items = items
                                                setPoData(data)


                                            
                                            }}>
                                                <option >SELECT</option>
                                                <option value={"STORE 1"}>STORE 1</option>
                                                <option value={"STORE 2"}>STORE 2</option>
                                            </select>
                                        </td>
                                        <td className='InventoryPurchase-purchase-t-5'><input value={item.item_location} onChange={(e)=>{
                                            const data = {...PoData}
                                            const items = [...data.po_items]
                                            items[index].item_location = e.target.value
                                            data.po_items = items
                                            setPoData(data)

                                        
                                        }}/></td>
                                        <td className='InventoryPurchase-purchase-t-7'>{item.item_measure_unit}</td>
                                        <td className='InventoryPurchase-purchase-t-6'>{item.item_unit_purchasing_price}</td>
                                        
                                        <td className='InventoryPurchase-purchase-t-8'><textarea value={item.item_description} onChange={(e)=>{
                                            const data = {...PoData}
                                            const items = [...data.po_items]
                                            items[index].item_description = e.target.value
                                            data.po_items = items
                                            setPoData(data)


                                        
                                        }}/></td>
                                        <td className='InventoryPurchase-purchase-t-9'>
                                            <select value={item.item_status} onChange={(e)=>{
                                                const data = {...PoData}
                                                const items = [...data.po_items]
                                                items[index].item_status = e.target.value
                                                data.po_items = items
                                                setPoData(data)


                                            
                                            }}>
                                                <option >SELECT</option>
                                                <option value={'PENDING'}>PENDING</option>
                                                <option value={'RELEASED'}>RELEASED</option>
                                            </select>
                                        </td>
                                        
                                    </tr>
                                    
                                )):null}
                                
                            
                        </tbody>
                    </table>
                </div>
            </div>


            <div className='InventoryPurchase-btn-main-div'>
                <button className='btn-submit' onClick={()=>SubmitHandler()}>Submit</button>
                <button className='btn-cancel'>Cancel</button>
            </div>

        </div>
        
    </div>
  )
}
