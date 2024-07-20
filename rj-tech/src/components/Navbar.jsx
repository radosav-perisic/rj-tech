// src/components/Navbar.js
import React, { useContext, useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineShoppingCart } from 'react-icons/hi';
import { Context } from '../context/Context';
import UserProfileModal from '../components/UserProfileModal';
import rjtech from '../assets/rjtech.png';
import { FaCircleUser } from 'react-icons/fa6';
import PRODUCTS from '../products';

const Navbar = () => {
  const { cartItems, numItems, clearCart, getTotalCartAmount, addToCart, removeFromCart } = useContext(Context);
  const [profileOpen, setProfileOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [productDropdownOpen, setProductDropdownOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const [cartDropdownOpen, setCartDropdownOpen] = useState(false);
  const productDropdownRef = useRef(null);
  const profileDropdownRef = useRef(null);
  const cartDropdownRef = useRef(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
      setIsLoggedIn(true);
    }
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (productDropdownRef.current && !productDropdownRef.current.contains(event.target)) {
        setProductDropdownOpen(false);
      }
      if (profileDropdownRef.current && !profileDropdownRef.current.contains(event.target)) {
        setProfileDropdownOpen(false);
      }
      if (cartDropdownRef.current && !cartDropdownRef.current.contains(event.target)) {
        setCartDropdownOpen(false);
      }
    };

    if (productDropdownOpen || profileDropdownOpen || cartDropdownOpen) {
      document.addEventListener('click', handleClickOutside);
    } else {
      document.removeEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [productDropdownOpen, profileDropdownOpen, cartDropdownOpen]);

  const handleLogout = () => {
    setUser(null);
    setIsLoggedIn(false);
    localStorage.removeItem("user");
    setProfileDropdownOpen(false);
  };

  return (
    <div className="w-full h-[80px] z-10 px-4 bg-[#003366] backdrop-blur fixed flex justify-between items-center">
      <div className="flex-1 text-base md:text-lg font flex justify-center items-center gap-7 font-semibold">
        <div className="flex justify-center items-center space-x-10">
          <Link className="text-white" to='/'>HOME</Link>
          <Link className="text-white" to='/about'>ABOUT US</Link>
          <img src={rjtech} className='h-[120px]' alt="RJ-Tech" />
          
        </div>
        <div className="relative" ref={productDropdownRef}>
        <button
  id="dropdownDefaultButton"
  onClick={() => setProductDropdownOpen(!productDropdownOpen)}
  className="text-blue-900 bg-gray-100 hover:bg-gray-200 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
  type="button">
  Products
  <svg className="w-2.5 h-2.5 ml-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
  </svg>
</button>



<div id="dropdown" className={`absolute left-0 mt-2 z-10 ${productDropdownOpen ? '' : 'hidden'} bg-blue-50 ring-2 ring-gray-300 divide-y divide-gray-100 rounded-lg shadow w-44`}>
  <ul className="py-2 text-sm text-gray-700" aria-labelledby="dropdownDefaultButton">
    <li>
      <Link className="block px-4 py-2 hover:bg-blue-100" to="/airpods" onClick={() => setProductDropdownOpen(false)}>Airpods</Link>
    </li>
    <li>
      <Link className="block px-4 py-2 hover:bg-blue-100" to="/cases" onClick={() => setProductDropdownOpen(false)}>Cases</Link>
    </li>
    <li>
      <Link className="block px-4 py-2 hover:bg-blue-100" to="/chargers" onClick={() => setProductDropdownOpen(false)}>Chargers</Link>
    </li>
    <li>
      <Link className="block px-4 py-2 hover:bg-blue-100" to="/accessories" onClick={() => setProductDropdownOpen(false)}>Accessories</Link>
    </li>
    <li>
      <Link className="block px-4 py-2 hover:bg-blue-100" to="/watches" onClick={() => setProductDropdownOpen(false)}>Watches</Link>
    </li>
  </ul>
</div>



        </div>
        <Link className="text-white" to='/contact'>CONTACT</Link>
      </div>
      <div className="flex items-center mr-6 relative gap-7 font-semibold">
        {!isLoggedIn ? (
          <button
            onClick={() => setProfileOpen(true)}
            className=""
          >
            <FaCircleUser className="w-6 h-6 text-white" />
          </button>
        ) : (
          <div className="relative" ref={profileDropdownRef}>
            <button
              onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
              className=""
            >
              <FaCircleUser className="w-6 h-6 text-white" />
            </button>
            {profileDropdownOpen && (
              <div className="absolute right-0 mt-2 w-32 bg-white rounded-md shadow-lg z-10">
                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        )}
        <div className="relative" ref={cartDropdownRef} onMouseEnter={() => setCartDropdownOpen(true)} onMouseLeave={() => setCartDropdownOpen(false)}>
        <Link to="/cart"><button
            className=""
          >
            <HiOutlineShoppingCart className='text-white duration-300' size={42} />
            <div
              className="rounded-full bg-[#e28119] border-[1px] border-[#ffffff] flex justify-center items-center absolute h-[1.10rem] w-[1.10rem] text-sm font-medium text-white"
              style={{ transform: "translate(155%, -65%)" }}
            >
              {numItems}
            </div>
          </button></Link>
          {cartDropdownOpen && (
            <div
              className="absolute right-0 mt-2 w-64 bg-white rounded-md shadow-lg z-10 p-4"
            >
              {numItems > 0 ? (
                <>
                  <ul className="divide-y divide-gray-200 max-h-48 overflow-y-auto">
                    {Object.entries(cartItems).map(([id, quantity]) => {
                      if (quantity > 0) {
                        const product = PRODUCTS.find(p => p.id === parseInt(id));
                        return (
                          <li key={id} className="flex justify-between items-center py-2">
                            <img src={product.productImage} alt={product.productName} className="w-12 h-12 object-contain" />
                            <div className="flex-1 ml-2">
                              <p className="text-sm font-medium">{product.productName}</p>
                              <p className='text-sm font-semibold text-gray-600/70'>x {quantity}</p>
                              <p className="text-sm">${(product.price * quantity).toFixed(2)}</p>
                            </div>
                            <div className="flex items-center">
                              <button
                                onClick={() => removeFromCart(id)}
                                className="text-gray-600 hover:text-gray-800"
                              >
                                -
                              </button>
                              <button
                                onClick={() => addToCart(id)}
                                className="text-gray-600 hover:text-gray-800 ml-2"
                              >
                                +
                              </button>
                            </div>
                          </li>
                        );
                      }
                      return null;
                    })}
                  </ul>
                  <div className="mt-2 pt-2 border-t border-gray-200">
                    <p className="text-lg font-bold">Total: ${getTotalCartAmount().toFixed(2)}</p>
                    <button
                      onClick={clearCart}
                      className="w-full text-left text-red-600 hover:underline mt-2"
                    >
                      Clear Cart
                    </button>
                    <Link to="/cart">
                      <button
                        className="w-full bg-gray-200 text-black font-bold py-1 rounded mt-2"
                        onClick={() => setCartDropdownOpen(false)}
                      >
                        Go to Cart
                      </button>
                    </Link>
                    <Link to="/checkout">
                      <button
                        className="w-full bg-green-600 text-white font-bold py-1 rounded mt-2"
                        onClick={() => setCartDropdownOpen(false)}
                      >
                        Checkout
                      </button>
                    </Link>
                  </div>
                </>
              ) : (
                <p className="text-center text-gray-500">Your cart is empty.</p>
              )}
            </div>
          )}
        </div>
      </div>
      <UserProfileModal
        isOpen={profileOpen}
        onClose={() => setProfileOpen(false)}
        onLogin={(userData) => {
          setUser(userData);
          setIsLoggedIn(true);
        }}
      />
    </div>
  );
};

export default Navbar;
