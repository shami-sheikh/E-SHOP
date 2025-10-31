import React from 'react'
import { useSelector } from 'react-redux'
import Productcart from '../components/Productcart'
function Shop() {
  const products = useSelector(state => state.product)
  return (
  <div className="container mx-auto bg-white mt-2 px-4 lg:px-24  py-12 font-serif ">
  <h1 className="font-semibold text-gray-700 text-3xl mb-6 text-center">shop</h1>
  <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
    {
      products.product.map((product, index) => (
        <div key={index}> 
       <Productcart product={product} />
        </div>
      ))
    }
  </div>
</div>
  )
}

export default Shop