import React from "react";
import man from "../Allimages/man.jpg";
import women from "../Allimages/women.jpg";
import kids from "../Allimages/kids.jpg";

function Category() {
  const Categories = [
    { title: "Men", imgUrl: man },
    { title: "Women", imgUrl: women },
    { title: "Kids", imgUrl: kids },
  ];

  return (
    <div className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-6 font-serif">
      {Categories.map((item, index) => (
        <div
          key={index}
          className="relative h-64 overflow-hidden rounded-lg shadow-md transform transition-transform hover:scale-105 cursor-pointer"
        >
          <img
            src={item.imgUrl}
            alt={item.title}
            className="w-full h-full object-cover bg-opacity-15"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center items-start px-6">
            <p className="text-2xl font-bold text-white items-center text-center py-2 capitalize">
              {item.title}
            </p>
            <p className="text-sm text-red-400">View All</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Category;
