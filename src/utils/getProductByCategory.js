export const getProductByCategory = (products, category_name) => {
  return category_name.toLowerCase() === "all"
    ? products
    : products.filter(
        (product) =>
          product.category.name.toLowerCase() === category_name.toLowerCase()
      );
};
