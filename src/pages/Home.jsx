import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProducts } from "../redux/ProductSlice";
import { GrChapterPrevious, GrChapterNext } from "react-icons/gr";
import { motion } from "framer-motion";

function Home() {
  const dispatch = useDispatch();
  const { allProducts, error, loading } = useSelector(
    (state) => state.productReducer
  );

  const productsPerPage = 8;
  const totalPages = Math.ceil(allProducts.length / productsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const currentPageProductLastIndex = currentPage * productsPerPage;
  const currentPageProductFirstIndex =
    currentPageProductLastIndex - productsPerPage;

  const visibleProducts = allProducts?.slice(
    currentPageProductFirstIndex,
    currentPageProductLastIndex
  );

  const navigatePrevPage = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };

  const navigateNextPage = () => {
    if (currentPage !== totalPages) setCurrentPage(currentPage + 1);
  };

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);

  return (
    <>
      <Header insideHome={true} />
      <div className="pt-32 px-6 md:px-12 lg:px-24 bg-gradient-to-br from-violet-50 via-white to-sky-50 min-h-screen">
        <h1 className="text-3xl font-bold text-center text-gray-700 mb-10">
           Browse Our Products
        </h1>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-4 border-violet-400"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
            {visibleProducts?.length > 0 ? (
              visibleProducts.map((product) => (
                <motion.div
                  key={product?.id}
                  className="bg-white rounded-2xl shadow-md hover:shadow-lg border border-violet-100 transition-all overflow-hidden"
                  whileHover={{ scale: 1.03 }}
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={product?.thumbnail}
                    alt={product?.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4 text-center">
                    <h3 className="text-lg font-semibold text-gray-700 mb-2 truncate">
                      {product?.title}
                    </h3>
                    <p className="text-gray-500 text-sm mb-3 line-clamp-2">
                      {product?.description}
                    </p>
                    <Link
                      to={`/${product?.id}/view`}
                      className="bg-gradient-to-r from-violet-400 to-sky-400 hover:from-violet-500 hover:to-sky-500 text-white py-1.5 px-5 rounded-full text-sm font-medium transition-all shadow-sm"
                    >
                      View More
                    </Link>
                  </div>
                </motion.div>
              ))
            ) : (
              <p className="text-center text-gray-600 col-span-full">
                Product Not Found
              </p>
            )}
          </div>
        )}

        {/* Pagination */}
        {!loading && allProducts.length > 0 && (
          <div className="flex justify-center items-center mt-12 gap-6">
            <button
              onClick={navigatePrevPage}
              className={`p-3 rounded-full border border-gray-300 bg-white hover:bg-violet-100 transition ${
                currentPage === 1 && "opacity-50 cursor-not-allowed"
              }`}
              disabled={currentPage === 1}
            >
              <GrChapterPrevious />
            </button>

            <span className="text-lg font-semibold text-gray-600 bg-white px-4 py-2 rounded-full shadow-sm border border-violet-100">
              Page {currentPage} of {totalPages}
            </span>

            <button
              onClick={navigateNextPage}
              className={`p-3 rounded-full border border-gray-300 bg-white hover:bg-violet-100 transition ${
                currentPage === totalPages && "opacity-50 cursor-not-allowed"
              }`}
              disabled={currentPage === totalPages}
            >
              <GrChapterNext />
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default Home;
