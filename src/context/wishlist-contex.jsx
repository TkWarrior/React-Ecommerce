
import {createContext, useContext, useReducer } from "react";
import wishlistReducer from "../reducers/wishlistReducer";

const WishlistContext = createContext();

const WishlistProvider = ({ children }) => {
  const initialState = {
    wishlist: JSON.parse(localStorage.getItem('wishlist'))||'',
  };
  const [{ wishlist }, wishDispatch] = useReducer(
    wishlistReducer,
    initialState
  );
  return (
    <WishlistContext.Provider value={{ wishlist, wishDispatch }}>
      {children}
    </WishlistContext.Provider>
  );
};

const useWishlist = () => useContext(WishlistContext);

export { WishlistProvider, useWishlist };
