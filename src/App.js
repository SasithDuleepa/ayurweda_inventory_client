import './App.css';
import { BrowserRouter as Router, Route,Routes, BrowserRouter } from "react-router-dom";

import CreateNewRawItem from './inventory/pages/create new raw item/CreateNewRawItem';
import CreateNewProduct from './inventory/pages/create new product/CreateNewProduct';
import ProductView from './inventory/pages/product view/ProductView';
import Customer from './inventory/pages/customer/Customer';
import AddCustomer from './inventory/components/add customer/AddCustomer';
import Supplier from './inventory/pages/supplier/Supplier';
import AddSupplier from './inventory/components/add supplier/AddSupplier';

import SupplierFilter from './inventory/components/supplier filter/SupplierFilter';

import PurchaseRaw from './inventory/pages/Raw items/purchase raw/PurchaseRaw'
import PurchaseRawStore from './inventory/pages/Raw items/purchase Raw Store/PurchaseRawStore';
import PurchaseRawLabReport from './inventory/pages/Raw items/purchase raw lab report/PurchaseRawLabReport';
import PurchaseRawRelease from './inventory/pages/Raw items/purchase raw release/PurchaseRawRelease';
import PurchaseRawView from './inventory/pages/Raw items/purchase raw view/PurchaseRawView';

import Navigation from './inventory/components/navigation/navigation';
function App() {
  return (
    <div>
      <Navigation/>




      <Router>
      <Routes>
        <Route element={<Customer/>} path="/customer"/>
        <Route element={<Supplier/>} path="/supplier"/>
        <Route element={<CreateNewRawItem/>} path="/create/raw"/>
        <Route element={<CreateNewProduct/>} path="/create/product"/>

        <Route element={<PurchaseRaw/>} path="/purchase/raw"/>
        <Route element={<PurchaseRawStore/>} path='/purchase/raw/store' />
        <Route element={<PurchaseRawLabReport/>} path='/purchase/raw/labreport'/>
        <Route element={<PurchaseRawRelease/>} path="/purchase/raw/release"/>
        <Route element={<PurchaseRawView/>} path="/purchase/raw/view"/>


      </Routes>

      </Router>
    </div>
  );
}

export default App;
