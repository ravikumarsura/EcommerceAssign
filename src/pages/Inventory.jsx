import React from 'react';
import { Card, Table, Button, Tag, Input, Badge, Layout, Avatar, Menu } from 'antd';
import { SearchOutlined, FilterOutlined, ShareAltOutlined, BellOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import './Inventory.css';

const { Header, Sider, Content } = Layout;

const Inventory = () => {
  const dataSource = Array.from({ length: 10 }, (_, i) => ({
    key: i,
    productName: i % 2 === 0 ? 'iPhone 13 Pro' : 'Polo T-Shirt',
    category: i % 2 === 0 ? 'Gadgets' : 'Fashion',
    unitPrice: i % 2 === 0 ? '₦1,225,000.00' : '₦125,000.00',
    inStock: i % 3 === 0 ? 'Out of Stock' : `${20 - i * 2}`,
    discount: '₦0.00',
    totalValue: '₦50,000.00',
    action: i % 2 === 0 ? 'Publish' : 'Unpublish',
    status: i % 2 === 0 ? 'Published' : 'Unpublished',
  }));

  const columns = [
    { title: 'Product Name', dataIndex: 'productName', key: 'productName' },
    { title: 'Category', dataIndex: 'category', key: 'category' },
    { title: 'Unit Price', dataIndex: 'unitPrice', key: 'unitPrice' },
    { title: 'In-Stock', dataIndex: 'inStock', key: 'inStock' },
    { title: 'Discount', dataIndex: 'discount', key: 'discount' },
    { title: 'Total Value', dataIndex: 'totalValue', key: 'totalValue' },
    {
      title: 'Action',
      dataIndex: 'action',
      key: 'action',
      render: (action) => (
        <Button type="link" style={{ padding: 0, color: '#1890ff' }}>{action}</Button>
      ),
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status) => (
        <Tag color={status === 'Published' ? 'blue' : 'orange'}>{status}</Tag>
      ),
    },
  ];

  return (
    <Layout style={{ minHeight: '100vh' }}>
      {/* Sidebar with Icons */}
      <Sider width={80} className="inventory-sider">
        <div className="logo" />
        <Menu theme="light" mode="vertical" className="inventory-menu">
          <Menu.Item key="1" icon={<Badge count={3}><BellOutlined /></Badge>} />
          <Menu.Item key="2" icon={<Badge count={16}><MailOutlined /></Badge>} />
          <Menu.Item key="3" icon={<SettingOutlined />} />
        </Menu>
      </Sider>

      {/* Main Content Area */}
      <Layout>
        <Header className="inventory-header">
          <div className="header-left">
            <h2>Inventory</h2>
          </div>
          <div className="header-right">
            <Button type="link" style={{ fontWeight: 'bold' }}>Nanny's Shop</Button>
            <Avatar src="https://via.placeholder.com/32" />
          </div>
        </Header>

        <Content style={{ margin: '24px', backgroundColor: '#fff', borderRadius: '8px', padding: '24px' }}>
          <div className="inventory-summary">
            <Card className="summary-card">
              <h3>All Products</h3>
              <p>350</p>
            </Card>
            <Card className="summary-card" style={{ backgroundColor: '#E6F7FF' }}>
              <h3>Active</h3>
              <p>316 <span style={{ color: '#1890ff' }}>86%</span></p>
            </Card>
            <Card className="summary-card" style={{ color: '#ff4d4f' }}>
              <h3>Low Stock Alert</h3>
              <p>23</p>
            </Card>
            <Card className="summary-card">
              <h3>Expired</h3>
              <p>3</p>
            </Card>
          </div>

          {/* Search and Actions */}
          <div className="inventory-actions">
            <Input placeholder="Search" prefix={<SearchOutlined />} className="search-input" />
            <div className="action-buttons">
              <Button icon={<FilterOutlined />}>Filter</Button>
              <Button icon={<ShareAltOutlined />}>Share</Button>
              <Button>Bulk Action</Button>
            </div>
          </div>

          {/* Inventory Table */}
          <Table
            columns={columns}
            dataSource={dataSource}
            pagination={{ pageSize: 10, position: ['bottomRight'] }}
            rowClassName={(record, index) => (index % 2 === 0 ? 'table-row-light' : 'table-row-dark')}
            bordered
          />
        </Content>
      </Layout>
    </Layout>
  );
};

export default Inventory;
