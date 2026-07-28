import React from "react";
import { useNavigate } from "react-router";
import Login from "./Login";
import {useForm} from 'react-hook-form'
const Register = () => {

  const {handleSubmit,register,reset,formState:{errors}}=useForm();
  let formSubmit =(data)=>{
    console.log(data);
    reset();
  }

  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-200 flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">
            Create Account 🎉
          </h1>
          <p className="text-gray-500 mt-2">
            Sign up to get started
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(formSubmit)} className="space-y-5">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Full Name
            </label>
            <input
             {...register("name",{
              required:"Name is Required"
             })}
              type="text"
              placeholder="Enter your full name"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-300 outline-none transition"
            />
            {errors.name&&<p>{errors.name.message}</p>}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Email Address
            </label>
            <input
            {...register("email",{
              required:"Email is Required"
             })}
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-300 outline-none transition"
            />
            {errors.email&&<p>{errors.email.message}</p>}
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Password
            </label>
            <input
            {...register("password",{
              required:"Password is Required",
              minLength:{
                value:6,
                message:"Minimum 6 digit"
              }
             })}
              type="password"
              placeholder="Create a password"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-300 outline-none transition"
            />
            {errors.password&&<p>{errors.password.message}</p>}
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="Confirm your password"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-300 outline-none transition"
            />
          </div>

          {/* Terms */}
          <div className="flex items-start gap-2">
            <input
              type="checkbox"
              className="mt-1 h-4 w-4 text-blue-600"
            />
            <p className="text-sm text-gray-600">
              I agree to the{" "}
              <span className="text-blue-600 font-medium">
                Terms & Conditions
              </span>
            </p>
          </div>

          {/* Register Button */}
          <button
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-300"
          >
            Create Account
          </button>
        </form>

        {/* Login Button */}
        <div className="text-center mt-6">
          <p className="text-gray-600 mb-3">
            Already have an account?
          </p>

          <button
            type="button"
            onClick={() => navigate("/")}
            className="text-blue-600 font-semibold hover:underline"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;