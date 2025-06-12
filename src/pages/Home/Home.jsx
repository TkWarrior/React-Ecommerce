import React, { useEffect, useState } from 'react'
import { getAllProduct } from '../../services/getAllProducts'
import ProductCard from '../../component/ProductCard/ProductCard';
import { useCart } from '../../context/cart-context';
import { useWishlist } from '../../context/wishlist-contex';

function Home() {
  const [products,setProducts] = useState([]);
  const {cart} = useCart();
  const {wishlist} = useWishlist();
  console.log(cart)
  console.log(wishlist)
  useEffect(()=>{
    
    (async()=>{const data = await getAllProduct();
    setProducts(data);})()   
  
  },[])
  
  return (
    <main className="grid  md:grid-cols-3 sm:grid-cols:1">
      
        {products?.length > 0 &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      
    </main>
  );
}

export default Home