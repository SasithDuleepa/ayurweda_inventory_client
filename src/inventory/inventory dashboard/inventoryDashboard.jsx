import React, { useEffect, useState } from 'react';
import './inventoryDashboard.css';
import axios from 'axios';

import Card1 from '../../components/card 1/card1';



export default function InventoryDashboard() {


  //get all available items
const[AvailableItems,setAvailableItems] = useState([]);
const[TotalAvailableItems,setTotalAvailableItems] = useState([]);
const GetAllAvailableItems = async() => {
  try {
    const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/inventory/inventory/Shadow/Branch/Status/SellStatus/BRANCH-06247866/ACTIVE/true`);
    console.log(res.data);
    setAvailableItems(res.data);
  } catch (error) {
    
  }
}
useEffect(() => {
  GetAllAvailableItems();
},[])



useEffect(() => {
  calculateTotalQtyPerItem(AvailableItems);
},[AvailableItems])


function calculateTotalQtyPerItem(items) {
  const itemTotals = {};
  items.forEach(item => {
      const itemName = item.item_name;
      const itemQty = parseInt(item.shadow_qty);
      if (itemTotals[itemName]) {
          itemTotals[itemName] += itemQty;
      } else {
          itemTotals[itemName] = itemQty;
      }
  });

  // Convert itemTotals object into an array of objects
  const resultArray = Object.keys(itemTotals).map(key => ({
      name: key,
      qty: itemTotals[key]
  }));
  setTotalAvailableItems(resultArray);
  console.log(TotalAvailableItems);
}

  return (
    <div>
      <p className='title'>Inventory Dashboard</p>
      <div className='container'>
        <div className='inventoryDashboard-div-1'>
          <Card1 title='Total Available Item Qty.' info1="Branch 1" info2="834"/>
          <Card1 title='Total Available Item Qty.' info1="Branch 1" info2="834"/>
          <Card1 title='Total Available Item Qty.' info1="Branch 1" info2="834"/>
        </div>

        <div className='line'></div>

        <div className='inventoryDashboard-div-2'>
          <p className='sub_title'>Request Pending</p>
          <div className='inventoryDashboard-div-2-table-div'>
            <table>
              <thead>
                <tr>
                  <td>#</td>
                  <td>Request id</td>
                  <td>Request Date</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                </tr>
              </tbody>
            </table>

          </div>
        </div>
        
        {/* item availability */}


        <div className='inventoryDashboard-div-3'>
          <table>
            <thead>
              <tr>
                <td>name</td>
                <td>qty</td>
              </tr>
            </thead>
            <tbody>
              {
                TotalAvailableItems.length >0 ? TotalAvailableItems.map((item,index)=>(
                  <tr key={index}>
                    <td>{item.name}</td>
                    <td>{item.qty}</td>
                  
                  </tr>
                )):null
              }
            </tbody>
          </table>


        </div>


      </div>
    </div>
  )
}








