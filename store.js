import { configureStore } from "@reduxjs/toolkit";

import lessonBookingReducer from "./slices/lessonBookingSlice";
import paymentReducer from "./slices/paymentSlice";

export const store = configureStore({
  reducer: {
    lessons: lessonBookingReducer,
    payments: paymentReducer,
  },
});
