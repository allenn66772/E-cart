import React from "react";
import Header from "../components/Header";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/CartSlice";
import { removeWishList } from "../redux/WishlistSlice";
import { MdDelete } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

function Wishlist() {
  const userWishlist = useSelector((state) => state.wishlistReducer);
  const userCart = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    dispatch(removeWishList(product?.id));
    const existingProduct = userCart?.find((item) => item?.id === product.id);
    if (existingProduct) {
      alert("Product Updated Successfully");
    }
  };

  return (
    <>
      <Header insideHome={true} />
      <div className="pt-32 px-6 md:px-12 lg:px-24 bg-gradient-to-br from-violet-50 via-white to-sky-50 min-h-screen">
        <h1 className="text-3xl font-bold text-center text-violet-700 mb-8">
          My Wishlist
        </h1>

        {userWishlist?.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
            {userWishlist?.map((product) => (
              <motion.div
                key={product.id}
                className="bg-white rounded-2xl shadow-md hover:shadow-lg border border-violet-100 transition-all overflow-hidden"
                whileHover={{ scale: 1.03 }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 text-center">
                  <h3 className="text-lg font-semibold text-gray-700 mb-2 truncate">
                    {product.title}
                  </h3>

                  <div className="flex justify-center gap-3 mt-3">
                    <button
                      onClick={() => dispatch(removeWishList(product.id))}
                      className="flex items-center gap-1 bg-red-100 hover:bg-red-200 text-red-600 px-4 py-2 rounded-full font-medium text-sm transition-all"
                    >
                      <MdDelete className="text-lg" />
                      Remove
                    </button>

                    <button
                      onClick={() => handleAddToCart(product)}
                      className="flex items-center gap-1 bg-violet-100 hover:bg-violet-200 text-violet-700 px-4 py-2 rounded-full font-medium text-sm transition-all"
                    >
                      <FaShoppingCart className="text-lg" />
                      Add to Cart
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div
            className="flex flex-col items-center justify-center text-center mt-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-violet-100 rounded-full p-6 shadow-sm">
              <FaShoppingCart className="text-5xl text-violet-500 mb-4" />
            </div>
            <p className="text-gray-600 mt-4 text-lg">
              Your wishlist is empty 
            </p>
            <Link
              to="/"
              className="mt-6 bg-gradient-to-r from-violet-400 to-sky-400 text-white px-6 py-2 rounded-full hover:from-violet-500 hover:to-sky-500 transition-all font-medium shadow-sm"
            >
              Browse Products
            </Link>
          </motion.div>
        )}
      </div>
    </>
  );
}

export default Wishlist;
