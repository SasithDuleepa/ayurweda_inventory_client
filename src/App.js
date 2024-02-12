import './App.css';
import { BrowserRouter as Router, Route,Routes, BrowserRouter } from "react-router-dom";



import StoreManagerRelease from './inventory/pages/release/store manager/StoreManagerRelease';
import StoreKeeperRelease from './inventory/pages/release/store keeper/StoreKeeperRelease';


function App() {
  return (
    <div className='app'>




      <Router>
      <Routes>

        <Route element={<StoreManagerRelease/>} path="/store-manager-release"/>
        <Route element={<StoreKeeperRelease/>} path="/store-keeper-release"/>
       

      </Routes>

      </Router>
    </div>
  );
}

export default App;
