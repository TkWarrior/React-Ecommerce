import React from 'react'
import {Link} from 'react-router-dom'
function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center  p-4">
      <form
        className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 space-y-6"
       
      >
        <h2 className="text-3xl font-bold text-center text-gray-800">Login</h2>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Username
          </label>
          <input
            type="text"
            placeholder="Enter Username"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-green-900 transition"
        >
          Login
        </button>

        <p className="text-center text-sm text-gray-600">
          {/* Don't have an account?{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Sign up
            </a> */}
          Don't have an account?
          <Link to="/signup" className="text-blue-600">
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Login