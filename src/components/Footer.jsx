import React from 'react'
import { FaTwitter, FaInstagram, FaFacebookF, FaLinkedinIn, FaGithub, FaPhoneAlt, FaTruck } from "react-icons/fa";

function Footer() {
  return (
    <>
     <footer className="bg-purple-800 text-white py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo + Description */}
        <div>
          <div className="flex items-center mb-3">
            <FaTruck className="text-2xl mr-2" />
            <h2 className="text-xl font-semibold">Daily cart</h2>
          </div>
          <p className="text-sm leading-relaxed">
            Designed and built with all the love in the world by the
            
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="font-bold text-lg mb-3">Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-yellow-300">Home Page</a></li>
            <li><a href="#" className="hover:text-yellow-300">Wishlist Page</a></li>
            <li><a href="#" className="hover:text-yellow-300">Cart Page</a></li>
          </ul>
        </div>

        {/* Guides */}
        <div>
          <h3 className="font-bold text-lg mb-3">Guides</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-yellow-300">React</a></li>
            <li><a href="#" className="hover:text-yellow-300">React Bootstrap</a></li>
            <li><a href="#" className="hover:text-yellow-300">React Router</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-bold text-lg mb-3">Contact Us</h3>
          <div className="flex items-center mb-4">
            <input
              type="email"
              placeholder="Enter your email here"
              className="w-full p-2 rounded-l-lg text-gray-800 focus:outline-none"
            />
            <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold px-3 rounded-r-lg">
              →
            </button>
          </div>
          <div className="flex space-x-4 text-xl">
            <a href="#" className="hover:text-yellow-400"><FaTwitter /></a>
            <a href="#" className="hover:text-yellow-400"><FaInstagram /></a>
            <a href="#" className="hover:text-yellow-400"><FaFacebookF /></a>
            <a href="#" className="hover:text-yellow-400"><FaLinkedinIn /></a>
            <a href="#" className="hover:text-yellow-400"><FaGithub /></a>
            <a href="#" className="hover:text-yellow-400"><FaPhoneAlt /></a>
          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="text-center text-sm mt-8 border-t border-purple-700 pt-4">
        Copyright © May 2025 Batch, Daily Cart. Built with React Redux.
      </div>
    </footer>
    </>
  )
}

export default Footer