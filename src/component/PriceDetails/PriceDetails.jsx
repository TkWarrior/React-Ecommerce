// import React from 'react'
// import { useCart } from '../../context/cart-context'
// import { getTotalCartAmount } from '../../utils/getTotalCartAmount';

// function PriceDetails() {
//     const {cart} = useCart();
//     const totalCartAmount = getTotalCartAmount(cart);
//     const deliveryCharge = 30;
//     const totalAmount = totalCartAmount+deliveryCharge;
//   return (
//     <div className=" ">
//       <div className='bg-cyan-500 px-20 '>
//         <h2 className="">Price Details</h2>
//       </div>

//       <div className=" grid grid-cols-2 ml-auto card bg-base-100 shadow-xl">
//         <p>Price of({cart.length}) items </p>
//         <p>${totalCartAmount}</p>
//         <p>DeliveryCharge</p>
//         <p>${deliveryCharge}</p>
//         <p>Total Amount</p>
//         <p>${totalAmount}</p>
//         <button className="bg-red-500 text-white text-3xl p-2 rounded-md mt-4">
//           Place Order
//         </button>
//       </div>
//     </div>
//   );
// }

// export default PriceDetails

import React from "react";
import { useCart } from "../../context/cart-context";
import { getTotalCartAmount } from "../../utils/getTotalCartAmount";
import { useNavigate } from "react-router-dom";

function PriceDetails() {
  const { cart } = useCart();
  const totalCartAmount = getTotalCartAmount(cart);
  const deliveryCharge = 30;
  const totalAmount = totalCartAmount + deliveryCharge;
  const navigate = useNavigate();

  return (
    <div className="w-full md:max-w-md p-4 mx-auto">
      <div className="bg-white shadow-lg rounded-xl overflow-hidden">
        <div className="bg-cyan-500 text-white text-lg font-semibold px-6 py-4">
          Price Details
        </div>

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
            onClick={() => navigate("/checkout")}
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default PriceDetails;
