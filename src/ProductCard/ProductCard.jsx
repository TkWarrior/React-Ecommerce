import React from 'react'

function ProductCard({product}) {
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-lg m-auto">
        <figure>
          <img src={product.images[0]} alt="product" />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-bold">{product.title}</h2>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-xl btn-primary w-full bg-red-900 text-white">
              <span className="material-icons hover:cursor-pointer text-3xl">
                favorite
              </span>
              Add to Wishlist
            </button>
            <button className="btn btn-xl btn-primary w-full bg-red-900 text-white">
              <span className="material-icons-outlined hover:cursor-pointer text-3xl">
                shopping_cart
              </span>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard