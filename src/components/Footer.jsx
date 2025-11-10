import React from "react";
import {
  FaTwitter,
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
  FaPhoneAlt,
  FaTruck,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-violet-50 via-white to-sky-50 text-gray-700 py-12 px-6 mt-20 border-t border-violet-100 shadow-inner">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo + Description */}
        <div>
          <div className="flex items-center mb-4">
            <FaTruck className="text-3xl text-violet-500 mr-2" />
            <h2 className="text-2xl font-bold text-violet-700">Daily Cart</h2>
          </div>
          <p className="text-sm leading-relaxed text-gray-600">
            Built with love and care using React, Redux, and Tailwind CSS.
            Your go-to platform for smooth online shopping experiences.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="font-bold text-lg text-violet-700 mb-3">Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-violet-500 transition">
                Home Page
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-violet-500 transition">
                Wishlist Page
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-violet-500 transition">
                Cart Page
              </a>
            </li>
          </ul>
        </div>



        {/* Contact */}
        <div>
          <h3 className="font-bold text-lg text-violet-700 mb-3">Contact Us</h3>
          <div className="flex items-center mb-5">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-2 text-sm rounded-l-full border border-violet-200 focus:outline-none focus:ring-2 focus:ring-violet-300 text-gray-700"
            />
            <button className="bg-gradient-to-r from-violet-400 to-sky-400 hover:from-violet-500 hover:to-sky-500 text-white px-4 py-2 rounded-r-full font-bold transition-all">
              →
            </button>
          </div>

          <div className="flex space-x-4 text-xl">
            <a
              href="#"
              className="text-violet-500 hover:text-sky-500 transition-transform hover:scale-110"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="text-violet-500 hover:text-pink-500 transition-transform hover:scale-110"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="text-violet-500 hover:text-blue-600 transition-transform hover:scale-110"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="text-violet-500 hover:text-blue-500 transition-transform hover:scale-110"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="#"
              className="text-violet-500 hover:text-gray-800 transition-transform hover:scale-110"
            >
              <FaGithub />
            </a>
            <a
              href="#"
              className="text-violet-500 hover:text-green-500 transition-transform hover:scale-110"
            >
              <FaPhoneAlt />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="text-center text-sm mt-10 border-t border-violet-100 pt-5 text-gray-500">
        © {new Date().getFullYear()} Daily Cart. Built with  using React & Redux.
      </div>
    </footer>
  );
}

export default Footer;
