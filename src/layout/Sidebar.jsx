import React from 'react';
import { Layout, Menu, Badge } from 'antd';
import {
  AppstoreOutlined,
  ShoppingCartOutlined,
  UserOutlined,
  GiftOutlined,
  CustomerServiceOutlined,
  LogoutOutlined,
} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import './layout.css';

const { Sider } = Layout;

const Sidebar = () => {
  const navigate = useNavigate();

  const menuItems = [
    { key: '/inventory', icon: <AppstoreOutlined />, label: 'Inventory' },
    { key: '/orders', icon: <ShoppingCartOutlined />, label: 'Orders' },
    { key: '/customers', icon: <UserOutlined />, label: 'Customers' },
    { key: '/gifts', icon: <GiftOutlined />, label: 'Gifts' },
    { key: '/support', icon: <CustomerServiceOutlined />, label: 'Support' },
  ];

  return (
    <Sider width={80} className="sidebar">
      <div className="logo" />
      <Menu theme="light" mode="vertical" className="sidebar-menu">
        {menuItems.map(item => (
          <Menu.Item key={item.key} icon={<Badge>{item.icon}</Badge>} onClick={() => navigate(item.key)}>
            {item.label}
          </Menu.Item>
        ))}
        <Menu.Item key="/logout" icon={<LogoutOutlined />} onClick={() => navigate('/logout')}>
          Logout
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default Sidebar;
