import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  freeCard: {
    paid: false,
  },
  premiumCard: {
    paid: false,
  },
  diamondCard: {
    paid: false,
  },
};

export const paymentSlice = createSlice({
  name: "payments",
  initialState,
  reducers: {
    makeApayment: (state, action) => {
      //state.value += action.payload;
      console.log(action.payload);
      state[action.payload]["paid"] = true;
    },
  },
});

// Action creators are generated for each case reducer function
export const { makeApayment } = paymentSlice.actions;

export default paymentSlice.reducer;
