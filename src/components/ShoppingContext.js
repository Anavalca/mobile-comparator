import React, { createContext, useState } from 'react';

const ShoppingContext = createContext(null)

export const ShoppingProvider = ({ cart, children }) => {
  const [shoppingCart, setShoppingCart] = useState(cart);

  return (
    <ShoppingContext.Provider value={{ shoppingCart, setShoppingCart }}>
      {children}
    </ShoppingContext.Provider>
  )
}

export const useShoppingContext = () => React.useContext(ShoppingContext)

