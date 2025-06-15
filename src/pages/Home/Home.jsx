import React, { useEffect, useState } from 'react'
import ProductCard from '../../component/ProductCard/ProductCard';
import { useCart } from '../../context/cart-context';
import { useWishlist } from '../../context/wishlist-contex';
import { getAllCategories,getAllProduct } from '../../api/service';

function Home() {
  const [products,setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const {cart} = useCart();
  const {wishlist} = useWishlist();
  console.log(cart)
  console.log(wishlist)
  useEffect(()=>{
    
    (async()=>{
      const product_data = await getAllProduct();
      setProducts(product_data);
      const category_data = await getAllCategories();
      setCategories(category_data);
      console.log(categories);
      console.log(products);
    })()   
  
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