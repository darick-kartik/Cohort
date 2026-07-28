import React from "react";

const UserCard = ({user,deleteUser}) => {
  return (
    <div className="w-72 bg-gray-900 text-white rounded-xl p-4 shadow-lg border border-gray-700">
      <img
        src={user.image}
        alt="User"
        className="w-full h-52 object-cover rounded-lg"
      />

      <div className="mt-4 space-y-1">
        <h2 className="text-lg font-semibold">Name: {user.name}</h2>
        <p>Email:{user.email}</p>
        <p>Contact:{user.contact}</p>
      </div>

      <div className="flex justify-between mt-4">
        <button 
        onClick={()=>deleteUser(name)}
        className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded">
          Delete
        </button>

        <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded">
          Update
        </button>
      </div>
    </div>
  );
};

export default UserCard;