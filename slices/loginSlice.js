import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loggedIn: false,
  username: null,
  email: null,
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    logAuser: (state, action) => {
      const { username, email } = action.payload;
      if (username && email) {
        state.username = username;
        state.email = email;
        state.loggedIn = true;
      }
    },
    logoutAuser: (state) => {
      state.loggedIn = false;
      state.username = null;
      state.email = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { logAuser, logoutAuser } = loginSlice.actions;

export default loginSlice.reducer;
