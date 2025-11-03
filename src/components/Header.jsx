import React from 'react'
import { ImAirplane } from "react-icons/im";
import { Link } from 'react-router-dom'
import { FaHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { searchProducts } from '../redux/ProductSlice';

function Header({insideHome}) {
 const userWishlist =useSelector(state=>state.wishlistReducer)
  const count=userWishlist.length
  const userCart = useSelector((state) => state.cartReducer);
  const dispatch=useDispatch()
  return (
    <>
    <nav className='flex justify-between p-5 text-xl bg-violet-800 text-white font-bold w-full'>
       
        <Link to={'/'} className='flex font-bold text-2xl' ><ImAirplane />CArt Daily</Link>
      <ul className='flex'>
    {insideHome &&  <li 
    onChange={(e)=>dispatch(searchProducts(e.target.value))} className='mx-5 rounded p-3  border-white'>
        <input type="text" placeholder='search your products' />
      </li>}
            <li className='mx-5 rounded-1 border p-3  ' ><Link to={'/wishlist'}> <FaHeart className='text-red-500' />Wishlist <span className='p-1 bg-black rounded-full ms-1'> {count}</span> </Link></li>
            <li className='mx-5 rounded-1 border p-3' ><Link to={'/cart'}> <FaShoppingCart className='text-green-500' />Cart <span className='p-1 bg-black rounded-full ms-1'>{userCart.length}</span></Link></li>
      </ul>
    </nav>
    </>
  )
}

export default Header