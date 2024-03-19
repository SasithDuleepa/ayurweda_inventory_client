import React, { useEffect, useState } from 'react';
import './bill.css';
import axios from 'axios';

export default function Bill() {
    const[brachId,setBranchId] = useState('BRANCH-0001');
    const [dateFrom, setDateFrom] = useState('');
    const [dateTo, setDateTo] = useState('');
    const[billId,setBillId] = useState('');

    const[billPreviewShow,setBillPreviewShow] = useState(false)

    const [billData , setBillData] = useState([{
        billId:"",
        issuedDate:"",
        customer_name:""
    }])
    //invoice no search
    const BillSearchHandler = async(e) => {  
        if(e.target.value !== ""){
            try {
                const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/pos/search/BillId/Branch/PosType/${e.target.value}/${brachId}/BRANCH-POS`)
                console.log(res.data);
               let bills = res.data
               setBillData(bills)
            } catch (error) {
                
            }
        }
     }

     //date range search
     const BillSearchDateHandler = async(e) => {
  
        if(e.target.id === "dateFrom"){
            setDateFrom(e.target.value)
        }
        else if(e.target.id === "dateTo"){
            setDateTo(e.target.value)
        }
        if(dateFrom !== "" && dateTo !== ""){
            try {
                const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/pos/search/RateRanged/Branch/PosType/${dateFrom}/${dateTo}/${brachId}/BRANCH-POS`)
                console.log(res.data);
               let bills = res.data
               setBillData(bills)
            } catch (error) {

            }
        }
     
     }

     

     const BillSelectHandler = async(id) => {
        console.log(id)
        setBillId(id)
        setBillPreviewShow(true)

       
        }
 
  return (
    <div>
        <p className='title'> Pos Bills</p>
        <div className='container'>
            <div className='bill-search-div'>
                <div className='bill-search-bill_id'>
                    <label className='label'>Bill ID</label>
                    <label className='label'>:</label>
                    <input type="text"  onChange={(e)=>BillSearchHandler(e)}/>
                </div>
                <div className='bill-search-date'>
                    <div className='bill-search-date-from'>
                        <label className='label'>From</label>
                        <label className='label'>:</label>
                        <input type="date" id='dateFrom' value={dateFrom} onChange={(e)=>BillSearchDateHandler(e)}/>
                    </div>
                    <div className='bill-search-date-to'>
                        <label className='label'>To</label>
                        <label className='label'>:</label>
                        <input type="date" id='dateTo' value={dateTo} onChange={(e)=>BillSearchDateHandler(e)}/>
                    </div>

                </div>
            </div>

            <div className='line'></div>

            <div className='bill-div'>
                <table>
                    <thead>
                        <tr>
                            <td>#</td>
                            <td>Bill Id</td>
                            <td>Issued Date</td>
                            <td>Customer</td>
                        </tr>
                    </thead>
                    <tbody>

                        
                            {billData.length > 0 ? billData.map((bill,index)=>{
                                return(
                                    <tr key={index} onClick={()=>BillSelectHandler(bill.pos_id)}>
                                        <td>{index+1}</td>
                                        <td>{bill.pos_id}</td>
                                        <td>{bill.pos_date}</td>
                                        <td>{bill.customer_name}</td>
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

            <div className='bill-btn-div'>
                <button className='btn-cancel'>Cancel</button>
            </div>
        </div>
        {billPreviewShow ? <BillPreview id={billId} CancelHandler={()=>{
            setBillPreviewShow(false)
        
        }}/> : null}

    </div>
  )
}



const BillPreview = (props) =>{
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
    return(
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