import React from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";


function Orders({order}) {
const tracking = ()=>{
    toast.error('fuck you abhi bana nhi hai chutiye hmmhhhhhhhhh',{
         duration: 3000
    })
}
  if (!order) {
    return <p>No order found. Please place an order first.</p>;
  }
const navigate=useNavigate()
  return (
    <div className="container mx-auto py-8 px-4 lg:px-32 p-2 ">
      <p className="text-2xl font-semibold mb-4">THANK YOU FOR YOUR ORDER </p>
      <p>YOUR ORDER HAS BEEN PALCEED YOU WILL RECIEVE AN EMAIL</p>
      <div className="mt-6 p-4 border rounded-md bg-gray-200 ">
        <p className="text-2xl text-red-500 mb-5">Order summary</p>
        <p><span className="text-xl font-semibold">Order Number:</span>  {order.ordernumber} </p>
        <div className="mt-4">
          <p className="text-lg mb-2 font-semibold">Shipping Information:</p>
            <p> {order.shippinginformation.address}</p>
            <p> {order.shippinginformation.city}</p>
            <p>{order.shippinginformation.pin}</p>
        </div>
        <div className="mt-4">
            <h1 className="text-xl font-semibold mb-2">product order</h1>
            {
                order.product.map((item)=>(
                    <div key={item.id} className="flex justify-between mt-2">
<p> {item.name} x {item.quantity} </p>
<p>${(item.price * item.quantity).toFixed(2) }</p>
                    </div>
                ))
            }
        </div>
      <div className="mt-4 flex justify-between">
        <span>TOTAL PRICE</span>
        <span className="font-semibold">${(order.totalprice).toFixed(2)}</span>
      </div>
      </div>
        <div className="mt-4 flex  "> 
            <button onClick={tracking} className="lg:py-3 py-2  px-4 text-white mr-4 bg-red-500 rounded-lg hover:bg-red-600">ORDER TRACKING</button>
            <button onClick={()=>navigate('/')} className="lg:py-3 py-2  px-4 text-white bg-green-500 rounded-lg hover:bg-green-600">Countinue Shopping</button>
        </div>
    </div>
  );
}

export default Orders;
