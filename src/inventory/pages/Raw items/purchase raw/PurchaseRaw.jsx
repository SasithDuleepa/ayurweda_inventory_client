import React, { useState , useEffect } from 'react';
import './PurchaseRaw.css';
import DropDown from './../../../icons/down-arrow.png';
import AddSupplier from './../../../components/add supplier/AddSupplier';

import IdGenerate from '../../../utils/IdGenerate';

import axios from 'axios';

export default function PurchaseRaw() {
    const[addSupplier,setAddSupplier] = useState('hide');
    const[selectItemDiv , setSelectItemDiv] = useState('PurchaseRaw-form-item-div-results-div-hide');

    const[invoiceId, setInvoiceId] = useState(IdGenerate('invoice')) ;
    const[lotId,setLotId] = useState(IdGenerate('lot'));
    const[supplier,setSupplier] = useState('');
    const[supplierId,setSupplierId] = useState('');

    const[storeId, setStoreId] = useState('');

    const [data,setdata] = useState([])

    const[total,setTotal] = useState(0)


    const[itemsearchResults,setItemsearchResults] = useState([]);

 //NewCustomerClassName btn
 const NewCustomerClassNameBtn = () => {
    if(addSupplier === 'hide'){
        setAddSupplier('uptodown')
    }    }
const NewCustomerClosebtn = () =>{
    setAddSupplier('hide')
}



    const SelectHandler = (unit) =>{
     
        setShowDropdown(false);
    };
    const [showDropdown, setShowDropdown] = useState(false);      
    const toggleDropdown = () => {
      setShowDropdown(!showDropdown);
    };      
    const filterFunction = (e) => {
      console.log(e.target.value);
      
    };

const SelectItemHandler =(id,name,unit_price,unit) =>{
    console.log(id,name,unit_price,unit);
    const newData = [...data]
      newData.push({
        item_id:id,
        item_name:name,
        item_unit_price:unit_price,
        item_qty:0,
        item_unit:unit,
        total:0
      })
      setdata(newData)
    
    setSelectItemDiv('PurchaseRaw-form-item-div-results-div-hide')
}

const ItemSearchBtn=()=>{
    if(selectItemDiv === 'PurchaseRaw-form-item-div-results-div-hide'){
        setSelectItemDiv('PurchaseRaw-form-item-div-results-div-active')
    }
    else if(selectItemDiv === 'PurchaseRaw-form-item-div-results-div-active'){
        setSelectItemDiv('PurchaseRaw-form-item-div-results-div-hide')
    }
}

const SearchItemHandler = async(e) =>{
    if(e.target.value !== ''){
        const res = await axios.get(`http://localhost:8080/raw/search/${e.target.value}`)
        console.log(res.data);
        setItemsearchResults(res.data);
    }else{

    }
    
}

const TotalHandler = ( ) =>{
    let total = 0;
    data.map((item)=>{
        total += item.total
    }
    )
    setTotal(total)

}
useEffect(() =>{
    TotalHandler()
},[
    data
])

const NextHandler =() =>{
    window.location.href='/purchase/raw/store'
}


  return (
    <div className='PurchaseRaw'>
        <div className={addSupplier}>
            <AddSupplier closeFunction={NewCustomerClosebtn}/>
        </div>
        <div>
            
        </div>
        <p className='title'>Purchase Raw</p>
        <div className='line'></div>


        <div className='PurchaseRaw-main-div'>
            <div className='PurchaseRaw-form-div'>
                <label className='sub_title PurchaseRaw-form-label'>Invoice Id</label>
                <p className='sub_title'>:</p>
                <input className='form-input' value={invoiceId} onChange={(e)=>setInvoiceId(e.target.value)} />
            </div>
            <div className='PurchaseRaw-form-div'>
                <label className='sub_title PurchaseRaw-form-label'>Lot ID</label>
                <p className='sub_title'>:</p>
                <input className='form-input' value={lotId} onChange={(e)=>setLotId(e.target.value)} />
            </div>
            <div className='PurchaseRaw-form-div'>
                <label className='sub_title PurchaseRaw-form-label'>Date</label>
                <p className='sub_title'>:</p>
                <input className='form-input' type="date" />
            </div>
            <div className='PurchaseRaw-form_div'>
                <div className='PurchaseRaw-form-div-sub'>
                    <div className='select-sub'>
                            <label>Supplier</label>
                            <p>:</p>
                            <div className="dropdown">
                                <button onClick={toggleDropdown} className="dropbtn">
                                    <input type="text"  id="myInput" onKeyUp={(e)=>filterFunction(e)}/>
                                    <img className={`${showDropdown ? 'drop-down-arrow-clos' : 'drop-down-arrow-expand'}`} src={DropDown} alt="" />
                                </button>
                             <div id="myDropdown" className={`dropdown-content ${showDropdown ? 'show' : ''}`}>
                                    <button onClick={()=>SelectHandler('g')} className='dropdown-select-btn'>g</button>
                                    <button onClick={()=>SelectHandler('ml')} className='dropdown-select-btn'>ml</button>
                                </div>
                            </div>

                </div>
                <button className='PurchaseRaw-form-div-btn' onClick={NewCustomerClassNameBtn}>+</button>

                </div>                
            </div>
            <div className='PurchaseRaw-form-div'>
                <label className='sub_title PurchaseRaw-form-label'>Store</label>
                <p className='sub_title'>:</p>
                <input className='form-input' type="text" disabled/>
            </div>

            <div className='PurchaseRaw-form-item-div'>
                <button className='PurchaseRaw-form-item-div-btn' onClick={ItemSearchBtn}><input placeholder='Search Item' onChange={(e)=>SearchItemHandler(e)}  className='PurchaseRaw-form-item-div-input'/></button>
                
                
            </div>
            <div className={selectItemDiv}>
                {itemsearchResults.length > 0 ?
                    itemsearchResults.map((item,index)=>{
                        return  <button key={index} 
                        onClick={()=>SelectItemHandler(item.raw_item_id,item.raw_item_name,item.raw_item_unit_price,item.raw_item_measure_unit)} 
                        className='PurchaseRaw-form-item-div-result'>{item.raw_item_name}</button>
                    }
                      )
                    :
                    <p>no results</p>
                }
                    
            </div>


            <div className='PurchaseRaw-items-div'>
                <p className='normal_titles PurchaseRaw-items-div-title'>Order Items</p>
                <div className='PurchaseRaw-items-table-header'>
                    <p className='PurchaseRaw-header-1'>#</p>
                    <p className='PurchaseRaw-header-2'>Item Name</p>
                    <p className='PurchaseRaw-header-4'>Unit Price</p>
                    <p className='PurchaseRaw-header-5'>Qty</p>
                    <p className='PurchaseRaw-header-6'>Unit</p>
                    <p className='PurchaseRaw-header-7'>Total</p>
                </div>

                {data.length > 0 ?
                    data.map((item,index)=>{
                        return  <div key={index} className='PurchaseRaw-items-table-body'>
                        <p className='PurchaseRaw-header-1'>{index+1}</p>
                        <p className='PurchaseRaw-header-2'>{item.item_name}</p>
                        <p className='PurchaseRaw-header-4'>{item.item_unit_price}</p>
                        <input className='PurchaseRaw-header-5' type="number" value={item.item_qty} onChange={(e)=>{
                            const newData = [...data]
                            newData[index].item_qty = e.target.value
                            newData[index].total = e.target.value * item.item_unit_price
                            setdata(newData)
                        }}/>
                        <p className='PurchaseRaw-header-6'>{item.item_unit}</p>
                        <p className='PurchaseRaw-header-7'>{item.total}</p>
                    </div>
                    }) :
                    <p>no results</p>

            }


               
            </div>

            <div className='PurchaseRaw-items-summary-div'>
                <div className='PurchaseRaw-items-summary'>
                    
                    <div className='PurchaseRaw-items-summary-sub'>
                        <p>Total</p>
                        <p>{total}</p>
                    </div>

                </div>

            </div>

            <div className='PurchaseRaw-btn-div'>
                <button className='btn PurchaseRaw-btn'>Submit</button>
                <button className='btn PurchaseRaw-btn' onClick={NextHandler}>Next</button>

            </div>
        </div>
    </div>
  )
}
