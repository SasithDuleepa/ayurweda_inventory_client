import React, { useEffect, useState } from 'react';
import Arrow from '../../../../icon/down-arrow.png';
import './StoreManagerRelease.css';
import axios from 'axios';

export default function StoreManagerRelease() {

        //shows in job preview window
const [JobData,setJobData]= useState( {
    job_no:'',
    job_date:'',
    requested_by:'',
    invoice_no:'',
    invoice_date:'',
    invoice_amount:'',
    invoice_status:'',
    job_status:'',
    job_type:'',
    job_description:'',
    job_items:[
        {
            item_id:'RAW-0001',
            item_name:'raw item 1',
            job_item_description:'item 1 description for job',
            requested_qty:'2000',
            measure_unit:'g',
        },{
            item_id:'RAW-0002',
            item_name:'raw item 2',
            job_item_description:'item 2 description for job',
            requested_qty:'3500',
            measure_unit:'g',
        },{
            item_id:'RAW-0003',
            item_name:'raw item 3',
            job_item_description:'item 3 description for job',
            requested_qty:'2000',
            measure_unit:'ml',
        },{
            item_id:'RAW-0004',
            item_name:'raw item 4',
            job_item_description:'item 4 description for job',
            requested_qty:'2500',
            measure_unit:'g',
        }
    ],
    
}
)





    const [dropDown1,setDropDown1] = useState('dropdown-content-hide');
    const DropDown1Handler = () =>{
        if(dropDown1 === 'dropdown-content-hide'){
            setDropDown1('dropdown-content-show');
        }else{
            setDropDown1('dropdown-content-hide');
        
        }
    }
    const DropDown1SelectHandler = () =>{
        
        if(dropDown1 === 'dropdown-content-hide'){
            setDropDown1('dropdown-content-show');
        }else{
            setDropDown1('dropdown-content-hide');
        }
        

        setJobPreviewWindow(true)



    }


    const [dropDown2,setDropDown2] = useState('dropdown-content-hide');
    const [dropdown2InputValue,setDropdown2InputValue] = useState('');
    const DropDown2Handler = () =>{
        if(dropDown2 === 'dropdown-content-hide'){
            setDropDown2('dropdown-content-show');
        }else{
            setDropDown2('dropdown-content-hide');

        }
    }
    const DropDown2SelectHandler =async (item) =>{
        // setDropdown2InputValue(item.item_name)

    
        if(dropDown2 === 'dropdown-content-hide'){
            setDropDown2('dropdown-content-show');
        }else{
            setDropDown2('dropdown-content-hide');
        }

        //get data according to selected item
        console.log(item)
        if(item.table_name === 'inventory_store_raw_items'){
            //raw items
            try {
                const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/inventory/raw/RELEASED/${item.item_id}`)
                console.log(res.data);
                setTableData(res.data);
                const data = [...tableData]
                data.push({
                    item_id:res.data[0].raw_item_id,
                    item_name:res.data[0].raw_item_name,
                    item_description:res.data[0].inventory_raw_item_description   ,
                    available_qty:res.data[0].raw_item_shadow_qty     ,
                    quantity:0,
                    measure_unit:res.data[0].raw_item_measure_unit,
                    unit_price:res.data[0].raw_item_unit_price,
                })
                    setTableData(data)
                    console.log(tableData)


            }catch (error) {
            
            }

        }else if(item.table_name === 'inventory_store_products'){

             //products
             try {
                const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/inventory/product/RELEASED/${item.item_id}`)
                console.log(res.data);
                setTableData(res.data);
                const data = [...tableData]
                data.push({
                    item_id:res.data[0].product_id,
                    item_name:res.data[0].product_name,
                    item_description:res.data[0].inventory_product_description,
                    available_qty:res.data[0].product_shadow_qty         ,
                    quantity:0,
                    measure_unit:res.data[0].product_measure_unit                    ,
                    unit_price:res.data[0].product_price,
                })
                    setTableData(data)
                    console.log(tableData)
            }catch (error) {
            
            }
        }else if(item.table_name === 'inventory_store_non_raw'){
             //products
             try {
                const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/inventory/non-raw/RELEASED/${item.item_id}`)
                console.log(res.data);
                setTableData(res.data);
                const data = [...tableData]
                data.push({
                    item_id:1111,
                    item_name:res.data[0].non_raw_item_name,
                    item_description:res.data[0].non_raw_item_description,
                    available_qty:res.data[0].non_raw_shadow_qty         ,
                    quantity:0,
                    measure_unit:res.data[0].non_raw_measure_unit,
                    unit_price:res.data[0].non_raw_item_unit_price,
})
                    setTableData(data)
            }catch (error) {
            
            }
        }

        
    }

    //search item from all
    const [itemSearchResult,setItemSearchResult] = useState([]);
    const ItemSearchHandler = async(e) =>{
        setDropdown2InputValue(e.target.value)
        if(e.target.value !== ''){
            
            try {
                const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/inventory/all/${e.target.value}`)
                setItemSearchResult(res.data);
            } catch (error) {
                
            }
        }else{
            setItemSearchResult([]);
        }
    }




    const[jobPreviewWindow,setJobPreviewWindow]= useState(false)

    const AvailableQtyHandler = async() =>{
        if(JobData.job_items.length >0) {
            JobData.job_items.map(async(item,index) => {
                try {
                    const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/inventory/all/qty/${item.item_id}`)
                    const data = [...JobData.job_items]
                    data[index].available_qty = res.data
                    setJobData({...JobData,job_items:data})
                } catch (error) {
                    
                }
            })
        }
    }
    useEffect(()=>{
        AvailableQtyHandler()
    },[JobData.job_items.length])

    const JobPreviewCancelHandler = () =>{
        setJobPreviewWindow(false)
    }

    const [selectedItem,setSelectedItem] = useState('');   //id
    const [selectedItemName, setSelectedItemName] = useState('');  //name
    const [selectedItemReqQty,setSelectedItemReqQty] = useState(0);
    const[selectedItemJobDescription, setSelectedItemJobDescription] = useState('')

    const JobPreviewItemSelectHandler = (item)=>{
        // console.log(item)
        setSelectedItem(item.item_id);
        setSelectedItemName(item.item_name);
        setSelectedItemReqQty(item.requested_qty);
        setSelectedItemJobDescription(item.job_item_description)

        setItemPreviewWindow(true)

    }


    //item preview window close
    const [itemPreviewWindow,setItemPreviewWindow] = useState(false)
    const ItemPreviewWindowCloseHandler = () =>{
        setItemPreviewWindow(false)
    }

    const GetItems =async() =>{
        try {
            const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/inventory/all/allitems/${selectedItem}`);
            // console.log(res.data);
            setItems(res.data)
        } catch (error) {
            
        }
    }
    useEffect(()=>{GetItems()},[selectedItem])


    const ItemPreviewAddHandler =() =>{
        
        if(items.length > 0){
            // console.log(items)
            items.forEach(item => {
                if(item.releasing_quantity && item.releasing_quantity !== ''){
                    // console.log(item)
                    const data = [...tableData]
                    data.push(item)
                    setTableData(data)

                    console.log(tableData)
                }
                
            });

        }

    }




//table data show in main page
const [tableData,setTableData] = useState([]);  





//shows in items preview
const[items,setItems] = useState([]);


   return (
    <div className='StoreManagerRelease'>
            <p className='title'>Inventory Store Manager Release</p>

        <div className='line'></div>
        <div className='container'>
            <div className='StoreManagerRelease-info-main-div'>
                <div className='StoreManagerRelease-info-input-div'>
                    <label className='StoreManagerRelease-info-input-label label'>invoice no</label>
                    <label className='StoreManagerRelease-info-input-label label'>:</label>
                    <input className='StoreManagerRelease-info-input form-input' type='text' placeholder='invoice no'/>
                </div>
                <div className='StoreManagerRelease-info-input-div'>
                    <label className='StoreManagerRelease-info-input-label label'>date</label>
                    <label className='StoreManagerRelease-info-input-label label'>:</label>
                    <input className='StoreManagerRelease-info-input form-input' type='text' placeholder='invoice no'/>
                </div>
                <div className='StoreManagerRelease-info-input-div'>
                    <label className='StoreManagerRelease-info-input-label label'>requested by</label>
                    <label className='StoreManagerRelease-info-input-label label'>:</label>
                    <input className='StoreManagerRelease-info-input form-input' type='text' placeholder='invoice no'/>
                </div>
                <div className='StoreManagerRelease-info-input-div'>
                    <label className='StoreManagerRelease-info-input-label label'>invoice no</label>
                    <label className='StoreManagerRelease-info-input-label label'>:</label>
                    <input className='StoreManagerRelease-info-input form-input' type='text' placeholder='invoice no'/>
                </div>
            </div>

            <div className='line'></div>


            <div className='StoreManagerRelease-search-main-div'>
            <div  className='search-select-div'>
                    <label className='StoreManagerRelease-search-div-label label'>Search by Job</label>
                    <label className='StoreManagerRelease-search-div-label label'>:</label>
                    <div className='StoreManagerRelease-search-div-select'>
                        <button onClick={()=>DropDown1Handler()} className='drop-down-btn '>
                            <input className='StoreManagerRelease-search-div-select-input ' type='text' placeholder='Job Number'/>
                            <img src={Arrow} alt='arrow'  className={dropDown1 ==='dropdown-content-hide'? 'select-dropdown-img-on':'select-dropdown-img-off' }/>
                        </button>
                        <div className={dropDown1}>
                            <button onClick={()=>DropDown1SelectHandler()} className='dropdown-select-btn'>JOB-0001</button>
                        </div>
                    </div>
                </div>
                <div  className='search-select-div'>
                    <label className='StoreManagerRelease-search-div-label label'>Search by Item</label>
                    <label className='StoreManagerRelease-search-div-label label'>:</label>
                    <div className='StoreManagerRelease-search-div-select'>
                        <button onClick={()=>DropDown2Handler()} className='drop-down-btn '>
                            <input className='StoreManagerRelease-search-div-select-input ' value={dropdown2InputValue} onChange={(e)=>ItemSearchHandler(e)} type='text' placeholder='Item Name'/>
                            <img src={Arrow} alt='arrow'  className={dropDown2 ==='dropdown-content-hide'? 'select-dropdown-img-on':'select-dropdown-img-off' }/>
                        </button>
                        <div className={dropDown2}>
                            
                            {itemSearchResult.length >0 ? itemSearchResult.map((item,index)=>(
                                <button key={index} onClick={()=>DropDown2SelectHandler(item)} className='dropdown-select-btn'>{item.item_name}</button>
                            )):
                            <p>no item found</p>
                            }
                        </div>
                    </div>
                </div>
            </div>

            
            <div className='StoreManagerRelease-input-main-div'>
                <table>
                    <thead>
                        <tr>
                            <td>no</td>
                            <td>id</td>
                            <td>Name</td>
                            <td>available qty</td>                            
                            <td>Quantity</td>
                            <td>measure unit</td>
                            <td>unit price</td>
                            <td>Total</td>
                            <td>Store</td>
                            <td>location</td>

                        </tr>
                    </thead>
                    {tableData.length >0 ? tableData.map((item, index)=>(
                        <tbody key={index}>
                            <tr>
                            <td>{index+1}</td>
                            <td>{item.item_id}</td>
                            <td>{item.item_name}</td>
                            <td>{item.available_qty}</td>
                            <td>
                                <input
                                value={item.releasing_quantity ? item.releasing_quantity :0}
                                 onChange={(e)=>{
                                // const data = [...tableData]
                                // data[index].quantity = e.target.value;
                                // setTableData(data)
                                console.log(tableData)
                                 }} />
                            </td>
                            <td>{item.measure_unit}</td>
                            <td>{item.item_price}</td>
                            <td>{item.releasing_quantity * item.item_price}</td>
 
                            <td>{item.store_id}</td>
                            <td>{item.store_location}</td>
                            </tr>
                        </tbody>
                    ))
                        :
                        <tbody></tbody>
                        }
                </table>
            </div>

            <div  className='StoreManagerRelease-btn-main-div'>
                <button className='btn'>Request</button>
            </div>
        </div>








        {/* job preview window */}
        <div className={jobPreviewWindow ? 'StoreManagerRelease-job-preview' : 'hide'}>
        <p>Job Preview</p>
            <div>
                <p>job no : </p>
                <p>job date : </p>
                <p>requested by : </p>
                <p>invoice no : </p>
                <p>invoice date : </p>
                <p>invoice amount : </p>
                
            </div>

            <div>
                <table>
                    <thead>
                        <tr>
                            <td>no</td>
                            <td>Name</td>
                            <td>job item description</td>
                            <td>requested qty</td>
                            <td>available qty</td>
                            <td>measure unit</td>
                        </tr>
                    </thead>
                    {JobData.job_items.length >0 ? JobData.job_items.map((item, index)=>(
                        <tbody key={index}>
                            <tr onClick={()=>JobPreviewItemSelectHandler(item)}>
                                <td>{index+1}</td>
                                <td>{item.item_name}</td>
                                <td>{item.job_item_description}</td>
                                <td>{item.requested_qty}</td>
                                <td>{item.available_qty}</td>
                                <td>{item.measure_unit}</td>
                            </tr>
                        </tbody>
                    ))
                        :
                        <tbody></tbody>
                        }
                </table>
            </div>

            <div><button onClick={()=>JobPreviewCancelHandler()}>cancel</button></div>
        </div>





        <div className={itemPreviewWindow ?'StoreManagerRelease-Item-preview' : 'hide'}>
            <p>item preview</p>
            <div>
                <p>item name :{selectedItemName} </p>
                <p>item description :{selectedItemJobDescription} </p>
                <p>requestedqty: {selectedItemReqQty}</p>
            </div>
            <div>
                <table>
                    <thead>
                        <tr>
                            <td>no</td>
                            <td>Name</td>
                            <td>available qty</td>
                            <td>releasing qty</td>
                            <td>measure unit</td>
                            <td>date</td>
                        </tr>
                    </thead>
                    {items.length >0 ? items.map((item, index)=>(
                        <tbody key={index}>
                            <tr>
                                <td>{index+1}</td>
                                <td>{item.item_name}</td>
                                <td>{item.available_qty}</td>
                                <td><input
                                type='number'
                                value={item.releasing_quantity ? item.releasing_quantity :''}
                                
                                 onChange={(e)=>{
                                    const data = [...items]
                                    data[index].releasing_quantity = e.target.value;
                                    setItems(data)
                                    console.log(items)
                                }}/></td>
                                <td>{item.measure_unit}</td>
                                <td>{item.item_released_date}</td>
                            </tr>
                        </tbody>
                    ))
                        :
                        <tbody></tbody>
                        }
                </table>

            </div>
            <div><button onClick={()=>ItemPreviewWindowCloseHandler()}>cancel</button>
            <button onClick={()=>ItemPreviewAddHandler()}>ADD</button></div>
        </div>



</div>
   )}