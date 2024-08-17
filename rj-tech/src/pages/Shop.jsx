import React, { useState, useContext, useEffect } from "react";
import { Link } from 'react-router-dom';
import PRODUCTS from "../products";
import Product from "../components/Product";
import LinkEmoji from "../assets/link.png";
import Loader from "../components/Loader";
import { Context } from "../context/Context";

const getProductsByCategory = (category, start, limit) => {
  return PRODUCTS.filter(product => product.category === category).slice(start, start + limit);
};

const Shop = () => {
  const categories = ["Airpods", "Cases", "Chargers", "Accessories", "Watches"];
  const limit = window.innerWidth < 768 ? 1 : 3; // 1 item per category on small screens, 3 on larger screens
  const [startIndices, setStartIndices] = useState(categories.reduce((acc, category) => {
    acc[category] = 0;
    return acc;
  }, {}));
  const { searchQuery, loading, setLoading } = useContext(Context);
  const [filteredProducts, setFilteredProducts] = useState(PRODUCTS);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      if (searchQuery) {
        const filtered = PRODUCTS.filter((product) =>
          product.productName.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredProducts(filtered);
      } else {
        setFilteredProducts(PRODUCTS);
      }
      setLoading(false);
    }, 1000); // Simulate a delay

    return () => clearTimeout(timer);
  }, [searchQuery, setLoading]);

  const handleNext = (category) => {
    setStartIndices(prev => ({
      ...prev,
      [category]: prev[category] + limit
    }));
  };

  const handlePrev = (category) => {
    setStartIndices(prev => ({
      ...prev,
      [category]: Math.max(prev[category] - limit, 0)
    }));
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="w-full h-full rounded flex flex-col justify-center items-center pt-20">
      {categories.map(category => {
        const productsInCategory = filteredProducts.filter(product => product.category === category);
        if (productsInCategory.length === 0) return null;
        return (
          <div key={category} className="w-full max-w-[1000px] mb-12 mt-8 px-4 relative">
            <div className="text-center text-2xl font-bold mb-4 flex justify-center items-center">
              <Link to={`/${category.toLowerCase()}`} className="flex items-center">
                {category}
                <img className="w-6 h-6 ml-2 mt-1" src={LinkEmoji} alt={`${category} link`} />
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center font-semibold py-6 items-center mx-auto justify-center">
              {getProductsByCategory(category, startIndices[category], limit).map((product) => (
                <Product key={product.id} data={product} />
              ))}
            </div>
            {startIndices[category] > 0 && (
              <button 
                onClick={() => handlePrev(category)} 
                className="absolute left-0 top-1/2 ml-5 transform -translate-y-1/2 text-6xl font-bold text-gray-600 hover:text-gray-900"
                style={{ fontSize: '80px' }}
              >
                &#x2039;
              </button>
            )}
            {startIndices[category] + limit < PRODUCTS.filter(product => product.category === category).length && (
              <button 
                onClick={() => handleNext(category)} 
                className="absolute right-0 top-1/2 mr-5 transform -translate-y-1/2 text-6xl font-bold text-gray-600 hover:text-gray-900"
                style={{ fontSize: '80px' }}
              >
                &#x203A;
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Shop;
