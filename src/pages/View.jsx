import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { addTowishList } from '../redux/WishlistSlice'
import { addToCart } from '../redux/CartSlice'


function View() {
  const [products,setProducts]=useState({})
  const dispatch =useDispatch()
  const userWishlist =useSelector(state=>state.wishlistReducer)
  const {id} = useParams()
// console.log(products);

 const handleAddtoWishlist =()=>{
  const existingProduct =userWishlist?.find(item=>item.id == products.id)
  if(existingProduct){
    alert("Product Already Added ")
  }else{
    dispatch(  addTowishList (products))
  }
 }






  useEffect(()=>{
    const allProducts =JSON.parse(sessionStorage.getItem("allProducts"))
    setProducts(allProducts.find(item=> item.id == id))

  },[])

  return (
    <>
    <Header/>
     <div className="bg-white min-h-screen flex justify-center items-start px-8 py-12">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12">
        {/* Left Side - Product Image */}
        <div className="flex flex-col items-center justify-center space-y-6">
          <img
            src={products.thumbnail}
            alt="Essence Mascara"
            className="w-64 h-auto object-contain"
          />
 <h5></h5>
          <div className="flex space-x-6">
            <button onClick={handleAddtoWishlist} className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md font-semibold text-sm">
              ADD TO WISHLIST
            </button>
            <button onClick={()=>dispatch(addToCart(products))} className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-md font-semibold text-sm">
              ADD TO CART
            </button>
          </div>
        </div>

        {/* Right Side - Product Details */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
           {products?.title}
          </h2>
          <p className="text-red-600 font-semibold text-lg mb-4">{products?.price}</p>

          <p className="text-sm mb-2">
            <span className="font-bold">Brand :</span> {products?.brand}
          </p>
          <p className="text-sm mb-2">
            <span className="font-bold">Category :</span> {products?.category}
          </p>
          <p className="text-sm mb-6">
            <span className="font-bold">Description :</span> {products?.description}
          </p>

          <h3 className="font-bold text-lg mb-3">Client Reviews</h3>

          <div className="space-y-3">
            <div className="border rounded-md p-3 shadow-sm">
              <p className="font-semibold">Eleanor Collins :</p>
              <p className="text-sm text-gray-700">Would not recommend!!</p>
              <p className="text-sm font-medium mt-1">
                Rating : <span className="text-yellow-500">⭐ 3</span>
              </p>
            </div>

            <div className="border rounded-md p-3 shadow-sm">
              <p className="font-semibold">Lucas Gordon :</p>
              <p className="text-sm text-gray-700">Very satisfied!!</p>
              <p className="text-sm font-medium mt-1">
                Rating : <span className="text-yellow-500">⭐ 4</span>
              </p>
            </div>

            <div className="border rounded-md p-3 shadow-sm">
              <p className="font-semibold">Eleanor Collins :</p>
              <p className="text-sm text-gray-700">Highly impressed!!</p>
              <p className="text-sm font-medium mt-1">
                Rating : <span className="text-yellow-500">⭐ 5</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default View