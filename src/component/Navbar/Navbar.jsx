import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useLogin } from "../../context/login-context";

function Navbar() {
  const navigate = useNavigate();
  const {token,loginDispatch} = useLogin();
  const [isAccountDropDownOpen, setIsAccountDropDownOpen] = useState(false);
  const onLoginClick = () =>{
      if(token?.access_token){
          navigate("/auth/login");
          console.log(token)
      }
      else{
        loginDispatch({
          type:'LOGOUT'
        })
        console.log(token);
        navigate("/auth/login");
      }
  }
  return (
    <>
      <header className="flex sticky top-0 z-50 bg-green-900 py-4 px-8 text-white">
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
                <button onClick={onLoginClick}>
                  {
                    token?.access_token ? 'LogOut': 'LogIn'
                  }
                  
                  </button>
              </div>
            )}
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
