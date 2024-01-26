import React from 'react';
import './PurchaseRawView.css';

export default function PurchaseRawView() {
  return (
    <div className='PurchaseRawView'>
        <p className='title'>Purchase Raw View</p>
        <div className='line'></div>

        <div className='PurchaseRawView-main-1'>
            <div className='PurchaseRawView-main-1-search-div'>
                <div className='PurchaseRawView-search-form'>
                    <label className='sub_title'>start date</label>
                    <p className='sub_title'>:</p>
                    <input className='form-input' type="date" />
                </div>
                <div className='PurchaseRawView-search-form'>
                    <label className='sub_title'>end date</label>
                    <p className='sub_title'>:</p>
                    <input className='form-input' type="date" />
                </div>
                <div className='PurchaseRawView-search-form'>
                    <label className='sub_title'>start date</label>
                    <p className='sub_title'>:</p>
                    <input className='form-input' type="date" />
                </div>
                <div className='PurchaseRawView-search-form'>
                    <label className='sub_title'>lab report</label>
                    <p className='sub_title'>:</p>
                    <input className='form-input' type="date" />
                </div>

            </div>

        </div>
    </div>
  )
}
