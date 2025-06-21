import React from 'react'
import { useWishlist } from '../../context/wishlist-contex';

function WishCard({ product }) {
  
  const {wishDispatch} = useWishlist()
  console.log(product)
  const OnClickRemove = (product) => {
        wishDispatch({
            type:'REMOVE_FROM_WISHLIST',
            payload:{id : product.productId}
        })
        localStorage.removeItem('wishlist')
  }
  return (
    <div className="max-w-4xl mx-auto my-4 p-4">
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure className="p-4 lg:w-1/3">
          <img
            src={product.img_url}
            alt="product"
            className="rounded-xl object-cover max-h-60 w-full"
          />
        </figure>
        <div className="card-body lg:w-2/3">
          <h2 className="card-title text-2xl lg:text-3xl font-semibold">
            {product.productName}
          </h2>
          <p className="text-lg text-gray-700">
            Price: ₹{product.productPrice}
          </p>
          <div className="card-actions justify-start mt-4 gap-3">
            <div>
              <button className="btn btn-large w-full bg-pink-600 text-white hover:bg-pink-700">
                <span className="material-icons-outlined text-xl">
                  shopping_cart
                </span>
                Move to Shopping Cart
              </button>
            </div>
            <div>
              <button
                className="btn bg-red-600 w-full text-white hover:bg-red-700"
                onClick={() => OnClickRemove(product)}
              >
                <span className="material-icons-outlined text-xl">
                  heart_minus
                </span>
                Remove from Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WishCard