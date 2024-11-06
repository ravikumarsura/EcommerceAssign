import React from 'react';
import { Card, Table, Input, Button, Tag } from 'antd';
import { SearchOutlined, FilterOutlined, ShareAltOutlined } from '@ant-design/icons';
import './Pages.css';

const InventoryData = () => {
  const dataSource = [
    { key: 1, productName: 'iPhone 13 Pro', category: 'Gadgets', unitPrice: '₦1,225,000.00', inStock: 8, discount: '₦0.00', totalValue: '₦50,000.00', status: 'Published' },
    // Add more data as needed
  ];

  const columns = [
    { title: 'Product Name', dataIndex: 'productName', key: 'productName' },
    { title: 'Category', dataIndex: 'category', key: 'category' },
    { title: 'Unit Price', dataIndex: 'unitPrice', key: 'unitPrice' },
    { title: 'In-Stock', dataIndex: 'inStock', key: 'inStock' },
    { title: 'Discount', dataIndex: 'discount', key: 'discount' },
    { title: 'Total Value', dataIndex: 'totalValue', key: 'totalValue' },
    { title: 'Status', dataIndex: 'status', key: 'status', render: status => <Tag color={status === 'Published' ? 'blue' : 'orange'}>{status}</Tag> },
  ];

  return (
    <div className="inventory-content">
      <div className="inventory-summary">
        <Card className="summary-card">All Products: 350</Card>
        <Card className="summary-card">Active: 316</Card>
        <Card className="summary-card">Low Stock Alert: 23</Card>
        <Card className="summary-card">Expired: 3</Card>
      </div>
      <div className="inventory-actions">
        <Input placeholder="Search" prefix={<SearchOutlined />} />
        <Button icon={<FilterOutlined />}>Filter</Button>
        <Button icon={<ShareAltOutlined />}>Share</Button>
      </div>
      <Table dataSource={dataSource} columns={columns} pagination={{ pageSize: 10 }} />
    </div>
  );
};

export default InventoryData;
