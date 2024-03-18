import React, { useState } from 'react';
import './inventoryRequest.css';
import axios from 'axios';
import Arrow from './../../../icon/down-arrow.png';
import IdGenerate from './../../../utils/id_generate'

export default function InventoryRequest() {
    const currentDate = new Date(); // Get the current date and time
    const formattedDate = currentDate.toISOString(); // Format the date to ISO string
    const [userId,setUserId] = useState('USER-000000');
    const[inventoryRequestId,setInventoryRequestId] = useState(IdGenerate('INVOICE'));
    const[requestType,setRequestType]  = useState('')

    const[jobPreviewShow,setJobPreviewShow] = useState(false);
    const[transferPreviewShow,setTransferPreviewShow] = useState(false);
    const[posPreviewShow,setPosPrviewShow] = useState(false);
    const[itemSelectShow,setItemSelectShow] = useState(false);

    const[searchJobShow,setSearchJobShow] = useState(false);
    const[searchTransferShow,setSearchTransferShow] = useState(false);
    const[searchPosShow, setSearchPosShow] = useState(false);
    const[searchItemShow, setSearchItemShow] = useState(false);

    const[tableData,setTableData] = useState([{
        item_name:"",
        item_inventory_batch_id:"",
        available_qty:"",
        qty:'',
        measure_unit:'',

    }]);


    //item request
    const[items,setItems] = useState([])
    const ItemSearchHandler = async(e) => {
        if(e.target.value !== ""){
            try {
                const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/inventory/searchInventory/ItemName/InventoryStatus/ShadowQty/Branch/${e.target.value}/ACTIVE/BRANCH-06247866 `)  
                console.log(res.data)
                setItems(res.data)
            } catch (error) {
                
            }
        }
        
    }
    const ItemSelectHandler = async(inventoryBatchId) => {
        try {
            const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/inventory/inventory/InventoryBatchId/${inventoryBatchId}`)
            console.log(res.data)
            const data = [...tableData]
            data.push({
                item_name:res.data[0].item_name,
                item_inventory_batch_id:res.data[0].inventory_batch_id,
                available_qty:res.data[0].shadow_qty ,
                qty:'',
                measure_unit:res.data[0].item_measure_unit ,

            })
            setTableData(data)
            setRequestType('ITEM')

        } catch (error) {
            
        }
    }

    //pos request
    const [pos,setPos] = useState([])
    const SearchPosHandler = async(e) => {
        if(e.target.value !== ""){
            try {
                const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/pos/search/PosId/Status/${e.target.value}/ORDER`);
                console.log(res.data)
                setPos(res.data)
            } catch (error) {
                
            }
        }
    }

    const [posPreviewData,setPosPreviewData] = useState([])
    const PosSelectHandler = async(posId) => {
        try {
            const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/pos/getPos/${posId}`);
            console.log(res.data)
            setPosPreviewData(res.data);
            setPosPrviewShow(true);
            setSearchPosShow(false);
            
            

        } catch (error) {

        }
    
    }
    const PosSelectBtnHandler = () => {
        //add data to table
        const data = []
        data.push({
            item_name:posPreviewData[0].item_name,
            item_inventory_batch_id:posPreviewData[0].inventory_batch_id,
            available_qty:posPreviewData[0].shadow_qty,
            qty:posPreviewData[0].pos_item_qty,
            measure_unit:posPreviewData[0].item_measure_unit 
        })
        setTableData(data)
        setPosPrviewShow(false);
    


    }


    //job request

    //transfer request

    //request
    const RequestHandler = async() => {
        if(tableData.length>0){
            try {
                const res = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/inventoryRequest/add`,{
                    inventory_request_type:requestType,
                    inventory_request_id:inventoryRequestId,
                    inventory_request_user_id:userId,
                    inventory_request_date:formattedDate,
                    inventory_request_status:'',
                    inventory_request_items:tableData
                });
            } catch (error) {
                
            }
        }
    }

    
  return (
    <>
    <div className='InventoryRequest-request-div'>
        <p className='title'> Request Inventory from Store Keeper</p>
        <div className='container'>
            <div className='InventoryRequest-request-info-div'>
                
                <div>
                    <label className='label'> Invoice Id</label>
                    <label>:</label>
                    <input  className='form-input' value={inventoryRequestId} onChange={(e)=>setInventoryRequestId(e.target.value)}/>
                </div>
                <div>
                    <label className='label'> Invoice Name</label>
                    <label>:</label>
                    <input  className='form-input'/>
                </div>
                <div>
                    <label className='label'> Invoice Name</label>
                    <label>:</label>
                    <input  className='form-input'/>
                </div>
                <div>
                    <label className='label'> Invoice Name</label>
                    <label>:</label>
                    <input  className='form-input'/>
                </div>
                <div>
                    <label className='label'> Invoice Name</label>
                    <label>:</label>
                    <input  className='form-input'/>
                </div>

            </div>

            <div className='line'></div>
            <div className='InventoryRequest-request-search-div'>
                <div className='InventoryRequest-search'>
                    <label className='label'>Item Name</label>
                    <label className='label'>:</label>
                    <div className='InventoryRequest-search-main'>
                        <button  className='InventoryRequest-search-btn' onClick={()=>setSearchItemShow(!searchItemShow)}>
                            <input  className='InventoryRequest-search-input' onChange={(e)=>ItemSearchHandler(e)}/>
                            <img src={Arrow}  className={searchItemShow? 'InventoryRequest-search-img-show':'InventoryRequest-search-img-hide'}/>
                        </button>
                        <div className={searchItemShow?'InventoryRequest-search-result-div-show':'InventoryRequest-search-result-div-hide'}>
                            {items.length > 0 ? items.map((item,index)=>(
                                <button key={index} onClick={()=>ItemSelectHandler(item.inventory_batch_id )}>{item.item_name}{item.inventory_purchase_date}</button> )):null}
                        </div>
                    </div>
                </div>

                <div className='InventoryRequest-search'>
                    <label className='label'>Job Id</label>
                    <label className='label'>:</label>
                    <div className='InventoryRequest-search-main'>
                        <button  className='InventoryRequest-search-btn' onClick={()=>setSearchJobShow(!searchJobShow)}>
                            <input  className='InventoryRequest-search-input'/>
                            <img src={Arrow}  className={searchJobShow? 'InventoryRequest-search-img-show':'InventoryRequest-search-img-hide'}/>
                        </button>
                        <div className={searchJobShow?'InventoryRequest-search-result-div-show':'InventoryRequest-search-result-div-hide'}></div>
                    </div>
                </div>

                <div className='InventoryRequest-search'>
                    <label className='label'>Transfer Request Id</label>
                    <label className='label'>:</label>
                    <div className='InventoryRequest-search-main'>
                        <button  className='InventoryRequest-search-btn' onClick={()=>setSearchTransferShow(!searchTransferShow)}>
                            <input  className='InventoryRequest-search-input'/>
                            <img src={Arrow}  className={searchTransferShow? 'InventoryRequest-search-img-show':'InventoryRequest-search-img-hide'}/>
                        </button>
                        <div className={searchTransferShow?'InventoryRequest-search-result-div-show':'InventoryRequest-search-result-div-hide'}></div>
                    </div>
                </div>

                <div className='InventoryRequest-search'>
                    <label className='label'>POS bill id</label>
                    <label className='label'>:</label>
                    <div className='InventoryRequest-search-main'>
                        <button  className='InventoryRequest-search-btn' onClick={()=>setSearchPosShow(!searchPosShow)}>
                            <input  className='InventoryRequest-search-input' onChange={(e)=>SearchPosHandler(e)}/>
                            <img src={Arrow}  className={searchPosShow? 'InventoryRequest-search-img-show':'InventoryRequest-search-img-hide'}/>
                        </button>
                        <div className={searchPosShow?'InventoryRequest-search-result-div-show':'InventoryRequest-search-result-div-hide'}>
                            {pos.length > 0 ? pos.map((item, index)=>(
                                <button key={index} onClick={()=>PosSelectHandler(item.pos_id)}>{item.pos_id}</button> ))
                                :null}
                        
                        </div>
                    </div>
                </div>

               
         


            </div>

            <div className='line'></div>
            
            <div className='InventoryRequest-request-table-div'>
                <table>
                    <thead>
                        <tr>
                            <td>#</td>
                            <td>item name</td>
                            <td>available_qty</td>
                            <td>qty</td>
                            <td>measure_unit</td>
                        </tr>
                    </thead>
                    <tbody>
                        {tableData.length > 0 ? tableData.map((item, index)=>(
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{item.item_name}</td>
                                <td>{item.available_qty}</td>
                                <td><input value={item.qty} onChange={(e)=>{
                                    const data = [...tableData]
                                    data[index].qty = e.target.value
                                    setTableData(data)
                                
                                }} /></td>
                                <td>{item.measure_unit}</td>
                            </tr> )):null}
                    </tbody>
                </table>
                <button className='btn-submit' onClick={()=>RequestHandler()}>Request</button>
                <button className='btn-cancel'>Save</button>
            </div>
            <div className='InventoryRequest-request-btn-div'></div>
        </div>
    </div>


    <div className={jobPreviewShow ? 'InventoryRequest-job-preview-div':'InventoryRequest-preview-hide'}>
        <p className='title'>Job Request</p>
        <div className='container'></div>
    </div>
    <div className={transferPreviewShow ? 'InventoryRequest-transfer-preview-div': 'InventoryRequest-preview-hide'}>
        <p className='title'> Transfer Request</p>
        <div className='container'></div>
    </div>
    <div className={posPreviewShow ? 'InventoryRequest-pos-preview-div':'InventoryRequest-preview-hide'}>
        <p className='title'> Pos Request</p>
        <div className='container'>

            <div className='InventoryRequest-pos-preview-info'>
                <div>
                    <label className='label'>Bill id </label>
                    <label className='label'>:</label>
                    <input className='form-input' value={posPreviewData.length>0 && posPreviewData[0].pos_id } onChange={()=>{}} disabled/>
                </div>
                <div>
                    <label className='label'>Bill issued Date </label>
                    <label className='label'>:</label>
                    <input className='form-input' value={posPreviewData.length>0 && posPreviewData[0].pos_date }  onChange={()=>{}} disabled/>
                </div>
                
            </div>
            <div className='InventoryRequest-pos-preview-table'>
            <table> 
                    <thead>
                        <tr>
                            <td>#</td>
                            <td>item name</td>
                            <td>request_qty</td>
                            <td>measure_unit</td>
                        </tr>
                    </thead>
                    <tbody>
                        {posPreviewData.length > 0 ? posPreviewData.map((item, index)=>(
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{item.item_name}</td>
                                <td>{item.pos_item_qty}</td>
                                <td>{item.item_measure_unit}</td>
                            </tr> )):null}
                    </tbody>
                </table>
            </div>
            <div className='InventoryRequest-pos-preview-btn'>
                <button className='btn-submit' onClick={()=>PosSelectBtnHandler()}>Select</button>
                <button className='btn-cancel'  onClick={()=>setPosPrviewShow(false)}>Cancel</button>
            </div>
        </div>
    </div>
    <div className={itemSelectShow ? 'InventoryRequest-items-select-div':'InventoryRequest-preview-hide'}></div>
    </>
  )
}
