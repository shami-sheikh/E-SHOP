import React, { useState } from "react";
import { useSelector } from 'react-redux';
import { FaAngleUp, FaAngleDown } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function Checkout({setorder}) {
  const [billingOpen, setBillingOpen] = useState(true);
  const [shippingOpen, setShippingOpen] = useState(false);
  const [paymentOpen, setPaymentOpen] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("COD");
  const [shippinginfo,setshippinginfo]=useState({
    address:'',
    city:'',
    pin:'',
    name:''
  })

const navigate=useNavigate()
const handleorder=()=>{
  if (!shippinginfo.address || !shippinginfo.city || !shippinginfo.pin ) {
    // alert('Please fill in all shipping information');
    toast.error('abe gandu pahle shipping information to bhar chutiya',{
      duration:3000
    })
    return;
  }
  const neworder={
    product:cart.product,
    ordernumber:'786786',
    shippinginformation:shippinginfo,
    totalprice:cart.totalprice
  }
  setorder(neworder)
  navigate('/ordertracker')
}
const cart = useSelector(state=>state.cart)
  return (
    <div className="container mx-auto px-4 lg:px-24 py-8 font-serif text-gray-700">
      <h1 className="text-2xl font-bold mb-6">Checkout</h1>

      <div className="flex flex-col md:flex-row justify-between gap-10">
        <div className="md:w-2/3 space-y-6">
          <div className="border rounded-md">
            <div
              onClick={() => setBillingOpen(!billingOpen)}
              className="flex items-center justify-between p-3 cursor-pointer"
            >
              <h3 className="text-xl font-semibold">Billing Information</h3>
              {billingOpen ? <FaAngleUp /> : <FaAngleDown />}
            </div>

            {billingOpen && (
              <div className="p-3 space-y-4 border-t">
                <div>
                  <label className="block mb-1">Name</label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>

                <div>
                  <label className="block mb-1">Email</label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>

                <div>
                  <label className="block mb-1">Phone</label>
                  <input
                    type="tel"
                    placeholder="Enter your number"
                    className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
              </div>
            )}
          </div>

          <div className="border rounded-md">
            <div
              onClick={() => setShippingOpen(!shippingOpen)}
              className="flex items-center justify-between p-3 cursor-pointer"
            >
              <h3 className="text-xl font-semibold">Shipping Information</h3>
              {shippingOpen ? <FaAngleUp /> : <FaAngleDown />}
            </div>

            {shippingOpen && (
              <div className="p-3 space-y-4 border-t">
                <div>
                  <label className="block mb-1">Address</label>
                  <input
                  onChange={(e)=>setshippinginfo({...shippinginfo, address:e.target.value})}
                    type="text"
                    placeholder="Enter your address"
                    className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
                <div>
                  <label className="block mb-1">City</label>
                  <input
                   onChange={(e)=>setshippinginfo({...shippinginfo, city:e.target.value})}
                    type="text"
                    placeholder="Enter your city"
                    className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
                <div>
                  <label className="block mb-1">PIN Code</label>
                  <input
                   onChange={(e)=>setshippinginfo({...shippinginfo, pin:e.target.value})}
                    type="text"
                    placeholder="Enter your pin code"
                    className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Payment Method */}
          <div className="border rounded-md">
            <div
              onClick={() => setPaymentOpen(!paymentOpen)}
              className="flex items-center justify-between p-3 cursor-pointer"
            >
              <h3 className="text-xl font-semibold">Payment Method</h3>
              {paymentOpen ? <FaAngleUp /> : <FaAngleDown />}
            </div>

            {paymentOpen && (
              <div className="p-3 space-y-4 border-t">
                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="payment"
                    checked={paymentMethod === "COD"}
                    onChange={() => setPaymentMethod("COD")}
                  />
                  <label>CASH ON DELIVERY</label>
                </div>

                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="payment"
                    checked={paymentMethod === "DC"}
                    onChange={() => setPaymentMethod("DC")}
                  />
                  <label>DEBIT CARD</label>
                </div>

                {paymentMethod === "DC" && (
                  <div className="shadow-md p-4 lg:p-6 rounded-lg bg-gray-100">
                    <h3 className="text-lg font-bold mb-4 text-gray-800">
                      Debit Card Information
                    </h3>

                    {/* Card Number */}
                    <div className="mb-4">
                      <label className="block mb-2 text-sm font-semibold text-gray-700">
                        Card Number
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your card number"
                        className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                      />
                    </div>

                    {/* Card Holder */}
                    <div className="mb-4">
                      <label className="block mb-2 text-sm font-semibold text-gray-700">
                        Card Holder Name
                      </label>
                      <input
                        type="text"
                        placeholder="Enter cardholder name"
                        className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                      />
                    </div>

                    {/* Expiry + CVV */}
                    <div className="flex gap-4">
                      <div className="flex-1">
                        <label className="block mb-2 text-sm font-semibold text-gray-700">
                          Expiry Date
                        </label>
                        <input
                          type="text"
                          placeholder="MM/YY"
                          className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                      </div>

                      <div className="flex-1">
                        <label className="block mb-2 text-sm font-semibold text-gray-700">
                          CVV
                        </label>
                        <input
                          type="text"
                          placeholder="CVV"
                          className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

     {/* Right Section */}
<div className="md:w-1/3 bg-white p-6 rounded-lg shadow-md border">
  <div className="space-y-4">
    <h3 className="text-xl text-red-600 font-semibold font-serif mb-4">Order Summary</h3>
    {cart.product.map((item) => (
      <div key={item.id} className="flex justify-between">
        <div className="flex items-center">
          <img
            src={item.image}
            alt={item.name}
            className="w-16 h-16 object-contain rounded-md"
          />
          <div className="ml-4">
            <h3 className="text-xl font-semibold text-green-500">{item.name}</h3>
            <span className="text-gray-700">${item.price}</span> x
            <span>{item.quantity}</span>
          </div>
        </div>
        <div className="text-gray-700 font-serif">
          <span>${(item.price * item.quantity).toFixed(2)}</span>
        </div>
      </div>
    ))}
  </div>

  <div className="mt-4 border-t pt-4">
    <div className="flex justify-between">
      <span>Total Price</span>
      <span>${cart.totalprice.toFixed(2)}</span>
    </div>
  </div>

  <button className="w-full mt-6 text-white font-semibold bg-green-600 hover:bg-green-700 py-2 rounded-lg" onClick={handleorder}>
    Place Order
  </button>
</div>

        </div>
    </div>
  );
}

export default Checkout;
