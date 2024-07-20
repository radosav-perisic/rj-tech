import React from "react";

const LoyaltyProgram = () => {
  return (
    <div className="w-full h-screen p-4 flex flex-col justify-center items-center">
      <div className="flex flex-col max-w-[650px] w-full mx-4">
        <h2 className="text-3xl font-bold mb-4">Join Our Loyalty Program</h2>
        <p className="mb-4">
          Sign up for our loyalty program to enjoy exclusive discounts and offers.
        </p>
        <button
          className="w-full bg-blue-600 text-white font-bold py-2 rounded-lg mb-4"
        >
          Join Now
        </button>
      </div>
    </div>
  );
};

export default LoyaltyProgram;
