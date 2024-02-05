import React from 'react';
import './navigation.css';

export default function Navigation() {
  return (
    <div className='Navigation'>
        {/* <a href='/customer'>Customer</a> */}
        <h2>Raw</h2>
        <a href='/create/raw'>Create raw</a>
        {/* <h2>Customer</h2> */}
        <h2>supplier</h2>
        <a href='/supplier'>Supplier</a>
        <h2>raw Purchase</h2>
        
        
        {/* <a href='/create/product'>CreateNewProduct</a> */}
        <a href='/purchase/raw'>PurchaseRaw</a>
        <a href='/purchase/raw/store'>PurchaseRawStore</a>
        <a href='/purchase/raw/labreport'>PurchaseRawLabReport</a>
        <a href='/purchase/raw/release'>PurchaseRawRelease</a>
        <a href='/purchase/raw/view'>PurchasedRawLotView</a>
        <a href='/purchase/raw/preview'>PurchasedRawPreview</a>

        <h2>Non Raw</h2>
        <a>purchase non raw</a>
    </div>
  )
}
