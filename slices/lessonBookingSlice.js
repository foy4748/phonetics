import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { flagUrl: "/flagSpain.jpg", languageName: "Spanish", New: true },
  { flagUrl: "/flagGermany.jpg", languageName: "German" },
  { flagUrl: "/flagFrance.jpg", languageName: "French" },
  ,
];

export const lessonBookingSlice = createSlice({
  name: "lessons",
  initialState,
  reducers: {
    bookAlesson: (state, action) => {
      //state.value += action.payload;
      console.log(action.payload);
      state[action.payload]["booked"] = true;
    },
  },
});

// Action creators are generated for each case reducer function
export const { bookAlesson } = lessonBookingSlice.actions;

export default lessonBookingSlice.reducer;
