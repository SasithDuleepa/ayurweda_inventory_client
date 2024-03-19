import React, { useState } from 'react';
import './inventoryDispose.css';
import Arrow from './../../icon/down-arrow.png';
import IdGenerate from './../../utils/id_generate';
import axios from 'axios';  


export default function InventoryDispose() {
  const currentDate = new Date(); // Get the current date and time
  const formattedDate = currentDate.toISOString(); // Format the date to ISO string
  const [userId,setUserId] = useState('USER-000000');
  const [branchId,setBranchId] = useState('BRANCH-000000');

  const [resultsShow,setResultShow] = useState(false);

  const [disposeId,setDisposeId] = useState(IdGenerate('DISPOSE'));

  const [tableData,setTableData] = useState([])


  const [items,setItems] = useState([]);
  const SearchItems =async (e) => {
    if(e.target.value !== ""){
      try {
        const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/inventory/searchInventory/ItemName/ShadowQty/Branch/${e.target.value}/BRANCH-06247866 `)
        console.log(res.data)
        setItems(res.data)
        
      } catch (error) {
        
      }

    }
  }

  const SelectItemHandler =async (inventory_id) =>{
    setResultShow(false)
    try {
      const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/inventory/inventory/InventoryBatchId/${inventory_id}`) 
      console.log(res.data) 
      if(res.data.length > 0){
        res.data.map((item,index)=>{
          const data = [...tableData]
          data.push({
            item_name : item.item_name,
            item_id : item.inventory_batch_id,
            location : item.location,
            available_qty : item.shadow_qty,
            item_qty : 0,
            measure_unit: item.item_measure_unit,
            item_description : '',
          })
          setTableData(data)
        })
      }

    } catch (error) {
      
    }
  }

  const SubmitHandler =async () =>{ 
    const data = {
      dispose_id : disposeId,
      user_id : userId,
      date : formattedDate,
      branch_id: branchId,  
      items : tableData,
    }
    console.log(data)

    try {
      const res = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/dispose/add`, data) 
      console.log(res.data)
      if(res.status === 200 || res.status === 201){
        alert('Dispose Added Successfully')
        setDisposeId(IdGenerate('DISPOSE'))
        setTableData([])
        setItems([])
        setResultShow(false)
      }
    } catch (error) {
      if(error.response.status === 409){
        alert('Already Exist')
    }else if (error.response.status === 400){
        alert('Dispose Not Added')
    }else if (error.response.status === 500){
        alert('Internal Server Error')
    }else if (error.response.status === 404){
        alert('Dispose Not Found')
    }else if (error.response.status === 403){
        alert('Forbidden')
    }
    else if (error.response.status === 401){
        alert('Unauthorized')
    }
    }
    

  }
  return (
    <div>
      <p className='title'>Inventory Dispose</p>
      <div className='container'>
        <div className='InventoryDispose-details-div'>
          <p className='sub_title'>Dispose Details</p>
          <div  className='InventoryDispose-details'>
            <div  className='InventoryDispose-details-form'>
              <label className='label'>Disposal Id</label>
              <label className='label'>:</label>
              <input className='form-input' type='text' value={disposeId} onChange={(e)=>setDisposeId(e.target.value)}/>
            </div>
            

          </div>
        </div>
        <div className='line'></div>
        <div className='InventoryDispose-search-div'>
          <p className='sub_title'> Search Items</p>
          <div  className='InventoryDispose-search-div-main'>

              <div className='InventoryDispose-search'>
                <button  className='InventoryDispose-search-btn' onClick={()=>setResultShow(!resultsShow)}>
                  <input  className='InventoryDispose-search-input' onChange={(e)=>SearchItems(e)} placeholder='Inventory Item Name'/>
                  <img src={Arrow} alt="" className={ resultsShow ?'InventoryDispose-search-img-show':'InventoryDispose-search-img-hide'}  />
                </button>
                <div className={resultsShow ?'InventoryDispose-search-result-div-show' :'InventoryDispose-search-result-div-hide'}>
                  {items.length > 0 ? items.map((item,index)=>(
                    <button key={index} onClick={()=>SelectItemHandler(item.inventory_batch_id)} >
                      <p className='p1'>{item.item_name}</p>
                      <p  className='p2'>{item.location}</p>
                      </button>
                  )) : null
                    }
                </div>

            </div>
            
          </div>
        </div>
        <div className='line'></div>
        <div className='InventoryDispose-items-div'>
          <p className='sub_title'>dispose items</p>
          <div className='InventoryDispose-items-table-div'>
            <table>
              <thead>
                <tr>
                  <td>#</td>
                  <td>item name</td>
                  <td>available quantity</td>
                  <td>quantity</td>
                  <td>measure unit</td>
                  <td>item location</td>
                  <td>item description</td>
                  <td>action</td>


                </tr>
              </thead>
              <tbody>
                {tableData.length>0? tableData.map((item, index)=>(
                  <tr key={index}>
                    <td>{index+1}</td>
                    <td>{item.item_name}</td>
                    <td>{item.available_qty}</td>
                    <td><input type='number' value={item.item_qty} onChange={(e)=>{
                      let temp = [...tableData]
                      temp[index].item_qty = e.target.value;
                      setItems(temp)
                      
                    }}/></td>
                    <td>{item.measure_unit}</td>
                    <td>{item.location}</td>
                    <td><textarea type='text' value={item.item_description} onChange={(e)=>{
                      let temp = [...items]
                      temp[index].item_description = e.target.value;
                      setItems(temp)

                    }}/></td>
                    <td><button onClick={()=>{
                      let temp = [...tableData]
                      temp.splice(index,1)
                      setItems(temp)
                      
                    }}>delete</button></td>

                    
                  
                  </tr>
                )):null}

              </tbody>

            </table>
          </div>
        </div>
        <div className='InventoryDispose-btn-div'>
          <button  className='btn-submit' onClick={SubmitHandler}>Submit</button>
          <button className='btn-cancel'>Cancel</button>
        </div>
      </div>
    </div>
  )
}
