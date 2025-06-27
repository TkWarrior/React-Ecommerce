export const getTotalCartAmount = (cart) =>
  cart?.length > 0 && cart.reduce((acc, curr) => acc + curr.productPrice, 0);
