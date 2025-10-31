import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import emptycart from "../Allimages/emptycart.jpg";
import { FaTrash } from "react-icons/fa";
import Modal from "./Modal";
import Chnageaddress from "./Chnageaddress.jsx";
import { removeItems, addcartitem, removecartitems } from "../redux/Cartslice.jsx";
import{useNavigate} from 'react-router-dom'
function Cart() {
  const [address, setAddress] = useState("Main Street, Asansol");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
const navigate=useNavigate()
  const totalPrice = cart.product.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="container mx-auto px-4 lg:px-24 font-serif text-gray-700 py-6">
      {cart.product.length > 0 ? (
        <div>
          <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>

          <div className="flex flex-col md:flex-row justify-between gap-6">
         
            <div className="md:w-2/3">
              {/* Header for desktop */}
              <div className="hidden md:grid grid-cols-6 font-semibold text-sm border-b pb-2 text-center">
                <p className="col-span-2 text-left">Products</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Subtotal</p>
                <p>Remove</p>
              </div>

              {/* Header for mobile */}
              <div className="grid grid-cols-3 font-semibold text-sm border-b pb-2 text-center md:hidden">
                <p className="text-left">Product</p>
                <p>Qty</p>
                <p>Subtotal</p>
              </div>

              {cart.product.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col md:grid md:grid-cols-6 items-center text-center gap-4 border-b py-4"
                >
                  <div className="flex items-center gap-4 col-span-2 w-full">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-contain rounded"
                    />
                    <h3 className="font-medium text-green-600 text-sm">{item.name}</h3>
                  </div>

                  {/* Price (hidden on mobile) */}
                  <p className="hidden md:block">${item.price.toFixed(2)}</p>
                  <div className="flex justify-center items-center border rounded-md gap-2 px-2">
                    <button
                      className="px-2 font-bold border-r"
                      onClick={() => dispatch(removecartitems(item.id))}
                    >
                      -
                    </button>
                    <p className="px-3">{item.quantity}</p>
                    <button
                      className="px-2 font-bold border-l"
                      onClick={() => dispatch(addcartitem(item.id))}
                    >
                      +
                    </button>
                  </div>
                  <p>${(item.price * item.quantity).toFixed(2)}</p>
                  <button
                    onClick={() => dispatch(removeItems(item.id))}
                    className="text-red-500 hover:text-red-600"
                  >
                    <FaTrash />
                  </button>
                </div>
              ))}
            </div>
            <div className="w-full md:w-1/3 bg-white p-6 rounded-lg shadow-md border">
              <h2 className="text-xl font-semibold mb-4">Cart Total</h2>

              <div className="flex justify-between mb-2">
                <span>Total Items</span>
                <span>{cart.product.length}</span>
              </div>

              <div className="border-t pt-3 mb-3">
                <p className="font-semibold text-lg">Shipping</p>
                <p className="text-black-600">
                  Shipping to: <span className="text-sm text-gray-700">{address}</span>
                </p>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="text-blue-500 text-sm mt-1 hover:underline"
                >
                  Change address
                </button>
              </div>

              <div className="pt-3 border-t flex justify-between mb-4">
                <p className="font-semibold text-sm">Total Price</p>
                <p>${totalPrice.toFixed(2)}</p>
              </div>

              <button
              onClick={()=>navigate('/Checkout')}
              className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded">
                Proceed to Checkout
              </button>
            </div>
          </div>

          {/* Modal for address change */}
          <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
            <Chnageaddress
              setIsModalOpen={setIsModalOpen}
              setAddress={setAddress}
            />
          </Modal>
        </div>
      ) : (
        <div className="flex justify-center items-center h-[60vh]">
          <img src={emptycart} alt="Empty cart" className="w-64 md:w-80" />
        </div>
      )}
    </div>
  );
}

export default Cart;