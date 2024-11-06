import React, { createContext, useState } from "react";

export const InventoryContext = createContext();

export const InventoryProvider = ({ children }) => {
  const [inventoryItem, setInventoryItem] = useState(null);

  return (
    <InventoryContext.Provider value={{ inventoryItem, setInventoryItem }}>
      {children}
    </InventoryContext.Provider>
  );
};
