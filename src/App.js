import React from 'react';
import Navbar from './Component/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Component/Home';
import MenClothingPage from './Component/MenSection';
import ElectronicSection from './Component/ElectronicSection';
import JewelerySection from './Component/JewelerySection';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cloths" element={<MenClothingPage />} />
        <Route path="/electronics" element={<ElectronicSection />} />
        <Route path="/jewelry" element={<JewelerySection />} />
      </Routes>
    </Router>
  );
}

export default App;
