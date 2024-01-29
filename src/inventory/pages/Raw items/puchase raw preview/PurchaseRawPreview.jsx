import React from 'react';
import './PurchaseRawPreview.css';
import { useParams } from 'react-router-dom';

export default function PurchaseRawPreview() {
    const {invoice_id} = useParams();
    console.log(invoice_id);

  return (
    <div className='PurchaseRawPreview'>
        <p className='title'>Purchase Raw Preview</p>
        <div className='line'></div>

        <div className='PurchaseRawPreview-main'>
            <div className='PurchaseRawPreview-bill-info'>
                <div className='PurchaseRawPreview-bill-info-1'>
                <div className='PurchaseRawPreview-p-div'>
                <p className='PurchaseRawPreview-p sub_title'>Invoice Id</p>
                <p className='PurchaseRawPreview-p sub_title'>:</p>
                <p className='PurchaseRawPreview-p sub_title'>Invoice-43545</p>
            </div>

            <div className='PurchaseRawPreview-p-div'>
                <p className='PurchaseRawPreview-p sub_title'>Lot Id</p>
                <p className='PurchaseRawPreview-p sub_title'>:</p>
                <p className='PurchaseRawPreview-p sub_title'>Lot-43545</p>
            </div>

            <div className='PurchaseRawPreview-p-div'>
                <p className='PurchaseRawPreview-p sub_title'>Customer Name</p>
                <p className='PurchaseRawPreview-p sub_title'>:</p>
                <p className='PurchaseRawPreview-p sub_title'>customer 7645g</p>
            </div>
                </div>
                <div className='PurchaseRawPreview-bill-info-2'>
                <div className='PurchaseRawPreview-p-div'>
                <p className='PurchaseRawPreview-p sub_title'>Date</p>
                <p className='PurchaseRawPreview-p sub_title'>:</p>
                <p className='PurchaseRawPreview-p sub_title'>Invoice-43545</p>
            </div>
            <div className='PurchaseRawPreview-p-div'>
                <p className='PurchaseRawPreview-p sub_title'>Store</p>
                <p className='PurchaseRawPreview-p sub_title'>:</p>
                <p className='PurchaseRawPreview-p sub_title'>Invoice-43545</p>
            </div>
            <div className='PurchaseRawPreview-p-div'>
                <p className='PurchaseRawPreview-p sub_title'>Status</p>
                <p className='PurchaseRawPreview-p sub_title'>:</p>
                <p className='PurchaseRawPreview-p sub_title'>Invoice-43545</p>
            </div>
                </div>
            

           
            </div>



            <div  className='PurchaseRawPreview-table'>
                <div className='PurchaseRawPreview-table-header'>
                    <p className='PurchaseRawPreview-table-col-1'>Item Name</p>
                    <p className='PurchaseRawPreview-table-col-2'>Qty</p>
                    <p className='PurchaseRawPreview-table-col-3'>unit</p>
                    <p className='PurchaseRawPreview-table-col-4'>Unit price</p>
                    <p className='PurchaseRawPreview-table-col-5'>Total</p>
                    <p className='PurchaseRawPreview-table-col-6'>Lab Status</p>
                </div>
                <div className='PurchaseRawPreview-table-body'>
                    <p className='PurchaseRawPreview-table-col-1'>Item Name</p>
                    <p className='PurchaseRawPreview-table-col-2'>Qty</p>
                    <p className='PurchaseRawPreview-table-col-3'>unit</p>
                    <p className='PurchaseRawPreview-table-col-4'>Unit price</p>
                    <p className='PurchaseRawPreview-table-col-5'>Total</p>
                    <p className='PurchaseRawPreview-table-col-6'>Lab Status</p>
                </div>
                <div className='PurchaseRawPreview-table-total-div'>
                    <div className='PurchaseRawPreview-table-total-div-sub'>
                        <p>Total</p>
                        <p>:</p>
                        <p>456</p>
                    </div>
                </div>

            </div>

            <div className='PurchaseRawPreview-btn-div'>
                <button className='btn PurchaseRawPreview-btn'>Print</button>
            </div>
        </div>
    </div>
  )
}
