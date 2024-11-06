import React from 'react';
import { Card, Button, Badge, Statistic, Table, Typography, Space } from 'antd';
import { EyeOutlined, ShoppingOutlined, ClockCircleOutlined } from '@ant-design/icons';
import './Pages.css';

const { Text, Title, Link } = Typography;

const ViewInventoryScreen = () => {
  const dataSource = [
    {
      key: '1',
      orderDate: '12 Aug 2022 - 12:25 am',
      orderType: 'Home Delivery',
      unitPrice: '₦25,000.00',
      quantity: 2,
      discount: '₦0.00',
      orderTotal: '₦50,000.00',
      status: 'Completed',
    },
  ];

  const columns = [
    { title: 'Order Date', dataIndex: 'orderDate', key: 'orderDate' },
    { title: 'Order Type', dataIndex: 'orderType', key: 'orderType' },
    { title: 'Unit Price', dataIndex: 'unitPrice', key: 'unitPrice' },
    { title: 'Qty', dataIndex: 'quantity', key: 'quantity' },
    { title: 'Discount', dataIndex: 'discount', key: 'discount' },
    { title: 'Order Total', dataIndex: 'orderTotal', key: 'orderTotal' },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status) => (
        <Badge status="success" text={status} />
      ),
    },
  ];

  return (
    <div className="viewinventoryscreen">
      <div className="viewinventoryscreen-header">
        <Title level={4}>Polo T-Shirt</Title>
        <Text>Date Added: 12 Sept 2022 - 12:55 pm</Text>
        <Link href="/polot-shirt">Product URL: 1nancystores.com/polot-shirt</Link>
      </div>
      <div className="viewinventoryscreen-product-info">
        <img src="tshirt.png" alt="Polo T-Shirt" className="viewinventoryscreen-product-image" />
        <Card className="viewinventoryscreen-card">
          <Statistic title="Last Order" value="12 Sept 2022" />
          <Statistic title="Price" value="₦25,000.00" />
          <Statistic title="In-Stock" value="20" />
        </Card>
        <Card className="viewinventoryscreen-card">
          <Statistic title="Total Orders" value="₦50,000.00" />
          <Statistic title="All-time" />
        </Card>
        <Card className="viewinventoryscreen-card">
          <Statistic title="Views" value={1200} prefix={<EyeOutlined />} />
          <Statistic title="Favourite" value={23} />
        </Card>
      </div>
      <div className="viewinventoryscreen-action-buttons">
        <Button type="primary">Edit Product</Button>
        <Button type="default" danger>
          Unpublish Product
        </Button>
      </div>
      <div className="viewinventoryscreen-order-summary">
        <Space>
          <Statistic title="All Orders" value={1} prefix={<ShoppingOutlined />} />
          <Statistic title="Pending" value={0} />
          <Statistic title="Completed" value={1} />
          <Statistic title="Canceled" value={0} />
          <Statistic title="Returned" value={0} />
          <Statistic title="Damaged" value={0} />
        </Space>
      </div>
      <Table
        dataSource={dataSource}
        columns={columns}
        pagination={false}
        className="viewinventoryscreen-purchase-table"
      />
    </div>
  );
};

export default ViewInventoryScreen;
