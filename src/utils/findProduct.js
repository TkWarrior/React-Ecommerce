export const findProductInCart = (cart, productId) =>
  cart?.length > 0 && cart.some((product) => product.productId === productId);

export const findProductInWishlist = (wishlist, productId) =>
  wishlist?.length > 0 &&
  wishlist.some((product) => product.productId === productId);
