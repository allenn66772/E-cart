import React, { useEffect, useState } from 'react'
import Header from "../components/Header"
import { FaRegTrashAlt } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { decrementQuantity, emptyCart, incrementQuantity, removeItemFromCart } from '../redux/CartSlice';
import { Link } from 'react-router-dom';

function Cart() {
   const userCart = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();
const [totalcartAmount,settotalcartAmount]=useState(0)


const handleDecrementQuantity=(product)=>{
  if(product.quantity>1){
    dispatch(decrementQuantity(product.id))
  }else{
    dispatch(removeItemFromCart(product?.id))
  }
}

  useEffect(()=>{
    if(userCart?.length>0){
     settotalcartAmount(Math.ceil (userCart?.map(item=>item.totalPrice).reduce((prev,curr)=>prev+curr)))
    }
  },[userCart])
  return (
  <>
       <Header />
      <div className='pt-32 mx-5'>
        <h1 className='text-5xl font-bold my-5'>Cart Summary</h1>

        {userCart?.length > 0 ? (
          <div className='grid grid-cols-3 gap-4'>
            <div className='col-span-2 rounded shadow p-5'>
              <table className='table-auto w-full'>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Image</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>...</th>
                  </tr>
                </thead>
                <tbody>
                  {userCart.map((product, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td className=' ps-30'>{product.title}</td>
                      <td className=' ps-7'>
                        <img
                          width="70"
                          height="70"
                          src={product.thumbnail}
                          alt="img"
                        />
                      </td>
                      <td className=' ps-7'>
                        <div className='flex'>
                          <button onClick={()=>handleDecrementQuantity(product)} className='font-bold'>-</button>
                          <input
                            type='text'
                            value={product.quantity }
                            className='border p-1 mx-3 rounded w-10 text-center'
                            readOnly
                          />
                          <button onClick={() => dispatch(incrementQuantity(product.id))} className='font-bold'>+</button>
                        </div>
                      </td>
                      <td className=' ps-5'>₹ {product.totalPrice}</td>
                      <td>
                        <button onClick={()=>dispatch(removeItemFromCart (product?.id))}>
                          {/* <FaTrashAlt className='text-red-500' /> */}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className='float-right mt-4'>
                <button onClick={()=>dispatch(emptyCart())} className='text-white text-xl p-2 rounded mx-2 bg-red-500'>
                  Empty Cart
                </button>
                <Link to='/'>
                  <button className='text-white text-xl p-2 rounded mx-2 bg-blue-500'>
                    Shop More
                  </button>
                </Link>
              </div>
            </div>

            <div className='col-span-1 rounded shadow p-5'>
              <h2 className='font-bold text-2xl mb-4'>
                Total Amount :
                <span className='text-red-500'> ₹ {totalcartAmount} </span>
              </h2>
              <hr />
              <button  className='rounded bg-green-600 p-2 text-white w-full mt-4 text-xl'>
                CHECKOUT
              </button>
            </div>
          </div>
        ) : (
          <p className=' text-3xl font-bold text-red-600 text-center pt-13'>Cart is Empty</p>
        )}
      </div>
    </>
  )
}

export default Cart