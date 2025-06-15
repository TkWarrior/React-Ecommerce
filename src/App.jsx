import './App.css'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from '../../React-Ecommerce/src/pages/Home/Home'
import Navbar from './component/Navbar/Navbar'
import { CartProvider } from './context/cart-context'
import Cart from './pages/Cart/Cart'
import Wishlist from './pages/Wishlist/Wishlist'
import { WishlistProvider } from './context/wishlist-contex'
import Login from './pages/Login/Login'
import { LoginProvider } from './context/login-context'

function App() {

  return (
    <>
      <WishlistProvider>
        <CartProvider>
          <BrowserRouter>
            <LoginProvider>
              <Navbar />
              <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/cart" element={<Cart />}></Route>
                <Route path="/wishlist" element={<Wishlist />}></Route>
                <Route path="/auth/login" element={<Login />}></Route>
              </Routes>
            </LoginProvider>
          </BrowserRouter>
        </CartProvider>
      </WishlistProvider>
    </>
  );
}

export default App
