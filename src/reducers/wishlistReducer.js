
const wishlistReducer = (state,{type,payload}) =>{
    switch(type){
        case "ADD_TO_WISHLIST":
            return {
            ...state ,
            wishlist:[...state.wishlist,payload.product]
            }
        case "REMOVE_FROM_WISHLIST":
            return{
            ...state,
            wishlist: state.wishlist.filter((product) => product.productId!==payload.id)
            }
        default:
            return state
    }
}

export default wishlistReducer;