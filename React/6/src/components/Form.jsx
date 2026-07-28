import React, { StrictMode } from "react";
import { useForm } from "react-hook-form";

const Form = ({setUsers,setToggle,users}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
     mode:"onChange"
  }
  );

  const formSubmit = (data) => {
    let arr=[...users,data]
    setUsers(arr);
    localStorage.setItem("users",JSON.stringify(arr));
    setToggle(prev=>!prev);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(formSubmit)}
      className="w-full max-w-md bg-gray-900 text-white p-6 rounded-xl shadow-lg border border-gray-700"
    >
      <h1 className="text-2xl font-bold text-center mb-6">
        Create User
      </h1>

      <div className="space-y-4">
        {/* Name */}
        <div>
          <input
            type="text"
            placeholder="Name"
            {...register("name", {
              required: "Name is required",
            })}
            className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 outline-none focus:border-blue-500"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">
              {errors.name.message}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <input
            type="email"
            placeholder="Email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Enter a valid email",
              },
            })}
            className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 outline-none focus:border-blue-500"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Mobile */}
        <div>
          <input
            type="text"
            placeholder="Mobile"
            {...register("mobile", {
              required: "Mobile number is required",
              pattern: {
                value: /^[0-9]{10}$/,
                message: "Enter a valid 10-digit mobile number",
              },
            })}
            className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 outline-none focus:border-blue-500"
          />
          {errors.mobile && (
            <p className="text-red-500 text-sm mt-1">
              {errors.mobile.message}
            </p>
          )}
        </div>

        {/* Image URL */}
        <div>
          <input
            type="url"
            placeholder="Image URL"
            {...register("image", {
              required: "Image URL is required",
            })}
            className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 outline-none focus:border-blue-500"
          />
          {errors.image && (
            <p className="text-red-500 text-sm mt-1">
              {errors.image.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-lg font-semibold transition duration-300"
        >
          Add User
        </button>
      </div>
    </form>
  );
};

export default Form;