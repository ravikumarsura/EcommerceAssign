// // src/App.js
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import LayoutComponent from './layout/LayoutComponent';
// import Inventory from './pages/Inventory';

// const App = () => (
//   <Router>
//     <Routes>
//       <Route path="/*" element={<Inventory />} />
//       {/* <Route path="/*" element={<LayoutComponent />} /> */}
//     </Routes>
//   </Router>
// );

// export default App;
// // AppLayout.js
import React from 'react';
import { Layout } from 'antd';
import { Route, Routes } from 'react-router-dom';
// import Orders from './Orders';
// import Customers from './Customers';
// import Gifts from './Gifts';
// import Support from './Support';
// import Logout from './Logout';
import './App.css';
import InventoryData from './pages/InventoryData';
import Sidebar from './layout/Sidebar';
import Navbar from './layout/Navbar';
import NewInventoryItem from './pages/NewInventory';

const AppLayout = () => (
  <Layout style={{ minHeight: '100vh' }}>
    <Sidebar />
    <Layout>
      <Navbar />
      <Layout.Content style={{ padding: '14px' }}>
        <Routes>
          <Route path="/inventory" element={<InventoryData />} />
          <Route path="/new-inventory-item" element={<NewInventoryItem />} />
          {/* <Route path="/orders" element={<Orders />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/gifts" element={<Gifts />} />
          <Route path="/support" element={<Support />} />
          <Route path="/logout" element={<Logout />} /> */}
        </Routes>
      </Layout.Content>
    </Layout>
  </Layout>
);

export default AppLayout;
