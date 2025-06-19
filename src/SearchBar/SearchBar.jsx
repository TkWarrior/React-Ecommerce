import React from "react";

function SearchBar() {
  return (
    <div className="ml-10 w-full max-w-md relative flex">
      <input
        type="search"
        placeholder="Search products..."
        className="w-full py-2 pl-4 pr-10 rounded-md shadow-inner text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500 bg-slate-300"
      />
      <span className="material-icons-outlined absolute right-3 top-2.5 text-gray-500 pointer-events-none">
        search
      </span>
    </div>
  );
}

export default SearchBar;
