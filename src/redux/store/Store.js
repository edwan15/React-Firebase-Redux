import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "../User/UserSlide";


export const store = configureStore({
  reducer: {
    User: UserReducer,
  },
});