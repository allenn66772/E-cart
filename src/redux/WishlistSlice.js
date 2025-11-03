import { createSlice } from "@reduxjs/toolkit";

const WishlistSlice =createSlice({
    name:"wishlist",
    initialState:[],
    reducers:{
        addTowishList :(state,action)=>{
            state.push(action.payload)
        },
        removeWishList:(state,action)=>{
           return state.filter(item=>item.id !=action.payload)
        }
    }
})

export const {addTowishList,removeWishList}=WishlistSlice.actions
export default WishlistSlice.reducer