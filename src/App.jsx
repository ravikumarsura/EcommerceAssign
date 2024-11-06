import React from 'react';
import { Layout } from 'antd';
import { Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import InventoryData from './pages/InventoryData';
import Sidebar from './layout/Sidebar';
import Navbar from './layout/Navbar';
import NewInventoryItem from './pages/NewInventory';
import ViewInventory from './pages/ViewInventory';

const AppLayout = () => (
  <Layout style={{ minHeight: '100vh' }}>
    <Sidebar />
    <Layout>
      <Navbar />
      <Layout.Content style={{ padding: '14px' }}>
        <Routes>
          <Route path="/" element={<Navigate to="/inventory" />} />
          <Route path="/inventory" element={<InventoryData />} />
          <Route path="/new-inventory-item" element={<NewInventoryItem />} />
          <Route path="/viewinventory" element={<ViewInventory />} />
        </Routes>
      </Layout.Content>
    </Layout>
  </Layout>
);

export default AppLayout;
