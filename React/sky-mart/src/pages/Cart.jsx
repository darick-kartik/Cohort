import React from "react";
import { Trash2, Plus, Minus, ShoppingCart } from "lucide-react";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const {
    cart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    totalPrice,
  } = useCart();

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-slate-950 flex flex-col justify-center items-center">
        <ShoppingCart size={80} className="text-slate-600 mb-5" />

        <h1 className="text-3xl font-bold text-white">
          Your Cart is Empty
        </h1>

        <p className="text-slate-400 mt-3">
          Add some amazing products to your cart.
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 py-10">
      <div className="max-w-7xl mx-auto px-6">

        <h1 className="text-4xl font-bold text-white mb-10">
          Shopping Cart
        </h1>

        <div className="grid lg:grid-cols-3 gap-8">

          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">

            {cart.map((item) => (
              <div
                key={item.id}
                className="bg-slate-900 rounded-2xl p-5 flex flex-col md:flex-row gap-5 items-center border border-slate-800"
              >

                {/* Image */}
                <div className="bg-white rounded-xl p-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-32 w-32 object-contain"
                  />
                </div>

                {/* Details */}
                <div className="flex-1">

                  <h2 className="text-white font-bold text-xl">
                    {item.title}
                  </h2>

                  <p className="text-lime-400 text-2xl mt-3">
                    ${item.price}
                  </p>

                  {/* Quantity */}
                  <div className="flex items-center gap-3 mt-5">

                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      className="bg-slate-800 p-2 rounded-lg hover:bg-slate-700"
                    >
                      <Minus size={18} className="text-white" />
                    </button>

                    <span className="text-white text-xl">
                      {item.quantity}
                    </span>

                    <button
                      onClick={() => increaseQuantity(item.id)}
                      className="bg-slate-800 p-2 rounded-lg hover:bg-slate-700"
                    >
                      <Plus size={18} className="text-white" />
                    </button>

                  </div>

                </div>

                {/* Remove */}
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="bg-red-500 hover:bg-red-600 p-3 rounded-xl"
                >
                  <Trash2 size={22} className="text-white" />
                </button>

              </div>
            ))}

          </div>

          {/* Order Summary */}
          <div className="bg-slate-900 rounded-2xl p-6 h-fit border border-slate-800">

            <h2 className="text-2xl font-bold text-white mb-6">
              Order Summary
            </h2>

            <div className="flex justify-between mb-4">
              <span className="text-slate-400">
                Items
              </span>

              <span className="text-white">
                {cart.length}
              </span>
            </div>

            <div className="flex justify-between mb-6">
              <span className="text-slate-400">
                Total
              </span>

              <span className="text-lime-400 text-2xl font-bold">
                ${totalPrice.toFixed(2)}
              </span>
            </div>

            <button className="w-full bg-lime-500 hover:bg-lime-600 text-slate-900 font-bold py-4 rounded-xl transition">
              Proceed to Checkout
            </button>

          </div>

        </div>

      </div>
    </div>
  );
};

export default Cart;