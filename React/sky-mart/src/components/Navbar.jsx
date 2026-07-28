import React, { useState } from "react";
import {
  NavLink,
  useNavigate,
} from "react-router-dom";

import {
  ShoppingCart,
  Heart,
  LogOut,
  Menu,
  X,
  User,
} from "lucide-react";

import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";

const Navbar = () => {
  const navigate = useNavigate();

  const { cartCount } = useCart();
  const { wishlistCount } = useWishlist();

  const [menuOpen, setMenuOpen] = useState(false);

  const currentUser =
    JSON.parse(localStorage.getItem("currentUser"));

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    navigate("/login");
  };

  const navLinkStyle = ({ isActive }) =>
    isActive
      ? "text-lime-400 font-semibold"
      : "text-slate-300 hover:text-lime-400 transition";

  return (
    <nav className="sticky top-0 z-50 bg-slate-900 border-b border-slate-800 shadow-lg">

      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <div
          onClick={() => navigate("/")}
          className="flex items-center gap-2 cursor-pointer"
        >
          <ShoppingCart
            size={28}
            className="text-lime-400"
          />

          <h1 className="text-2xl font-bold text-white">
            Sky
            <span className="text-lime-400">
              Mart
            </span>
          </h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">

          <NavLink
            to="/"
            className={navLinkStyle}
          >
            Home
          </NavLink>

          <NavLink
            to="/wishlist"
            className="relative flex items-center gap-2 text-slate-300 hover:text-lime-400"
          >
            <Heart size={20} />

            Wishlist

            {wishlistCount > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {wishlistCount}
              </span>
            )}
          </NavLink>

          <NavLink
            to="/cart"
            className="relative flex items-center gap-2 text-slate-300 hover:text-lime-400"
          >
            <ShoppingCart size={20} />

            Cart

            {cartCount > 0 && (
              <span className="absolute -top-2 -right-3 bg-lime-500 text-slate-900 text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                {cartCount}
              </span>
            )}
          </NavLink>

        </div>

        {/* Right Side */}
        <div className="hidden md:flex items-center gap-4">

          <div className="flex items-center gap-2">

            <User
              size={18}
              className="text-lime-400"
            />

            <span className="text-slate-300">
              {currentUser?.name || "Guest"}
            </span>

          </div>

          <button
            onClick={handleLogout}
            className="flex items-center gap-2 bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg text-white transition"
          >
            <LogOut size={18} />
            Logout
          </button>

        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white"
        >
          {menuOpen ? (
            <X size={28} />
          ) : (
            <Menu size={28} />
          )}
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-slate-900 border-t border-slate-800">

          <div className="flex flex-col p-5 gap-5">

            <NavLink
              to="/"
              onClick={() => setMenuOpen(false)}
              className={navLinkStyle}
            >
              Home
            </NavLink>

            <NavLink
              to="/wishlist"
              onClick={() => setMenuOpen(false)}
              className={navLinkStyle}
            >
              Wishlist ({wishlistCount})
            </NavLink>

            <NavLink
              to="/cart"
              onClick={() => setMenuOpen(false)}
              className={navLinkStyle}
            >
              Cart ({cartCount})
            </NavLink>

            <div className="text-slate-300 border-t border-slate-700 pt-4">
              {currentUser?.name}
            </div>

            <button
              onClick={handleLogout}
              className="bg-red-500 py-2 rounded-lg text-white"
            >
              Logout
            </button>

          </div>

        </div>
      )}

    </nav>
  );
};

export default Navbar;