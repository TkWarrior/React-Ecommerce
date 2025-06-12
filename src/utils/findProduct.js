
export const findProductInCart = (cart,id) => cart?.length>0 && cart.some(product => product.id===id)

export const findProductInWishlist = (wishlist,id) => wishlist?.length>0 && wishlist.some(product => product.id===id)



