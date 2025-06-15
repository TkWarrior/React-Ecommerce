import React from "react";
import { useCart } from "../../context/cart-context";
import {findProductInCart, findProductInWishlist } from "../../utils/findProduct"
import {useNavigate} from "react-router"
import { useWishlist } from "../../context/wishlist-contex";
function ProductCard({ product }) {
  
  const { cart,cartDispatch } = useCart();
  const { wishlist,wishDispatch} = useWishlist();
  const navigate = useNavigate();
  const isProductAvailableInCart = findProductInCart(cart,product.id);
  
  const isProductAvailableInWishlist = findProductInWishlist(wishlist,product.id)
  const onClickCart = (product) =>{

     if(!isProductAvailableInCart){
        localStorage.setItem('cart' , JSON.stringify([ ...cart, product]))
        cartDispatch({
          type: "ADD_TO_CART",
          payload: { product },
        })
     }else{
        navigate("/cart"); 
     }
 
  }
  
  const onClickHeart = (product) => {
     
    if(!isProductAvailableInWishlist){
      wishDispatch ({
           type: "ADD_TO_WISHLIST",
           payload: { product },
         })
         localStorage.setItem('wishlist',JSON.stringify([...wishlist,product]))
    } else{
        navigate("/wishlist");
    }
  }
   
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-lg m-auto ">
        <figure>
          <img src={product.images[0]} alt="product" />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-bold">{product.title}</h2>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
          <div className="card-actions justify-end">
            <button
              className="btn btn-xl btn-primary w-full bg-red-900 text-white"
              onClick={() => onClickHeart(product)}
            >
              <span className="material-icons-outlined hover:cursor-pointer text-3xl ">
                {isProductAvailableInWishlist ? "output" : "favorite"}
              </span>
              {isProductAvailableInWishlist
                ? "Go to Wishlist"
                : "Add to Wishlist"}
            </button>
            <button
              className="btn btn-xl btn-primary w-full bg-red-900 text-white"
              onClick={() => onClickCart(product)}
            >
              <span className="material-icons-outlined hover:cursor-pointer text-3xl">
                {isProductAvailableInCart
                  ? "shopping_cart_checkout"
                  : "add_shopping_cart"}
              </span>
              {isProductAvailableInCart ? "Go to Cart" : "Add to Cart"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
