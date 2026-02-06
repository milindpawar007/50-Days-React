import React from 'react';

import './App.css';
import Header from './Header';
import Home from './Home'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from './Checkout';
import { CartProvider } from "./StateProvider";
import Login from './Login';
function App() {
  return (
    <CartProvider>
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<>  <Header />
            <Home /></>} />
          <Route path="/checkout" element={<>  <Header /><Checkout /></>} />
          <Route path="/login" element={<>  <Login /></>} />
        </Routes>

      </Router>
    </div>
    </CartProvider>
  );
}

export default App;
