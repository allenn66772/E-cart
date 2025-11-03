import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAllProducts = createAsyncThunk(
  "products/fetchAllProducts",
  async () => {
    const result = await axios.get("https://dummyjson.com/products");
    const products = result.data.products;
    sessionStorage.setItem("allProducts", JSON.stringify(products));
    return products; //
  }
);

const ProductSlice = createSlice({
  name: "products",
  initialState: {
    allProducts: [],
    dummyAllProducts: [],
    loading: true,
    error: "",
  },
  reducers: {
    //search
    searchProducts: (state, action) => {
      state.allProducts = state.dummyAllProducts?.filter(products=>
        products?.title.toLowerCase().includes(action.payload.toLowerCase())
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProducts.pending, (state) => {
        state.loading = true;
        state.allProducts = [];
        state.dummyAllProducts = [];
        state.error = "";
      })
      .addCase(fetchAllProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.allProducts = action.payload;
        state.dummyAllProducts = action.payload;
        state.error = "";
      })
      .addCase(fetchAllProducts.rejected, (state) => {
        state.loading = false;
        state.allProducts = [];
        state.dummyAllProducts = [];
        state.error = "API CALL FAILED";
      });
  },
});

export const { searchProducts } = ProductSlice.actions;
export default ProductSlice.reducer;
