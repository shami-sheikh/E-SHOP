import React from 'react';
import { FaStar } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { addtocart } from '../redux/Cartslice';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';

function Productcart({ product }) {
  const dispatch = useDispatch();

  const handleclick = (e, product) => {
    e.stopPropagation();
    e.preventDefault();
    dispatch(addtocart(product));
    toast.success('Item added to cart!', { duration: 1000 });
  };

  return (
    <Link to={`/product/${product.id}`}>
    <div className='bg-white rounded-md p-4 font-serif text-gray-700 shadow-md cursor-pointer border hover:shadow-lg transition duration-300 transform hover:-translate-y-1 relative'>
      <img src={product.image} alt={product.name} className='w-full h-48 object-contain mb-4' />
      <p className='text-xl font-semibold'>{product.name}</p>
      <h3 className='text-lg text-gray-600'>{product.title}</h3>
      <p className='text-green-500 font-medium'>${product.price}</p>

      <div className='text-yellow-500 flex items-center mt-2 gap-2'>
        <FaStar /> 4.5
      </div>

      <div
        className='absolute bottom-4 right-2 flex items-center justify-center text-center w-8 h-8 bg-red-500 group text-white rounded-full hover:w-32 hover:bg-red-600 transition-all duration-500'
        onClick={(e) => handleclick(e, product)}
      >
        <span className='group-hover:hidden'>+</span>
        <button className='hidden group-hover:block cursor-pointer'>Add to cart</button>
        
      </div>
    </div>
    </Link>
  );
}

export default Productcart;
