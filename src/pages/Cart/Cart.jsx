import React from "react";
import { useCart } from "../../context/cart-context";
import CartCard from "../../component/CartCard/CartCard";
import PriceDetails from "../../component/PriceDetails/PriceDetails";

function Cart() {
  const {cart} = useCart();
  console.log("cart : ",cart)
  return (
    <div>
      <main className="pt-6">
        {cart?.length > 0 ? (
          
            <div className="grid grid-cols-2 ">
              <div>
                {cart?.length > 0 &&
                  cart.map((product) => (
                    <CartCard key={product.productId} product={product} />
                  ))}
              </div>

              <div className="p-4 ">
                <h1 className="text-3xl ">
                  <PriceDetails />
                </h1>
              </div>
            </div>
         
        ) : (
          <h2 className="text-2xl font-semibold text-gray-700">
            🛒 Your Cart is Empty
          </h2>
        )}
      </main>
    </div>
  );
}

export default Cart;
