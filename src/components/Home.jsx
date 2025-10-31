import { useState,useEffect } from "react";
import { Categories, Mocdata } from "../assets/Apidata.jsx";
import hero from '../Allimages/hero.jpg'
import Infosetction from "./Infosection.jsx";
import Category from "./Category.jsx";
import {useSelector,useDispatch} from 'react-redux'
import { setProducts } from "../redux/Productslice.jsx";
import Productcart from "./Productcart.jsx";
import Shop from "../pages/Shop.jsx";
function Home() {
  const dispatch=useDispatch()
  const product=useSelector(stae=>stae.product)
  useEffect(() => {
  dispatch(setProducts(Mocdata))
  }, [])
  
  return (
    <div className="bg-white mt-2 px-4 lg:px-24">
      <div className="container mx-auto py-6 flex flex-col md:flex-row gap-6">
        
        <div className="w-full md:w-3/12">
          <div className="bg-red-500 text-white text-sm font-semibold px-3 py-2 rounded-t-md">
            Shop By Categories
          </div>
          <ul className="bg-gray-100 border border-gray-200 p-4 space-y-3 rounded-b-md">
            {Categories.map((category, index) => (
              <li
                key={index}
                className="flex items-center text-sm font-medium text-gray-700 cursor-pointer hover:text-red-500 transition"
              >
                <span className="w-2 h-2 border border-red-500 rounded-full mr-3"></span>
                {category}
              </li>
            ))}
          </ul>
        </div>

        <div className="w-full md:w-9/12 relative h-80 md:h-96 rounded-lg overflow-hidden">
          <img
            src={hero}
            alt="Hero section"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-start bg-black bg-opacity-40 px-8 text-white">
            <p className="text-lg font-semibold">Apki Apni Dukan</p>
            <h1 className="text-3xl md:text-4xl font-bold mt-2">
              Welcome to E-Shop
            </h1>
            <p className="mt-2 text-sm md:text-base">
              Millions+ Products, Just for You
            </p>
            <button className="mt-4 bg-green-500 hover:bg-green-600 transition px-4 py-2 rounded-lg font-semibold">
              Shop Now
            </button>
          </div>
        </div>
      </div>
<Infosetction/>
<Category/>
<div className="container mx-auto py-12 font-serif ">
  <h1 className="font-semibold text-gray-700 text-3xl mb-6 text-center">top Products</h1>
  <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
    {
      product.product.slice(0,50).map((product)=>(
        <div > 
       <Productcart product={product} />
        </div>
      ))
    }
  </div>
</div>
<Shop/>
    </div>
  );
}

export default Home;
