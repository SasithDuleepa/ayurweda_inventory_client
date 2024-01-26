import React from 'react';
import './PurchaseRawLotView.css';

export default function PurchaseRawLotView() {
  return (
    <div className='PurchaseRawLotView'>
        <p className='title'>purchase raw lot view</p>
        <div className='line'></div>

        <div className='PurchaseRawLotView-main-1'>
            <div className='PurchaseRawLotView-main-1-search-div'>
                <div className='PurchaseRawLotView-search-form'>
                    <label className='sub_title'>Lot Id</label>
                    <p className='sub_title'>:</p>
                    <input className='form-input'  />
                </div>
                <div className='PurchaseRawLotView-search-form'>
                    <label className='sub_title'>Invoice Id</label>
                    <p className='sub_title'>:</p>
                    <input className='form-input'  />
                </div>
                <div className='PurchaseRawLotView-search-form'>
                    <label className='sub_title'>Date</label>
                    <p className='sub_title'>:</p>
                    <input className='form-input' type="date" />
                </div>
                <div className='PurchaseRawLotView-search-form'>
                    <label className='sub_title'>Customer</label>
                    <p className='sub_title'>:</p>
                    <input className='form-input'  />
                </div>

            </div>



            <div className='PurchaseRawLotView-table1-div'>
                <div className='PurchaseRawLotView-table1-header'>
                    <p className='PurchaseRawLotView-table1-col-1'>Invoice Id</p>
                    <p className='PurchaseRawLotView-table1-col-2'>Lot id</p>
                    <p className='PurchaseRawLotView-table1-col-3'>Date</p>
                    <p className='PurchaseRawLotView-table1-col-4'>Customer</p>
                    <p className='PurchaseRawLotView-table1-col-5'>Status</p>
                </div>
                <div className='PurchaseRawLotView-table1-body'>
                <p className='PurchaseRawLotView-table1-col-1'>Invoice Id</p>
                    <p className='PurchaseRawLotView-table1-col-2'>Lot id</p>
                    <p className='PurchaseRawLotView-table1-col-3'>Date</p>
                    <p className='PurchaseRawLotView-table1-col-4'>Customer</p>
                    <p className='PurchaseRawLotView-table1-col-5'>Status</p>
                </div>
            </div>

        </div>
    </div>
  )
}
