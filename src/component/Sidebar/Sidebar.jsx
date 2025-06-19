import React from "react";
import PriceRangeSlider from "../PriceRangeSlider/PriceRangeSlider";

function Sidebar({
  categories,
  selectedCategory,
  onCategoryClick,
  priceRange,
  setpriceRange
}) {

  return (
    <aside className="hidden lg:block w-64 p-4 border-r border-gray-200 bg-white h-full sticky top-30">
      <h2 className="text-xl font-semibold mb-4 text-green-700">Categories</h2>
      <nav className="flex flex-col gap-2">
        {categories?.length > 0 &&
          categories.map((category) => (
            <button
              key={category.categoryId}
              onClick={() => onCategoryClick(category.categoryName)}
              className={`text-left px-4 py-2 rounded-md transition-colors duration-200 ${
                selectedCategory === category.categoryName
                  ? "bg-green-600 text-white"
                  : "text-gray-700 hover:bg-green-100"
              }`}
            >
              {category.categoryName}
            </button>
          ))}
      </nav>
      <h2 className="text-xl font-semibold mb-4 text-green-700">Price Range</h2>
      <PriceRangeSlider priceRange={priceRange} setpriceRange={setpriceRange}/>
    </aside>
  );
}

export default Sidebar;
