import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./ProductSlice";
import wishlistSlice from "./WishlistSlice"
import cartSlice from './CartSlice'

const CartStore = configureStore({
  reducer: {
    productReducer: productSlice,
    wishlistReducer : wishlistSlice ,
    cartReducer : cartSlice
  },
});
export default CartStore;
