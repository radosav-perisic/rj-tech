import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import {HiOutlineShoppingCart} from 'react-icons/hi'
import { Context } from '../context/Context'

const Navbar = () => {
  const {numItems } = useContext(Context);

  return (
    <div className='w-full h-20 bg-[#2b2a2a] flex justify-between items-center'>
            <div className='flex-wrap items-center font-semibold ml-6'>
        <Link to='/'>Shop</Link>
        
        </div>
        <div className='mr-12 flex items-center'>
    
        <Link to='/cart'><HiOutlineShoppingCart className='text-white  duration-300' size={42}/><div
              className="rounded-full bg-[#e28119] border-[1px] border-[#ffffff] flex justify-center items-center absolute h-[1.10rem] w-[1.10rem] text-sm font-medium text-white"
              style={{
               
                transform: "translate(155%, -65%)",
              }}
            >
              {numItems}
            </div>
          </Link>
        
        </div>
    </div>
  )
}

export default Navbar