import { Link } from 'react-router-dom';
import React, { useContext, useState, useEffect } from "react";
import PRODUCTS from "../products";
import { Context } from "../context/Context";
import CartItem from "../components/CartItem";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, getTotalCartAmount, clearCart } = useContext(Context);
  const totalAmount = getTotalCartAmount();
  const [timeLeft, setTimeLeft] = useState(600);

  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <div className="flex flex-col justify-center items-center pt-24">
      <h1 className="text-3xl font-bold mb-6">Your Shopping Cart</h1>
      {totalAmount > 0 ? (
        <>
          <div className="w-full max-w-[800px] p-4 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 mb-6">
            <p>An item in your cart is in high demand. Your cart is reserved for {formatTime(timeLeft)} minutes!</p>
          </div>
          <div className="w-full max-w-[800px] grid grid-cols-1 sm:grid-cols-2 gap-4">
            {PRODUCTS.map((product) => {
              if (cartItems[product.id] !== 0) {
                return <CartItem key={product.id} data={product} />;
              }
            })}
          </div>
          <div className="w-full max-w-[800px] mt-6 p-4 bg-white rounded-lg shadow">
            <p className="text-2xl font-bold mb-4">Subtotal: ${totalAmount.toFixed(2)}</p>
            <p className="text-sm mb-4">This Week Only: Free Worldwide Shipping! Orders will be processed in USD.</p>
            <div className="flex justify-between">
              <button
                className="w-40 font-semibold h-12 bg-gray-900 text-white rounded-lg"
                onClick={() => navigate("/")}
              >
                Continue Shopping
              </button>
              <button
                className="w-40 font-semibold h-12 bg-red-600 text-white rounded-lg"
                onClick={clearCart}
              >
                Clear Cart
              </button>
              <Link to='/checkout'>
                <button
                  className="w-40 font-semibold h-12 bg-green-600 text-white rounded-lg"
                >
                  Checkout
                </button>
              </Link>
            </div>
          </div>
        </>
      ) : (
        <h1 className="mt-6 text-xl">Your Cart is Empty.</h1>
      )}
    </div>
  );
};

export default Cart;
