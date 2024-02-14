import React, { useEffect, useState } from 'react';
import './StoreKeeperRelease.css'
import Arrow from '../../../../icon/down-arrow.png';
import axios from 'axios';

export default function StoreKeeperRelease() {
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
    }

    const [dropDown2,setDropDown2] = useState('dropdown-content-hide');
    const DropDown2Handler = () =>{
        if(dropDown2 === 'dropdown-content-hide'){
            setDropDown2('dropdown-content-show');
        }else{
            setDropDown2('dropdown-content-hide');

        }
    }
    const DropDown2SelectHandler = () =>{
        if(dropDown2 === 'dropdown-content-hide'){
            setDropDown2('dropdown-content-show');
        }else{
            setDropDown2('dropdown-content-hide');
        }

        setJobPreviewWindow(true)



    }

    const [JobPreviewItems,setJobPreviewItems] = useState([
        {
            id:1,
            item_id:'NRAW-0001',
            name:'item 1',
            description:'description',
            requested_quantity:1,
            available_qty:0,
            unit:'kg',
        },
        {
            id:2,
            item_id:'RAW-0001',
            name:'item 2',
            description:'description',
            requested_quantity:1,
            available_qty:0,
            unit:'kg',
        },
        {
            id:2,
            item_id:'RAW-0002',
            name:'item 2',
            description:'description',
            requested_quantity:1,
            available_qty:0,
            unit:'kg',
        }
    ])

        //release main window
        const[releaseItems,setReleaseItems] = useState([])










    //job preview window
    const [jobPreviewWindow,setJobPreviewWindow] = useState(false);
    const JobPreviewHandler = (item_id) =>{
        setJobItemWindow(true)
        setSelectedItem(item_id)           
    }
    const JobPreviewCloseHandler = () =>{
        setJobPreviewWindow(false);
    }
        //set item available qty acc to item_id
        const availableQtyHandler =async() =>{
            if(JobPreviewItems.length > 0){
                JobPreviewItems.map(async(item,index)=>{
                    try {
                        const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/inventory/all/qty/${item.item_id}`)
                        console.log(res.data)
                        const availableQty = res.data;
    
                        const data = [...JobPreviewItems]
                        data[index].available_qty = availableQty
                        setJobPreviewItems(data)
    
                    } catch (error) {
                        
                    }
                })
            }
        }



    //job preview select item window
    const [jobItemWindow,setJobItemWindow] = useState(false);
    const JobItemSelectHandler = (item) =>{
        console.log(item)
        setJobItemWindow(false);
        const data = [...releaseItems]
        data.push(item)
        setReleaseItems(data)

    }

    const[items,setItems] = useState([]);
    const[selectedItem,setSelectedItem] = useState('');
    const GetItemsAccordingToItemId = async() =>{
        const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/inventory/all/allitems/${selectedItem}`)  
        console.log(res.data)
        setItems(res.data)
    }
    useEffect(()=>{
        GetItemsAccordingToItemId();
    },[selectedItem])
    







    //set unit price
    
    useEffect(()=>{
        availableQtyHandler();

    },[JobPreviewItems.length])





  return (
    <div className='StoreKeeperRelease'>
            <p className='title'>Inventory Store Keeper Release</p>

        <div className='line'></div>
        <div className='container'>
            <div className='StoreKeeperRelease-info-main-div'>
                <div className='StoreKeeperRelease-info-input-div'>
                    <label className='StoreKeeperRelease-info-input-label label'>invoice no</label>
                    <label className='StoreKeeperRelease-info-input-label label'>:</label>
                    <input className='StoreKeeperRelease-info-input form-input' type='text' placeholder='invoice no'/>
                </div>
                <div className='StoreKeeperRelease-info-input-div'>
                    <label className='StoreKeeperRelease-info-input-label label'>date</label>
                    <label className='StoreKeeperRelease-info-input-label label'>:</label>
                    <input className='StoreKeeperRelease-info-input form-input' type='text' placeholder='invoice no'/>
                </div>
                <div className='StoreKeeperRelease-info-input-div'>
                    <label className='StoreKeeperRelease-info-input-label label'>requested by</label>
                    <label className='StoreKeeperRelease-info-input-label label'>:</label>
                    <input className='StoreKeeperRelease-info-input form-input' type='text' placeholder='invoice no'/>
                </div>
                <div className='StoreKeeperRelease-info-input-div'>
                    <label className='StoreKeeperRelease-info-input-label label'>invoice no</label>
                    <label className='StoreKeeperRelease-info-input-label label'>:</label>
                    <input className='StoreKeeperRelease-info-input form-input' type='text' placeholder='invoice no'/>
                </div>
            </div>

            <div className='line'></div>


            <div className='StoreKeeperRelease-search-main-div'>
            <div  className='search-select-div'>
                    <label className='StoreKeeperRelease-search-div-label label'>Search by (Raw Item Name)</label>
                    <label className='StoreKeeperRelease-search-div-label label'>:</label>
                    <div className='StoreKeeperRelease-search-div-select'>
                        <button onClick={()=>DropDown1Handler()} className='drop-down-btn '>
                            <input className='StoreKeeperRelease-search-div-select-input ' type='text' placeholder='(Raw Item) Name'/>
                            <img src={Arrow} alt='arrow'  className={dropDown1 ==='dropdown-content-hide'? 'select-dropdown-img-on':'select-dropdown-img-off' }/>
                        </button>
                        <div className={dropDown1}>
                            <button onClick={()=>DropDown1SelectHandler()} className='dropdown-select-btn'>jythfgjh</button>
                        </div>
                    </div>
                </div>
                <div  className='search-select-div'>
                    <label className='StoreKeeperRelease-search-div-label label'>Search by Job</label>
                    <label className='StoreKeeperRelease-search-div-label label'>:</label>
                    <div className='StoreKeeperRelease-search-div-select'>
                        <button onClick={()=>DropDown2Handler()} className='drop-down-btn '>
                            <input className='StoreKeeperRelease-search-div-select-input ' type='text' placeholder='JOB-XXXX'/>
                            <img src={Arrow} alt='arrow'  className={dropDown2 ==='dropdown-content-hide'? 'select-dropdown-img-on':'select-dropdown-img-off' }/>
                        </button>
                        <div className={dropDown2}>
                            <button onClick={()=>DropDown2SelectHandler()} className='dropdown-select-btn'>JOB-0001</button>
                        </div>
                    </div>
                </div>
            </div>

            
            <div className='StoreKeeperRelease-input-main-div'>
                <table>
                    <thead>
                        <tr>
                        <td>no</td>
                        <td>Name</td>
                        <td>description</td>
                        <td>Available Quantity</td>
                        <td>qty</td>
                        <td>measure unit</td>
                        <td>unit price</td>
                        <td>Total</td>

                        </tr>
                        
                    </thead>
                    <tbody>
                        {releaseItems.length>0 ? releaseItems.map((item,index)=>(
                            <tr>
                                <td>{index+1}</td>
                                <td>{item.item_name}</td>
                                <td>{item.inventory_raw_item_description}</td>
                                <td>{item.available_qty}</td>
                                <td><input /></td>
                                <td>{item.measure_unit}</td>
                                <td>{item.item_price}</td>
                                <td>{item.total}</td>

                            </tr>
                            )):
                            <tr></tr>}
                        
                        
                    </tbody>
                </table>
            </div>

            <div  className='StoreKeeperRelease-btn-main-div'></div>
        </div>



{/* job preview window */}

        <div className={jobPreviewWindow ? 'StoreKeeperRelease-job-preview' : 'hide'}>
            <p className='title'>Job Preview</p>
            <div className='StoreKeeperRelease-job-preview-1'>
            <table>
                    <thead>
                        <tr>
                            <td>select</td>
                            <td>no</td>
                            <td>Name</td>
                            <td>description</td>
                            <td>requested qty</td>
                            <td>available qty</td>
                            <td>measure unit</td>
                        </tr>
                    </thead>
 
                    <tbody>
                        {JobPreviewItems.length>0 ? JobPreviewItems.map((item)=>(
                            <tr  onClick={()=>JobPreviewHandler(item.item_id)}>
                                <td><input type='checkbox' /></td>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.description}</td>
                                <td>{item.requested_quantity}</td>
                                <td>{item.available_qty}</td>
                                <td>{item.unit}</td>

                            </tr>
                        )):
                        <tr></tr>
                        }


                    </tbody>

                    

                </table>
                <button className='btn' onClick={()=>JobPreviewCloseHandler()}>close</button>
            </div>
            <div className='StoreKeeperRelease-job-preview-1'></div>

        </div>



        {/* job preview select item window */}
        <div className={jobItemWindow ? 'StoreKeeperRelease-job-select_item-preview' : 'hide'}>
            <p className='title StoreKeeperRelease-job-select_item-title'>Select Item</p>
            <div className='line'></div>
            <div className='StoreKeeperRelease-job-select_item-preview-1'>
                <p>Item Name : katuwelbatu </p>
                <p>{selectedItem}</p>
            </div>

            <div className='StoreKeeperRelease-job-select_item-preview-1'>
                <table>
                    <thead>
                        <tr>
                            <td>no</td>
                            <td>Name</td>
                            <td>description</td>
                            <td>available qty</td>
                            <td>measure unit</td>
                            <td>unit value</td>
                            <td>Store</td>
                            <td>Store Location</td>
                        </tr>
                    </thead>
                    <tbody>
                        {items.length>0 ? items.map((item,index)=>(
                            <tr onClick={()=>JobItemSelectHandler(item)}>
                                <td>{index}</td>
                                <td>{item.item_name}</td>
                                <td>{item.inventory_raw_item_description}</td>
                                <td>{item.available_qty}</td>
                                <td>{item.measure_unit}</td>
                                <td>{item.item_price}</td>
                                <td>{item.store_id}</td>
                                <td>{item.store_location}</td>
                            </tr>
                        )):
                        <tr></tr>
                        }

{/* 
                        <tr onClick={(e)=>JobItemSelectHandler()}>
                            <td>01</td>
                            <td>item name</td>
                            <td>item description</td>
                            <td>requested</td>
                            <td>{}</td>
                            <td>measure unit</td>
                            <td></td>
                            <td>tot</td>
                            <td>STORE-0001</td>
                        </tr> */}
                        

                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}
