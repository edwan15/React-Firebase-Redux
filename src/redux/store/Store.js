import { configureStore, combineReducers } from "@reduxjs/toolkit";
import CartReducer, { productFecth } from "../Cart/CartSlide";
import ProductReducer from "../Cart/ProductList";
import UserReducer from "../User/UserSlide";
import { productsApi } from "../Cart/ProductApi";


const rootReducer = combineReducers({
  auth: UserReducer,
  cart: ProductReducer,
  product: CartReducer,
  [productsApi.reducerPath]: productsApi.reducer,
  });
  
  export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(productsApi.middleware),
    
});

store.dispatch(productFecth())
export default store;
