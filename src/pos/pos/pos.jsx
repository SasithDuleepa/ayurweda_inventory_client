import React, { useState,useEffect } from 'react';
import './pos.css';
import Arrow from '../../icon/down-arrow.png';
import IdGenerate from '../../utils/id_generate';
import axios from 'axios';
import { socket } from '../../socket';

import AddCustomer from '../../customer/add customer/addCustomer';


import TopNaw from '../../components/top nav/topNaw';

export default function Pos() {



//notification 
  setInterval(() => {
    socket.on('statusChange', (data) => {
      console.log(data)
    })
}, 5000)

  const[tableData, setTableData] = useState([])

  const[invoiceNo,setInvoiceNo] = useState(IdGenerate('INVOICE'));
  const[branch,setBranch] = useState('BRANCH-0001');
  const[date,setDate] = useState();
  const[userId,setUserId] = useState('USER-0001');
  const [userName, setUserName] = useState('USER-0001');


  //item search
  const [dropDown1, setDropDown1] = useState('pos-dropdown-content-hide')
  const DropDown1Handler = () =>{
    if(dropDown1 === 'pos-dropdown-content-hide'){
      setDropDown1('pos-dropdown-content-show')
    }else if(dropDown1 === 'pos-dropdown-content-show'){
      setDropDown1('pos-dropdown-content-hide')
    }
  }
  const [dropDown1Results,setDropDown1Results] = useState([]);
  const DropDown1SearchHandler =async (e) =>{
    if(e.target.value !== ''){
      try {
        const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/inventory/all/${e.target.value}`)  
        console.log(res.data)
        setDropDown1Results(res.data)
      } catch (error) {
        
      }
    }else{
      setDropDown1Results([])
    }
      
    
  }
  const DropDown1SelectHandler =async (inventory_id) =>{
    console.log(inventory_id)
    let item_cetergory = inventory_id.split('-')
    if(item_cetergory[1] === 'RAW'){
      try {
        const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/inventory/raw/item/RELEASED/${inventory_id}`)
        console.log(res.data);
        let data = {
          item_inventory_id : res.data[0].raw_item_inventory_id ,
          item_id : res.data[0].raw_item_id,
          item_name : res.data[0].raw_item_name,
          item_price: res.data[0].raw_item_unit_price ,
          available_qty: res.data[0].raw_item_shadow_qty,
          item_quantity: 0,
          item_total: 0,
          action:'delete',
        }
        let temp = [...tableData]
        temp.push(data)
        setTableData(temp)
      } catch (error) {
        
      }
    }
    else if(item_cetergory[1] === 'NRAW'){
      try {
        const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/inventory/non-raw/item/RELEASED/${inventory_id}`)
        console.log(res.data)
        let data = {
          item_inventory_id : res.data[0].non_raw_inventory_item_id,
          item_id : res.data[0].non_raw_item_id,
          item_name : res.data[0].non_raw_item_name,
          item_price: res.data[0].non_raw_item_unit_price,
          available_qty: res.data[0].non_raw_shadow_qty,
          item_quantity: 0,
          item_total: 0,
          action:'delete',
        }
        let temp = [...tableData]
        temp.push(data)
        setTableData(temp)
      } catch (error) {
        
      }
    }
    else if(item_cetergory[1] === 'PRODUCT'){
      try {
        const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/inventory/product/item/RELEASED/${inventory_id}`)
        console.log(res.data)
        let data = {
          item_inventory_id : res.data[0].inventory_product_id ,
          item_id : res.data[0].product_id,
          item_name : res.data[0].product_name,
          item_price: res.data[0].product_unit_price,
          available_qty: res.data[0].product_shadow_qty,
          item_quantity: 0,
          item_total: 0,
          action:'delete',
        }
        let temp = [...tableData]
        temp.push(data)
        setTableData(temp)
      } catch (error) {
        
      }
    }
  }





  //customer
  const [dropDown2, setDropDown2] = useState('pos-info-customer-search-content-hide');
  const[customerName, setCustomerName] = useState('');
  const [customerId,setCustomerId] = useState('');
  
  const DropDown2Handler = () =>{
    if(dropDown2 === 'pos-info-customer-search-content-hide'){
      setDropDown2('pos-info-customer-search-content-show')
    }else if(dropDown2 === 'pos-info-customer-search-content-show'){
      setDropDown2('pos-info-customer-search-content-hide')
    }
  }

  const[customers, setCustomers] = useState([])
  const CustomerSearchHandler = async (e) => {
    setCustomerName(e.target.value)
    if(e.target.value !== ''){
      try {
        const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/customer/search/${e.target.value}`)
        console.log(res.data)
        setCustomers(res.data)
      } catch (error) {
        
      }
    }
  };
  const CustomerSelectHandler = async (customer) => {
    setCustomerName(customer.customer_name)
    setCustomerId(customer.customer_id)
    setDropDown2('pos-info-customer-search-content-hide')
  
  }





  const EnterHandler = () => {
    const data = {
      invoice_id : invoiceNo,
      branch_id : branch,
      date : date,
      user_id:userId,
      customer_id:customerId,
      customer_type:'registered',
      item_data : tableData,
    }
    console.log(data)
  }

  //customer close
  const [customerShow, setCustomerShow] = useState(false);
  const CustomerAddHandler = () =>{
    setCustomerShow(true)
  }
  const CustomerCloseHandler = () =>{
    setCustomerShow(false)
  }
  return (
    <div className='pos'>

      <TopNaw moduleName ='Point of Sale' userName={userName}/>
        <div className='container'>

            <div className='pos-info-div'>
              <div className='pos-info-div-form'>
                <label className='pos-info-div-form-label label'>Invoice no.</label>
                <label className=' label'>:</label>
                <input  className='pos-info-div-form-input form-input' type='text' value={invoiceNo} onChange={(e)=>setInvoiceNo(e.target.value)} placeholder='invoice'/>
              </div>

              <div className='pos-info-div-form'>
                <label className='pos-info-div-form-label label'>Branch</label>
                <label className='label'>:</label>
                <select className='pos-info-div-form-input form-input'>
                  <option>Select Branch</option>
                  <option>Branch 1</option>
                  <option>Branch 2</option>
                  <option>Branch 3</option>
                </select>
              </div>

              <div className='pos-info-div-form'>
                <label className='pos-info-div-form-label label'>Date</label>
                <label className='label'>:</label>
                <input  className='pos-info-div-form-input form-input' value={date} onChange={(e)=>setDate(e.target.value)} type='datetime-local' placeholder='invoice'/>
              </div>

              <div className='pos-info-div-form'>
                <label className='pos-info-div-form-label label'>User</label>
                <label className=' label'>:</label>
                <input  className='pos-info-div-form-input form-input' type='text'  placeholder='user'/>
              </div>

              <div className='pos-info-div-form'>
                <label className='pos-info-div-form-label label'>Customer Type</label>
                <label className=' label'>:</label>
                <select  className='pos-info-div-form-input form-input' >
                  <option>Select Customer type</option>
                  <option>Register</option>
                  <option>Guest</option>
                </select>
              </div>

              <div className='pos-info-div-form'>
                <p className='label'> Customer</p>
                <p className='label'> :</p>
                <div className='pos-info-customer-div'>
                  <div className='pos-info-customer-search-div'>
                    <button onClick={()=>DropDown2Handler()} className='pos-info-customer-search-btn'>
                      <input onChange={(e)=>CustomerSearchHandler(e)} value={customerName} className='pos-info-customer-search-input' placeholder='Customer name'/>
                      <img src={Arrow} alt='arrow'  className={dropDown2 === 'pos-info-customer-search-content-show' ? 'pos-select-dropdown-img-on':'pos-select-dropdown-img-off'}/>
                    </button>
                    <div className={dropDown2}>
                      {customers.length >0 ? customers.map((item,index)=>{
                        return  <button key={index} onClick={()=>CustomerSelectHandler(item)}  className='pos-info-dropdown-select-btn'>{item.customer_name}</button>
                      }) : null}
                      
                    </div>
                  </div>
                  <div className='pos-info-customer-add-div'>
                    <button onClick={()=>CustomerAddHandler()} className='pos-info-customer-add-btn'>+</button>
                  </div>
                </div>
               
              </div>

              
            </div>


            <div className='line'></div>


            <div className='pos-search-div'>
              <div  className='pos-search-div-sub'>

                <div className='pos-search-div-1-select'>
                  <button onClick={()=>DropDown1Handler()}  className='pos-search-div-1-select-drop-down-btn '>
                    <input className='pos-search-div-1-select-input' onChange={(e)=>DropDown1SearchHandler(e)}  type='text' placeholder='item name'/>
                      <img src={Arrow} alt='arrow'  className={dropDown1 ==='pos-dropdown-content-hide'? 'pos-select-dropdown-img-on':'pos-select-dropdown-img-off' }/>
                  </button>
                  <div className={dropDown1}>
                    {dropDown1Results.length > 0 ? dropDown1Results.map((item,index)=>(
                      <button key={index} onClick={()=>DropDown1SelectHandler(item.Inventory_item_id)} className='pos-dropdown-select-btn'>
                        <p className='pos-dropdown-select-btn-p1'>{item.item_name}</p>
                        <p className='pos-dropdown-select-btn-p2'>{item.purchased_date}</p>
                      </button>
                    ))
                  :null}
                                     </div>
                </div>
              </div>
            </div>

            <div className='line'></div>


            <div className='pos-table-div'>
              <table>
                <thead>
                  <tr>
                    <td>#</td>
                    <td>item name</td>
                    <td>available_qty</td>
                    <td>price</td>
                    <td>qty</td>
                    <td>total</td>
                    <td>action</td>
                  </tr>
                </thead>
                <tbody>
                  {tableData.length > 0 ? tableData.map((item, index)=>(
                    <tr key={index}>
                      <td>{index+1}</td>
                      <td>{item.item_name}</td>
                      <td>{item.available_qty}</td>
                      <td>{item.item_price}</td>
                      {/* <td>{item.item_quantity}</td> */}
                      <td><input value={item.item_quantity} 
                      onChange={(e)=>{
                        let temp = [...tableData]
                        temp[index].item_quantity = e.target.value
                        temp[index].item_total = temp[index].item_quantity * temp[index].item_price
                        setTableData(temp)
                      }}/></td>
                      <td>{item.item_total}</td>
                      {/* <td>{item.action}</td> */}
                      <td><button onClick={()=>{
                        let temp = [...tableData]
                        temp.splice(index,1)
                        setTableData(temp)
                      }
                      }>Delete</button></td>
                    </tr>
                  )):null}
                  {tableData.length === 0 ? <tr><td colSpan='6'>no data</td></tr>:null}
                </tbody>

              </table>
            </div>


            <div className='pos-btn-div'>
              <button className='btn-cancel'>cancel</button>
              <button onClick={(e)=>EnterHandler()} className='btn-submit'>enter</button>
            </div>


        </div>



        {/* add customer */}
        <div className={customerShow ? 'pos-add-customer-show': 'pos-add-customer-hide' }>
                      <AddCustomer close={()=>CustomerCloseHandler()}/>
        </div>
    </div>
  )
}
