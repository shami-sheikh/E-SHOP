import React from "react";
import { useSelector } from "react-redux";
import Productcart from "../components/Productcart";
import notfound from '../Allimages/notfound.webp'
function FilterData() {
  const shopfilterdata = useSelector((state) => state.product.filteredata);
  return (
    <div className="container mx-auto bg-white mt-2 px-4 lg:px-24  py-12 font-serif ">
      { 

      shopfilterdata.length>0 ? 
        <>
          <h1 className="font-semibold text-gray-700 text-3xl mb-6 text-center">
            shop
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 cursor-pointer">
            {shopfilterdata.map((product, index) => (
              <Productcart key={index} product={product} />
            ))}
          </div>
        </>
        :
        <div className="flex justify-center rounded-md ">
<img src={notfound} alt="" width={400} />
        </div>
      }
    </div>
  );
}

export default FilterData;
