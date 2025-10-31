import React from "react";
import { FaShippingFast } from "react-icons/fa";
import { FaHeadset } from "react-icons/fa";
import { FaMoneyBillWave } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { FaTag } from "react-icons/fa";
const Infosetction = () => {
  const Infoitems = [
    {
      icon: <FaShippingFast className="text-3xl text-red-500" />,
      title: "Free Shipping",
      description: "Get your orders delivered with no extra cash",
    },
    {
      icon: <FaHeadset className="text-3xl text-red-500" />,
      title: "support 24/7",
      description: "we are here to assist you 🥰",
    },
    {
      icon: <FaMoneyBillWave className="text-3xl text-red-500" />,
      title: "100% money back ",
      description: "full refund if your are not satisfied🥰",
    },
    {
      icon: <FaLock className="text-3xl text-red-500" />,
      title: "payment secure",
      description: "your payment information is safe with us😊",
    },
    {
      icon: <FaTag className="text-3xl text-red-500" />,
      title: "Discount",
      description: "Enjoy the best price on our products😎  ",
    },
  ];

  return (
    <div className="bg-white pb-8 pt-12 font-serif ">
      <div className="mx-auto container grid grid-cols-1 lg:grid-cols-5 gap-4">
        {Infoitems.map((items, index) => (
          <div
            key={index}
            className="flex flex-col justify-center text-center rounded-lg shadow-lg p-4 transform transition-transform duration-300 hover:scale-105"
          >
            {items.icon}
            <h3 className="mt-4 text-xl font-semibold">{items.title}</h3>
            <h3 className="mt-2 text-gray-600">{items.description}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Infosetction;
