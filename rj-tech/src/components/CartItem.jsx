// src/components/CartItem.js
import React, { useContext } from "react";
import { Context } from '../context/Context';

const CartItem = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { cartItems, addToCart, removeFromCart } = useContext(Context);

  const cartItemAmount = cartItems[id];

  return (
    <div className="flex items-center justify-between w-full p-2 bg-white rounded-lg shadow-sm mb-4">
      <img className="w-24 h-28 object-contain" src={productImage} alt={productName} />
      <div className="flex flex-col justify-between ml-2 flex-1">
        <p className="text-sm font-semibold">{productName}</p>
        <p className="text-sm text-gray-600">${price.toFixed(2)}</p>
        <div className="flex items-center mt-1">
          <button
            className="px-2 py-1 bg-gray-200 rounded text-xs"
            onClick={() => removeFromCart(id)}
          >
            -
          </button>
          <p className="mx-2 text-xs">{cartItemAmount}</p>
          <button
            className="px-2 py-1 bg-gray-200 rounded text-xs"
            onClick={() => addToCart(id)}
          >
            +
          </button>
        </div>
      </div>
      <div className="text-sm font-semibold ml-2">
        ${ (price * cartItemAmount).toFixed(2) }
      </div>
    </div>
  );
};

export default CartItem;
