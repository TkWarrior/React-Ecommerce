import React, { useEffect, useState } from 'react'
import ProductCard from '../../component/ProductCard/ProductCard';
import { useCart } from '../../context/cart-context';
import { useWishlist } from '../../context/wishlist-contex';
import { getAllCategories,getAllProduct } from '../../api/service';
import { getProductByCategory } from '../../utils/getProductByCategory';

function Home() {
  const [products,setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory , setselectedCategory] = useState("all");
  const {cart} = useCart();
  const {wishlist} = useWishlist();
  console.log(cart)
  console.log(wishlist)
  useEffect(()=>{
    
    (async()=>{
      const product_data = await getAllProduct();
      const category_data = await getAllCategories();
      const updated_category_data = [...category_data, {id:'1a', name:'all'}]
      setProducts(product_data);
      setCategories(updated_category_data);
      console.log(category_data);
      console.log(product_data);
    })()   
  
  },[])
   
  const onCategoryClick = (category_name) =>{
    setselectedCategory(category_name);
  }

  const filterProductByCategories = getProductByCategory(products,selectedCategory);

  
  return (
    <div>
      <div className='grid lg:grid-cols-10 md:grid-cols-5 mt-8 gap-4 ml-20'>{categories?.length>0 && categories.map((category) => (<div className='rounded-full bg-green-500 text-center hover:cursor-pointer' onClick={() => onCategoryClick(category.name)}>{category.name}</div>))}</div>
      <main className="grid  md:grid-cols-3 sm:grid-cols:1 pt-8">
        {filterProductByCategories?.length > 0 &&
          filterProductByCategories.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </main>
    </div>
  );
}

export default Home