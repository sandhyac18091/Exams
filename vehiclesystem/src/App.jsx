
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar'
import Home from './Pages/Home'
import AddVehicle from './Pages/Addvehicle';
import Viewfleet from './Pages/Viewfleet';





function App() {
  return (
    <Router>
     
      <NavBar />
     
      <div className="container mx-auto px-4 py-6">
       
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/add-vehicle" element={<AddVehicle />} /> 
          <Route path="/view-fleet" element={<Viewfleet />} />
          
          
        </Routes>
      </div>
    </Router>
  );
}

export default App
