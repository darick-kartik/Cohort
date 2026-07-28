import React from "react";
import useUsers from "../hooks/useUsers";
const UserCard = ({user}) => {
    const {deleteUser}=useUsers();

  return (
    <div className="bg-white shadow-md rounded-xl p-5 border hover:shadow-lg transition-all duration-300">
      <div className="flex justify-between items-start">

        {/* User Info */}
        <div className="space-y-2">
          <h2 className="text-xl font-semibold text-gray-800">
            {user.name}
          </h2>

          <p className="text-gray-600">
            📧 {user.email}
          </p>

          <p className="text-gray-600">
            🎂 {user.age}
          </p>

          <p className="text-gray-600">
            📍 {user.city}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2">
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg transition">
            Edit
          </button>

          <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition"
          onClick={()=>deleteUser(user.id)}>
            Delete
          </button>
        </div>

      </div>
    </div>
  );
};

export default UserCard;