import './App.css';
import { BrowserRouter as Router, Route,Routes, BrowserRouter } from "react-router-dom";

import CreateNewRawItem from './inventory/pages/create new raw item/CreateNewRawItem';
import CreateNewProduct from './inventory/pages/create new product/CreateNewProduct';
import ProductView from './inventory/pages/product view/ProductView';
import Customer from './inventory/pages/customer/Customer';
import AddCustomer from './inventory/components/add customer/AddCustomer';
import Supplier from './inventory/pages/supplier/Supplier';
import AddSupplier from './inventory/components/add supplier/AddSupplier';
import PurchaseRawView from './inventory/pages/purchase raw view/PurchaseRawView';
import SupplierFilter from './inventory/components/supplier filter/SupplierFilter';

import PurchaseRaw from './inventory/pages/purchase raw/PurchaseRaw';


function App() {
  return (
    <div>




      <Router>
      <Routes>
        <Route element={<Customer/>} path="/customer"/>
        <Route element={<Supplier/>} path="/supplier"/>
        <Route element={<CreateNewRawItem/>} path="/create/raw"/>
        <Route element={<CreateNewProduct/>} path="/create/product"/>

        <Route element={<PurchaseRaw/>} path="/purchase/raw"/>
        <Route element={<PurchaseRawView/>} path="/purchase/raw/view"/>


      </Routes>

      </Router>
    </div>
  );
}

export default App;
