import React, { useState } from 'react';
import './Supplier.css';

import Search from './../../icons/search.png';
import Filter from './../../icons/filter.png';
import Pdf from './../../icons/pdf.png';
import Excel from './../../icons/excel.png';
import Plus from './../../icons/plus.png'

import AddSupplier from '../../components/add supplier/AddSupplier';
import SupplierFilter from '../../components/supplier filter/SupplierFilter';

export default function Supplier() {
    const[NewSupplierClassName, setNewSupplierClassName] = useState('hide');
    const[SupplierFilterClassName, setSupplierFilterClassName] = useState('righttoleft');

    //NewSupplierClassName btn
    const NewSupplierClassNameBtn = () => {
        if(NewSupplierClassName === 'hide'){
            setNewSupplierClassName('uptodown')
        }    }
    const NewSupplierClosebtn = () =>{
        setNewSupplierClassName('hide')
    }


    //SupplierFilterClassName btn
    const SupplierFilterClassNameBtn = () => {
            setSupplierFilterClassName('righttoleft');
          }
        const SupplierFilterClosebtn = () =>{
            setSupplierFilterClassName('hide')
        }
  return (
    <div className='Supplier'>
    <div className={` ${NewSupplierClassName}`}>
        <AddSupplier closeFunction={NewSupplierClosebtn}/>
    </div>
    <div className={`${SupplierFilterClassName}`}>
        <SupplierFilter closeFunction={SupplierFilterClosebtn}/>
    </div>
    <p>Supplier Manage</p>
    <div className='line'></div>
    <div className='Supplier-top-div'>
        <div className='Supplier-left-div'>
            <div className='Supplier-search-div'>
                <input className='Supplier-search-input' type="text" placeholder='Search' />
                <img className='Supplier-search-icon' src={Search} alt="" />
            </div>
        </div>
        <div className='Supplier-right-div'>
            <div className='Supplier-btn-div'>
                <button  className='Supplier-btn'onClick={SupplierFilterClassNameBtn}>
                    <img src={Filter} alt="" className='Supplier-btn-icon' />
                    <p>Filter</p>
                </button>
                <button  className='Supplier-btn'>
                    <img src={Pdf} alt="" className='Supplier-btn-icon'/>
                    <p>Pdf</p>
                </button>
                <button  className='Supplier-btn'>
                    <img src={Excel} alt="" className='Supplier-btn-icon'/>
                    <p>Excel</p>
                </button>
                <button  className='Supplier-btn' onClick={NewSupplierClassNameBtn}>
                    <img src={Plus} alt="" className='Supplier-btn-icon'/>
                    <p>Create</p>
                </button>
            </div>
        </div>
    </div>

    <div className='Supplier-table-div '>

    </div>
</div>
  )
}
