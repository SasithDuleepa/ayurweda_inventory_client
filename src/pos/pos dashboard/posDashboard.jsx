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
            // console.log(res.data);
            setBills(res.data)
        } catch (error) {
            
        }
    
    }
    useEffect(()=>{
        GetBills()
    },[billDate])


    //today
    const [todayTotal, setTodayTotal] = useState(0);
    const [todayBill, setTodayBill] = useState(0);
    const [todayBills,setTodayBills] = useState([])
    const ToDaySale = async() =>{
        const today = formattedDate.split('T')[0]
        try {
            const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/pos/billsAccToDate/Branch/PosType/${today}/${brachId}/BRANCH-POS`);
            setTodayBills(res.data)
            let total = 0 ;
            let bill = 0;
            if(res.data.length > 0){
                res.data.forEach(element => {
                    total = total + parseInt(element.pos_net_total)
                    bill ++
                    // console.log(total)
                    
                });
                setTodayTotal(total)
                setTodayBill(bill)
            }
        } catch (error) {
            
        }
    }
    useEffect(()=>{
        ToDaySale()
    },[])


    const[billItems,setBillItems] = useState([])
    const GetBillItems = async () => {
        try {
            const promises = todayBills.map(async (element) => {
                const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/pos/getPos/${element.pos_id}`);
                return res.data;
            });
    
            const billItemsData = await Promise.all(promises);
            
            // Flatten the array of arrays into a single array
            const flattenedBillItems = billItemsData.flat();
            
            // Update billItems state after all promises are resolved
            setBillItems(flattenedBillItems);
        } catch (error) {
            console.error("Error fetching bill items:", error);
        }
    };
    

    useEffect(()=>{
        GetBillItems();

    },[todayBills])

    const [totalBilItems,setTotalBillItems] = useState()

    function calculateTotalQtyPerItem(items) {
        const itemTotals = {};
        items.forEach(item => {
            // billItems
            const itemName = item.item_name;
            const itemQty = parseInt(item.pos_item_qty);

            console.log('bill items',billItems)
            if (itemTotals[itemName]) {
                itemTotals[itemName] += itemQty;
            } else {
                itemTotals[itemName] = itemQty;
                // console.log(itemQty)
            }
            // console.log(itemTotals)
        });
          // Convert itemTotals object into an array of objects
  const resultArray = Object.keys(itemTotals).map(key => ({
    name: key,
    qty: itemTotals[key]
}));
setTotalBillItems(resultArray);
// console.log(resultArray);
}

useEffect(()=>{
    calculateTotalQtyPerItem(billItems)

},[billItems])


//print

const Print = () => {
    
}



    
  return (
    <div>
        <p className='title'> POS Dashboard</p>
        <div className='container'>
            <div className='PosDashboard-div-1'>
                <Card1 title = 'Today Sales' info1="Rs." info2= {todayTotal}/>
                <Card1 title = 'Total Sales' info1="today" info2= {todayBill}/>
                <Card1 title = 'total sold items' info1="today" info2= {totalBilItems && totalBilItems.length}/>
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

            <div className='line'></div>

            <div className='PosDashboard-div-3'>
                <table>
                    <thead>
                        <tr>
                            <td>#</td>
                            <td>item name</td>
                            <td>sold qty</td>
                        </tr>
                    </thead>
                    <tbody>
                        {totalBilItems && totalBilItems.length > 0 ? totalBilItems.map((item,index)=>{
                            return(
                            <tr key={index}>
                                <td>{index +1}</td>
                            <td>{item.name}</td>
                            <td>{item.qty}</td>
                        </tr>)

                        }):
                        <tr>
                            <td colSpan={3}> not item found</td>
                        </tr>}
                        
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
