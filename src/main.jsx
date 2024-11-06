import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import AppLayout from './App';
import { InventoryProvider } from './pages/InventoryContext';

ReactDOM.render(
  <Router>
    <InventoryProvider> 
      <AppLayout />
    </InventoryProvider>
  </Router>,
  document.getElementById('root')
);
