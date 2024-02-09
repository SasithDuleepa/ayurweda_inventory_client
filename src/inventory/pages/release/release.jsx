import React, { useState } from 'react';
import './release.css';
import Arrow from '../../../icon/down-arrow.png'

export default function Release() {
    const [dropDown1,setDropDown1] = useState('Release-search-div-dropdown-show');
    const DropDown1Handler = () =>{
        if(dropDown1 === 'Release-search-div-dropdown-show'){
            setDropDown1('Release-search-div-dropdown-hide');
        }else{
            setDropDown1('Release-search-div-dropdown-show');
        
        }
    }
  return (
    <div className='Release'>
            <p className='title'>Inventory Release</p>

        <div className='line'></div>
        <div className='container'>
            <div className='Release-info-main-div'>
                <div className='Release-info-input-div'>
                    <label className='Release-info-input-label label'>invoice no</label>
                    <label className='Release-info-input-label label'>:</label>
                    <input className='Release-info-input form-input' type='text' placeholder='invoice no'/>
                </div>
                <div className='Release-info-input-div'>
                    <label className='Release-info-input-label label'>date</label>
                    <label className='Release-info-input-label label'>:</label>
                    <input className='Release-info-input form-input' type='text' placeholder='invoice no'/>
                </div>
                <div className='Release-info-input-div'>
                    <label className='Release-info-input-label label'>requested by</label>
                    <label className='Release-info-input-label label'>:</label>
                    <input className='Release-info-input form-input' type='text' placeholder='invoice no'/>
                </div>
                <div className='Release-info-input-div'>
                    <label className='Release-info-input-label label'>invoice no</label>
                    <label className='Release-info-input-label label'>:</label>
                    <input className='Release-info-input form-input' type='text' placeholder='invoice no'/>
                </div>
            </div>

            <div className='line'></div>


            <div className='Release-search-main-div'>
                {/* <div  className='Release-search-div'>
                    <label className='Release-search-div-label label'>Search Inventory by Name</label>
                    <label className='Release-search-div-label label'>:</label>
                    <button><input className='Release-search-div-input ' type='text' placeholder='Search'/>

                    </button>
                    
                </div> */}
                <div  className='Release-search-div'>
                    <label className='Release-search-div-label label'>Search by Recipe</label>
                    <label className='Release-search-div-label label'>:</label>
                    <div className='Release-search-div-select'>
                        <button onClick={()=>DropDown1Handler()} className='Release-search-div-select-dropdown-btn '>
                            <input className='Release-search-div-select-input ' type='text' placeholder='Search'/>

                                <img src={Arrow} alt='arrow'  className='Release-search-div-select-dropdown-img'/>

                        </button>
                        <div className={dropDown1}>
                            {/* <a className='Release-search-div-select-dropdown-select'>jythfgjfh </a> */}
                            <p>jythfgjh</p>
                        </div>
                    </div>
                    
                    
                </div>
            </div>

            
            <div className='Release-input-main-div'>
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

            <div  className='Release-btn-main-div'></div>
        </div>
    </div>
  )
}
