import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import SalesDashboard from './components/SalesDashboard'; 
import PredictForecast from './components/PredictForecast'; 
import Footer from './components/Footer';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <Route path="/" exact component={Home} />
      <Route path="/sales-dashboard" component={SalesDashboard} />
      <Route path="/predict" component={PredictForecast}/>
      <Footer />
    </Router>
  );
}

export default App;