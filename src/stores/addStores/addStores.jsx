import React, { useEffect, useState } from 'react';
import './addStores.css';
import IdGenerate from '../../utils/id_generate';

import axios from 'axios';

export default function AddStores() {
    const currentDate = new Date(); // Get the current date and time
    const formattedDate = currentDate.toISOString(); // Format the date to ISO string
    const [userId,setUserId] = useState('USER-000000');
    const[data,setData] = useState({
        store_id:IdGenerate("STORE"), 
        store_name:'', 
        store_description:'',
        branch_id:'',
        branch_name:'',
        store_update_date:'', 
        store_update_user_id:userId
    })

    const[branch,setBranch] = useState([])
    const GetBranch = async() => {
        try {
            const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/branch/all/Branch/ACTIVE`);
            console.log(res.data);
            setBranch(res.data)
        } catch (error) {
            
        }
    }
    useEffect(()=>{
        GetBranch();
    },[])

    const SubmitHandler = async() => {
        const Data = {
            store_id:data.store_id, 
            branch_id:data.branch_id, 
            store_name:data.store_name, 
            store_description:data.store_description, 
            store_update_date:formattedDate, 
            store_update_user_id:userId
        }
        try {
            const res = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/store/add`,Data);
            console.log(res.data);
            if(res.status === 200 || res.status === 201){
                alert('Store Added Successfully');
                ResetHandler();
            }
        } catch (error) {
            if(error.response.status === 409){
                alert('Store Already Exist')
            }else if (error.response.status === 400){
                alert('Store Not Added')
            }else if (error.response.status === 500){
                alert('Internal Server Error')
            }else if (error.response.status === 404){
                alert('Store Not Found')
            }else if (error.response.status === 403){
                alert('Forbidden')
            }
            else if (error.response.status === 401){
                alert('Unauthorized')
            }
        }
    }

    const ResetHandler = () => {
        setData({
            store_id:IdGenerate("STORE"),
            store_name:'',
            store_description:'',
            branch_id:'',
            branch_name:'',
            store_update_date:'',
            store_update_user_id:userId
        })
    
    }
  return (
    <div className='AddStores'>
        <p className='title'> Add Stores</p>
        <div className='container'>
            <div className='AddStores-info-div'>
                <div className='AddStores-form'>
                    <label className='label'>Store Id</label>
                    <label className='label'>:</label>
                    <input className='form-input' type='text' value={data.store_id} onChange={(e)=>{
                        const Data = {...data}
                        Data.store_id = e.target.value
                        setData(Data)
                        
                    }}/>
                </div>
                <div className='AddStores-form'>
                    <label className='label'>Store Name</label>
                    <label className='label'>:</label>
                    <input className='form-input' type='text' placeholder='Enter Name' value={data.store_name} onChange={(e)=>{
                        const Data = {...data}
                        Data.store_name = e.target.value
                        setData(Data)
                        
                    }}/>
                </div>
                <div className='AddStores-form'>
                    <label className='label'>Branch</label>
                    <label className='label'>:</label>
                    <select className='form-input-select' onChange={(e)=>{
                        const Data = {...data}
                        Data.branch_id = e.target.value.split('/')[1]
                        Data.branch_name = e.target.value.split('/')[0]
                        setData(Data)
                    }}>
                        <option value={data.branch_id !=="" ? data.branch_id : ''}>{data.branch_name !=="" ? data.branch_name : 'SELECT BRANCH'}</option>
                        {branch.length >0 ? branch.map((branch,index)=>{
                            return <option key={index} value={`${branch.branch_name}/${branch.branch_id}`}>{branch.branch_name}</option>
                        }
                        ):<option>no branch found</option>}
                        
                    </select>
                </div>
                <div className='AddStores-form'>
                    <label className='label'>Description</label>
                    <label className='label'>:</label>
                    <input className='form-input' type='text' placeholder='Enter Description' value={data.store_description} onChange={(e)=>{
                        const Data = {...data}
                        Data.store_description = e.target.value
                        setData(Data)
                    }}/>
                </div>
            </div>
            <div className='AddStores-btn-div'>
                <button className='btn-submit' onClick={SubmitHandler}>ADD</button>
                <button className='btn-cancel' onClick={ResetHandler}>CANCEL</button>
            </div>
        </div>
    </div>
  )
}
