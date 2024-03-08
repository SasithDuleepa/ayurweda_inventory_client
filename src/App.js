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


import AddBranches from './branches/add branch/addBranches';
import UpdateBranches from './branches/update branch/updateBranches';

import AddUser from './users/add user/addUser';
import UpdateUser from './users/update user/updateUser';

import CreateItem from './inventory/items/create item/createItem';
import UpdateItem from './inventory/items/update item/updateItem';


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


        <Route element={<AddBranches/>} path="/branches/add"/>
        <Route element={<UpdateBranches/>} path="/branches/update"/>

        <Route element={<AddUser/>} path="/users/add"/>
        <Route element={<UpdateUser/>} path="/users/update"/>

        <Route element={<CreateItem/>} path="/items/create"/>
        <Route element={<UpdateItem/>} path="/items/update"/>
      </Routes>
      </div>
      

      </Router>
    </div>
  );
}

export default App;
