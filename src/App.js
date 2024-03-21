import './App.css';
import { BrowserRouter as Router, Route,Routes, BrowserRouter } from "react-router-dom";



import StoreKeeperRelease from './inventory/release/store keeper/StoreKeeperRelease';
import InventoryPurchase from './inventory/inventory purchase/inventoryPurchase';
import InventoryStore from './inventory/inventory store/inventoryStore';
import InventoryDispose from './inventory/disposal/inventoryDispose';

import InventoryRequest from './inventory/request/inventory request from store keeper/inventoryRequest';
import InventoryDashboard from './inventory/inventory dashboard/inventoryDashboard';


import AddCustomer from './customer/add customer/addCustomer';
import UpdateCustomer from './customer/update customer/updateCustomer';
import ViewCustomer from './customer/view customer/viewCustomer';

import Pos from './pos/pos/pos';
import Bill from './pos/bills/bill';
import PosDashboard from './pos/pos dashboard/posDashboard';


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
import UpdateSupplier from './supplier/update supplier/updateSupplier';



import AddItemCategory from './item category/add item category/addItemCategory';
import UpdateItemCategory from './item category/update item category/updateItemCategory';

import AddStores from './stores/addStores/addStores';
import UpdateStores from './stores/updateStores/updateStores';


import ItemReports from './reports/item reports/itemReports';
import CategoryReports from './reports/category reports/categoryReports';



import SideMenu from './sidebar/side_menu/side_menu';


function App() {
  return (
    <div className='app'>
      <Router>      
      <div className='SideBar'><SideMenu/></div>
      <div className='App-content'>
      <Routes>

        <Route element={<Pos/>} path="/pos/pos"/>
        <Route element={<Bill/>} path="/pos/bill"/>
        <Route element={<PosDashboard/>} path="/pos/pos-dashboard"/>

        <Route element={<InventoryPurchase/>} path="/inventory/purchase"/>
        <Route element={<InventoryStore/>} path="/inventory/store"/>
        <Route element={<StoreKeeperRelease/>} path="/inventory/store-keeper-release"/>
        <Route element={<InventoryDispose/>} path="/inventory/dispose"/>

        <Route element={<InventoryRequest/>} path='/inventory/request' />
        <Route element={<InventoryDashboard/>} path='/inventory/dashboard' />


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
        <Route element={<UpdateSupplier/>} path="/supplier/update"/>

        <Route element={<AddItemCategory/>} path="/item category/add"/>
        <Route element={<UpdateItemCategory/>} path="/item category/update"/>

        <Route element={<AddStores/>} path="/stores/add"/>
        <Route element={<UpdateStores/>} path="/stores/update"/>

        <Route element={<ItemReports/>} path="/reports/item"/>
        <Route element={<CategoryReports/>} path="/reports/category"/>

      </Routes>
      </div>
      </Router>
    </div>
  );
}

export default App;
