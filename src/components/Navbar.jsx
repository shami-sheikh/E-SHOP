import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaShoppingCart, FaUser, FaSearch, FaSlidersH } from 'react-icons/fa';
import { useSelector,useDispatch } from 'react-redux';
import Modal from '../pages/Modal';
import Login from './Login';
import Register from './Register';
import { setsearchterm } from '../redux/Productslice';
function Navbar() {
  
  const [activeMenu, setActiveMenu] = useState(false);
  const product = useSelector((state) => state.cart.product);
const [isModalOpen,setIsModalOpen]=useState(false)
const [islogin,setislogin]=useState(true)
const [search,setsearch]=useState('')
const dispatch=useDispatch()
const navigate=useNavigate()

const handlesearch=(e)=>{
e.preventDefault()
dispatch(setsearchterm(search))
navigate('/FilterData')
}
const opensingup=()=>{
  setislogin(false)
  setIsModalOpen(true)
}
const openlogin=()=>{
  setislogin(true)
  setIsModalOpen(true)
}

  return (
    <>
      {activeMenu && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40 lg:hidden"
          onClick={() => setActiveMenu(false)}
        ></div>
      )}

      <nav className="shadow-md bg-white relative z-50">
        <div className="container mx-auto flex justify-between items-center px-4 lg:px-24 py-4">
          <div className="text-2xl font-bold font-serif text-gray-800">
            <Link to="/">E-Shop</Link>
          </div>
        <form onSubmit={handlesearch} className="relative flex-1 mx-6 hidden md:block">
  <input
    type="search"
    onChange={(e) => setsearch(e.target.value)}
    placeholder="Search products..."
    className="w-full border-2 py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
  />
  <button type="submit">
    <FaSearch className="absolute top-3 right-3 text-gray-500 text-xl cursor-pointer" />
  </button>
</form>


          {/* Icons */}
          <div className="flex items-center gap-6 text-xl text-gray-700">
            <Link to="/Cart" className="relative hover:text-green-600">
              <FaShoppingCart />
              {product.length > 0 && (
                <span className="absolute -top-2 -right-3 text-xs w-5 h-5 bg-red-500 rounded-full flex justify-center items-center text-white">
                  {product.length}
                </span>
              )}
            </Link>

            <button className="hidden md:block text-sm font-medium" onClick={()=>setIsModalOpen(true)}>
             <span> Login</span> || <span>Register</span>
            </button>

            <button onClick={()=>setIsModalOpen(true)} className="md:hidden hover:text-green-600">
              <FaUser />
            </button>

            <button
              className="md:hidden hover:text-green-600"
              onClick={() => setActiveMenu(!activeMenu)}
            >
              <FaSlidersH />
            </button>
          </div>
        </div>

        {/* Desktop menu hai */}
        <div className="hidden lg:flex justify-center text-center space-x-10 py-4 font-serif font-semibold">
          <Link to="/" className="hover:underline hover:text-green-500">Home</Link>
          <Link to="/Shop" className="hover:underline hover:text-green-500">Shop</Link>
          <Link to="/Contact" className="hover:underline hover:text-green-500">Contact</Link>
          <Link to="/About" className="hover:underline hover:text-green-500">About</Link>
        </div>
<Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} >
  {
    islogin ? <Login opensingup={opensingup} />: <Register  openlogin={openlogin}  />
  }
</Modal>
      </nav>

      {/* ✅ Mobile Slide Menu hai */}
      <div
        className={`fixed top-0 right-0  h-full w-64 bg-[#fff] shadow-lg z-50 transform transition-transform duration-300 lg:hidden ${
          activeMenu ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col items-start p-6 gap-6 font-serif font-semibold text-gray-800" onClick={() => setActiveMenu(false)}>
          <Link to="/" >Home</Link>
          <Link to="/Shop">Shop</Link>
          <Link to="/Contact">Contact</Link>
          <Link to="/About">About</Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
