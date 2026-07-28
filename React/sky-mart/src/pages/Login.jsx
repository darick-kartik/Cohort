import { Mail, Lock, EyeOff,Eye } from "lucide-react";
import {useForm} from 'react-hook-form'; 
import {useState } from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const {register,handleSubmit,reset,formState:{errors},}=useForm();
  const onSubmit=(data)=>{
    const users=JSON.parse(localStorage.getItem("registeredUsers"))||[];
    const user=users.find((val)=>{
        return val.email===data.email
    })
    if(user){
        if(user.password===data.password){
            alert("Successfully Login");
            localStorage.setItem("currentUser",JSON.stringify(user));
            navigate("/");
        }
        else{
            alert("Password is wrong");
            
           
        }
    }
    else{
       alert("Email not registered");
    }
    reset();
  }
  const handleClick=()=>{
    setShowPassword((prev)=>!prev);
  }
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl p-8">

        {/* Heading */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white">
            Welcome Back 👋
          </h1>

          <p className="text-slate-400 mt-2">
            Login to continue shopping
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-5">

          {/* Email */}
          <div>
            <label className="text-sm text-slate-300 block mb-2">
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
            <label className="text-sm text-slate-300 block mb-2">
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
                placeholder="Enter your password"
                className="w-full bg-transparent outline-none px-3 py-3 text-white placeholder:text-slate-500"
              />

             {showPassword ? (
  <Eye
    onClick={handleClick}
    size={18}
    className="text-slate-400 cursor-pointer"
  />
) : (
  <EyeOff
    onClick={handleClick}
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

          {/* Forgot Password */}
          <div className="flex justify-end">
            <button
              type="button"
              className="text-sm text-lime-400 hover:text-lime-300 transition"
            >
              Forgot Password?
            </button>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-lime-500 hover:bg-lime-600 transition py-3 rounded-lg font-semibold text-slate-900"
          >
            Login
          </button>

        </form>

        {/* Register */}
        <div className="mt-6 text-center text-slate-400">
          Don't have an account?
          <button
            onClick={()=>navigate("/register")}
            type="button"
            className="ml-2 text-lime-400 hover:text-lime-300 font-medium"
          >
            Register
          </button>
        </div>

      </div>
    </div>
  );
};

export default Login;