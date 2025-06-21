import React from "react";
import { Link ,useNavigate} from "react-router-dom";
import { useLogin } from "../../context/login-context";
import { userLogin } from "../../api/service";
function Login() {
  const { loginDispatch, userName, password} = useLogin();
  const navigate = useNavigate();

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await userLogin(userName, password);
    console.log(data);
    // saving the token on the local storage
    if(Object.keys(data)?.length>0){
        localStorage.setItem('token',data.token)
        localStorage.setItem('fullName',data.fullName)
    }
    loginDispatch({
      type: "TOKEN",
      payload: {
      token: data,
      },
    });
    if(data.token){
        navigate('/')
    }
  };

  const onUserNameChange = (e) => {
    loginDispatch({
      type: "USERNAME",
      payload: {
      value: e.target.value,
      },
    });
  };

  const onPasswordChange = (e) => {
    loginDispatch({
      type: "PASSWORD",
      payload: {
        value: e.target.value,
      },
    });
  };
  return (
    <div className="min-h-screen flex items-center justify-center  p-4">
      <form
        className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 space-y-6"
        onSubmit={handleSubmit}
      >
        <h2 className="text-3xl font-bold text-center text-gray-800">Login</h2>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Username
          </label>
          <input
            type="email"
            required
            placeholder="Enter Username"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={onUserNameChange}
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
            onChange={onPasswordChange}
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

export default Login;
