import React from 'react'
import { Link } from 'react-router-dom'
import {HiOutlineShoppingCart} from 'react-icons/hi'

const Navbar = () => {
  return (
    <div className=''>
        <div className=''>
        <Link to='/'>Shop</Link>
        <Link to='/cart'><HiOutlineShoppingCart size={32}/></Link>
        </div>
    </div>
  )
}

export default Navbar