import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  CartItem: 0 ,
  ProductList: []
}

const CartSlide = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    
  }
});

export const {} = CartSlide.actions

export default CartSlide.reducer