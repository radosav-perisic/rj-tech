import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineShoppingCart } from 'react-icons/hi';
import { Context } from '../context/Context';

const Navbar = () => {
  const { numItems } = useContext(Context);

  return (
    <div className="w-full h-[80px] z-10 px-4 bg-[#96abe8] fixed flex justify-between items-center">
      <div className="flex-1 text-base md:text-lg font flex justify-center items-center gap-2 md:gap-7 font-semibold">
        <Link className="hover-effect mr-14" to='/'>Home</Link>
        <Link className="hover-effect" to='/airpods'>Airpods</Link>
        <Link className="hover-effect" to='/cases'>Cases</Link>
        <Link className="hover-effect" to='/chargers'>Chargers</Link>
        <Link className="hover-effect" to='/accessories'>Accessories</Link>
      </div>
      <div className="flex items-center mr-6 relative gap-7 font-semibold">
      <Link className="hover-effect" to='/about'>About us</Link>
        <Link to='/cart'>
          <HiOutlineShoppingCart className='text-white duration-300' size={42} />
          <div
            className="rounded-full bg-[#e28119] border-[1px] border-[#ffffff] flex justify-center items-center absolute h-[1.10rem] w-[1.10rem] text-sm font-medium text-white"
            style={{ transform: "translate(155%, -65%)" }}
          >
            {numItems}
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
      