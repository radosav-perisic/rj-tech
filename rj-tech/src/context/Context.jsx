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
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const addToCart = (itemId) => {
    setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}))
  }

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1}))
  }

  const updateCartItem = (newAmount, itemId) => {
    setCartItems((prev)=> ({...prev, [itemId] : newAmount}))
  }

const contextValue = {cartItems, addToCart, removeFromCart, updateCartItem}


  return <Context.Provider value={contextValue}>{props.children}</Context.Provider>;
};

export default ContextProvider;
