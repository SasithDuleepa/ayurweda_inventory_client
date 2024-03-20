import React, { useEffect, useState } from 'react';
import './billPreview1.css';
import axios from 'axios';

export default function BillPreview1(props) {

    const[billPreviewItems, setBillPreviewItems] = useState([]);

    const[billId,setBillid] = useState('');
    const[customerName,setCustomerName] = useState('');
    const[billDate,setBillDate] = useState('');

    useEffect(()=>{
        GetBill(props.id)
    },[props])


    const GetBill = async(id) =>{
        if(id !== ""){
            try {
                const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/pos/getPos/${id}`)
                console.log(res.data);
                setBillPreviewItems(res.data)
                setBillid(res.data[0].pos_id)
                setCustomerName(res.data[0].customer_name)
                setBillDate(res.data[0].pos_date)
            } catch (error) {
                
            }
        }
    }
  return (
    <div className='BillPreview'>
            <div className='container'>
                <p className='title'>Bill Preview</p>
                <div className='line'></div>
                <div className='BillPreview-bill-info-div'>
                    <div className='BillPreview-bill-info-main'>
                        <label className='label'>Bill ID</label>
                        <label className='label'>:</label>
                        <label className='label'>{billId}</label>
                    </div>
                    <div className='BillPreview-bill-info-main'>
                        <label className='label'>Customer Name</label>
                        <label className='label'>:</label>
                        <label className='label'>{customerName}</label>
                    </div>
                    <div className='BillPreview-bill-info-main'>
                        <label className='label'>Bill Date</label>
                        <label className='label'>:</label>
                        <label className='label'>{billDate}</label>
                    </div>
                </div>
                <div className='line'></div>
                <div className='BillPreview-bill-items-div'>
                <table>
                        <thead>
                            <tr>
                                <td>#</td>
                                <td>Item name</td>
                                <td>Qty</td>
                                <td>measure unit</td>
                                <td>unit price</td>
                                <td>total</td>
                            </tr>
                        </thead>
                        <tbody>
                            {billPreviewItems.length > 0 ? billPreviewItems.map((item, index)=>{
                                return(
                                    <tr key={index}>
                                        <td>{index+1}</td>
                                        <td>{item.item_name}</td>
                                        <td>{item.pos_item_qty}</td>
                                        <td>{item.item_measure_unit}</td>
                                        <td>{item.pos_items_price}</td>
                                        <td>{item.pos_item_qty * item.pos_items_price}</td>
                                    </tr>
                                )

                            }
                            )
                            :
                            <tr>

                            </tr>
                            }


                        </tbody>
                    </table>
                </div>


                <div className='BillPreview-btn-div'>
                   <button className='btn-cancel' onClick={props.CancelHandler}>Cancel</button>
                   <button className='btn-submit'>Print</button>
                </div>

            </div>
            
            
        </div>
  )
}
