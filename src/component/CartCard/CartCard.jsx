
import { useCart } from "../../context/cart-context";

function CartCard({ product }) {
  
  const {cartDispatch} = useCart()
  console.log(product)
  const OnClickRemove = (product) => {
        cartDispatch({
            type:'REMOVE_FROM_CART',
            payload:{id : product.productId}
        })
        localStorage.removeItem('cart')
  }
  return (
    <div className="max-w-4xl mx-auto my-4 p-4">
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure className="p-4 lg:w-1/3">
          <img
            src={product.img_url}
            alt={"product"}
            className="rounded-xl object-cover max-h-60 w-full"
          />
        </figure>
        <div className="card-body lg:w-2/3">
          <h2 className="card-title text-2xl lg:text-3xl font-semibold">
            {product.productName}
          </h2>
          <p className="text-lg text-gray-700">Price: ${product.productPrice}</p>
          <div className="card-actions justify-start mt-4 gap-3">
            <div>
              <button className="btn btn-large  bg-pink-600 text-white hover:bg-pink-700">
                <span className="material-icons-outlined text-xl">
                  favorite
                </span>
                Move to Wishlist
              </button>
            </div>
            <div >
              <button className="btn bg-red-600 text-white hover:bg-red-700" onClick={() => OnClickRemove(product)}>
                <span className="material-icons-outlined text-xl">
                  remove_shopping_cart
                </span>
                Remove from Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartCard;
