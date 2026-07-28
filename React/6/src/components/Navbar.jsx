import React from "react";
const Navbar = ({ setToggle }) => {
  return (
    <nav className="w-full flex items-center justify-between bg-gray-900 text-white px-6 py-4 rounded-xl border border-gray-700 shadow-lg">
      <h1 className="text-2xl font-bold">Users</h1>

      <div className="flex gap-8 font-medium">
        <p className="cursor-pointer hover:text-blue-400">Home</p>
        <p className="cursor-pointer hover:text-blue-400">About</p>
        <p className="cursor-pointer hover:text-blue-400">Contact</p>
      </div>

      <button
        onClick={() => setToggle(prev => !prev)}
        className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg"
      >
        Create User
      </button>
    </nav>
  );
};

export default Navbar;