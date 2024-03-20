import React, { useEffect, useState } from 'react';
import './posDashboard.css';

import Card1 from '../../components/card 1/card1';
import BillPreview1 from '../../components/bill preview 1/billPreview1';
import  axios  from 'axios';



export default function PosDashboard() {

    const currentDate = new Date(); // Get the current date and time
  const formattedDate = currentDate.toISOString(); // Format the date to ISO string

    const [billPreviewShow,setBillPreviewShow] = useState(false);
    const [billId,setBillId] = useState('');
    const[brachId,setBranchId] = useState('BRANCH-0001');
    const [billDate,setBillDate] = useState(formattedDate.split('T')[0]);

    //get bills according to date
    const [bills,setBills] = useState([]);
    const GetBills = async() => {
        try {
            const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/pos/billsAccToDate/Branch/PosType/${billDate}/${brachId}/BRANCH-POS`)
            console.log(res.data);
            setBills(res.data)
        } catch (error) {
            
        }
    
    }
    useEffect(()=>{
        GetBills()
    },[billDate])
  return (
    <div>
        <p className='title'> POS Dashboard</p>
        <div className='container'>
            <div className='PosDashboard-div-1'>
                <Card1 title = 'Today Sales' info1="Rs." info2= "10000.00"/>
                <Card1 title = 'Total Sales' info1="today" info2= "10000"/>
            </div>

            <div className='line'></div>

            <div className='PosDashboard-div-2'>
                <div className='PosDashboard-div-2-date-div'>
                    <label className='label'>Date</label>
                    <label className='label'>:</label>
                    <input type="date" value={billDate} onChange={(e)=>{setBillDate(e.target.value)}}/>
                </div>
                <table>
                    <thead>
                        <tr>
                            <td>#</td>
                            <td>Bill id</td>
                            <td>date-time</td>
                            <td>total</td>
                        </tr>
                    </thead>
                    <tbody>
                        {bills.length > 0 ? bills.map((bill,index)=>{
                            return(
                                <tr key={index} onClick={()=>{setBillId(bill.pos_id );setBillPreviewShow(true)}}>
                                    <td>{index+1}</td>
                                    <td>{bill.pos_id}</td>
                                    <td>{bill.pos_date}</td>
                                    <td>{bill.pos_net_total}</td>
                                </tr>
                            )
                        }):null}
                       
                    </tbody>
                </table>
            </div>
        </div>

        { billPreviewShow && <BillPreview1 id={billId} CancelHandler={()=>{
            setBillPreviewShow(false)
        
        }}/> }
    </div>
  )
}
