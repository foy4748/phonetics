import { configureStore } from "@reduxjs/toolkit";

import lessonBookingReducer from "./slices/lessonBookingSlice";
import paymentReducer from "./slices/paymentSlice";
import teacherReducer from "./slices/teacherConsultingSlice";
import booksReducer from "./slices/booksSlice";

export const store = configureStore({
  reducer: {
    lessons: lessonBookingReducer,
    payments: paymentReducer,
    teachers: teacherReducer,
    books: booksReducer,
  },
});
