// import React, { useEffect, useState } from "react";
// import ProductCard from "../../component/ProductCard/ProductCard";
// import { useCart } from "../../context/cart-context";
// import { useWishlist } from "../../context/wishlist-contex";
// import { getAllCategories, getAllProduct } from "../../api/service";
// import { getProductByCategory } from "../../utils/getProductByCategory";
// import Sidebar from "../../component/Sidebar/Sidebar";

// function Home() {
//   const [products, setProducts] = useState([]);
//   const [categories, setCategories] = useState([]);
//   const [selectedCategory, setselectedCategory] = useState("all");
//   const { cart } = useCart();
//   const { wishlist } = useWishlist();
//   console.log("cart", cart);
//   console.log("wishlist", wishlist);
//   useEffect(() => {
//     (async () => {
//       const product_data = await getAllProduct();
//       const category_data = await getAllCategories();
//       const updated_category_data = [...category_data, { categoryName: "all" }];
//       setProducts(product_data);
//       setCategories(updated_category_data);
//       console.log(category_data);
//       console.log(product_data);
//     })();
//   }, []);

//   const onCategoryClick = (category_name) => {
//     setselectedCategory(category_name);
//   };

//   const filterProductByCategories = getProductByCategory(
//     products,
//     selectedCategory
//   );

//   return (
//     <div>
//       <div className="grid lg:grid-cols-10 md:grid-cols-5 sm:grid-cols-3 mt-8 gap-4 ml-20">
//         {categories?.length > 0 &&
//           categories.map((category) => (
//             <div
//               className="rounded-full bg-green-500 text-center hover:cursor-pointer"
//               key={category.categoryId}
//               onClick={() => onCategoryClick(category.categoryName)}
//             >
//               {category.categoryName}
//             </div>
//           ))}
//       </div>

//       <main className="grid  md:grid-cols-3 sm:grid-cols:1 pt-8 ">
//         {filterProductByCategories?.length > 0 &&
//           filterProductByCategories.map((product) => (
//             <ProductCard key={product.productId} product={product} />
//           ))}
//       </main>
//     </div>
//   );
// }

// export default Home;
import React, { useEffect, useState } from "react";
import ProductCard from "../../component/ProductCard/ProductCard";
import { useCart } from "../../context/cart-context";
import { useWishlist } from "../../context/wishlist-contex";
import { getAllCategories, getAllProduct } from "../../api/service";
import { getProductByCategory } from "../../utils/getProductByCategory";
import Sidebar from "../../component/Sidebar/Sidebar";
import PriceRangeSlider from "../../component/PriceRangeSlider/PriceRangeSlider";

function Home() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setselectedCategory] = useState("all");
  const { cart } = useCart();
  const { wishlist } = useWishlist();
  const [priceRange, setpriceRange ] = useState([1, 100000]);
  console.log("cart", cart);
  console.log("wishlist", wishlist);
  console.log("priceRange",priceRange)
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

  const filterProduct = getProductByCategory(products, selectedCategory).filter(
    (product) => {
      return product.productPrice >= priceRange[0] &&
        product.productPrice <= priceRange[1];
    }
  );
  console.log(getProductByCategory(products,selectedCategory))
  console.log("filter product",filterProduct)
  return (
    <div className="flex">
      <Sidebar
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryClick={onCategoryClick}
        priceRange={priceRange}
        setpriceRange={setpriceRange}
      />
      
      <div className="flex-1 p-6 md:px-12 lg:px-24">
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

        <main className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {filterProduct?.length > 0 ? (
            filterProduct.map((product) => (
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
