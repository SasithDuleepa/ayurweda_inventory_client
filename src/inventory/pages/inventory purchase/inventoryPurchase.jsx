import React, { useState } from 'react';
import './inventoryPurchase.css';
import Arrow from './../../../icon/down-arrow.png'

export default function InventoryPurchase() {
    const [PoSearchShow, setPoSearchShow] = useState(true);
    const PoSearchShowHandler = () => {
        setPoSearchShow(!PoSearchShow);
    }
  return (
    <div>
        <p className='title'>Inventory Items Purchase</p>
        <div className='line'></div>

        <div className='container'>
        <div className='InventoryPurchase-po-main-div'>
            <div className='InventoryPurchase-po-div'>
                <label className='label'> Purchase Order Id</label>
                <label className='label'> :</label>
                <div  className='InventoryPurchase-po-search-div'>
                    <button className='InventoryPurchase-po-search-bth' onClick={()=>PoSearchShowHandler()}>
                        <input  className='InventoryPurchase-po-search-input'/>
                        <img className={PoSearchShow ? 'InventoryPurchase-po-search-img-show' : 'InventoryPurchase-po-search-img-hide '} src={Arrow} alt='arrow'/>
                    </button>
                    
                    <div className={PoSearchShow ? 'InventoryPurchase-po-search-results-div-show' : 'InventoryPurchase-po-search-results-div-hide'}>
                    <p>PO-00001</p>
                    <p>PO-00002</p>

                     </div>
                    
                    
                </div>

            </div>

           

        </div>

        <div className='line'></div>
        <div className='InventoryPurchase-po-info-main-div'>
            <p>Purchase Order Info</p>
        <div className='InventoryPurchase-po-info-div'>
                <div className='InventoryPurchase-po-info'>
                    <p>Purchase Order Id </p>
                    <p>:</p>
                    <p>5634756uiykghj</p>
                </div>

                <div className='InventoryPurchase-po-info'>
                    <p>Supplier Name  </p>
                    <p>:</p>
                    <p>5634756uiykghj</p>
                </div>

                <div className='InventoryPurchase-po-info'>
                    <p>Purchase Date </p>
                    <p>:</p>
                    <p>5634756uiykghj</p>
                </div>

                <div className='InventoryPurchase-po-info'>
                    <p>User Id </p>
                    <p>:</p>
                    <p>5634756uiykghj</p>
                </div>

            </div>
        </div>


        <div className='line'></div>


        <div className='InventoryPurchase-purchase-items-main-div'>
            <p>Purchasing Items</p>
            <div className='InventoryPurchase-purchase-items-div'>
                <table>
                    <thead>
                        <tr>
                            <td>select</td>
                            <td>name</td>
                            <td>qty</td>
                            <td>store</td>
                            <td>location</td>
                            <td>measure unit</td>
                            <td>unit price</td>
                            <td>description</td>
                            <td>status</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><input type='checkbox' /></td>
                            <td>katuwel batu</td>
                            <td><input type='number' /></td>
                            <td><select>
                                    <option>STORE 1</option>
                                    <option>STORE 2</option>
                                </select>
                            </td>
                            <td><input /></td>
                            <td>kg</td>
                            <td><input type='number' /></td>
                            <td><textarea /></td>
                            <td><select>
                                    <option>PENDING</option>
                                    <option>RELEASED</option>
                                </select>
                            </td>
                        </tr>
                    </tbody>
                  </table>
            </div>
        </div>
        <div className='InventoryPurchase-btn-main-div'>
            <button className='btn'>Submit</button>
            <button className='btn'>Cancel</button>
        </div>

        </div>
        
    </div>
  )
}
