import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Heart, ShoppingCart, Star } from "lucide-react";

import { useProducts } from "../context/ProductContext";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { products, loading } = useProducts();
  const { addToCart } = useCart();

  const {
    addToWishlist,
    removeFromWishlist,
    isInWishlist,
  } = useWishlist();

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 flex justify-center items-center">
        <h1 className="text-3xl text-lime-400">Loading...</h1>
      </div>
    );
  }

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return (
      <div className="min-h-screen bg-slate-950 flex justify-center items-center">
        <h1 className="text-3xl text-red-500">
          Product Not Found
        </h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 py-12 px-6">

      <div className="max-w-7xl mx-auto">

        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-lime-400 mb-8 hover:underline"
        >
          <ArrowLeft size={20} />
          Back
        </button>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Image */}
          <div className="bg-white rounded-3xl flex justify-center items-center p-10">
            <img
              src={product.image}
              alt={product.title}
              className="h-96 object-contain"
            />
          </div>

          {/* Details */}
          <div>

            <span className="bg-lime-500/20 text-lime-400 px-4 py-2 rounded-full capitalize">
              {product.category}
            </span>

            <h1 className="text-5xl font-bold text-white mt-6">
              {product.title}
            </h1>

            <div className="flex items-center gap-2 mt-5">

              <Star
                className="fill-yellow-400 text-yellow-400"
                size={22}
              />

              <span className="text-white text-lg">
                {product.rating.rate}
              </span>

              <span className="text-slate-400">
                ({product.rating.count} Reviews)
              </span>

            </div>

            <h2 className="text-5xl font-bold text-lime-400 mt-8">
              ${product.price}
            </h2>

            <p className="text-slate-400 leading-8 mt-8">
              {product.description}
            </p>

            <div className="flex gap-5 mt-10">

              <button
                onClick={() => addToCart(product)}
                className="flex-1 bg-lime-500 hover:bg-lime-600 py-4 rounded-xl font-bold flex items-center justify-center gap-3 text-slate-900"
              >
                <ShoppingCart />
                Add To Cart
              </button>

              <button
                onClick={() =>
                  isInWishlist(product.id)
                    ? removeFromWishlist(product.id)
                    : addToWishlist(product)
                }
                className={`px-6 rounded-xl transition ${
                  isInWishlist(product.id)
                    ? "bg-red-500"
                    : "bg-slate-800 hover:bg-red-500"
                }`}
              >
                <Heart
                  className={`${
                    isInWishlist(product.id)
                      ? "fill-white text-white"
                      : "text-white"
                  }`}
                />
              </button>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default ProductDetails;