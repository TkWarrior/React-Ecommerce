import React from 'react'

function Navbar() {
  return (
    <>
      <header className="flex bg-green-900 py-4 px-8 text-white">
        <div>
          <h1 className="text-3xl">Shopping Cart</h1>
        </div>
        <nav className="ml-auto flex gap-8 ">
          <span className="material-icons-outlined hover:cursor-pointer text-3xl">
            favorite
          </span>
          <span className="material-icons-outlined hover:cursor-pointer text-3xl">
            shopping_cart
          </span>
          <span className="material-icons-outlined hover:cursor-pointer text-3xl">
            account_circle
          </span>
        </nav>
      </header>
    </>
  );
}

export default Navbar