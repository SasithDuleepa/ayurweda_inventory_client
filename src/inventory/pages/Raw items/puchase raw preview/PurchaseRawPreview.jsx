import React, { useEffect, useState } from 'react';
import './PurchaseRawPreview.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function PurchaseRawPreview() {
    const {invoice_id} = useParams();
    console.log(invoice_id);

    const[invoiceData,setInvoiceData] = useState([]);

    const GetInvoiceItemData =async()=>{
        const res =await axios.get(`${process.env.REACT_APP_BACKEND_URL}/purchase/raw/raw/${invoice_id}`);
        console.log(res.data);
        setInvoiceData(res.data);
    }
    useEffect(()=>{
        GetInvoiceItemData();
    },[invoice_id])

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
                <p className='PurchaseRawPreview-p sub_title'>{invoice_id}</p>
            </div>

            <div className='PurchaseRawPreview-p-div'>
                <p className='PurchaseRawPreview-p sub_title'>Lot Id</p>
                <p className='PurchaseRawPreview-p sub_title'>:</p>
                <p className='PurchaseRawPreview-p sub_title'>{invoiceData.length>0 ? invoiceData[0].lot_id : null}</p>
            </div>

            <div className='PurchaseRawPreview-p-div'>
                <p className='PurchaseRawPreview-p sub_title'>Supplier Name</p>
                <p className='PurchaseRawPreview-p sub_title'>:</p>
                <p className='PurchaseRawPreview-p sub_title'>{invoiceData.length>0 ? invoiceData[0].supplier_id : null}</p>
            </div>
                </div>
                <div className='PurchaseRawPreview-bill-info-2'>
                <div className='PurchaseRawPreview-p-div'>
                <p className='PurchaseRawPreview-p sub_title'>Date</p>
                <p className='PurchaseRawPreview-p sub_title'>:</p>
                <p className='PurchaseRawPreview-p sub_title'>{invoiceData.length>0 ? invoiceData[0].purchased_date : null}</p>
            </div>
            <div className='PurchaseRawPreview-p-div'>
                <p className='PurchaseRawPreview-p sub_title'>Store</p>
                <p className='PurchaseRawPreview-p sub_title'>:</p>
                <p className='PurchaseRawPreview-p sub_title'>{invoiceData.length>0 ? invoiceData[0].store_id : null}</p>
            </div>
            <div className='PurchaseRawPreview-p-div'>
                <p className='PurchaseRawPreview-p sub_title'>Status</p>
                <p className='PurchaseRawPreview-p sub_title'>:</p>
                <p className='PurchaseRawPreview-p sub_title'>{invoiceData.length>0 ? invoiceData[0].status : null}</p>
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
                {invoiceData.length>0 ? invoiceData.map((item,index)=>{
                    return <div className='PurchaseRawPreview-table-body' key={index}>
                    <p className='PurchaseRawPreview-table-col-1'>{item.item_id}</p>
                    <p className='PurchaseRawPreview-table-col-2'>{item.item_qty}</p>
                    <p className='PurchaseRawPreview-table-col-3'>{item.item_unit}</p>
                    <p className='PurchaseRawPreview-table-col-4'>{item.unit_price}</p>
                    <p className='PurchaseRawPreview-table-col-5'>{item.unit_price * item.item_qty}</p>
                    <p className='PurchaseRawPreview-table-col-6'>{item.item_lab_report_status}</p>
                </div>
                }
                ) : null}
                
                <div className='PurchaseRawPreview-table-total-div'>
                    <div className='PurchaseRawPreview-table-total-div-sub'>
                        <p>Total</p>
                        <p>:</p>
                        <p>{invoiceData.length>0 ? invoiceData[0].total : null}</p>
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
