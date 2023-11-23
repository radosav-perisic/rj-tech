import { Link } from 'react-router-dom'
import React, { useContext } from "react";
import { PRODUCTS } from "../products";
import { Context } from "../context/Context";
import CartItem from "../components/CartItem";

import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(Context);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-center items-center outline">
      <div>
        <h1>Your Shopping Cart</h1>
      </div>
      <div className="flex flex-col justify-center items-center">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}
      </div>
      {totalAmount > 0 ? (
        <div>
          <p className="text-2xl font-bold"> Subtotal: ${totalAmount.toFixed(2)}</p>
          <button
            className="w-40 font-semibold
  h-12
  bg-gray-900
  text-white
  border-none
  rounded-lg
  m-2.5
  "
            onClick={() => navigate("/")}
          >
            Continue Shopping
          </button>
          <Link to='/checkout'>
          <button
            className="w-40 font-semibold
            h-12
            bg-gray-900
            text-white
            border-none
            rounded-lg
            m-2.5"
          >
            Checkout
          </button>
          </Link>
        </div>
      ) : (
        <h1>Your Cart is Empty.</h1>
      )}
    </div>
  );
};

export default Cart;
