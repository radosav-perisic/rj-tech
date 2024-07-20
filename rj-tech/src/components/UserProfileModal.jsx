import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";

const UserProfileModal = ({ isOpen, onClose, onLogin }) => {
  const [userData, setUserData] = useState({
    name: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
    newsletter: false,
  });
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      onLogin(storedUser);
      onClose();
    }
  }, [onLogin, onClose]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setUserData({
      ...userData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userData.password !== userData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    localStorage.setItem("user", JSON.stringify(userData));
    onLogin(userData);
    onClose();
  };

  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Create an Account</h2>
          <button onClick={onClose} className="text-gray-600">&times;</button>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="First Name"
            value={userData.name}
            onChange={handleChange}
            className="my-2 p-2 border rounded w-full"
            required
          />
          <input
            type="text"
            name="lastname"
            placeholder="Last Name"
            value={userData.lastname}
            onChange={handleChange}
            className="my-2 p-2 border rounded w-full"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={userData.email}
            onChange={handleChange}
            className="my-2 p-2 border rounded w-full"
            required
          />
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            value={userData.password}
            onChange={handleChange}
            className="my-2 p-2 border rounded w-full"
            required
          />
          <input
            type={showPassword ? "text" : "password"}
            name="confirmPassword"
            placeholder="Confirm Password"
            value={userData.confirmPassword}
            onChange={handleChange}
            className="my-2 p-2 border rounded w-full"
            required
          />
          <div className="flex items-center my-2">
            <input
              type="checkbox"
              name="newsletter"
              checked={userData.newsletter}
              onChange={handleChange}
              className="mr-2"
            />
            <label htmlFor="newsletter">Subscribe to Newsletter</label>
          </div>
          <div className="flex items-center my-2">
            <input
              type="checkbox"
              checked={showPassword}
              onChange={() => setShowPassword(!showPassword)}
              className="mr-2"
            />
            <label>Show Password</label>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-bold py-2 rounded-lg mb-4"
          >
            Create Profile
          </button>
          <button
            type="button"
            className="w-full bg-gray-600 text-white font-bold py-2 rounded-lg"
            onClick={onClose}
          >
            Cancel
          </button>
        </form>
      </div>
    </div>,
    document.body
  );
};

export default UserProfileModal;
