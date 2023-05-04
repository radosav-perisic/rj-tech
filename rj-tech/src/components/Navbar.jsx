import React from 'react'
import { Link } from 'react-router-dom'
import {HiOutlineShoppingCart} from 'react-icons/hi'

const Navbar = () => {
  return (
    <div className='w-full h-20 bg-[#2b2a2a] flex justify-end items-center'>
        <div className='mr-12 flex items-center'>
        <Link to='/'>Shop</Link>
        <Link to='/cart'><HiOutlineShoppingCart size={32}/></Link>
        </div>
    </div>
  )
}

export default Navbar