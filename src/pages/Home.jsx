import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllProducts } from '../redux/ProductSlice'
import { GrChapterPrevious } from "react-icons/gr";
import { GrChapterNext } from "react-icons/gr";

function Home() {

  const dispatch = useDispatch()

  const { allProducts, error, loading } = useSelector((state) => state.productReducer)
  // console.log(allProducts, error, loading);
  const productsPerPage=8
  const totalPages=Math.ceil(allProducts.length/productsPerPage)
  const [currentPage,setCurrentPage]=useState(1)
  const currentPageProductLastIndex=currentPage*productsPerPage
  const currentPageProductFirstIndex=currentPageProductLastIndex -productsPerPage

const visibleProducts =allProducts?.slice(currentPageProductFirstIndex,currentPageProductLastIndex)


const navigatePrevPage=()=>{
  if(currentPage!=1){
    setCurrentPage(currentPage-1)
  }
}
const navigateNextPage=()=>{
  if(currentPage!=totalPages){
    setCurrentPage(currentPage+1)
  }
}




  useEffect(() => {
    dispatch(fetchAllProducts())
  }, [])
  return (
    <>
      <Header  insideHome={true}/>
      <h1>All Products</h1>
      <div className='pt-36 mx-5'>
        {
          loading ?
            <p>Loading.....</p>
            :
            <div className='grid grid-cols-4 gap-4'>
              {allProducts?.length > 0 ? visibleProducts?.map((products)=>(
                <div key={products?.id} className='rounded p-2 shadow'>
                {/* image */}
                <img height={"200px "} src={products.thumbnail} alt="" />

                <div className='text-center'>
                  {/* title */}
                  <h3 className='text-2xl '>{products?.title}</h3>
                  {/* link */}
                  <Link to={`/${products?.id}/view`}className='bg-violet-700 p-1 rounded text-white mt-3 inline-block'>View More...</Link>
                </div>
              </div>
              ))
              :
              "Product Not Found"
            }
            </div>
        }
      </div>
      <div style={{marginLeft:"695px"}} className=" text-center flex font-bold text-2xl">
<button onClick={navigatePrevPage}><GrChapterPrevious /></button>
<span>{currentPage} of {totalPages}</span>
<button onClick={navigateNextPage}><GrChapterNext /></button>
      </div>
    </>
  )
}

export default Home