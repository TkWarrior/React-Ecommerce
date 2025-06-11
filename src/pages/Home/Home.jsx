import React, { useEffect, useState } from 'react'
import { getAllProduct } from '../../services/getAllProducts'
import ProductCard from '../../ProductCard/ProductCard';

function Home() {
  const [products,setProducts] = useState([]);
  
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