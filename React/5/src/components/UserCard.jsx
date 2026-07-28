import React from "react";

const UserCard = ({ user }) => {
  return (
    <div className="p-4 w-72 flex flex-col gap-4 border border-gray-400 rounded bg-white shadow-md">
      <div className="w-40 h-40 mx-auto rounded-full overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src={
            user.image ||
            "https://via.placeholder.com/150"
          }
          alt={user.name}
        />
      </div>

      <div>
        <h1 className="text-xl font-bold">Name: {user.name}</h1>
        <p>Email: {user.email}</p>
      </div>

      <button className="bg-red-500 text-white p-2 rounded hover:bg-red-600">
        Delete
      </button>
    </div>
  );
};

export default UserCard;