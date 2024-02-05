import React, { useState , useEffect } from 'react';
import './PurchaseRaw.css';
import DropDown from './../../../icons/down-arrow.png';
import AddSupplier from './../../../components/add supplier/AddSupplier';
import IdGenerate from '../../../utils/IdGenerate';


import axios from 'axios';

export default function PurchaseRaw() {
    const[addSupplier,setAddSupplier] = useState('hide');
    const[selectItemDiv , setSelectItemDiv] = useState('PurchaseRaw-form-item-div-results-div-hide');

    const[userId,setUserId] = useState('user-001');

    const[invoiceId, setInvoiceId] = useState(IdGenerate('invoice')) ;
    const[lotId,setLotId] = useState(IdGenerate('lot'));
    const[supplier,setSupplier] = useState('');
    const[supplierId,setSupplierId] = useState('');
    const[date,setDate] = useState(new Date());

    const[store,setStore] = useState('store-001')

    const[storeId, setStoreId] = useState('111');

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



 
    const [showDropdown, setShowDropdown] = useState(false);      
    const toggleDropdown = () => {
      setShowDropdown(!showDropdown);
    };      

    const[suppliers,setSuppliers] = useState([]);
    const[supplierInputValue,setSupplierInputValue] = useState('')
    const filterFunction = async(e) => {
        setSupplierInputValue(e.target.value);
        
      console.log(e.target.value);
      if(e.target.value !==''){
        const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/supplier/search/${e.target.value}`)
      console.log(res.data)
      setSuppliers(res.data)

      }
      
      
    };
    const SelectHandler = (name,id) =>{
        setSupplierInputValue(name)
        setSupplier(name)
        setSupplierId(id)
        setShowDropdown(false);
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
        const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/raw/search/${e.target.value}`)
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
},[data])

const NextHandler = async () =>{
    

    if(data.length>0 && supplierId !==''&& userId!=='' ){
        try {
            const res = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/purchase/raw/add`,{
                user_id:userId,
                invoice_id:invoiceId,
                lot_id:lotId,
                supplier_id:supplierId,
                store_id:storeId,
                total:total,
                date:date,
                items:data
                
            })
            if(res.status===200){
                window.alert('Raw Items Added Successfully');
                window.location.href=`/purchase/raw/store/${invoiceId}`

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
             window.alert("Error Adding Raw Items");
             }
        }

    }
    else if(data.length === 0){
        alert('Please Add Items')
    }else if(supplierId === ''){
        alert('Please Select Supplier')
    }
}
const SubmitHandler =async () =>{

    if(data.length>0 && supplierId !==''&& userId!=='' ){
        try {
            const res = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/purchase/raw/add`,{
                user_id:userId,
                invoice_id:invoiceId,
                lot_id:lotId,
                supplier_id:supplierId,
                store_id:storeId,
                total:total,
                date:date,
                items:data
                
            })
            if(res.status===200){
                window.alert('Raw Items Added Successfully');
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
                window.alert("Data already exists");
             }
             else{
             window.alert("Error Adding Raw Items");
             }
        }

    }
    else if(data.length === 0){
        alert('Please Add Items')
    }else if(supplierId === ''){
        alert('Please Select Supplier')
    }
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
                <input className='form-input' value={date} onChange={(e)=>setDate(e.target.value)} disabled />

            </div>
            <div className='PurchaseRaw-form_div'>
                <div className='PurchaseRaw-form-div-sub'>
                    <div className='select-sub'>
                            <label>Supplier</label>
                            <p>:</p>
                            <div className="dropdown">
                                <button onClick={toggleDropdown} className="dropbtn">
                                    <input type="text"  id="myInput" value={supplierInputValue} onChange={(e)=>filterFunction(e)}/>
                                    <img className={`${showDropdown ? 'drop-down-arrow-clos' : 'drop-down-arrow-expand'}`} src={DropDown} alt="" />
                                </button>
                             
                                {suppliers.length>0 ? suppliers.map((supplier,index)=>{
                                    return <div key={index} id="myDropdown" className={`dropdown-content ${showDropdown ? 'show' : ''}`}>
                                        <button onClick={()=>SelectHandler(supplier.supplier_name,supplier.supplier_id)} className='dropdown-select-btn'>{supplier.supplier_name}</button>
                                    </div>
                                })
                                    
                                        
                                    

                                
                                
                                
                                
                            :null}
                                    
                                    
                                
                            </div>

                </div>
                <button className='PurchaseRaw-form-div-btn' onClick={NewCustomerClassNameBtn}>+</button>

                </div>                
            </div>
            <div className='PurchaseRaw-form-div'>
                <label className='sub_title PurchaseRaw-form-label'>Store</label>
                <p className='sub_title'>:</p>
                <input className='form-input' type="text" value={(store)} onChange={(e)=>setStore(e.target.value)} disabled/>
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
                        <input className='PurchaseRaw-header-5 PurchaseRaw-header-5-input' type="number" value={item.item_qty} onChange={(e)=>{
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
                <button className='btn PurchaseRaw-btn' onClick={SubmitHandler}>Submit</button>
                <button className='btn PurchaseRaw-btn' onClick={NextHandler}>Next</button>

            </div>
        </div>
    </div>
  )
}
