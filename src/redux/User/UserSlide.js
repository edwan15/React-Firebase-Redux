import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  
  email : "edwan zapata101@hotmail.com",
  fullname: "",
  token: ""

}

const UserSlide = createSlice({
  name: "User",
  initialState,
  reducers: {
    setUser:{

    }
  }
});

export const { setUser } = UserSlide.actions;

export default UserSlide.reducer