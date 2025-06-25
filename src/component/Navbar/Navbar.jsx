import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useLogin } from "../../context/login-context";
import SearchBar from "../../component/SearchBar/SearchBar";
import { useCart } from "../../context/cart-context";
import { useWishlist } from "../../context/wishlist-contex";

function Navbar() {
  const navigate = useNavigate();
  const { token, loginDispatch } = useLogin();
  const [isAccountDropDownOpen, setIsAccountDropDownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cart } = useCart();
  const { wishlist } = useWishlist();
  const onLoginClick = () => {
    if (token?.token) {
      navigate("/auth/login");
      loginDispatch({ type: "LOGOUT" });
    } else {
      localStorage.setItem("token", token);
      loginDispatch({ type: "TOKEN" });
      navigate("/auth/login");
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-teal-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex flex-wrap items-center justify-between">
        {/* Logo */}
        <h1
          className="text-2xl font-bold cursor-pointer"
          onClick={() => navigate("/")}
        >
          Shopping Cart
        </h1>

        <button
          className="lg:hidden text-3xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-6 w-full lg:w-auto mt-4 lg:mt-0">
          <SearchBar />
          <div
            className="releative cursor-pointer justify-center"
            onClick={() => navigate("/wishlist")}
          >
            <span className="material-icons-outlined text-3xl">
              favorite
            </span>
            {
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
                {wishlist.length}
              </span>
            }
          </div>

          <div
            className="relative cursor-pointer"
            onClick={() => navigate("/cart")}
          >
            <span className="material-icons-outlined text-3xl">
              shopping_cart
            </span>
            {
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
                {cart.length}
              </span>
            }
          </div>

          {/* Account dropdown */}
          <div className="relative">
            <span
              className="material-icons-outlined cursor-pointer text-3xl"
              onClick={() => setIsAccountDropDownOpen(!isAccountDropDownOpen)}
            >
              account_circle
            </span>
            {isAccountDropDownOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg z-50 text-gray-700">
                <div
                  className="px-4 py-2 hover:bg-green-100 text-sm cursor-pointer"
                  onClick={onLoginClick}
                >
                  {token?.token ? "Log Out" : "Log In"}
                </div>
                {token?.token && (
                  <div
                    className="px-4 py-2 hover:bg-green-100 text-sm cursor-pointer"
                    onClick={() => navigate("/Dashboard")}
                  >
                    User Dashboard
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isMenuOpen && (
          <div className="lg:hidden w-full flex flex-col items-start space-y-4 mt-4">
            <SearchBar />
            <div className="flex space-x-4">
              <div
                className="relative cursor-pointer"
                onClick={() => navigate("/wishlist")}
              >
                <span className="material-icons-outlined text-3xl">
                  favorite
                </span>
                {
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
                    {wishlist.length}
                  </span>
                }
              </div>

              <div
                className="relative cursor-pointer"
                onClick={() => navigate("/cart")}
              >
                <span className="material-icons-outlined text-3xl">
                  shopping_cart
                </span>
                {
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
                    {cart.length}
                  </span>
                }
              </div>
            </div>

            <div className="flex flex-col text-gray-700 bg-white rounded-md shadow-md w-full">
              <div
                className="px-4 py-2 hover:bg-green-100 text-sm cursor-pointer"
                onClick={onLoginClick}
              >
                {token?.token ? "Log Out" : "Log In"}
              </div>
              {token?.token && (
                <div
                  className="px-4 py-2 hover:bg-green-100 text-sm cursor-pointer"
                  onClick={() => navigate("/Dashboard")}
                >
                  User Profile
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Navbar;
