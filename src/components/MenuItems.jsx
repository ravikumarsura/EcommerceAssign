// src/components/MenuItems.js
import React from 'react';
import {
  AppstoreOutlined,
  ShoppingCartOutlined,
  UserOutlined,
  GiftOutlined,
  SoundOutlined,
  LogoutOutlined,
} from '@ant-design/icons';

export const menuItems = [
  {
    key: '/',
    icon: <AppstoreOutlined />,
    label: 'Inventory',
    badge: 3,
  },
  {
    key: '/orders',
    icon: <ShoppingCartOutlined />,
    label: 'Orders',
    badge: 16,
  },
  {
    key: '/customers',
    icon: <UserOutlined />,
    label: 'Customers',
    badge: 0,
  },
  {
    key: '/gifts',
    icon: <GiftOutlined />,
    label: 'Gifts',
  },
  {
    key: '/headphones',
    icon: <SoundOutlined />,
    label: 'Headphones',
  },
  {
    key: '/logout',
    icon: <LogoutOutlined />,
    label: 'Logout',
  },
];
