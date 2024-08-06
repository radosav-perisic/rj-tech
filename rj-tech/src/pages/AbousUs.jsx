import React from 'react';

const AboutUs = () => {
  return (
    <div className="bg-gradient-to-r from-blue-50 via-white to-blue-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-bold text-center text-gray-800 mb-12 mt-20">About Us</h1>
        <div className="bg-white shadow-2xl rounded-lg p-8 ">
          <div className="mb-8">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Welcome to RJ Tech! 🎉</h2>
            <p className="text-gray-600 mt-4">
              We believe that your iPhone deserves the best in protection and style. Our journey began with a simple idea – to provide high-quality, stylish, and durable cases and accessories that enhance your iPhone experience.
            </p>
          </div>
          <div className="mb-8">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Who We Are 👥</h2>
            <p className="text-gray-600 mt-4">
              We are a passionate team of tech enthusiasts and designers dedicated to bringing you the best iPhone accessories on the market. With a keen eye for detail and a commitment to excellence, we curate a diverse range of products that not only protect your device but also reflect your personal style.
            </p>
          </div>
          <div className="mb-8">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Products 📱</h2>
            <p className="text-gray-600 mt-4">
              Our product line includes a wide variety of iPhone cases, chargers, AirPods, Apple Watches, and other iPhone-related accessories. Whether you’re looking for something to complement your professional look or a case that can withstand the toughest conditions, we have something for everyone. Additionally, we offer an array of accessories such as chargers, screen protectors, and more to keep your iPhone fully equipped and ready for any adventure.
            </p>
          </div>
          <div className="mb-8">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Why Choose Us? 🌟</h2>
            <ul className="list-disc list-inside text-gray-600 mt-4 space-y-2">
              <li><span className="font-bold">Quality Assurance:</span> We stand by the quality of our products. Each item in our store undergoes rigorous testing to ensure it meets our high standards.</li>
              <li><span className="font-bold">Customer Satisfaction:</span> Your satisfaction is our top priority. We offer excellent customer service and a hassle-free return policy to ensure you are completely happy with your purchase.</li>
              <li><span className="font-bold">Innovation and Style:</span> We stay ahead of the trends to bring you the latest and most innovative products. Our designs are not only functional but also stylish, allowing you to express your personality through your phone accessories.</li>
              <li><span className="font-bold">Sustainability:</span> We are committed to sustainability and responsible sourcing. Our packaging is eco-friendly, and we continually seek ways to reduce our environmental footprint.</li>
            </ul>
          </div>
          <div>
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Mission 🚀</h2>
            <p className="text-gray-600 mt-4">
              Our mission is to make high-quality iPhone accessories accessible to everyone. We believe that great products should be available at reasonable prices without compromising on style or durability. Join us in our journey to enhance your iPhone experience with products that you can trust and love.
            </p>
          </div>
          <p className="text-center mt-8 text-gray-500">&copy; 2024 RJ Tech</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
