import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { userRegister } from "../../api/service";
function Signup() {
    const [fullName,setFullName] = useState("");
    const [password,setPassword] = useState("");
    const [userName ,setUserName] = useState("");
    const [confirmPassword,setConfirmPassword] = useState("");
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        if(password!==confirmPassword){
            alert("reenter the password again")
        }
        else{
            const response = await userRegister(fullName, userName, password);
            console.log(response);
            navigate("/auth/login");
        }
        
    }

    const handleName = (e) => {
        setFullName(e.target.value);
    }

    const handleUserName = (e) =>{
       
        setUserName(e.target.value);
    }
    const handlePassword = (e) => {  
        setPassword(e.target.value);
    }

    const handleConfirmPassword = (e) =>{
        setConfirmPassword(e.target.value);
    }
  return (
    <div className="min-h-screen flex items-center justify-center  p-4">
      <form className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 space-y-6"
            onSubmit={handleSubmit}
        >
        <h2 className="text-3xl font-bold text-center text-gray-800">
          Sign Up
        </h2>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Full Name
          </label>
          <input
            type="text"
            required
            placeholder="Enter Your Name"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={handleName}
          />
        </div>
        
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            User Name
          </label>
          <input
            type="email"
            required
            placeholder="talib@gmail.com"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={handleUserName}
          />
        </div>
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            required
            placeholder="Enter Password"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={handlePassword}
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Confirm Password
          </label>
          <input
            type="password"
            required
            placeholder="Enter Password"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={handleConfirmPassword}
          />
        </div>
        
        <button
          type="submit"
          className="w-full bg-green-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-green-900 transition"
        >
          Signup
        </button>

        <p className="text-center text-sm text-gray-600">
          Already have an account?
          <Link to="/signup" className="text-blue-600">
            Log In
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Signup;
