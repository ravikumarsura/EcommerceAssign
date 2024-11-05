// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LayoutComponent from './layout/LayoutComponent';
import Inventory from './pages/Inventory';

const App = () => (
  <Router>
    <Routes>
      <Route path="/*" element={<Inventory />} />
      {/* <Route path="/*" element={<LayoutComponent />} /> */}
    </Routes>
  </Router>
);

export default App;
