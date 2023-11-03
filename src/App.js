import React from 'react';
import Navbar from './Component/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Component/Home';
import MenClothingPage from './Component/MenSection';
import ElectronicSection from './Component/ElectronicSection';
import JewelerySection from './Component/JewelerySection';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/cloths" component={MenClothingPage} />
        <Route path="/electronics" component={ElectronicSection} />
        <Route path="/jewelry" component={JewelerySection} />
      </Switch>
    </Router>
  );
}

export default App;
