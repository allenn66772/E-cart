import React from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import { IoMdRemoveCircle } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { MdDelete } from "react-icons/md";
import { addToCart } from "../redux/CartSlice";
import { removeWishList } from "../redux/WishlistSlice";


function Wishlist() {
   const userWishlist =useSelector(state=>state.wishlistReducer)
   const dispatch =useDispatch()

   const handleAddToCart =(product)=>{
    dispatch (addToCart(product))
    dispatch(removeWishList(product?.id))
    const existingProduct =userCart?.find(item=>item?.id == product.id)
    if (existingProduct){
      alert("Product Updated Sucessfully")
    }

   }
  return (
    <>
     <Header />
            <div className='pt-10 mx-5'>
                <h1 className=' text-3xl font-bold text-center text-violet-800 mb-4'> My Wishlist</h1>

            {userWishlist?.length>0?
            <div className='grid grid-cols-4 gap-4'>
                {userWishlist?.map((product)=>(
                    <div className=' rounded p-2 shadow'>
                    <img height={"200px"} className='' src={product.thumbnail} alt="" />
                    <div className=' text-center'>
                        <h3 className=' mt-2'>{product.title}</h3>
                        <div className=' flex justify-evenly text-2xl my-2'>
                        <button  onClick={()=>dispatch( removeWishList(product.id))}> del  </button>
                           <button onClick={()=>handleAddToCart(product)}>add to cart</button>
                        </div>
                          </div>
                    </div>

                ))}
                 </div>
                :
                <p>Your Wishlist is Empty</p>
                
                }

                



                      
               
            </div>
    </>
  );
}

export default Wishlist;
