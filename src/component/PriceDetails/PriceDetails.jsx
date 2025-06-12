import React from 'react'
import { useCart } from '../../context/cart-context'
import { getTotalCartAmount } from '../../utils/getTotalCartAmount';

function PriceDetails() {
    const {cart} = useCart();
    const totalCartAmount = getTotalCartAmount(cart);
    const deliveryCharge = 30;
    const totalAmount = totalCartAmount+deliveryCharge;
  return (
    <div className=" ">
      <div className='bg-cyan-500 px-20 '>
        <h2 className="">Price Details</h2>
      </div>

      <div className=" grid grid-cols-2 ml-auto card bg-base-100 shadow-xl">
        <p>Price of({cart.length}) items </p>
        <p>${totalCartAmount}</p>
        <p>DeliveryCharge</p>
        <p>${deliveryCharge}</p>
        <p>Total Amount</p>
        <p>${totalAmount}</p>
        <button className="bg-red-500 text-white text-3xl p-2 rounded-md mt-4">
          Place Order
        </button>
      </div>
    </div>
  );
}

export default PriceDetails