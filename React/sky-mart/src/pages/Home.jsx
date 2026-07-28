import React, { useMemo, useState } from "react";
import Hero from "../components/Hero";
import ProductGrid from "../components/ProductGrid";
import { Search } from "lucide-react";
import { useProducts } from "../context/ProductContext";

const Home = () => {
  const { products, loading, error } = useProducts();

  const [search, setSearch] = useState("");

  const filteredProducts = useMemo(() => {
    return products.filter(
      (product) =>
        product.title
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        product.category
          .toLowerCase()
          .includes(search.toLowerCase())
    );
  }, [products, search]);

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 flex justify-center items-center">
        <h1 className="text-3xl text-lime-400 font-bold animate-pulse">
          Loading Products...
        </h1>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-slate-950 flex justify-center items-center">
        <h1 className="text-red-500 text-3xl font-bold">
          {error}
        </h1>
      </div>
    );
  }

  return (
    <div className="bg-slate-950 min-h-screen">

      {/* Hero */}
      <Hero />

      {/* Products Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-10">

          <div>
            <h2 className="text-4xl font-bold text-white">
              Featured Products
            </h2>

            <p className="text-slate-400 mt-2">
              Browse our latest premium collection.
            </p>
          </div>

          {/* Search */}
          <div className="relative w-full md:w-96">

            <Search
              className="absolute left-4 top-3.5 text-slate-500"
              size={20}
            />

            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-slate-900 border border-slate-700 rounded-xl py-3 pl-12 pr-4 text-white outline-none focus:border-lime-400"
            />

          </div>

        </div>

        {filteredProducts.length === 0 ? (
          <div className="text-center py-20">

            <h2 className="text-3xl text-white font-bold">
              No Products Found
            </h2>

            <p className="text-slate-400 mt-3">
              Try searching with another keyword.
            </p>

          </div>
        ) : (
          <ProductGrid products={filteredProducts} />
        )}

      </section>

    </div>
  );
};

export default Home;