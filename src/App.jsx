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
import UserDashboard from './pages/Dashboard/UserDashboard'
import Checkout from './pages/Checkout/Checkout'
import Signup from './pages/Signup/Signup'
import Success from './pages/Checkout/Success'
import Cancel from './pages/Checkout/Cancel'
import { SearchProvider } from './context/search-context'
function App() {

  return (
    <>
      <WishlistProvider>
        <CartProvider>
          <BrowserRouter>
            <LoginProvider>
              <SearchProvider>
                <Navbar />

                <Routes>
                  <Route path="/" element={<Home />}></Route>
                  <Route path="/cart" element={<Cart />}></Route>
                  <Route path="/wishlist" element={<Wishlist />}></Route>
                  <Route path="/auth/login" element={<Login />}></Route>
                  <Route path="/Dashboard" element={<UserDashboard />}></Route>
                  <Route path="/checkout" element={<Checkout />}></Route>
                  <Route path="/signup" element={<Signup />}></Route>
                  <Route path="/success" element={<Success />}></Route>
                  <Route path="/cancel" element={<Cancel />}></Route>
                </Routes>
              </SearchProvider>
            </LoginProvider>
          </BrowserRouter>
        </CartProvider>
      </WishlistProvider>
    </>
  );
}

export default App
