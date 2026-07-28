import React from "react";
import {
  Heart,
  ShoppingCart,
  Star,
  Eye,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const { addToCart } = useCart();

  const {
    addToWishlist,
    removeFromWishlist,
    isInWishlist,
  } = useWishlist();

  const handleWishlist = () => {
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  return (
    <div className="group bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden hover:border-lime-500 transition duration-300 hover:-translate-y-2 shadow-lg">

      {/* Image */}
      <div className="relative bg-white h-64 flex items-center justify-center overflow-hidden">

        {/* Discount Badge */}
        <span className="absolute top-4 left-4 bg-red-500 text-white text-xs px-3 py-1 rounded-full font-semibold">
          SALE
        </span>

        {/* Wishlist */}
        <button
          onClick={handleWishlist}
          className={`absolute top-4 right-4 p-2 rounded-full transition ${
            isInWishlist(product.id)
              ? "bg-red-500"
              : "bg-slate-900 hover:bg-red-500"
          }`}
        >
          <Heart
            size={20}
            className={`${
              isInWishlist(product.id)
                ? "fill-white text-white"
                : "text-white"
            }`}
          />
        </button>

        <img
          src={product.image}
          alt={product.title}
          className="h-48 object-contain group-hover:scale-110 transition duration-300"
        />

      </div>

      {/* Content */}
      <div className="p-5">

        {/* Category */}
        <span className="text-xs bg-lime-500/20 text-lime-400 px-3 py-1 rounded-full capitalize">
          {product.category}
        </span>

        {/* Title */}
        <h2 className="text-white text-lg font-bold mt-4 line-clamp-2 min-h-[56px]">
          {product.title}
        </h2>

        {/* Rating */}
        <div className="flex items-center justify-between mt-4">

          <div className="flex items-center gap-2">
            <Star
              size={18}
              className="fill-yellow-400 text-yellow-400"
            />

            <span className="text-white">
              {product.rating.rate}
            </span>

            <span className="text-slate-500">
              ({product.rating.count})
            </span>
          </div>

        </div>

        {/* Price */}
        <div className="mt-5 flex items-center justify-between">

          <h3 className="text-3xl font-bold text-lime-400">
            ${product.price}
          </h3>

        </div>

        {/* Buttons */}
        <div className="grid grid-cols-2 gap-3 mt-6">

          <button
            onClick={() => addToCart(product)}
            className="flex items-center justify-center gap-2 bg-lime-500 hover:bg-lime-600 text-slate-900 py-3 rounded-xl font-semibold transition"
          >
            <ShoppingCart size={18} />
            Cart
          </button>

          <button
            onClick={() =>
              navigate(`/product/${product.id}`)
            }
            className="flex items-center justify-center gap-2 border border-slate-700 hover:border-lime-400 text-white py-3 rounded-xl transition"
          >
            <Eye size={18} />
            View
          </button>

        </div>

      </div>
    </div>
  );
};

export default ProductCard;