import React, { useEffect, useState } from "react";
import ProductCard from "../../component/ProductCard/ProductCard";
import { getAllCategories, getAllProduct } from "../../api/service";
import { getProductByCategory } from "../../utils/getProductByCategory";
import Sidebar from "../../component/Sidebar/Sidebar";
import {useSearch}  from "../../context/search-context";

function Home() {
  const [products, setProducts] = useState([]);
  
  const [categories, setCategories] = useState([]);
  
  const [selectedCategory, setselectedCategory] = useState("all");
  
  const [priceRange, setpriceRange ] = useState([1, 100000]);

  const {search} = useSearch();
  
  useEffect(() => {
    (async () => {
      const product_data = await getAllProduct();
      const category_data = await getAllCategories();
      const updated_category_data = [
        { categoryName: "all", categoryId: "all" },
        ...category_data,
      ];
      setProducts(product_data);
      setCategories(updated_category_data);
    })();
  }, []);


  const onCategoryClick = (category_name) => {
    setselectedCategory(category_name);
  };


  const filterByCategory = getProductByCategory(products, selectedCategory);
  
  console.log("filter by Category", filterByCategory);
  
  const filterByPrice = filterByCategory.filter((product) => {
    return (
      product.productPrice >= priceRange[0] &&
      product.productPrice <= priceRange[1]
    );
  });

  console.log("filter by Price", filterByPrice)
  
  const filterBySearch = filterByPrice.filter((product) => {
        return(
        product.productName.toLowerCase().includes(search.toLowerCase())
        );
  })
  
  console.log("filter by search",filterBySearch);
  
  return (
    <div className="flex">
      
        <Sidebar
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryClick={onCategoryClick}
          priceRange={priceRange}
          setpriceRange={setpriceRange}
        />
     

      <div className="flex-1 p-6 md:px-12 lg:px-10">
        <h1 className="text-3xl font-bold text-center mb-6 text-green-700">
          Explore Our Products
        </h1>

        <div className="flex flex-wrap justify-center gap-3 mb-8 sticky">
          {categories?.length > 0 &&
            categories.map((category) => (
              <button
                key={category.categoryId}
                onClick={() => onCategoryClick(category.categoryName)}
                className={`px-4 py-2 rounded-full border transition-all duration-300 ${
                  selectedCategory === category.categoryName
                    ? "bg-green-600 text-white border-green-600 shadow-md"
                    : "bg-white text-green-600 border-green-400 hover:bg-green-100"
                }`}
              >
                {category.categoryName}
              </button>
            ))}
        </div>

        <main className="grid gap-2 sm:grid-cols-4 grid-cols-2">
          {filterBySearch?.length > 0 ? (
            filterBySearch.map((product) => (
              <ProductCard key={product.productId} product={product} />
            ))
          ) : (
            <div className="col-span-full text-center text-gray-500">
              No products found for this category.
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default Home;
