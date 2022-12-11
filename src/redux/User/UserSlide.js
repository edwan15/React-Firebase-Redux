import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  
isLoggedIn : false,
email: null ,
userName:null,
userID: null,

}

const UserSlide = createSlice({
  name: "auth",
  initialState,
  reducers:{

    SET_ACTIVE_USER:(state,action) => {
      console.log(action.payload);
      const {email , userName , userID } = action.payload
      state.isLoggedIn = true;
      state.email = email
      state.userName = userName
      state.userID = userID
    },
    REMOVE_USER: (state,action) => {

      state.isLoggedIn = false
      state.email = null
      state.userName = null 
      state.userID = null
      console.log(state.isLoggedIn)      
    }
  
  }
});

export const { SET_ACTIVE_USER , REMOVE_USER } = UserSlide.actions;

export const selectIsLoggedIn = (state) => state.auth
export const selectEmail = (state) => state.email
export const selectUserName = (state) => state.useName
export const selectUserID = (state) => state.userID

export default UserSlide.reducer;