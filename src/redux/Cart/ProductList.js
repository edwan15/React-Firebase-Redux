import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cartItems :[],
  cartTotalQuantity:0,
  cartTotalAmount:0,
}

const ProductList = createSlice({
  name: "cart",
  initialState,
  reducers: {
    ADD_TO_CART : (state,action) => {
      state.cartItems = [...state.cartItems, action.payload];
      state.cartTotalQuantity += 1;

      // const itemIndex = state.cartItems.findIndex((pdt) => pdt.id === action.payload.id )
      // if(itemIndex <= 0 ){
      //   state.cartItems[itemIndex].cartTotalQuantity += 1;
      // }else{
      //   const templaProd = {...action.payload, cartTotalQuantity:1}
      //   state.cartItems.push(templaProd);
      // }
    },
    REMOVE_TO_CART: (state,action) => {

      const productId = action.payload;
      state.cartTotalQuantity -= 1;
      state.cartItems = state.cartItems.filter((pdt) => pdt.id !== productId)
    }

  }
});

export const { ADD_TO_CART, REMOVE_TO_CART } = ProductList.actions;

export default ProductList.reducer