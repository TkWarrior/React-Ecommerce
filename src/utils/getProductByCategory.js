export const getProductByCategory = (products, category_name) => {
  console.log(category_name);
  return category_name.toLowerCase() === "all"
    ? products
    : products.filter(
        (product) =>
          product.category.categoryName.toLowerCase() ===
          category_name.toLowerCase()
      );
};
