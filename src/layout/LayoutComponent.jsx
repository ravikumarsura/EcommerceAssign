import React, { useState } from 'react';
import { Layout, Menu, Badge } from 'antd';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import { menuItems } from '../components/MenuItems';
import Inventory from '../pages/Inventory';
import Orders from '../pages/Orders';
import Customers from '../pages/Customers';
import Gifts from '../pages/Gifts';
import Headphones from '../pages/Headphones';
import Logout from '../pages/Logout';

const { Sider, Content } = Layout;

const LayoutComponent = () => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  const handleMenuClick = (path) => {
    window.location.pathname = path;
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider trigger={null} collapsible collapsed={collapsed} theme="light">
        <div className="logo" style={{ height: 64, margin: 16, background: '#e6f7ff' }} />
        <Menu mode="inline" selectedKeys={[location.pathname]}>
          {menuItems.map((item) => (
            <Menu.Item
              key={item.key}
              icon={<Badge count={item.badge} offset={[10, 0]}>{item.icon}</Badge>}
              onClick={() => handleMenuClick(item.key)}
            >
              {item.label}
            </Menu.Item>
          ))}
        </Menu>
      </Sider>
      <Layout>
        <Header collapsed={collapsed} setCollapsed={setCollapsed} />
        <Content style={{ margin: '24px',  borderRadius: 8 }}>
          {location.pathname === '/' && <Inventory />}
          {location.pathname === '/orders' && <Orders />}
          {location.pathname === '/customers' && <Customers />}
          {location.pathname === '/gifts' && <Gifts />}
          {location.pathname === '/headphones' && <Headphones />}
          {location.pathname === '/logout' && <Logout />}
        </Content>
      </Layout>
    </Layout>
  );
};

export default LayoutComponent;
