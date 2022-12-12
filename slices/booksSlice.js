import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    title: "Learn Spanish 4 Books in 1",
    price: "100",
  },
  {
    id: 2,
    title: "Learn Frence 4 Books in 1",
    price: "150",
  },
  {
    id: 3,
    title: "Learn English 4 Books in 1",
    price: "90",
  },
  {
    id: 4,
    title: "Learn Japanese 4 Books in 1",
    price: "120",
  },
  {
    id: 5,
    title: "Learn Chinese 4 Books in 1",
    price: "130",
  },
  {
    id: 6,
    title: "Learn Russian 4 Books in 1",
    price: "80",
  },
  {
    id: 7,
    title: "Learn Mandarin 4 Books in 1",
    price: "130",
  },
  {
    id: 8,
    title: "Learn Arabic 4 Books in 1",
    price: "110",
  },
  {
    id: 9,
    title: "Learn Portuguese 4 Books in 1",
    price: "130",
  },
  {
    id: 10,
    title: "Learn Indonesian 4 Books in 1",
    price: "160",
  },
  {
    id: 11,
    title: "Learn Italian 4 Books in 1",
    price: "170",
  },
  {
    id: 12,
    title: "Learn Korean 4 Books in 1",
    price: "170",
  },
];

export const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    buyAbook: (state, action) => {
      console.log(action.payload);
      state[action.payload]["paid"] = true;
    },
  },
});

// Action creators are generated for each case reducer function
export const { buyAbook } = bookSlice.actions;

export default bookSlice.reducer;
