import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  items: [],
  status: null,
 
};

export const productFecth = createAsyncThunk(
  "products/productsFecth",
  async () => {
    
      const response = await axios.get("https://fakestoreapi.com/products");

      return response?.data;
   
  }
);

const CartSlide = createSlice({
  name: "Product",
  initialState,
  reducers: { },
  extraReducers: {
    [productFecth.pending]: (state, action) => {
      state.status = "pending";
    },
    [productFecth.fulfilled]: (state, action) => {
      state.status = "success";
      state.items =  [...state.items, action.payload];
      
    },
    [productFecth.rejected]: (state, action) => {
      state.status = "rejected";
     
    },
  },
});

// export const {} = CartSlide.actions;

export default CartSlide.reducer;
