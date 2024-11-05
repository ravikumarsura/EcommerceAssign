// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LayoutComponent from './layout/LayoutComponent';

const App = () => (
  <Router>
    <Routes>
      <Route path="/*" element={<LayoutComponent />} />
    </Routes>
  </Router>
);

export default App;
