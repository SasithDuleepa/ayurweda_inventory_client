import './App.css';
import { BrowserRouter as Router, Route,Routes, BrowserRouter } from "react-router-dom";


import Release from './inventory/pages/release/release';


function App() {
  return (
    <div className='app'>
      <Release/>

      




      <Router>
      <Routes>
        {/* <Route element={<Release/>} path="/customer"/> */}
       

      </Routes>

      </Router>
    </div>
  );
}

export default App;
