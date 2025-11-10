import React, { useState } from "react";
import { ImAirplane } from "react-icons/im";
import { Link } from "react-router-dom";
import { FaHeart, FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { searchProducts } from "../redux/ProductSlice";

function Header({ insideHome }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const userWishlist = useSelector((state) => state.wishlistReducer);
  const userCart = useSelector((state) => state.cartReducer);
  const count = userWishlist.length;
  const dispatch = useDispatch();

  return (
    <header className="fixed top-0 left-0 w-full z-50 shadow-md bg-gradient-to-r from-violet-100 via-white to-sky-100 backdrop-blur-md">
      <nav className="flex justify-between items-center px-6 py-4 md:px-12 text-gray-700 font-semibold">
        {/* Logo Section */}
        <Link
          to="/"
          className="flex items-center gap-2 text-2xl md:text-3xl font-bold text-violet-600 hover:text-violet-800 transition-all"
        >
          <ImAirplane className="text-violet-500" />
          Cart Daily
        </Link>

        {/* Hamburger Button (Visible on Mobile) */}
        <button
          className="md:hidden text-2xl text-violet-700 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Navigation Links */}
        <ul
          className={`flex flex-col md:flex-row items-center gap-4 md:gap-6 absolute md:static left-0 w-full md:w-auto bg-white md:bg-transparent px-6 md:px-0 py-4 md:py-0 shadow-md md:shadow-none transition-all duration-300 ease-in-out ${
            menuOpen
              ? "top-16 opacity-100"
              : "top-[-400px] opacity-0 md:opacity-100"
          }`}
        >
          {/* Search bar (visible only on Home) */}
          {insideHome && (
            <li className="w-full md:w-auto">
              <input
                type="text"
                placeholder="Search products..."
                onChange={(e) => dispatch(searchProducts(e.target.value))}
                className="w-full md:w-72 p-2 rounded-full border border-violet-200 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-violet-300 transition-all"
              />
            </li>
          )}

          {/* Wishlist */}
          <li className="relative group w-full md:w-auto text-center md:text-left">
            <Link
              to="/wishlist"
              onClick={() => setMenuOpen(false)}
              className="flex justify-center md:justify-start items-center gap-2 bg-white border border-violet-100 rounded-full px-4 py-2 hover:bg-violet-50 transition-all shadow-sm"
            >
              <FaHeart className="text-pink-500 group-hover:scale-110 transition-transform" />
              <span>Wishlist</span>
              <span className="ml-1 bg-pink-500 text-white text-xs px-2 py-0.5 rounded-full">
                {count}
              </span>
            </Link>
          </li>

          {/* Cart */}
          <li className="relative group w-full md:w-auto text-center md:text-left">
            <Link
              to="/cart"
              onClick={() => setMenuOpen(false)}
              className="flex justify-center md:justify-start items-center gap-2 bg-white border border-violet-100 rounded-full px-4 py-2 hover:bg-violet-50 transition-all shadow-sm"
            >
              <FaShoppingCart className="text-green-500 group-hover:scale-110 transition-transform" />
              <span>Cart</span>
              <span className="ml-1 bg-green-500 text-white text-xs px-2 py-0.5 rounded-full">
                {userCart.length}
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
