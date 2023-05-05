import React, { createContext, useState } from "react";
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
  const [cartItems, setCartItems] = useState();

  const addToCart = (itemId) => {
    setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}))
  }

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1}))
  }

const contextValue = {cartItems, addToCart, removeFromCart}

  return <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>;
};

export default ContextProvider;
