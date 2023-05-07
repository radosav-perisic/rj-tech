import React from "react";

const Checkout = () => {
  return (
    <>
    <div className="w-full md:h-screen md:p-4 flex justify-center items-top lg:mt-10 h-[500px]">
      <form
        method="POST"
        action="https://getform.io/f/03b7c204-1c7d-46d2-91cb-f3f5df1c4e91"
        className="flex flex-col max-w-[650px] w-full mx-4 mt-16 lg:mt-40"
      >
        <p className="text-5xl mb-2 text-center font-bold inline  border-b-8 rounded-full border-[#dfca09] text-[#1d1d1c]">
          Checkout
        </p>
        <div className="justify-between inline-table">
          <input
            type="firstname"
            name="name"
            placeholder="Firstname"
            className="my-3 lg:w-[300px] w-[150px] rounded-sm outline-[#838382] outline outline-[0.1px] p-2"
          />
          <input
            type="lastname"
            name="Lastname"
            placeholder="Lastname"
            className="my-3 lg:ml-[50px] ml-[28px] lg:w-[300px] w-[150px] rounded-sm outline-[#838382] outline outline-[0.1px] p-2"
          />
        </div>
        <input
          type="adress"
          name="Adress"
          placeholder="Street & Adress number"
          className=" my-3 p-2 rounded-sm outline-[#838382] outline outline-[0.1px]"
        />
        <input
          type="email "
          name="email"
          placeholder="Floor & Apartment number"
          className="my-3 p-2 rounded-sm outline-[#838382] outline outline-[0.1px]"
        />
        <input
          type="email "
          name="email"
          placeholder="Postal Code"
          className="outline outline-[0.1px] rounded-sm outline-[#838382]  my-3 p-2"
        />
        <div className="justify-between inline-table">
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="my-3 lg:w-[300px] w-[150px] rounded-sm outline-[#838382] outline outline-[0.1px] p-2"
          />
          <input
            type="firstname"
            name="name"
            placeholder="Telephone"
            className="my-3 lg:ml-[50px] ml-[28px] lg:w-[300px] w-[150px] rounded-sm outline-[#838382] outline outline-[0.1px] p-2"
          />
        </div>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis, consequatur.</p>
      </form>
    </div>
    </>
  );
};

export default Checkout;
