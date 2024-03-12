import './App.css';
import { BrowserRouter as Router, Route,Routes, BrowserRouter } from "react-router-dom";


import StoreManagerRelease from './inventory/request/store manager/StoreManagerRelease';

import StoreKeeperRelease from './inventory/release/store keeper/StoreKeeperRelease';
import InventoryPurchase from './inventory/inventory purchase/inventoryPurchase';
import InventoryStore from './inventory/inventory store/inventoryStore';
import InventoryDispose from './inventory/disposal/inventoryDispose';


import AddCustomer from './customer/add customer/addCustomer';
import UpdateCustomer from './customer/update customer/updateCustomer';
import ViewCustomer from './customer/view customer/viewCustomer';

import Pos from './pos/pos/pos';


import AddBranches from './branches/add branch/addBranches';
import UpdateBranches from './branches/update branch/updateBranches';

import AddUser from './users/add user/addUser';
import UpdateUser from './users/update user/updateUser';
import UserRole from './users/user role/userRole';

import CreateItem from './items/create item/createItem';
import UpdateItem from './items/update item/updateItem';

import TransferRequest from './transfer/transfer request/transferRequest';
import Transfer from './transfer/transfer/transfer';

import AddSupplier from './supplier/add supplier/addSupplier';

import SideMenu from './sidebar/side_menu/side_menu';


function App() {
  return (
    <div className='app'>
      <Router>      
      <div className='SideBar'><SideMenu/></div>
      <div className='App-content'>
      <Routes>

        <Route element={<Pos/>} path="/pos/pos"/>

        <Route element={<InventoryPurchase/>} path="/inventory/purchase"/>
        <Route element={<InventoryStore/>} path="/inventory/store"/>
        <Route element={<StoreKeeperRelease/>} path="/inventory/store-keeper-release"/>
        <Route element={<StoreManagerRelease/>} path="/inventory/store-manager-release"/>
        <Route element={<InventoryDispose/>} path="/inventory/dispose"/>


        <Route element={<Pos/>} path="/pos"/>
        <Route element={<AddCustomer/>} path="/customer/add"/>
        <Route element={<UpdateCustomer/>} path="/customer/update"/>
        <Route element={<ViewCustomer/>} path="/customer/view"/>


        <Route element={<AddBranches/>} path="/branches/add"/>
        <Route element={<UpdateBranches/>} path="/branches/update"/>

        <Route element={<AddUser/>} path="/users/add"/>
        <Route element={<UpdateUser/>} path="/users/update"/>
        <Route element={<UserRole/>} path="/users/role"/>

        <Route element={<CreateItem/>} path="/items/create"/>
        <Route element={<UpdateItem/>} path="/items/update"/>

        <Route element={<TransferRequest/>} path="/transfer/request"/>
        <Route element={<Transfer/>} path="/transfer/send"/>


        <Route element={<AddSupplier/>} path="/supplier/add"/>
        <Route element={<AddSupplier/>} path="/supplier/update"/>

      </Routes>
      </div>
      </Router>
    </div>
  );
}

export default App;
