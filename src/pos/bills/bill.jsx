import React, { useEffect, useState } from 'react';
import './bill.css';
import axios from 'axios';
import BillPreview1 from '../../components/bill preview 1/billPreview1';

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
        {billPreviewShow ? <BillPreview1 id={billId} CancelHandler={()=>{
            setBillPreviewShow(false)
        
        }}/> : null}

    </div>
  )
}



