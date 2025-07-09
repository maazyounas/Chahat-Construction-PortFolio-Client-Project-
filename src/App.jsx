import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Home/Home';
import About from './About/About';
import Contact from './Contact/Contact';
import Portfolio from './PortFolio/Portfolio';
import Services from "./Services/Services";
import Construction from './Construction/Construction';
import Consultant from './Consultant/Consultant';
import Safety from './Safety/Safety';
import Survey from './Survey/Survey';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />  
        <Route path="/contact" element={<Contact/>}/> 
        <Route path="/portfolio" element={<Portfolio/>}/> 
        <Route path="/services" element={<Services/>}/> 
        <Route path="/construction" element={<Construction/>}/> 
        <Route path="/consultant" element={<Consultant/>}/> 
        <Route path="/safety" element={<Safety/>}/> 
        <Route path="/survey" element={<Survey/>}/> 

      </Routes>
      
    </Router>
  );
};

export default App;
