import React, { createContext, useState, useEffect } from "react";
import { PRODUCTS } from "../products";

export const Context = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < PRODUCTS.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

const ContextProvider = (props) => {
  const [numItems, setNumItems] = useState(0)
  const [cartItems, setCartItems] = useState(getDefaultCart());
  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
        totalAmount += cartItems[item] * itemInfo.price;
      }
    }
    return totalAmount;
  };

  useEffect(() => {
    const count = Object.values(cartItems).reduce((a, b) => a + b, 0);
    setNumItems(count);
  }, [cartItems]);

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const updateCartItem = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };


  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    updateCartItem,
    getTotalCartAmount,
    numItems
  };

  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};

export default ContextProvider;
