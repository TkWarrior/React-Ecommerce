// import React from "react";
// import { useCart } from "../../context/cart-context";
// import {findProductInCart, findProductInWishlist } from "../../utils/findProduct"
// import {useNavigate} from "react-router"
// import { useWishlist } from "../../context/wishlist-contex";
// function ProductCard({ product }) {
  
//   const { cart,cartDispatch } = useCart();
//   const { wishlist,wishDispatch} = useWishlist();
//   const navigate = useNavigate();
//   const isProductAvailableInCart = findProductInCart(cart,product.id);
  
//   const isProductAvailableInWishlist = findProductInWishlist(wishlist,product.id)
//   const onClickCart = (product) =>{

//      if(!isProductAvailableInCart){
//         localStorage.setItem('cart' , JSON.stringify([ ...cart, product]))
//         cartDispatch({
//           type: "ADD_TO_CART",
//           payload: { product },
//         })
//      }else{
//         navigate("/cart"); 
//      }
 
//   }
  
//   const onClickHeart = (product) => {
     
//     if(!isProductAvailableInWishlist){
//       wishDispatch ({
//            type: "ADD_TO_WISHLIST",
//            payload: { product },
//          })
//          localStorage.setItem('wishlist',JSON.stringify([...wishlist,product]))
//     } else{
//         navigate("/wishlist");
//     }
//   }
   
//   return (
//     <div>
//       <div className="card bg-base-100 w-96 shadow-lg m-auto ">
//         <figure>
//           <img src={product.img_url} alt="product" className="w-full h-60 object-cover" />
//         </figure>
//         <div className="card-body">
//           <h2 className="card-title font-bold">{product.productName}</h2>
//           <p>{product.productDescription}</p>
//           <p>Price: ${product.productPrice}</p>
//           <div className="card-actions justify-end">
//             <button
//               className="btn btn-xl btn-primary w-full bg-red-900 text-white"
//               onClick={() => onClickHeart(product)}
//             >
//               <span className="material-icons-outlined hover:cursor-pointer text-3xl ">
//                 {isProductAvailableInWishlist ? "output" : "favorite"}
//               </span>
//               {isProductAvailableInWishlist
//                 ? "Go to Wishlist"
//                 : "Add to Wishlist"}
//             </button>
//             <button
//               className="btn btn-xl btn-primary w-full bg-red-900 text-white"
//               onClick={() => onClickCart(product)}
//             >
//               <span className="material-icons-outlined hover:cursor-pointer text-3xl">
//                 {isProductAvailableInCart
//                   ? "shopping_cart_checkout"
//                   : "add_shopping_cart"}
//               </span>
//               {isProductAvailableInCart ? "Go to Cart" : "Add to Cart"}
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ProductCard;

import React from "react";
import { useCart } from "../../context/cart-context";
import {
  findProductInCart,
  findProductInWishlist,
} from "../../utils/findProduct";
import { useNavigate } from "react-router";
import { useWishlist } from "../../context/wishlist-contex";

function ProductCard({ product }) {
  const { cart, cartDispatch } = useCart();
  const { wishlist, wishDispatch } = useWishlist();
  const navigate = useNavigate();

  const isProductAvailableInCart = findProductInCart(cart, product.id);
  const isProductAvailableInWishlist = findProductInWishlist(
    wishlist,
    product.id
  );

  const onClickCart = (product) => {
    if (!isProductAvailableInCart) {
      localStorage.setItem("cart", JSON.stringify([...cart, product]));
      cartDispatch({
        type: "ADD_TO_CART",
        payload: { product },
      });
    } else {
      navigate("/cart");
    }
  };

  const onClickHeart = (product) => {
    if (!isProductAvailableInWishlist) {
      wishDispatch({
        type: "ADD_TO_WISHLIST",
        payload: { product },
      });
      localStorage.setItem("wishlist", JSON.stringify([...wishlist, product]));
    } else {
      navigate("/wishlist");
    }
  };

  return (
    <div className="w-full max-w-sm bg-white rounded-2xl shadow-md hover:shadow-lg transition duration-300 m-auto">
      <figure>
        <img
          src={product.img_url}
          alt="product"
          className="w-full h-60 object-cover rounded-t-2xl"
        />
      </figure>
      <div className="p-5 flex flex-col justify-between h-full">
        <div>
          <h2 className="text-xl font-bold text-gray-800 mb-1">
            {product.productName}
          </h2>
          <p className="text-sm text-gray-600 mb-2">
            {product.productDescription}
          </p>
          <p className="text-lg font-semibold text-green-700">
            Price: Rs. {product.productPrice}
          </p>
        </div>
        <div className="flex flex-col gap-3 mt-4">
          <button
            className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-red-500 text-white hover:bg-red-700 transition"
            onClick={() => onClickHeart(product)}
          >
            <span className="material-icons-outlined text-xl">
              {isProductAvailableInWishlist ? "output" : "favorite"}
            </span>
            {isProductAvailableInWishlist
              ? "Go to Wishlist"
              : "Add to Wishlist"}
          </button>
          <button
            className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-green-700 text-white hover:bg-green-800 transition"
            onClick={() => onClickCart(product)}
          >
            <span className="material-icons-outlined text-xl">
              {isProductAvailableInCart
                ? "shopping_cart_checkout"
                : "add_shopping_cart"}
            </span>
            {isProductAvailableInCart ? "Go to Cart" : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
