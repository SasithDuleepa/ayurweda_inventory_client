import React from 'react';
import './navigation.css';

export default function Navigation() {
  return (
    <div className='Navigation'>
        {/* <a href='/customer'>Customer</a> */}
        <a href='/supplier'>Supplier</a>
        <a href='/create/raw'>Create raw</a>
        {/* <a href='/create/product'>CreateNewProduct</a> */}
        <a href='/purchase/raw'>PurchaseRaw</a>
        <a href='/purchase/raw/store'>PurchaseRawStore</a>
        <a href='/purchase/raw/labreport'>PurchaseRawLabReport</a>
        <a href='/purchase/raw/release'>PurchaseRawRelease</a>
        <a href='/purchase/raw/view'>PurchasedRawview</a>
        <a>create a bill for raw</a>
    </div>
  )
}
