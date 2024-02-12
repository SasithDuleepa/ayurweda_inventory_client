import React, { useState } from 'react';
import Arrow from '../../../../icon/down-arrow.png';
import './StoreManagerRelease.css';
import axios from 'axios';

export default function StoreManagerRelease() {

        //table data
        const [tableData,setTableData] = useState([]);





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
    const [dropdown2InputValue,setDropdown2InputValue] = useState('')
    const DropDown2Handler = () =>{
        if(dropDown2 === 'dropdown-content-hide'){
            setDropDown2('dropdown-content-show');
        }else{
            setDropDown2('dropdown-content-hide');

        }
    }
    const DropDown2SelectHandler =async (item) =>{
        // setDropdown2InputValue(item.item_name)

        
        if(dropDown2 === 'dropdown-content-hide'){
            setDropDown2('dropdown-content-show');
        }else{
            setDropDown2('dropdown-content-hide');
        }

        //get data according to selected item
        console.log(item)
        if(item.table_name === 'inventory_store_raw_items'){
            //raw items
            try {
                const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/inventory/raw/RELEASED/${item.item_id}`)
                console.log(res.data);
                setTableData(res.data);
                const data = [...tableData]
                data.push({
                    item_id:res.data[0].raw_item_id,
                    item_name:res.data[0].raw_item_name,
                    item_description:res.data[0].inventory_raw_item_description   ,
                    available_qty:res.data[0].raw_item_shadow_qty     ,
                    quantity:0,
                    measure_unit:res.data[0].raw_item_measure_unit,
                    unit_price:1,
                })
                    setTableData(data)
                    console.log(tableData)


            }catch (error) {
            
            }

        }else if(item.table_name === 'inventory_store_products'){

             //products
             try {
                const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/inventory/product/RELEASED/${item.item_id}`)
                console.log(res.data);
                setTableData(res.data);
                const data = [...tableData]
                data.push({
                    item_id:res.data[0].product_id,
                    item_name:res.data[0].product_name,
                    item_description:res.data[0].inventory_product_description,
                    available_qty:res.data[0].product_shadow_qty         ,
                    quantity:0,
                    measure_unit:res.data[0].product_measure_unit                    ,
                    unit_price:1,
                })
                    setTableData(data)
                    console.log(tableData)
            }catch (error) {
            
            }
        }else if(item.table_name === 'inventory_store_non_raw'){
             //products
             try {
                const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/inventory/non-raw/RELEASED/${item.item_id}`)
                console.log(res.data);
                setTableData(res.data);
                const data = [...tableData]
                data.push({
                    item_id:1111,
                    item_name:res.data[0].non_raw_item_name,
                    item_description:res.data[0].non_raw_item_description,
                    available_qty:res.data[0].non_raw_shadow_qty         ,
                    quantity:0,
                    measure_unit:res.data[0].non_raw_measure_unit,
                    unit_price:1,
})
                    setTableData(data)

            }catch (error) {
            
            }
        }

        
    }

    //search item from all
    const [itemSearchResult,setItemSearchResult] = useState([]);
    const ItemSearchHandler = async(e) =>{
        if(e.target.value !== ''){
            setDropdown2InputValue(e.target.value)
            try {
                const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/inventory/all/${e.target.value}`)
                setItemSearchResult(res.data);
            } catch (error) {
                
            }
        }else{
            setItemSearchResult([]);
        }
    }





  return (
    <div className='StoreManagerRelease'>
            <p className='title'>Inventory Store Manager Release</p>

        <div className='line'></div>
        <div className='container'>
            <div className='StoreManagerRelease-info-main-div'>
                <div className='StoreManagerRelease-info-input-div'>
                    <label className='StoreManagerRelease-info-input-label label'>invoice no</label>
                    <label className='StoreManagerRelease-info-input-label label'>:</label>
                    <input className='StoreManagerRelease-info-input form-input' type='text' placeholder='invoice no'/>
                </div>
                <div className='StoreManagerRelease-info-input-div'>
                    <label className='StoreManagerRelease-info-input-label label'>date</label>
                    <label className='StoreManagerRelease-info-input-label label'>:</label>
                    <input className='StoreManagerRelease-info-input form-input' type='text' placeholder='invoice no'/>
                </div>
                <div className='StoreManagerRelease-info-input-div'>
                    <label className='StoreManagerRelease-info-input-label label'>requested by</label>
                    <label className='StoreManagerRelease-info-input-label label'>:</label>
                    <input className='StoreManagerRelease-info-input form-input' type='text' placeholder='invoice no'/>
                </div>
                <div className='StoreManagerRelease-info-input-div'>
                    <label className='StoreManagerRelease-info-input-label label'>invoice no</label>
                    <label className='StoreManagerRelease-info-input-label label'>:</label>
                    <input className='StoreManagerRelease-info-input form-input' type='text' placeholder='invoice no'/>
                </div>
            </div>

            <div className='line'></div>


            <div className='StoreManagerRelease-search-main-div'>
            <div  className='search-select-div'>
                    <label className='StoreManagerRelease-search-div-label label'>Search by Job</label>
                    <label className='StoreManagerRelease-search-div-label label'>:</label>
                    <div className='StoreManagerRelease-search-div-select'>
                        <button onClick={()=>DropDown1Handler()} className='drop-down-btn '>
                            <input className='StoreManagerRelease-search-div-select-input ' type='text' placeholder='Job Number'/>
                            <img src={Arrow} alt='arrow'  className={dropDown1 ==='dropdown-content-hide'? 'select-dropdown-img-on':'select-dropdown-img-off' }/>
                        </button>
                        <div className={dropDown1}>
                            <button onClick={()=>DropDown1SelectHandler()} className='dropdown-select-btn'>jythfgjh</button>
                        </div>
                    </div>
                </div>
                <div  className='search-select-div'>
                    <label className='StoreManagerRelease-search-div-label label'>Search by Item</label>
                    <label className='StoreManagerRelease-search-div-label label'>:</label>
                    <div className='StoreManagerRelease-search-div-select'>
                        <button onClick={()=>DropDown2Handler()} className='drop-down-btn '>
                            <input className='StoreManagerRelease-search-div-select-input ' value={dropdown2InputValue} onChange={(e)=>ItemSearchHandler(e)} type='text' placeholder='Item Name'/>
                            <img src={Arrow} alt='arrow'  className={dropDown2 ==='dropdown-content-hide'? 'select-dropdown-img-on':'select-dropdown-img-off' }/>
                        </button>
                        <div className={dropDown2}>
                            
                            {itemSearchResult.length >0 ? itemSearchResult.map((item,index)=>(
                                <button key={index} onClick={()=>DropDown2SelectHandler(item)} className='dropdown-select-btn'>{item.item_name}</button>
                            )):
                            <p>no item found</p>
                            }
                        </div>
                    </div>
                </div>
            </div>

            
            <div className='StoreManagerRelease-input-main-div'>
                <table>
                    <thead>
                        <th>no</th>
                        <th>Name</th>
                        <th>description</th>
                        <th>available qty</th>
                        <th>Quantity</th>
                        <th>measure unit</th>
                        <th>unit price</th>
                        <th>Total</th>
                    </thead>
                    {tableData.length >0 ? tableData.map((item, index)=>(
                        <tbody key={index}>
                            <td>{index+1}</td>
                            <td>{item.item_name}</td>
                            <td>{item.item_description}</td>
                            <td>{item.available_qty}</td>
                            <td><input onChange={(e)=>{
                                const data = [...tableData]
                                data[index].quantity = e.target.value;
                                setTableData(data)
                            }} /></td>
                            <td>{item.measure_unit}</td>
                            <td>{item.unit_price}</td>
                            <td>{item.quantity * item.unit_price}</td>
                        </tbody>
                    ))
                        :
                        <tbody></tbody>
                        }
                    
                </table>
            </div>

            <div  className='StoreManagerRelease-btn-main-div'>
                <button>Request</button>
            </div>
        </div>
    </div>
  )
}
