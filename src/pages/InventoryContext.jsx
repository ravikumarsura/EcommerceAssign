import React, { createContext, useState } from 'react';
export const InventoryContext = createContext();

export const InventoryProvider = ({ children }) => {
  // const [inventory, setInventory] = useState({});

  const [inventory, setInventory] = useState({
    image: '', 
    productName: '',
    productLink: 'https://example.com/polo-t-shirt',
    date: '12 Sept 2022',
    price: '₦25,000.00',
    stock: 20,
    totalOrders: '₦50,000.00',
    views: 1200,
    favourite: 23,
    purchases: [
      {
        date: '12 Aug 2022 - 12:25 am',
        type: 'Home Delivery',
        unitPrice: '₦25,000.00',
        quantity: 2,
        discount: '₦0.00',
        total: '₦50,000.00',
        status: 'Completed',
      },
    ],
  });

  return (
    <InventoryContext.Provider value={{ inventory, setInventory }}>
      {children}
    </InventoryContext.Provider>
  );
};
