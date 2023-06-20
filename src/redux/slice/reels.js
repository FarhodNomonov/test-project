import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const reelSlice = createSlice({
  name: "reels",
  initialState,
  reducers: {
    addReels: (state, { payload }) => [...state, ...payload],
  },
});

export const { addReels } = reelSlice.actions;

export default reelSlice.reducer;
