import React from "react";
import { ArrowRight, ShoppingBag } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-slate-950">

      {/* Background Blur */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-lime-500/20 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-10 right-10 w-72 h-72 bg-cyan-500/20 blur-[120px] rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-24">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Side */}
          <div>

            <div className="inline-flex items-center gap-2 bg-lime-500/10 text-lime-400 border border-lime-500/30 px-4 py-2 rounded-full mb-6">
              <ShoppingBag size={18} />
              Premium Shopping Experience
            </div>

            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-white">
              Discover the
              <span className="text-lime-400"> Best Products </span>
              at Unbeatable Prices.
            </h1>

            <p className="text-slate-400 text-lg mt-6 leading-8">
              Shop thousands of premium products with fast delivery,
              secure payments, and exclusive offers only at SkyMart.
            </p>

            <div className="flex gap-5 mt-10 flex-wrap">

              <button className="flex items-center gap-2 bg-lime-500 hover:bg-lime-600 text-slate-900 px-7 py-4 rounded-xl font-semibold transition">
                Shop Now
                <ArrowRight size={20} />
              </button>

              <button className="border border-slate-700 hover:border-lime-400 hover:text-lime-400 text-white px-7 py-4 rounded-xl transition">
                Explore More
              </button>

            </div>

          </div>

          {/* Right Side */}
          <div className="flex justify-center">

            <img
              src="https://images.unsplash.com/photo-1607082350899-7e105aa886ae?w=700"
              alt="Shopping"
              className="rounded-3xl shadow-2xl w-full max-w-lg object-cover"
            />

          </div>

        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-center">
            <h2 className="text-3xl font-bold text-lime-400">
              10K+
            </h2>
            <p className="text-slate-400 mt-2">
              Happy Customers
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-center">
            <h2 className="text-3xl font-bold text-lime-400">
              500+
            </h2>
            <p className="text-slate-400 mt-2">
              Premium Products
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-center">
            <h2 className="text-3xl font-bold text-lime-400">
              99%
            </h2>
            <p className="text-slate-400 mt-2">
              Positive Reviews
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-center">
            <h2 className="text-3xl font-bold text-lime-400">
              24/7
            </h2>
            <p className="text-slate-400 mt-2">
              Customer Support
            </p>
          </div>

        </div>

      </div>

    </section>
  );
};

export default Hero;