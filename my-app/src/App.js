import React from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MeasurementConverter from "./Components/Calc/Calculator";
import StickyNavbar from "./Components/NavBar/Nav";


function App() {
  return (
    <Router>
      <StickyNavbar />
      <Routes>
        <Route exact path="/" element={<MeasurementConverter />} />      
      </Routes>
    </Router> 
    
  );
}

export default App;