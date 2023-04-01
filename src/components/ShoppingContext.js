import React, { createContext, useState } from 'react'

const ShoppingContext = createContext(null)

export const ShoppingProvider = ({ cart, productModel, children }) => {
  const [shoppingCart, setShoppingCart] = useState(cart)
  const [product, setProduct] = useState(productModel)

  return (
    <ShoppingContext.Provider value={{ shoppingCart, setShoppingCart, product, setProduct }}>
      {children}
    </ShoppingContext.Provider>
  )
}

export const useShoppingContext = () => React.useContext(ShoppingContext)

