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

  const isProductAvailableInCart = findProductInCart(cart, product.productId);
  const isProductAvailableInWishlist = findProductInWishlist(
    wishlist,
    product.productId
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
      localStorage.setItem("wishlist", JSON.stringify([...wishlist, product]));
      wishDispatch({
        type: "ADD_TO_WISHLIST",
        payload: { product },
      });
    } else {
      navigate("/wishlist");
    }
  };

  return (
    <div className="w-full bg-white rounded-2xl shadow-md">
      <figure className="justify-center">
        <img
          src={product.img_url}
          alt="product"
          className=" h-40 object-cover rounded-md ml-10"
        />
      </figure>
      <div className="p-5 flex flex-col  h-full">
        <div>
          <p className="text-lg font-extralight text-gray-800 mb-1 ">
            {product.productName}
          </p>
          
          <p className="text-lg font-semibold text-green-700">
            Price: ₹. {product.productPrice}
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-2 mt-2">
          <button
            className="bg-red-500 hover:bg-red-700 transition rounded-3xl text-white"
            onClick={() => onClickHeart(product)}
          >
            <span className="material-icons-outlined text-xl">
              {isProductAvailableInWishlist ? "output" : "favorite"}
            </span>
            
          </button>
          <button
            className="bg-teal-500 hover:bg-teal-700 transition rounded-3xl text-white"
            onClick={() => onClickCart(product)}
          >
            <span className="material-icons-outlined text-xl">
              {isProductAvailableInCart
                ? "shopping_cart_checkout"
                : "add_shopping_cart"}
            </span>
           
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
