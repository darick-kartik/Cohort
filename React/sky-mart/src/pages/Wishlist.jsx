import React from "react";
import ProductGrid from "../components/ProductGrid";
import { useWishlist } from "../context/WishlistContext";

const Wishlist = () => {
  const { wishlist } = useWishlist();

  return (
    <div className="min-h-screen bg-slate-950 px-6 py-10">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8">
          My Wishlist
        </h1>

        {wishlist.length === 0 ? (
          <p className="text-slate-400 text-lg">
            Your wishlist is empty.
          </p>
        ) : (
          <ProductGrid products={wishlist} />
        )}
      </div>
    </div>
  );
};

export default Wishlist;