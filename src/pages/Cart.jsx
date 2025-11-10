import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementQuantity,
  emptyCart,
  incrementQuantity,
  removeItemFromCart,
} from "../redux/CartSlice";
import { Link } from "react-router-dom";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";

function Cart() {
  const userCart = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();
  const [totalcartAmount, settotalcartAmount] = useState(0);

  const handleDecrementQuantity = (product) => {
    if (product.quantity > 1) {
      dispatch(decrementQuantity(product.id));
    } else {
      dispatch(removeItemFromCart(product?.id));
    }
  };

  useEffect(() => {
    if (userCart?.length > 0) {
      settotalcartAmount(
        Math.ceil(
          userCart
            ?.map((item) => item.totalPrice)
            .reduce((prev, curr) => prev + curr)
        )
      );
    } else {
      settotalcartAmount(0);
    }
  }, [userCart]);

  return (
    <>
      <Header />
      <div className="pt-28 px-6 md:px-12 lg:px-24 bg-gradient-to-br from-violet-50 via-white to-sky-50 min-h-screen">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-violet-700 mb-10">
           Cart Summary
        </h1>

        {userCart?.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* 🧾 Cart Items */}
            <div className="lg:col-span-2 bg-white rounded-2xl shadow-md p-6 border border-violet-100">
              <table className="table-auto w-full text-center">
                <thead className="bg-violet-100 text-violet-800 rounded-lg">
                  <tr>
                    <th className="py-3">#</th>
                    <th>Name</th>
                    <th>Image</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Remove</th>
                  </tr>
                </thead>
                <tbody>
                  {userCart.map((product, index) => (
                    <motion.tr
                      key={index}
                      className="border-b hover:bg-violet-50 transition"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <td className="py-3 font-semibold text-gray-600">
                        {index + 1}
                      </td>
                      <td className="text-gray-700 font-medium">
                        {product.title}
                      </td>
                      <td>
                        <img
                          width="70"
                          height="70"
                          src={product.thumbnail}
                          alt="product"
                          className="rounded-md shadow-sm mx-auto"
                        />
                      </td>
                      <td>
                        <div className="flex justify-center items-center">
                          <button
                            onClick={() => handleDecrementQuantity(product)}
                            className="bg-violet-100 hover:bg-violet-200 px-3 py-1 rounded-l-lg font-bold text-violet-700"
                          >
                            -
                          </button>
                          <input
                            type="text"
                            value={product.quantity}
                            className="border-t border-b border-violet-200 w-10 text-center py-1"
                            readOnly
                          />
                          <button
                            onClick={() =>
                              dispatch(incrementQuantity(product.id))
                            }
                            className="bg-violet-100 hover:bg-violet-200 px-3 py-1 rounded-r-lg font-bold text-violet-700"
                          >
                            +
                          </button>
                        </div>
                      </td>
                      <td className="text-gray-700 font-semibold">
                        ₹ {product.totalPrice}
                      </td>
                      <td>
                        <button
                          onClick={() =>
                            dispatch(removeItemFromCart(product?.id))
                          }
                          className="text-red-500 hover:text-red-600 transition"
                        >
                          <FaRegTrashAlt size={18} />
                        </button>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>

              <div className="flex justify-end mt-6 gap-3">
                <button
                  onClick={() => dispatch(emptyCart())}
                  className="bg-red-100 hover:bg-red-200 text-red-600 px-5 py-2 rounded-full font-medium shadow-sm transition-all"
                >
                  Empty Cart
                </button>
                <Link to="/">
                  <button className="bg-violet-100 hover:bg-violet-200 text-violet-700 px-5 py-2 rounded-full font-medium shadow-sm transition-all">
                    Shop More
                  </button>
                </Link>
              </div>
            </div>

          
            <motion.div
              className="bg-white rounded-2xl shadow-md border border-violet-100 p-6"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold text-violet-700 mb-4">
                Total Amount
              </h2>
              <p className="text-gray-700 text-lg mb-4">
                Subtotal: <span className="font-semibold">₹ {totalcartAmount}</span>
              </p>
              <hr className="my-4" />
              <button className="w-full bg-gradient-to-r from-violet-400 to-sky-400 hover:from-violet-500 hover:to-sky-500 text-white py-3 rounded-full font-semibold text-lg shadow-sm transition-all">
                Proceed to Checkout
              </button>
            </motion.div>
          </div>
        ) : (
          <motion.div
            className="flex flex-col items-center justify-center text-center mt-24"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <FaShoppingBag className="text-6xl text-violet-400 mb-4" />
            <p className="text-gray-600 text-xl mb-6">
              Your cart is empty 
            </p>
            <Link
              to="/"
              className="bg-gradient-to-r from-violet-400 to-sky-400 text-white px-6 py-2 rounded-full hover:from-violet-500 hover:to-sky-500 transition-all font-medium shadow-sm"
            >
              Continue Shopping
            </Link>
          </motion.div>
        )}
      </div>
    </>
  );
}

export default Cart;
