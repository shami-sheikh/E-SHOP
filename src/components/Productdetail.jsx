import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { addtocart } from "../redux/Cartslice";

function Productdetail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);
  const products = useSelector((state) => state.product.product || []);

  const handleToCart = () => {
    if (!product) return;
    dispatch(
      addtocart({
        ...product,
        quantity: quantity,
        totalprice: product.price * quantity,
      })
    );
    toast.success(`Added ${quantity} ${quantity === 1 ? "item" : "items"} to cart!`);
  };

  useEffect(() => {
    if (!products.length) {
      setLoading(false);
      setProduct(null);
      return;
    }
    const foundProduct = products.find((p) => String(p.id) === String(id));
    setProduct(foundProduct || null);
    setLoading(false);
  }, [id, products]);

  if (loading)
    return (
      <div className="container mx-auto px-4 py-20 text-center font-serif text-gray-600">
        <p className="animate-pulse">Loading product details...</p>
      </div>
    );

  if (!product)
    return (
      <div className="container mx-auto px-4 py-20 text-center font-serif text-gray-700">
        <h2 className="text-3xl font-semibold mb-4">Product Not Found</h2>
        <p className="mb-6 text-gray-500">
          We couldn’t find any product with this ID.
        </p>
        <Link
          to="/Shop"
          className="inline-block bg-green-600 text-white px-5 py-2 rounded hover:bg-green-700 transition"
        >
          Back to Shop
        </Link>
      </div>
    );

  // Get similar products from the same category
  const similarProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    // Sort by price similarity
    .sort((a, b) => Math.abs(a.price - product.price) - Math.abs(b.price - product.price))
    .slice(0, 4);
console.log(products);
console.log(product);

  return (
    <div className="container mx-auto px-4 py-12 font-serif text-gray-700">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Image Section */}
        <div className="flex justify-center h-96">
          <img
            src={product.image}
            alt={product.name}
            className="w-full max-w-sm h-full object-contain rounded-lg"
          />
        </div>

        {/* Product Details */}
        <div className="flex flex-col justify-center space-y-4">
          <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>
          <p className="text-green-600 text-2xl font-semibold">
            ${product.price.toFixed(2)}
          </p>

          {/* Quantity Selector */}
          <div className="flex items-center gap-3 mt-4">
            <span className="text-gray-600 font-medium">Quantity:</span>
            <div className="flex items-center border rounded">
              <button
                className="px-3 py-1 text-lg font-bold border-r"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              >
                -
              </button>
              <span className="px-4">{quantity}</span>
              <button
                className="px-3 py-1 text-lg font-bold border-l"
                onClick={() => setQuantity((q) => q + 1)}
              >
                +
              </button>
            </div>
          </div>

          {/* Total Price */}
          <p className="text-gray-700 font-medium mt-2">
            Total:{" "}
            <span className="text-green-600 font-semibold">
              ${(product.price * quantity).toFixed(2)}
            </span>
          </p>

          {/* Description */}
          {product.description && (
            <p className="text-gray-600 leading-relaxed mt-2">
              {product.description}
            </p>
          )}

          {/* Buttons */}
          <div className="flex items-center gap-4 mt-6">
            <button
              className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
              onClick={handleToCart}
            >
              Add to Cart
            </button>
            <Link
              to="/Shop"
              className="border border-gray-400 px-6 py-2 rounded hover:bg-gray-100 transition"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>

      {/* You may also like */}
    {similarProducts.length > 0 ? (
  <div className="mt-16">
    <h2 className="text-2xl font-semibold mb-6 text-gray-800">
      You may also like
    </h2>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {similarProducts.map((item) => (
        <Link
          to={`/product/${item.id}`}
          key={item.id}
          className="border rounded-lg p-4 hover:shadow-lg transition text-center"
        >
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-40 object-contain mb-3"
          />
          <h3 className="font-medium text-gray-700">{item.name}</h3>
          <p className="text-green-600 font-semibold mt-1">
            ${item.price.toFixed(2)}
          </p>
        </Link>
      ))}
    </div>
  </div>
) : (
  <p className="mt-8 text-center text-gray-500">No similar products found.</p>
)}

   
    </div>
  );
}

export default Productdetail;
