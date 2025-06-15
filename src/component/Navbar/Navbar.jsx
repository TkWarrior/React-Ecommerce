import React, { useState } from "react";
import { useNavigate } from "react-router";

function Navbar() {
  const navigate = useNavigate();
  const [isAccountDropDownOpen, setIsAccountDropDownOpen] = useState(false);
  return (
    <>
      <header className="flex bg-green-900 py-4 px-8 text-white">
        <div>
          <h1
            className="text-3xl hover:cursor-pointer "
            onClick={() => navigate("/")}
          >
            Shopping Cart
          </h1>
        </div>
        <nav className="ml-auto flex gap-8 ">
          <span
            className="material-icons-outlined hover:cursor-pointer text-3xl"
            onClick={() => navigate("/wishlist")}
          >
            favorite
          </span>
          <span
            className="material-icons-outlined hover:cursor-pointer text-3xl"
            onClick={() => navigate("/cart")}
          >
            shopping_cart
          </span>
          <div className="relative">
            <span
              className="material-icons-outlined hover:cursor-pointer text-3xl"
              onClick={() => setIsAccountDropDownOpen(!isAccountDropDownOpen)}
            >
              account_circle
            </span>
            {isAccountDropDownOpen && (
              <div className="absolute bg-green-400">
                <button onClick={() => navigate("/auth/login")}>Login</button>
              </div>
            )}
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
