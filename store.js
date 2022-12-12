import { configureStore } from "@reduxjs/toolkit";
import lessonBookingReducer from "./slices/lessonBookingSlice";

export const store = configureStore({
  reducer: {
    lessons: lessonBookingReducer,
  },
});
