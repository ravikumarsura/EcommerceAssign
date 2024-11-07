import React, { useState } from 'react';
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
  const [activeKey, setActiveKey] = useState('/inventory'); // Default active menu item

  const handleMenuClick = (key) => {
    setActiveKey(key);
    navigate(key);
  };

  const topMenuItems = [
    { key: '/inventory', icon: <AppstoreOutlined />, count: 0 },
    { key: '/orders', icon: <ShoppingCartOutlined />, count: 3 },
    { key: '/customers', icon: <UserOutlined />, count: 0 },
  ];

  const bottomMenuItems = [
    { key: '/support', icon: <CustomerServiceOutlined />, count: 0 },
    { key: '/gifts', icon: <GiftOutlined />, count: 16 },
  ];

  return (
    <Sider width={80} className="sidebar">
      <div className="logo" />
      <Menu theme="light" mode="vertical" className="sidebar-menu">
        {topMenuItems.map(item => (
          <Menu.Item
            key={item.key}
            className={`menu-item ${activeKey === item.key ? 'active' : ''}`}
            onClick={() => handleMenuClick(item.key)}
          >
            <Badge count={item.count} offset={[10, 0]}>
              {item.icon}
            </Badge>
          </Menu.Item>
        ))}

        <div className="bottom-menu-items">
          {bottomMenuItems.map(item => (
            <Menu.Item
              key={item.key}
              className={`menu-item ${activeKey === item.key ? 'active' : ''}`}
              onClick={() => handleMenuClick(item.key)}
            >
              <Badge count={item.count} offset={[10, 0]}>
                {item.icon}
              </Badge>
            </Menu.Item>
          ))}
          <Menu.Item
            key="/logout"
            icon={<LogoutOutlined style={{color:"red"}}/>}
            className="logout-item"
            onClick={() => handleMenuClick('/logout')}
          />
        </div>
      </Menu>
    </Sider>
  );
};

export default Sidebar;
