import React from 'react'
import WishCard from '../../component/WishCard/WishCard'
import { useWishlist } from '../../context/wishlist-contex';

function Wishlist() {
    const {wishlist} = useWishlist();
  return (
    <div>
      <main>
        {wishlist?.length > 0 &&
          wishlist.map((product) => (
            <WishCard key={product.id} product={product} />
          ))}
      </main>
    </div>
  );
}

export default Wishlist