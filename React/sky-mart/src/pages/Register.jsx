import { User, Mail, Lock, EyeOff,Eye } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
const Register = () => {
    const navigate=useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const{register,handleSubmit,reset,watch,formState:{errors}}=useForm();
    const password = watch("password");
    const onSubmit=(data)=>{
        const users=JSON.parse(localStorage.getItem("registeredUsers"))||[];
        const existingUser = users.find(
    (user) => user.email === data.email
);
        if (existingUser) {
    alert("Email already registered");
    return;
}
        users.push(data);
        localStorage.setItem("registeredUsers",JSON.stringify(users));
        reset();
    }

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl p-8">

        {/* Heading */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white">
            Create Account 🚀
          </h1>

          <p className="text-slate-400 mt-2">
            Join SkyMart and start shopping
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-5">

          {/* Name */}
          <div>
            <label className="block text-sm text-slate-300 mb-2">
              Full Name
            </label>

            <div className="flex items-center bg-slate-800 border border-slate-700 rounded-lg px-3 focus-within:border-lime-500 transition">
              <User size={18} className="text-slate-400" />

              <input
              {...register("name",{
                required:"Name can't be empty",
                minLength:{
                    value:3,
                    message:"Name Should be atleast 3 character"
                }
              })}
                type="text"
                placeholder="Enter your full name"
                className="w-full bg-transparent outline-none px-3 py-3 text-white placeholder:text-slate-500"
              />
            </div>
            {errors.name && (
  <p className="text-red-500 text-sm mt-1">
    {errors.name.message}
  </p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm text-slate-300 mb-2">
              Email
            </label>

            <div className="flex items-center bg-slate-800 border border-slate-700 rounded-lg px-3 focus-within:border-lime-500 transition">
              <Mail size={18} className="text-slate-400" />

              <input
              {...register("email",{
                    required:"Email is required",
                    pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Please enter a valid email address",
                            }
                })}
                type="email"
                placeholder="Enter your email"
                className="w-full bg-transparent outline-none px-3 py-3 text-white placeholder:text-slate-500"
              />
            </div>
             {errors.email && (
  <p className="text-red-500 text-sm mt-1">
    {errors.email.message}
  </p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm text-slate-300 mb-2">
              Password
            </label>

            <div className="flex items-center bg-slate-800 border border-slate-700 rounded-lg px-3 focus-within:border-lime-500 transition">
              <Lock size={18} className="text-slate-400" />

              <input
              {...register("password",{
                    required:"Password is required",
                    minLength:{
                        value:8,
                        message:"Pawword must be of 8 digit"
                    },
                    pattern: {
                        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&^#()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/,
                        message:"Password must contain 8+ characters, uppercase, lowercase, number and special character",
                            }
                })}
                type={showPassword ? "text" : "password"}
                placeholder="Create a password"
                className="w-full bg-transparent outline-none px-3 py-3 text-white placeholder:text-slate-500"
              />

              {showPassword ? (
  <Eye
    onClick={() => setShowPassword(false)}
    size={18}
    className="text-slate-400 cursor-pointer"
  />
) : (
  <EyeOff
    onClick={() => setShowPassword(true)}
    size={18}
    className="text-slate-400 cursor-pointer"
  />
)}
            </div>
            {errors.password && (
  <p className="text-red-500 text-sm mt-1">
    {errors.password.message}
  </p>
            )}
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm text-slate-300 mb-2">
              Confirm Password
            </label>

            <div className="flex items-center bg-slate-800 border border-slate-700 rounded-lg px-3 focus-within:border-lime-500 transition">
              <Lock size={18} className="text-slate-400" />

              <input
             {...register("confirmPassword", {
  required: "Confirm Password is required",
  validate: (value) => {
    return value === password || "Passwords do not match";
  },
})}
              type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm your password"
                className="w-full bg-transparent outline-none px-3 py-3 text-white placeholder:text-slate-500"
              />

              {showConfirmPassword ? (
  <Eye
    onClick={() => setShowConfirmPassword(false)}
    size={18}
    className="text-slate-400 cursor-pointer"
  />
) : (
  <EyeOff
    onClick={() => setShowConfirmPassword(true)}
    size={18}
    className="text-slate-400 cursor-pointer"
  />
)}
            </div>
              {errors.confirmPassword && (
  <p className="text-red-500 text-sm mt-1">
    {errors.confirmPassword.message}
  </p>
            )}
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full bg-lime-500 hover:bg-lime-600 transition py-3 rounded-lg font-semibold text-slate-900"
          >
            Create Account
          </button>

        </form>

        {/* Login */}
        <div className="mt-6 text-center text-slate-400">
          Already have an account?
          <button
            onClick={()=>navigate("/login")}
            type="button"
            className="ml-2 text-lime-400 hover:text-lime-300 font-medium"
          >
            Login
          </button>
        </div>

      </div>
    </div>
  );
};

export default Register;