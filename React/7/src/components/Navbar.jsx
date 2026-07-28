import React from "react";

const Navbar = ({setFormOpen}) => {
    const handleClick=()=>{
        setFormOpen(prev=>!prev);
    }
  return (
    <nav className="bg-white shadow-md px-8 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Left Section */}
        <div className="flex items-center gap-4">
          <img
            src="https://plus.unsplash.com/premium_photo-1739786996022-5ed5b56834e2?w=600&auto=format&fit=crop&q=60"
            alt="Avatar"
            className="w-12 h-12 rounded-full object-cover border-2 border-blue-500"
          />

          <div>
            <h1 className="text-2xl font-bold text-gray-800">
              User Manager
            </h1>
            <p className="text-sm text-gray-500">
              Manage users easily
            </p>
          </div>
        </div>

        {/* Right Section */}
        <button className="bg-blue-600 hover:bg-blue-700 transition-all duration-300 text-white px-5 py-2 rounded-lg font-medium shadow-md"
        onClick={handleClick}>
          + Create User
        </button>
      </div>
    </nav>
  );
};

export default Navbar;