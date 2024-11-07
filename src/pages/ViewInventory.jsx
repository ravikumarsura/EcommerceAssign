import React, { useContext } from 'react';
import { InventoryContext } from './InventoryContext';
import { Card, Button, Statistic, Table } from 'antd';
import { EyeOutlined, HeartOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import './Pages.css';

const ViewInventory = () => {
  const { inventory } = useContext(InventoryContext);

  const columns = [
    { title: 'Order Date', dataIndex: 'date', key: 'date' },
    { title: 'Order Type', dataIndex: 'type', key: 'type' },
    { title: 'Unit Price', dataIndex: 'unitPrice', key: 'unitPrice' },
    { title: 'Qty', dataIndex: 'quantity', key: 'quantity' },
    { title: 'Discount', dataIndex: 'discount', key: 'discount' },
    { title: 'Order Total', dataIndex: 'total', key: 'total' },
    { title: 'Status', dataIndex: 'status', key: 'status', render: (text) => <span className="status-cell">{text}</span> },
  ];

  return (
    <div className="view-inventory-container">
      <div className="inventory-header">
        <div className="product-info">
          <img src={inventory?.image} alt="Product" className="product-image" />
          <div>
            <h1>{inventory?.productName}</h1>
            <p>Date Added: {inventory?.date}</p>
            <p>
              Product URL: <a href={inventory?.productLink}>{inventory?.productLink}</a>
            </p>
          </div>
        </div>
        <div className="header-actions">
          <Button className="edit-button" type="primary">Edit Product</Button>
          <Button className="unpublish-button" danger>Unpublish Product</Button>
        </div>
      </div>

      <div className="inventory-stats">
        <Card className="stat-card" bordered={false}>
          <Statistic title="Price" value={inventory?.price} />
        </Card>
        <Card className="stat-card" bordered={false}>
          <Statistic title="In-Stock" value={inventory?.stock} />
        </Card>
        <Card className="stat-card" bordered={false}>
          <Statistic title="Total Orders" value={inventory?.totalOrders} prefix={<ShoppingCartOutlined />} />
        </Card>
        <Card className="stat-card" bordered={false}>
          <Statistic title="Views" value={inventory?.views} prefix={<EyeOutlined />} />
        </Card>
        <Card className="stat-card" bordered={false}>
          <Statistic title="Favourite" value={inventory?.favourite} prefix={<HeartOutlined />} />
        </Card>
      </div>

      <div className="inventory-purchases">
        <h2>Purchases</h2>
        <Table
          columns={columns}
          dataSource={inventory?.purchases}
          pagination={false}
          rowKey="date"
        />
      </div>
    </div>
  );
};

export default ViewInventory;
