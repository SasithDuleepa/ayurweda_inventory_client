import React, { useState,useEffect } from 'react';
import './pos.css';
import Arrow from '../../icon/down-arrow.png';
import IdGenerate from '../../utils/id_generate';
import axios from 'axios';
import { socket } from '../../socket';

import AddCustomer from '../../customer/add customer/addCustomer';


import TopNaw from '../../components/top nav/topNaw';

export default function Pos() {

  const currentDate = new Date(); // Get the current date and time
  const formattedDate = currentDate.toISOString(); // Format the date to ISO string
  const [userId,setUserId] = useState('USER-000000');



  const [total,setTotal] = useState(0);
  const [discount,setDiscount] = useState(0);
  const [netTotal,setNetTotal] = useState(0);
  const [cash,setCash] = useState(0);
  const [change,setChange] = useState(0);



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
        const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/inventory/searchInventory/ItemName/InventoryStatus/ShadowQty/Branch/${e.target.value}/ACTIVE/BRANCH-06247866 `)  
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
    setDropDown1('pos-dropdown-content-hide')
    try {
      const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/inventory/inventory/InventoryBatchId/${inventory_id}`)  
      console.log(res.data)
      const data = {
        inventory_id : res.data[0].inventory_batch_id,
        item_name :res.data[0].item_name,
        item_price : res.data[0].item_unit_selling_price,
        item_available_qty : res.data[0].shadow_qty,
        item_qty : 0,
        item_total : 0,
      }
      setTableData([...tableData,data])

   
    } catch (error) {
      
    }

  }





  //customer
  const [dropDown2, setDropDown2] = useState('pos-info-customer-search-content-hide');
  const[customerName, setCustomerName] = useState('');
  const [customerId,setCustomerId] = useState('CUSTOMER-0000');
  
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
        const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/customer/search/name/contact/status/${e.target.value}/ACTIVE`)
        console.log(res.data)
        setCustomers(res.data)
      } catch (error) {
        
      }
    }
  };
  const CustomerSelectHandler = async (customer) => {
    setCustomerName(customer.customer_name)
    setCustomerId(customer.customer_id)
    setDropDown2('pos-info-customer-search-content-hide');
  
  }





  const EnterHandler =async () => {
    const data = {
      pos_id : invoiceNo,
      branch_id : branch,
      pos_date : formattedDate,
      pos_user_id:userId,
      pos_type:'BRANCH-POS',
      customer_id:customerId,
      customer_type:'registered',
      pos_status:"CLOSED",
      pos_sub_total:total,
      pos_discount:discount,
      pos_net_total:netTotal,
      pos_cash:cash,
      pos_change:change,
      item_data : tableData,
    }


    try {
      const res = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/pos/addPos`, data);
      // console.log(res.data)
      if(res.status === 200 || res.status === 201){
        alert('Bill Added Successfully');
        setTableData([])
        setCustomerName('')
        setCustomerId('')
        setInvoiceNo(IdGenerate('INVOICE'))
        setBranch('BRANCH-0001')
        setDate('')
        setDropDown1Results([])
        setTotal(0)
        setDiscount(0)
        setNetTotal(0)
        setCash(0)
        setChange(0)

    }
    } catch (error) {
      if(error.response.status === 409){
        alert('Bill Already Exist')
    }else if (error.response.status === 400){
        alert('Bill Not Added')
    }else if (error.response.status === 500){
        alert('Internal Server Error')
    }else if (error.response.status === 404){
        alert('Bill Not Found')
    }else if (error.response.status === 403){
        alert('Forbidden')
    }
    else if (error.response.status === 401){
        alert('Unauthorized')
    }
    }
  }
  const CancelHandler = () => {
    setTableData([])
    setCustomerName('')
    setCustomerId('')
    setInvoiceNo(IdGenerate('INVOICE'))
    setBranch('BRANCH-0001')
    setDate('')
    setDropDown1Results([])
    setTotal(0)
        setDiscount(0)
        setNetTotal(0)
        setCash(0)
        setChange(0)
        
  
  }

  //customer close
  const [customerShow, setCustomerShow] = useState(false);
  const CustomerAddHandler = () =>{
    setCustomerShow(true)
  }
  const CustomerCloseHandler = () =>{
    setCustomerShow(false)
  }


  //total

    useEffect(() => {
      let total = 0;
      tableData.forEach((item) => {
        total += item.item_total;
      });
      setTotal(total);
    }
    , [tableData]);

    //net total
    useEffect(() => {
      setNetTotal(total - discount*total/100)
    }
    , [total,discount]);

    //change
    useEffect(() => {
      setChange(cash - netTotal)
    }
    , [cash,netTotal]);


  
  
  return (
    <div className='pos'>

      {/* <TopNaw moduleName ='Point of Sale' userName={userName}/> */}
      <p className='title'>Sale</p>
        <div className='container'>

            <div className='pos-info-div'>
              <div className='pos-info-div-form'>
                <label className='pos-info-div-form-label label'>Invoice no.</label>
                <label className=' label'>:</label>
                <input  className='pos-info-div-form-input form-input' type='text' value={invoiceNo} onChange={(e)=>setInvoiceNo(e.target.value)} placeholder='invoice'/>
              </div>

              {/* <div className='pos-info-div-form'>
                <label className='pos-info-div-form-label label'>Branch</label>
                <label className='label'>:</label>
                <select className='pos-info-div-form-input form-input'>
                  <option>Select Branch</option>
                  <option>Branch 1</option>
                  <option>Branch 2</option>
                  <option>Branch 3</option>
                </select>
              </div> */}

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
                      <button key={index} onClick={()=>DropDown1SelectHandler(item.inventory_batch_id )} className='pos-dropdown-select-btn'>
                        <p className='pos-dropdown-select-btn-p1'>{item.item_name}</p>
                        <p className='pos-dropdown-select-btn-p2'>{item.inventory_purchase_date}</p>
                        <p className='pos-dropdown-select-btn-p3'>{item.shadow_qty}</p>
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
                      <td>{item.item_available_qty}</td>
                      <td>{item.item_price}</td>

                      <td><input type='number' value={item.item_quantity} className={
                        item.item_available_qty <item.item_qty ? 'pos-table-input-red':'pos-table-input'
                      }
                      onChange={(e) => {
                        let temp = [...tableData];
                        temp[index].item_qty = parseFloat(e.target.value); // Convert to float
                        temp[index].item_total = temp[index].item_qty * temp[index].item_price;
                        setTableData(temp);
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

            <div  className='pos-total-div'>
              <div  className='pos-total-div-main'>
              <div className='pos-total-sub-div'>
                <p>Sub Total</p>
                <p>{total}</p>
              </div>
              <div className='pos-total-sub-div'>
                <p>Discount %</p>
                <input type='number' value={discount} onChange={(e)=>setDiscount(e.target.value)}/>
              </div>
              <div className='pos-total-sub-div'>
                <p>Net Total</p>
                <p>{netTotal}</p>
              </div>
              <div className='pos-total-sub-div'>
                <p>Cash</p>
                <input type='number' value={cash} onChange={(e)=>setCash(e.target.value)}/>
              </div>
              <div className='pos-total-sub-div'>
                <p>Change</p>
                <p>{change}</p>
              </div>

              </div>
              
            </div>


            <div className='pos-btn-div'>
              <button className='btn-cancel' onClick={CancelHandler}>cancel</button>
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
