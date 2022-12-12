import { configureStore } from "@reduxjs/toolkit";

import lessonBookingReducer from "./slices/lessonBookingSlice";
import paymentReducer from "./slices/paymentSlice";
import teacherReducer from "./slices/teacherConsultingSlice";

export const store = configureStore({
  reducer: {
    lessons: lessonBookingReducer,
    payments: paymentReducer,
    teachers: teacherReducer,
  },
});
