import './App.css';

import CreateNewRawItem from './inventory/pages/create new raw item/CreateNewRawItem';
import CreateNewProduct from './inventory/pages/create new product/CreateNewProduct';
import ProductView from './inventory/pages/product view/ProductView';
import Customer from './inventory/pages/customer/Customer';

import AddCustomer from './inventory/components/add customer/AddCustomer';


function App() {
  return (
    <div>
      {/* <CreateNewRawItem/> */}
      {/* <CreateNewProduct/> */}

      {/* <AddCustomer/> */}

      <Customer/>
     
    </div>
  );
}

export default App;
