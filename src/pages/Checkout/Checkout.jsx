// import React from 'react'

// import CheckoutCard from '../../component/CheckoutCard/CheckoutCard';
// import { useCart } from '../../context/cart-context';
// import PriceDetails from '../../component/PriceDetails/PriceDetails';
// import CheckOutForm from '../../component/CheckOutForm/CheckOutForm';

// function Checkout() {
//  const {cart} = useCart();
//   return (
//     <div>
//       <main className="pt-6 flex lg:ml-10">
//         <CheckOutForm/>
//         {cart?.length > 0 ? (
//           <div className="flex-row lg:w-1/4">
//               {
//                 cart.map((product) => (
//                   <CheckoutCard key={product.id} product={product} />
//                 ))}
          
//             <div className="p-4 mt-2">
//               <h1 className="text-3xl ">
//                 <PriceDetails/>
//               </h1>
//             </div>
//           </div>
//         ) : (
//           <h2 className="text-2xl font-semibold text-gray-700">
//             🛒 Your Cart is Empty
//           </h2>
//         )}
//       </main>
//     </div>
//   );
// }

// export default Checkout

import React from "react";
import CheckoutCard from "../../component/CheckoutCard/CheckoutCard";
import { useCart } from "../../context/cart-context";
import PriceDetails from "../../component/PriceDetails/PriceDetails";
import CheckOutForm from "../../component/CheckOutForm/CheckOutForm";
import axios from "axios"

import { getTotalCartAmount } from "../../utils/getTotalCartAmount";
function Checkout() {
  const { cart } = useCart();
  

  const totalCartAmount = getTotalCartAmount(cart);
  const deliveryCharge = 30;
  const totalAmount = totalCartAmount+deliveryCharge;
  const handleCheckout = async () => {
    const checkoutItem = cart.map((product) => ({
      name: product.productName,
      quantity: 1,
      price: product.productPrice,
    }))
    const response = await axios.post(
      "http://localhost:8080/api/checkout/create-session",
      checkoutItem
    );
    
    console.log(response.data)
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-16">
      <main className="flex flex-col lg:flex-row gap-8">
        {/* Left: Checkout Form */}
        <div className="w-full lg:w-3/5 bg-white rounded-lg shadow-md p-6">
          <CheckOutForm />
        </div>

        {/* Right: Order Summary */}
        {cart?.length > 0 ? (
          <div className="w-full lg:w-1/3 space-y-4">
            <div className="bg-white rounded-lg shadow-md p-4">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                Order Summary
              </h2>
              {cart.map((product) => (
                <CheckoutCard key={product.productId} product={product} />
              ))}
            </div>

            <div className="bg-white rounded-lg shadow-md p-4">
              <div className="p-6 space-y-4 text-gray-700">
                <div className="flex justify-between">
                  <span>Price ({cart.length} items)</span>
                  <span>₹{totalCartAmount}</span>
                </div>

                <div className="flex justify-between">
                  <span>Delivery Charges</span>
                  <span>₹{deliveryCharge}</span>
                </div>

                <hr />

                <div className="flex justify-between font-semibold text-lg">
                  <span>Total Amount</span>
                  <span>₹{totalAmount}</span>
                </div>

                <button
                  className="w-full bg-red-500 hover:bg-red-600 text-white font-medium py-2 rounded-md transition"
                  onClick={handleCheckout}
                >
                  Place Order
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="w-full text-center mt-10">
            <h2 className="text-2xl font-semibold text-gray-700">
              🛒 Your Cart is Empty
            </h2>
          </div>
        )}
      </main>
    </div>
  );
}

export default Checkout;
