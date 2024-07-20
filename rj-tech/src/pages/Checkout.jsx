import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../context/Context";
import PRODUCTS from "../products";

const Checkout = () => {
  const { cartItems, getTotalCartAmount } = useContext(Context);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    address: "",
    floor: "",
    postal: "",
    email: "",
    telephone: "",
    hasApartmentNumber: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { firstname, lastname, address, postal, email, telephone, hasApartmentNumber, floor } = formData;
    if (!firstname || !lastname || !address || !postal || !email || !telephone || (hasApartmentNumber && !floor)) {
      alert("Please fill out all required fields.");
      return;
    }
    // proceed with form submission
    e.target.submit();
  };

  return (
    <div className="w-full min-h-screen p-4 flex flex-col items-center bg-gray-100 pt-20">
      <div className="w-full max-w-lg bg-white p-4  rounded-lg shadow-lg mb-8">
        <h2 className="text-xl font-bold mb-4">Order Summary</h2> 
        <div className="bg-gray-50 rounded-md p-3 shadow-inner max-h-64 overflow-y-auto">
          <ul>
            {Object.entries(cartItems).map(([id, quantity]) => {
              if (quantity === 0) return null; // Filter out items with zero quantity
              const product = PRODUCTS.find(p => p.id === parseInt(id));
              if (!product) return null;
              return (
                <li key={id} className="flex justify-between items-center border-b border-gray-200 last:border-b-0 py-2">
                  <img src={product.productImage} alt={product.productName} className="w-14 h-16 mr-2 rounded-full"/>
                  <span className="flex-1">{product.productName} x {quantity}</span>
                  <span className="w-24 text-right font-medium">${(product.price * quantity).toFixed(2)}</span>
                </li>
              );
            })}
          </ul>
        </div>
        <p className="text-lg font-bold mt-4">Total: ${totalAmount.toFixed(2)}</p>
      </div>
      <form
        method="POST"
        action="https://getform.io/f/03b7c204-1c7d-46d2-91cb-f3f5df1c4e91"
        className="flex flex-col w-full max-w-lg p-4 bg-white rounded-lg shadow-lg"
        onSubmit={handleSubmit}
      >
        <p className="text-3xl text-center font-bold mb-4">Checkout</p>
        <input
          type="text"
          name="firstname"
          placeholder="Firstname"
          value={formData.firstname}
          onChange={handleChange}
          className="mb-4 p-2 rounded-sm border border-gray-300"
          required
        />
        <input
          type="text"
          name="lastname"
          placeholder="Lastname"
          value={formData.lastname}
          onChange={handleChange}
          className="mb-4 p-2 rounded-sm border border-gray-300"
          required
        />
        <input
          type="text"
          name="address"
          placeholder="Street & Address number"
          value={formData.address}
          onChange={handleChange}
          className="mb-4 p-2 rounded-sm border border-gray-300"
          required
        />
        {formData.hasApartmentNumber && (
          <input
            type="text"
            name="floor"
            placeholder="Floor & Apartment number"
            value={formData.floor}
            onChange={handleChange}
            className="mb-4 p-2 rounded-sm border border-gray-300"
            required
          />
        )}
        <div className="flex items-center mb-4">
          <input
            type="checkbox"
            name="hasApartmentNumber"
            checked={formData.hasApartmentNumber}
            onChange={handleChange}
            className="mr-2"
          />
          <label htmlFor="hasApartmentNumber">I have an apartment number</label>
        </div>
        <input
          type="text"
          name="postal"
          placeholder="Postal Code"
          value={formData.postal}
          onChange={handleChange}
          className="mb-4 p-2 rounded-sm border border-gray-300"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="mb-4 p-2 rounded-sm border border-gray-300"
          required
        />
        <input
          type="text"
          name="telephone"
          placeholder="Telephone"
          value={formData.telephone}
          onChange={handleChange}
          className="mb-4 p-2 rounded-sm border border-gray-300"
          required
        />
        <button type="submit" className="bg-green-600 text-white font-bold py-2 rounded-lg">Complete Order</button>
        <button type="button" className="mt-2 bg-gray-600 text-white font-bold py-2 rounded-lg" onClick={() => navigate("/cart")}>Back to Cart</button>
      </form>
    </div>
  );
};

export default Checkout;
