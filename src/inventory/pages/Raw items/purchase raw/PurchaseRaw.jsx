import React, { useState , useEffect } from 'react';
import './PurchaseRaw.css';
import DropDown from './../../../icons/down-arrow.png';
import AddSupplier from './../../../components/add supplier/AddSupplier';

export default function PurchaseRaw() {
    const[addSupplier,setAddSupplier] = useState('hide');
    const[selectItemDiv , setSelectItemDiv] = useState('PurchaseRaw-form-item-div-results-div-hide')

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

const SelectItemHandler =() =>{
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
                <input className='form-input'  />
            </div>
            <div className='PurchaseRaw-form-div'>
                <label className='sub_title PurchaseRaw-form-label'>Lot ID</label>
                <p className='sub_title'>:</p>
                <input className='form-input'  />
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
                <button className='PurchaseRaw-form-item-div-btn' onClick={ItemSearchBtn}><input placeholder='Search Item'  className='PurchaseRaw-form-item-div-input'/></button>
                
                
            </div>
            <div className={selectItemDiv}>
                    <button onClick={()=>SelectItemHandler()} className='PurchaseRaw-form-item-div-result'>item 1</button>
            </div>


            <div className='PurchaseRaw-items-div'>
                <p className='normal_titles PurchaseRaw-items-div-title'>Order Items</p>
                <div className='PurchaseRaw-items-table-header'>
                    <p className='PurchaseRaw-header-1'>#</p>
                    <p className='PurchaseRaw-header-2'>Item</p>
                    <p className='PurchaseRaw-header-3'>Net Unit Cost</p>
                    <p className='PurchaseRaw-header-4'>Current Stock</p>
                    <p className='PurchaseRaw-header-5'>Qty</p>
                    <p className='PurchaseRaw-header-6'>Unit</p>
                    <p className='PurchaseRaw-header-7'>Location</p>
                    <p className='PurchaseRaw-header-8'>Tax</p>
                    <p className='PurchaseRaw-header-9'>sub Total</p>
                </div>
                <div className='PurchaseRaw-items-table-body'>
                    <p className='PurchaseRaw-header-1'>#</p>
                    <p className='PurchaseRaw-header-2'>Item</p>
                    <p className='PurchaseRaw-header-3'>Net Unit Cost</p>
                    <p className='PurchaseRaw-header-4'>Current Stock</p>
                    <p className='PurchaseRaw-header-5'>Qty</p>
                    <p className='PurchaseRaw-header-6'>Unit</p>
                    <p className='PurchaseRaw-header-7'>Location</p>
                    <p className='PurchaseRaw-header-8'>Tax</p>
                    <p className='PurchaseRaw-header-9'>sub Total</p>
                </div>
                <div className='PurchaseRaw-items-table-body'>
                    <p className='PurchaseRaw-header-1'>#</p>
                    <p className='PurchaseRaw-header-2'>Item</p>
                    <p className='PurchaseRaw-header-3'>Net Unit Cost</p>
                    <p className='PurchaseRaw-header-4'>Current Stock</p>
                    <p className='PurchaseRaw-header-5'>Qty</p>
                    <p className='PurchaseRaw-header-6'>Unit</p>
                    <p className='PurchaseRaw-header-7'>Discount</p>
                    <p className='PurchaseRaw-header-8'>Tax</p>
                    <p className='PurchaseRaw-header-9'>sub Total</p>
                </div>
            </div>

            <div className='PurchaseRaw-items-summary-div'>
                <div className='PurchaseRaw-items-summary'>
                    
                    <div className='PurchaseRaw-items-summary-sub'>
                        <p>Grand Total</p>
                        <p>2220</p>
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
