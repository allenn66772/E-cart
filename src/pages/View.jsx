import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addTowishList } from "../redux/WishlistSlice";
import { addToCart } from "../redux/CartSlice";
import { FaHeart, FaCartPlus, FaStar } from "react-icons/fa";

function View() {
  const [product, setProduct] = useState({});
  const dispatch = useDispatch();
  const userWishlist = useSelector((state) => state.wishlistReducer);
  const { id } = useParams();

  const handleAddToWishlist = () => {
    const existingProduct = userWishlist?.find((item) => item.id == product.id);
    if (existingProduct) {
      alert("Product Already in Wishlist ❤️");
    } else {
      dispatch(addTowishList(product));
    }
  };

  useEffect(() => {
    const allProducts = JSON.parse(sessionStorage.getItem("allProducts"));
    setProduct(allProducts.find((item) => item.id == id));
  }, []);

  return (
    <>
      <Header />
      <div className="bg-gradient-to-br from-violet-50 via-white to-sky-50 min-h-screen flex justify-center items-start px-6 md:px-12 py-16">
        <motion.div
          className="max-w-6xl w-full grid md:grid-cols-2 gap-12 bg-white shadow-md rounded-3xl p-8 border border-violet-100"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* 🌸 Product Image Section */}
          <motion.div
            className="flex flex-col items-center justify-center space-y-6"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-violet-50 rounded-2xl shadow-inner p-6 flex justify-center">
              <img
                src={product.thumbnail}
                alt={product.title}
                className="w-64 h-auto object-contain drop-shadow-sm hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="flex space-x-5">
              <button
                onClick={handleAddToWishlist}
                className="flex items-center gap-2 bg-pink-100 hover:bg-pink-200 text-pink-700 px-5 py-2 rounded-full font-medium shadow-sm transition-all"
              >
                <FaHeart />
                Add to Wishlist
              </button>
              <button
                onClick={() => dispatch(addToCart(product))}
                className="flex items-center gap-2 bg-green-100 hover:bg-green-200 text-green-700 px-5 py-2 rounded-full font-medium shadow-sm transition-all"
              >
                <FaCartPlus />
                Add to Cart
              </button>
            </div>
          </motion.div>

          {/* 💬 Product Details Section */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-violet-800 mb-3">
              {product?.title}
            </h2>
            <p className="text-2xl text-green-600 font-semibold mb-6">
              ₹ {product?.price}
            </p>

            <p className="text-gray-600 text-sm mb-2">
              <span className="font-bold text-violet-700">Brand:</span>{" "}
              {product?.brand}
            </p>
            <p className="text-gray-600 text-sm mb-2">
              <span className="font-bold text-violet-700">Category:</span>{" "}
              {product?.category}
            </p>
            <p className="text-gray-700 text-sm mb-6">
              <span className="font-bold text-violet-700">Description:</span>{" "}
              {product?.description}
            </p>

            <h3 className="font-bold text-lg text-violet-700 mb-3">
              Client Reviews
            </h3>

            <div className="space-y-4">
              {[
                {
                  name: "Eleanor Collins",
                  review: "Would not recommend!!",
                  rating: 3,
                },
                {
                  name: "Lucas Gordon",
                  review: "Very satisfied!!",
                  rating: 4,
                },
                {
                  name: "Sophia Reed",
                  review: "Highly impressed!!",
                  rating: 5,
                },
              ].map((review, i) => (
                <motion.div
                  key={i}
                  className="border border-violet-100 bg-violet-50 rounded-xl p-4 shadow-sm hover:shadow-md transition"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <p className="font-semibold text-violet-800">
                    {review.name}:
                  </p>
                  <p className="text-sm text-gray-700">{review.review}</p>
                  <p className="text-sm font-medium mt-1 text-yellow-500">
                    Rating:{" "}
                    {[...Array(review.rating)].map((_, j) => (
                      <FaStar key={j} className="inline" />
                    ))}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}

export default View;
