import React, { useState } from 'react';
import './StoreKeeperRelease.css'
import Arrow from '../../../../icon/down-arrow.png'

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
    }
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
                    <label className='StoreKeeperRelease-search-div-label label'>Search by Recipe</label>
                    <label className='StoreKeeperRelease-search-div-label label'>:</label>
                    <div className='StoreKeeperRelease-search-div-select'>
                        <button onClick={()=>DropDown2Handler()} className='drop-down-btn '>
                            <input className='StoreKeeperRelease-search-div-select-input ' type='text' placeholder='Recipe Name'/>
                            <img src={Arrow} alt='arrow'  className={dropDown2 ==='dropdown-content-hide'? 'select-dropdown-img-on':'select-dropdown-img-off' }/>
                        </button>
                        <div className={dropDown2}>
                            <button onClick={()=>DropDown2SelectHandler()} className='dropdown-select-btn'>jythfgjh</button>
                        </div>
                    </div>
                </div>
            </div>

            
            <div className='StoreKeeperRelease-input-main-div'>
                <table>
                    <thead>
                        <th>no</th>
                        <th>Name</th>
                        <th>description</th>
                        <th>Quantity</th>
                        <th>measure unit</th>
                        <th>unit price</th>
                        <th>Total</th>
                    </thead>
                    <tbody>
                        <td>0</td>
                        <td>katuwelbatu</td>
                        <td>katuwelbatu kuyjg kuyg kuugjgh </td>
                        <td>2</td>
                        <td>g</td>
                        <td>200</td>
                        <td>400</td>
                    </tbody>
                </table>
            </div>

            <div  className='StoreKeeperRelease-btn-main-div'></div>
        </div>
    </div>
  )
}
