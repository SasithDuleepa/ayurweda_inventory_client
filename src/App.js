import './App.css';
import { BrowserRouter as Router, Route,Routes, BrowserRouter } from "react-router-dom";



import StoreManagerRelease from './inventory/release/store manager/StoreManagerRelease';
import StoreKeeperRelease from './inventory/release/store keeper/StoreKeeperRelease';
import InventoryPurchase from './inventory/inventory purchase/inventoryPurchase';
import InventoryStore from './inventory/inventory store/inventoryStore';


import AddCustomer from './pos/customer/add customer/addCustomer';
import UpdateCustomer from './pos/customer/update customer/updateCustomer';
import ViewCustomer from './pos/customer/view customer/viewCustomer';

import Pos from './pos/pos/pos';


import SideMenu from './sidebar/side_menu/side_menu';


function App() {
  return (
    <div className='app'>

      





      
      




      <Router>
      
      <div className='SideBar'><SideMenu/></div>

      <div className='App-content'>
      <Routes>
         <Route element={<StoreManagerRelease/>} path="/store-manager-release"/>
        <Route element={<StoreKeeperRelease/>} path="/store-keeper-release"/>
        <Route element={<InventoryPurchase/>} path="/inventory-purchase"/>
        <Route element={<InventoryStore/>} path="/inventory-store"/>
        <Route element={<Pos/>} path="/pos"/>
        <Route element={<AddCustomer/>} path="/customer/add"/>
        <Route element={<UpdateCustomer/>} path="/customer/update"/>
        <Route element={<ViewCustomer/>} path="/customer/view"/>
      </Routes>
      </div>
      

      </Router>
    </div>
  );
}

export default App;
