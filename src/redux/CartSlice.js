import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    //add to cart - when add to cart button is clicked from view & wishlist
    addToCart: (state, action) => {
      const existingProduct = state?.find(
        (item) => item.id == action.payload.id
      );
      if (existingProduct) {
        // increment quantity
        existingProduct.quantity++;
        existingProduct.totalPrice =
          existingProduct.quantity * existingProduct.price;
        const remainingProducts = state.filter(
          (item) => item.id != existingProduct.id
        );
        state = [...remainingProducts, existingProduct];
      } else {
        //add item to cart
        state.push({
          ...action.payload,
          quantity: 1,
          totalPrice: action.payload.price,
        });
      }
    },
    //remove from cart
    removeItemFromCart: (state, action) => {
      return state.filter((item) => item.id != action.payload);
    },
    //increment quantity
    incrementQuantity: (state, action) => {
      const existingProduct = state?.find((item) => item.id == action.payload);
      existingProduct.quantity++;
      existingProduct.totalPrice =existingProduct.quantity * existingProduct.price;
      const remainingProducts = state.filter((item) => item.id != existingProduct.id);
      state = [...remainingProducts, existingProduct];
    },
    //decrement quantity
    decrementQuantity: (state, action) => {
      const existingProduct = state?.find((item) => item.id == action.payload);
      existingProduct.quantity--;
      existingProduct.totalPrice =existingProduct.quantity * existingProduct.price;
      const remainingProducts = state.filter((item) => item.id != existingProduct.id);
      state = [...remainingProducts, existingProduct];
    },
    //empty cart
    emptyCart:(state,action)=>{
        return state=[]
    }
  },
});
export const { addToCart, removeItemFromCart, incrementQuantity,decrementQuantity,emptyCart } =
  cartSlice.actions;
export default cartSlice.reducer;
