import React, { useState } from 'react';
import './Customer.css';
import Search from './../../icons/search.png';
import Filter from './../../icons/filter.png';
import Pdf from './../../icons/pdf.png';
import Excel from './../../icons/excel.png';
import Plus from './../../icons/plus.png';

import AddCustomer from '../../components/add customer/AddCustomer';

export default function Customer() {
    const[NewCustomerClassName, setNewCustomerClassName] = useState('hide')

    //NewCustomerClassName btn
    const NewCustomerClassNameBtn = () => {
        if(NewCustomerClassName === 'hide'){
            setNewCustomerClassName('uptodown')
        }    }
    const NewCustomerClosebtn = () =>{
        setNewCustomerClassName('hide')
}

  return (
    <div className='Customer'>
        <div className={` ${NewCustomerClassName}`}>
            <AddCustomer closeFunction={NewCustomerClosebtn}/>
        </div>
        <p>Customer Manage</p>
        <div className='line'></div>
        <div className='Customer-top-div'>
            <div className='Customer-left-div'>
                <div className='Customer-search-div'>
                    <input className='Customer-search-input' type="text" placeholder='Search' />
                    <img className='Customer-search-icon' src={Search} alt="" />
                </div>
            </div>
            <div className='Customer-right-div'>
                <div className='Customer-btn-div'>
                    <button  className='Customer-btn'>
                        <img src={Filter} alt="" className='customer-btn-icon'/>
                        <p>Filter</p>
                    </button>
                    <button  className='Customer-btn'>
                        <img src={Pdf} alt="" className='customer-btn-icon'/>
                        <p>Pdf</p>
                    </button>
                    <button  className='Customer-btn'>
                        <img src={Excel} alt="" className='customer-btn-icon'/>
                        <p>Excel</p>
                    </button>
                    <button  className='Customer-btn' onClick={NewCustomerClassNameBtn}>
                        <img src={Plus} alt="" className='customer-btn-icon'/>
                        <p>Create</p>
                    </button>
                </div>
            </div>
        </div>

        <div className='Customer-table-div '>

        </div>
    </div>
  )
}
